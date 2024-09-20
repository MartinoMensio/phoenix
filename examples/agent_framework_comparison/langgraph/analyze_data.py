import json
import os
import sys
sys.path.insert(1, os.path.join(sys.path[0], ".."))

from dotenv import load_dotenv
from langchain_core.tools import tool
from openai import OpenAI
from openinference.instrumentation import using_prompt_template
from openinference.semconv.trace import SpanAttributes
from opentelemetry import trace
from prompt_templates.data_analysis_template import PROMPT_TEMPLATE, SYSTEM_PROMPT

load_dotenv()


@tool
def data_analyzer(args):
    """Provides insights, trends, or analysis based on the data and prompt.

    Args:
        args (dict): A dictionary containing the data to analyze and the original user prompt
        that the data is based on.

    Returns:
        str: The analysis result.
    """

    if isinstance(args, dict) and "prompt" in args and "data" in args:
        prompt = args["prompt"]
        data = args["data"]
    elif isinstance(args, str):
        try:
            args = json.loads(args)
            prompt = args["prompt"].strip()
            data = args["data"].strip()
        except ValueError:
            return "Invalid input: expected a dictionary with 'prompt' and 'data' keys or a string."
    else:
        return "Invalid input: expected a dictionary with 'prompt' and 'data' keys or a string."

    client = OpenAI()

    tracer = trace.get_tracer(__name__)
    with tracer.start_as_current_span("data_analysis_tool") as span:
        span.set_attribute(SpanAttributes.OPENINFERENCE_SPAN_KIND, "CHAIN")
        span.set_attribute(
            SpanAttributes.INPUT_VALUE,
            PROMPT_TEMPLATE.format(PROMPT=prompt, DATA=data),
        )
        with using_prompt_template(
            template=PROMPT_TEMPLATE,
            variables={"PROMPT": prompt, "DATA": data},
            version="v0.1",
        ):
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {
                        "role": "user",
                        "content": PROMPT_TEMPLATE.format(PROMPT=prompt, DATA=data),
                    },
                ],
            )
        analysis_result = response.choices[0].message.content
        span.set_attribute(SpanAttributes.OUTPUT_VALUE, analysis_result)
        return analysis_result
