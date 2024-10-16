import React from "react";
import { css } from "@emotion/react";

import { useTheme } from "@phoenix/contexts";

const ToolSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <mask id="path-2-inside-1_33_16916" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8C13 8.64491 12.8779 9.2613 12.6556 9.82732L17.1924 14.3641L14.364 17.1926L9.82706 12.6557C9.26111 12.8779 8.64481 13 8 13C5.23858 13 3 10.7614 3 8C3 7.13361 3.22036 6.31869 3.60809 5.60822L6 8L7.5 7.50016L8 6.00016L5.60803 3.60819C6.31854 3.2204 7.13353 3 8 3C10.7614 3 13 5.23858 13 8Z"
      />
    </mask>
    <path
      d="M12.6556 9.82732L11.7248 9.46171L11.4853 10.0713L11.9485 10.5344L12.6556 9.82732ZM17.1924 14.3641L17.8995 15.0713L18.6066 14.3641L17.8995 13.657L17.1924 14.3641ZM14.364 17.1926L13.6569 17.8997L14.364 18.6068L15.0711 17.8997L14.364 17.1926ZM9.82706 12.6557L10.5342 11.9486L10.0711 11.4855L9.4615 11.7249L9.82706 12.6557ZM3.60809 5.60822L4.31518 4.90109L3.37037 3.95634L2.7303 5.12917L3.60809 5.60822ZM6 8L5.29291 8.70713L5.72988 9.14407L6.31613 8.94871L6 8ZM7.5 7.50016L7.81614 8.44888L8.29055 8.29079L8.44869 7.81639L7.5 7.50016ZM8 6.00016L8.94869 6.31639L9.14413 5.73007L8.70711 5.29306L8 6.00016ZM5.60803 3.60819L5.12895 2.73042L3.95616 3.37053L4.90093 4.3153L5.60803 3.60819ZM13.5863 10.1929C13.8537 9.51235 14 8.77206 14 8H12C12 8.51776 11.9021 9.01026 11.7248 9.46171L13.5863 10.1929ZM17.8995 13.657L13.3627 9.12022L11.9485 10.5344L16.4853 15.0713L17.8995 13.657ZM15.0711 17.8997L17.8995 15.0713L16.4853 13.657L13.6569 16.4855L15.0711 17.8997ZM9.11995 13.3628L13.6569 17.8997L15.0711 16.4855L10.5342 11.9486L9.11995 13.3628ZM8 14C8.77194 14 9.51211 13.8537 10.1926 13.5865L9.4615 11.7249C9.0101 11.9022 8.51768 12 8 12V14ZM2 8C2 11.3137 4.68629 14 8 14V12C5.79086 12 4 10.2091 4 8H2ZM2.7303 5.12917C2.2644 5.98288 2 6.96206 2 8H4C4 7.30516 4.17633 6.65449 4.48588 6.08727L2.7303 5.12917ZM6.70709 7.29287L4.31518 4.90109L2.901 6.31535L5.29291 8.70713L6.70709 7.29287ZM7.18387 6.55145L5.68387 7.05129L6.31613 8.94871L7.81614 8.44888L7.18387 6.55145ZM7.05132 5.68394L6.55132 7.18394L8.44869 7.81639L8.94869 6.31639L7.05132 5.68394ZM4.90093 4.3153L7.2929 6.70727L8.70711 5.29306L6.31514 2.90109L4.90093 4.3153ZM8 2C6.96197 2 5.98271 2.26444 5.12895 2.73042L6.08712 4.48596C6.65437 4.17636 7.3051 4 8 4V2ZM14 8C14 4.68629 11.3137 2 8 2V4C10.2091 4 12 5.79086 12 8H14Z"
      fill="currentColor"
      fillOpacity="0.9"
      mask="url(#path-2-inside-1_33_16916)"
    />
  </svg>
);

const ToolFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <mask id="path-2-inside-1_2321_643" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8C13 8.64491 12.8779 9.2613 12.6556 9.82732L17.1924 14.3641L14.364 17.1926L9.82706 12.6557C9.26111 12.8779 8.64481 13 8 13C5.23858 13 3 10.7614 3 8C3 7.13361 3.22036 6.31869 3.60809 5.60822L6 8L7.5 7.50016L8 6.00016L5.60803 3.60819C6.31854 3.2204 7.13353 3 8 3C10.7614 3 13 5.23858 13 8Z"
      />
    </mask>
    <path
      d="M12.6556 9.82732L11.7248 9.46171L11.4853 10.0713L11.9485 10.5344L12.6556 9.82732ZM17.1924 14.3641L17.8995 15.0713L18.6066 14.3641L17.8995 13.657L17.1924 14.3641ZM14.364 17.1926L13.6569 17.8997L14.364 18.6068L15.0711 17.8997L14.364 17.1926ZM9.82706 12.6557L10.5342 11.9486L10.0711 11.4855L9.4615 11.7249L9.82706 12.6557ZM3.60809 5.60822L4.31518 4.90109L3.37037 3.95634L2.7303 5.12917L3.60809 5.60822ZM6 8L5.29291 8.70713L5.72988 9.14407L6.31613 8.94871L6 8ZM7.5 7.50016L7.81614 8.44888L8.29055 8.29079L8.44869 7.81639L7.5 7.50016ZM8 6.00016L8.94869 6.31639L9.14413 5.73007L8.70711 5.29306L8 6.00016ZM5.60803 3.60819L5.12895 2.73042L3.95616 3.37053L4.90093 4.3153L5.60803 3.60819ZM13.5863 10.1929C13.8537 9.51235 14 8.77206 14 8H12C12 8.51776 11.9021 9.01026 11.7248 9.46171L13.5863 10.1929ZM17.8995 13.657L13.3627 9.12022L11.9485 10.5344L16.4853 15.0713L17.8995 13.657ZM15.0711 17.8997L17.8995 15.0713L16.4853 13.657L13.6569 16.4855L15.0711 17.8997ZM9.11995 13.3628L13.6569 17.8997L15.0711 16.4855L10.5342 11.9486L9.11995 13.3628ZM8 14C8.77194 14 9.51211 13.8537 10.1926 13.5865L9.4615 11.7249C9.0101 11.9022 8.51768 12 8 12V14ZM2 8C2 11.3137 4.68629 14 8 14V12C5.79086 12 4 10.2091 4 8H2ZM2.7303 5.12917C2.2644 5.98288 2 6.96206 2 8H4C4 7.30516 4.17633 6.65449 4.48588 6.08727L2.7303 5.12917ZM6.70709 7.29287L4.31518 4.90109L2.901 6.31535L5.29291 8.70713L6.70709 7.29287ZM7.18387 6.55145L5.68387 7.05129L6.31613 8.94871L7.81614 8.44888L7.18387 6.55145ZM7.05132 5.68394L6.55132 7.18394L8.44869 7.81639L8.94869 6.31639L7.05132 5.68394ZM4.90093 4.3153L7.2929 6.70727L8.70711 5.29306L6.31514 2.90109L4.90093 4.3153ZM8 2C6.96197 2 5.98271 2.26444 5.12895 2.73042L6.08712 4.48596C6.65437 4.17636 7.3051 4 8 4V2ZM14 8C14 4.68629 11.3137 2 8 2V4C10.2091 4 12 5.79086 12 8H14Z"
      fill="black"
      mask="url(#path-2-inside-1_2321_643)"
    />
  </svg>
);

const LLMSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      d="M4.43782 6.78868L10 3.57735L15.5622 6.78868V13.2113L10 16.4226L4.43782 13.2113V6.78868Z"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
  </svg>
);

const LLMFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M4.43782 6.78868L10 3.57735L15.5622 6.78868V13.2113L10 16.4226L4.43782 13.2113V6.78868Z"
      stroke="black"
    />
  </svg>
);

const AgentSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      d="M5 16C5 16 5 11 10 11C15 11 15 16 15 16"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <rect
      x="6.5"
      y="4.5"
      width="7"
      height="5"
      rx="0.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
  </svg>
);

const AgentFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" rx="4" fill="currentColor" />
    <path d="M10 11C5 11 5 16 5 16H15C15 16 15 11 10 11Z" stroke="black" />
    <rect x="6.5" y="4.5" width="7" height="5" rx="0.5" stroke="black" />
  </svg>
);

const EmbeddingSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM10.0558 8.18487C9.51887 8.6903 8.7956 9 8 9C7.91155 9 7.824 8.99617 7.7375 8.98867L7.10304 11.2093C8.21409 11.6488 9 12.7326 9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14C3 12.3431 4.34315 11 6 11C6.0409 11 6.08161 11.0008 6.12212 11.0024L6.76944 8.73682C5.72625 8.26703 5 7.21833 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6C11 6.50075 10.8773 6.97285 10.6604 7.38788L12.1873 8.6094C12.6908 8.22697 13.3189 8 14 8C15.6569 8 17 9.34315 17 11C17 12.6569 15.6569 14 14 14C12.3431 14 11 12.6569 11 11C11 10.3864 11.1842 9.81579 11.5004 9.34053L10.0558 8.18487ZM16 11C16 12.1046 15.1046 13 14 13C12.8954 13 12 12.1046 12 11C12 9.89543 12.8954 9 14 9C15.1046 9 16 9.89543 16 11ZM6 16C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
  </svg>
);

const EmbeddingFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6.00003C10 7.1046 9.10457 8.00003 8 8.00003C6.89543 8.00003 6 7.1046 6 6.00003C6 4.89546 6.89543 4.00003 8 4.00003C9.10457 4.00003 10 4.89546 10 6.00003ZM10.0558 8.1849C9.51887 8.69033 8.7956 9.00003 8 9.00003C7.91155 9.00003 7.824 8.9962 7.7375 8.9887L7.10304 11.2093C8.21409 11.6488 9 12.7326 9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14C3 12.3432 4.34315 11 6 11C6.0409 11 6.08161 11.0008 6.12212 11.0025L6.76944 8.73685C5.72625 8.26706 5 7.21836 5 6.00003C5 4.34318 6.34315 3.00003 8 3.00003C9.65685 3.00003 11 4.34318 11 6.00003C11 6.50078 10.8773 6.97288 10.6604 7.38791L12.1873 8.60943C12.6908 8.227 13.3189 8.00003 14 8.00003C15.6569 8.00003 17 9.34318 17 11C17 12.6569 15.6569 14 14 14C12.3431 14 11 12.6569 11 11C11 10.3864 11.1842 9.81582 11.5004 9.34056L10.0558 8.1849ZM16 11C16 12.1046 15.1046 13 14 13C12.8954 13 12 12.1046 12 11C12 9.89546 12.8954 9.00003 14 9.00003C15.1046 9.00003 16 9.89546 16 11ZM6 16C7.10457 16 8 15.1046 8 14C8 12.8955 7.10457 12 6 12C4.89543 12 4 12.8955 4 14C4 15.1046 4.89543 16 6 16Z"
      fill="black"
    />
  </svg>
);

const RetrieverSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      d="M14.65 6.5C14.65 6.98637 14.2466 7.52091 13.379 7.95472C12.5323 8.37806 11.3382 8.65 10 8.65C8.66184 8.65 7.46767 8.37806 6.62099 7.95472C5.75338 7.52091 5.35 6.98637 5.35 6.5C5.35 6.01363 5.75338 5.47909 6.62099 5.04528C7.46767 4.62194 8.66184 4.35 10 4.35C11.3382 4.35 12.5323 4.62194 13.379 5.04528C14.2466 5.47909 14.65 6.01363 14.65 6.5Z"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 6.83482V9.62479C14.6875 9.62479 13.0769 11.1873 10 11.1873C6.92308 11.1873 5.3125 9.62479 5.3125 9.62479V6.7437"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 9.625V12.125C14.6875 12.125 13.0769 13.6875 10 13.6875C6.92308 13.6875 5.3125 12.125 5.3125 12.125V9.625"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 12.125V14.625C14.6875 14.625 13.0769 16.1875 10 16.1875C6.92308 16.1875 5.3125 14.625 5.3125 14.625V12.125"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="0.7"
    />
  </svg>
);

const RetrieverFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M14.65 6.5C14.65 6.98637 14.2466 7.52091 13.379 7.95472C12.5323 8.37806 11.3382 8.65 10 8.65C8.66184 8.65 7.46767 8.37806 6.62099 7.95472C5.75338 7.52091 5.35 6.98637 5.35 6.5C5.35 6.01363 5.75338 5.47909 6.62099 5.04528C7.46767 4.62194 8.66184 4.35 10 4.35C11.3382 4.35 12.5323 4.62194 13.379 5.04528C14.2466 5.47909 14.65 6.01363 14.65 6.5Z"
      stroke="black"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 6.83504V9.625C14.6875 9.625 13.0769 11.1875 10 11.1875C6.92308 11.1875 5.3125 9.625 5.3125 9.625V6.74392"
      stroke="black"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 9.625V12.125C14.6875 12.125 13.0769 13.6875 10 13.6875C6.92308 13.6875 5.3125 12.125 5.3125 12.125V9.625"
      stroke="black"
      strokeWidth="0.7"
    />
    <path
      d="M14.6875 12.125V14.625C14.6875 14.625 13.0769 16.1875 10 16.1875C6.92308 16.1875 5.3125 14.625 5.3125 14.625V12.125"
      stroke="black"
      strokeWidth="0.7"
    />
  </svg>
);

const RerankerSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
    />
    <path d="M4.5359 10L8 4L11.4641 10H4.5359Z" stroke="currentColor" />
    <path d="M8.5359 10L12 16L15.4641 10H8.5359Z" stroke="currentColor" />
  </svg>
);

const RerankerFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path d="M4.5359 10L8 4L11.4641 10H4.5359Z" stroke="black" />
    <path d="M8.5359 10L12 16L15.4641 10H8.5359Z" stroke="black" />
  </svg>
);

const ChainSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
  </svg>
);

const ChainFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
      fill="black"
    />
  </svg>
);

const UnknownSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
  </svg>
);

const UnknownFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

const EvaluatorSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
    />
    <path
      d="M14.4254 5.58523L15.744 6.87427L15.7249 6.89333L15.7043 6.91394L15.6837 6.93453L15.6631 6.95509L15.6425 6.97562L15.622 6.99612L15.6015 7.01659L15.581 7.03703L15.5606 7.05745L15.5402 7.07783L15.5198 7.09819L15.4995 7.11852L15.4791 7.13882L15.4588 7.15909L15.4386 7.17934L15.4183 7.19956L15.3981 7.21974L15.3779 7.23991L15.3578 7.26004L15.3377 7.28015L15.3176 7.30022L15.2975 7.32028L15.2774 7.3403L15.2574 7.3603L15.2374 7.38027L15.2175 7.40021L15.1975 7.42013L15.1776 7.44002L15.1577 7.45988L15.1379 7.47972L15.118 7.49953L15.0982 7.51931L15.0784 7.53907L15.0587 7.5588L15.0389 7.57851L15.0192 7.59819L14.9996 7.61785L14.9799 7.63748L14.9603 7.65708L14.9407 7.67666L14.9211 7.69621L14.9016 7.71574L14.882 7.73524L14.8625 7.75472L14.8431 7.77417L14.8236 7.7936L14.8042 7.81301L14.7848 7.83239L14.7654 7.85174L14.746 7.87107L14.7267 7.89038L14.7074 7.90966L14.6881 7.92892L14.6689 7.94815L14.6496 7.96736L14.6304 7.98655L14.6113 8.00571L14.5921 8.02485L14.573 8.04397L14.5538 8.06306L14.5347 8.08213L14.5157 8.10118L14.4966 8.1202L14.4776 8.1392L14.4586 8.15818L14.4396 8.17714L14.4207 8.19607L14.4017 8.21498L14.3828 8.23387L14.3639 8.25274L14.3451 8.27158L14.3262 8.2904L14.3074 8.3092L14.2886 8.32798L14.2698 8.34674L14.2511 8.36547L14.2323 8.38418L14.2136 8.40288L14.1949 8.42155L14.1763 8.4402L14.1576 8.45883L14.139 8.47743L14.1204 8.49602L14.1018 8.51459L14.0832 8.53313L14.0647 8.55166L14.0462 8.57016L14.0277 8.58864L14.0092 8.60711L13.9907 8.62555L13.9723 8.64397L13.9538 8.66238L13.9354 8.68076L13.917 8.69913L13.8987 8.71747L13.8803 8.73579L13.862 8.7541L13.8437 8.77239L13.8254 8.79065L13.8071 8.8089L13.7889 8.82713L13.7707 8.84534L13.7524 8.86353L13.7343 8.8817L13.7161 8.89986L13.6979 8.91799L13.6798 8.93611L13.6617 8.95421L13.6436 8.97229L13.6255 8.99036L13.6074 9.0084L13.5894 9.02643L13.5713 9.04444L13.5533 9.06243L13.5353 9.0804L13.5173 9.09836L13.4994 9.1163L13.4814 9.13422L13.4635 9.15213L13.4456 9.17002L13.4277 9.18789L13.4098 9.20574L13.392 9.22358L13.3741 9.2414L13.3563 9.25921L13.3385 9.277L13.3207 9.29477L13.3029 9.31253L13.2852 9.33027L13.2674 9.34799L13.2497 9.3657L13.232 9.38339L13.2143 9.40107L13.1966 9.41873L13.1789 9.43638L13.1613 9.45401L13.1436 9.47163L13.126 9.48923L13.1084 9.50681L13.0908 9.52438L13.0733 9.54194L13.0557 9.55948L13.0381 9.57701L13.0206 9.59452L13.0031 9.61202L12.9856 9.6295L12.9681 9.64697L12.9506 9.66443L12.9332 9.68187L12.9157 9.6993L12.8983 9.71671L12.8809 9.73412L12.8634 9.7515L12.8461 9.76888L12.8287 9.78624L12.8113 9.80358L12.794 9.82092L12.7766 9.83824L12.7593 9.85555L12.742 9.87284L12.7247 9.89013L12.7074 9.9074L12.6901 9.92466L12.6728 9.9419L12.6556 9.95913L12.6383 9.97636L12.6211 9.99356L12.6039 10.0108L12.5867 10.0279L12.5695 10.0451L12.5523 10.0623L12.5351 10.0794L12.518 10.0966L12.5008 10.1137L12.4837 10.1308L12.4666 10.1479L12.4495 10.165L12.4324 10.1821L12.4153 10.1992L12.3982 10.2162L12.3811 10.2333L12.364 10.2503L12.347 10.2674L12.33 10.2844L12.3129 10.3014L12.2959 10.3184L12.2789 10.3354L12.2619 10.3524L12.2449 10.3693L12.2279 10.3863L12.211 10.4032L12.194 10.4202L12.177 10.4371L12.1601 10.454L12.1432 10.471L12.1262 10.4879L12.1093 10.5048L12.0924 10.5216L12.0755 10.5385L12.0586 10.5554L12.0417 10.5723L12.0249 10.5891L12.008 10.606L11.9911 10.6228L11.9743 10.6396L11.9575 10.6565L11.9406 10.6733L11.9238 10.6901L11.907 10.7069L11.8902 10.7237L11.8734 10.7404L11.8566 10.7572L11.8398 10.774L11.823 10.7907L11.8062 10.8075L11.7895 10.8243L11.7727 10.841L11.7559 10.8577L11.7392 10.8745L11.7225 10.8912L11.7057 10.9079L11.689 10.9246L11.6723 10.9413L11.6556 10.958L11.6389 10.9747L11.6221 10.9914L11.6054 11.0081L11.5888 11.0247L11.5721 11.0414L11.5554 11.0581L11.5387 11.0747L11.522 11.0914L11.5054 11.108L11.4887 11.1247L11.4721 11.1413L11.4554 11.1579L11.4388 11.1746L11.4221 11.1912L11.4055 11.2078L11.3888 11.2244L11.3722 11.241L11.3556 11.2576L11.339 11.2742L11.3224 11.2908L11.3057 11.3074L11.2891 11.324L11.2725 11.3406L11.2559 11.3572L11.2393 11.3738L11.2227 11.3903L11.2061 11.4069L11.1895 11.4235L11.173 11.44L11.1564 11.4566L11.1398 11.4732L11.1232 11.4897L11.1066 11.5063L11.0901 11.5228L11.0735 11.5394L11.0569 11.5559L11.0404 11.5725L11.0238 11.589L11.0072 11.6056L10.9907 11.6221L10.9741 11.6386L10.9576 11.6552L10.941 11.6717L10.9245 11.6883L10.9079 11.7048L10.8914 11.7213L10.8748 11.7378L10.8583 11.7544L10.8417 11.7709L10.8252 11.7874L10.8086 11.804L10.7921 11.8205L10.7755 11.837L10.759 11.8535L10.7424 11.8701L10.7259 11.8866L10.7094 11.9031L10.6928 11.9196L10.6763 11.9362L10.6597 11.9527L10.6432 11.9692L10.6266 11.9857L10.6101 12.0023L10.5935 12.0188L10.577 12.0353L10.5604 12.0519L10.5439 12.0684L10.5273 12.0849L10.5108 12.1015L10.4942 12.118L10.4777 12.1345L10.4611 12.1511L10.4446 12.1676L10.428 12.1841L10.4114 12.2007L10.3949 12.2172L10.3783 12.2338L10.3618 12.2503L10.3452 12.2669L10.3286 12.2834L10.312 12.3L10.2955 12.3165L10.2789 12.3331L10.2623 12.3497L10.2457 12.3662L10.2291 12.3828L10.2125 12.3994L10.1959 12.4159L10.1793 12.4325L10.1627 12.4491L10.1461 12.4657L10.1295 12.4823L10.1129 12.4989L10.0963 12.5155L10.0797 12.5321L10.0631 12.5487L10.0464 12.5653L10.0298 12.5819L10.0132 12.5985L9.99652 12.6151L9.97987 12.6318L9.96322 12.6484L9.94657 12.665L9.92991 12.6817L9.91324 12.6983L9.89657 12.715L9.87989 12.7316L9.86321 12.7483L9.84653 12.7649L9.82984 12.7816L9.81314 12.7983L9.79644 12.815L9.77973 12.8317L9.76301 12.8484L9.74629 12.8651L9.72957 12.8818L9.71283 12.8985L9.69609 12.9152L9.67935 12.9319L9.6626 12.9487L9.64584 12.9654L9.62907 12.9822L9.6123 12.9989L9.59552 13.0157L9.57873 13.0324L9.56194 13.0492L9.54514 13.066L9.52833 13.0828L9.51151 13.0996L9.49469 13.1164L9.47786 13.1332L9.46102 13.15L9.44417 13.1668L9.42732 13.1837L9.41045 13.2005L9.39358 13.2174L9.3767 13.2342L9.35981 13.2511L9.34292 13.268L9.32601 13.2849L9.3091 13.3018L9.29217 13.3187L9.27524 13.3356L9.2583 13.3525L9.24135 13.3694L9.22439 13.3864L9.20742 13.4033L9.19044 13.4203L9.17345 13.4372L9.15645 13.4542L9.13945 13.4712L9.12243 13.4882L9.1054 13.5052L9.08836 13.5222L9.07131 13.5393L9.05426 13.5563L9.03719 13.5734L9.02011 13.5904L9.00302 13.6075L8.98592 13.6246L8.9688 13.6417L8.95168 13.6588L8.93455 13.6759L8.9174 13.693L8.90024 13.7101L8.88308 13.7273L8.8659 13.7444L8.84871 13.7616L8.8315 13.7788L8.81429 13.796L8.79706 13.8132L8.77983 13.8304L8.76257 13.8477L8.74531 13.8649L8.72804 13.8821L8.71075 13.8994L8.69345 13.9167L8.67614 13.934L8.65881 13.9513L8.64147 13.9686L8.62412 13.9859L8.60676 14.0033L8.58938 14.0206L8.57199 14.038L8.55458 14.0554L8.53716 14.0728L8.51973 14.0902L8.50229 14.1076L8.48483 14.1251L8.46736 14.1425L8.44987 14.16L8.43237 14.1775L8.41485 14.195L8.39732 14.2125L8.37978 14.23L8.36222 14.2475L8.34465 14.2651L8.32706 14.2827L8.30945 14.3002L8.29184 14.3178L8.2742 14.3355L8.25656 14.3531L8.23889 14.3707L8.22121 14.3884L8.20352 14.4061L8.18581 14.4238L8.16808 14.4415L8.15034 14.4592L8.13258 14.4769L8.11481 14.4947L8.09702 14.5124L8.07921 14.5302L8.06139 14.548L8.04355 14.5658L8.0257 14.5837L8.00783 14.6015L7.98994 14.6194L7.97203 14.6373L7.95411 14.6552L7.93617 14.6731L7.91821 14.691L7.90024 14.709L7.88225 14.727L7.86424 14.7449L7.84621 14.763L7.82817 14.781L7.81011 14.799L7.79203 14.8171L7.77393 14.8352L7.75581 14.8533L7.73768 14.8714L7.71952 14.8895L7.70135 14.9076L7.68316 14.9258L7.66495 14.944L7.64673 14.9622L7.62848 14.9804L7.61022 14.9987L7.59193 15.0169L7.57363 15.0352L7.55531 15.0535L7.53697 15.0718L7.5186 15.0902L7.50022 15.1085L7.48182 15.1269L7.4634 15.1453L7.44496 15.1637L7.4265 15.1822L7.40802 15.2006L7.38952 15.2191L7.371 15.2376L7.35246 15.2561L7.33389 15.2747L7.31531 15.2932L7.29671 15.3118L7.27808 15.3304L7.25944 15.3491L7.24077 15.3677L7.22208 15.3864L7.20337 15.4051L7.18464 15.4238L7.16589 15.4425L7.14712 15.4612L7.12832 15.48L7.10951 15.4988L7.09067 15.5176L7.07181 15.5365L7.05292 15.5553L7.03402 15.5742L7.01509 15.5931L6.99614 15.612C6.27167 16.3357 5.09652 16.3361 4.37259 15.613C3.64838 14.8896 3.64838 13.7168 4.37259 12.9935L13.1214 4.2547L14.4178 5.57764L14.4177 5.57772L14.4254 5.58523Z"
      stroke="currentColor"
    />
    <path
      d="M12.5299 10.2848L7.32791 15.5545C7.12956 15.7555 6.88934 15.9156 6.62689 16.0225C6.08679 16.2424 5.46752 16.2239 4.94171 15.972L4.77945 16.31L4.94171 15.972C4.6339 15.8246 4.36574 15.6007 4.16736 15.3245L4.02179 15.1219C3.60142 14.5367 3.60138 13.749 4.02169 13.1637C4.12291 13.0228 4.24539 12.8984 4.38476 12.7949L5.72374 11.8006L5.76816 11.7676L5.80115 11.7232L5.91056 11.576C6.30572 11.0443 6.96187 10.4244 7.58765 10.0864C7.90229 9.91646 8.17215 9.83813 8.37711 9.84461C8.55555 9.85025 8.69852 9.9179 8.81563 10.1071C8.88186 10.2141 8.92418 10.3701 8.97238 10.5823C8.97507 10.5942 8.9778 10.6063 8.98058 10.6186C9.00013 10.7052 9.02201 10.8022 9.04751 10.8896C9.07575 10.9865 9.11828 11.1086 9.19239 11.2146C9.29475 11.361 9.4504 11.4075 9.53763 11.4247C9.63768 11.4444 9.74477 11.4446 9.84616 11.436C10.0516 11.4187 10.299 11.3594 10.5607 11.2642C11.0498 11.0864 11.6345 10.7668 12.1516 10.2848L12.5299 10.2848Z"
      stroke="currentColor"
      strokeWidth="0.75"
    />
  </svg>
);

const EvaluatorFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M14.4254 5.58523L15.744 6.87427L15.7249 6.89333L15.7043 6.91394L15.6837 6.93453L15.6631 6.95509L15.6425 6.97562L15.622 6.99612L15.6015 7.01659L15.581 7.03703L15.5606 7.05745L15.5402 7.07783L15.5198 7.09819L15.4995 7.11852L15.4791 7.13882L15.4588 7.15909L15.4386 7.17934L15.4183 7.19956L15.3981 7.21974L15.3779 7.23991L15.3578 7.26004L15.3377 7.28015L15.3176 7.30022L15.2975 7.32028L15.2774 7.3403L15.2574 7.3603L15.2374 7.38027L15.2175 7.40021L15.1975 7.42013L15.1776 7.44002L15.1577 7.45988L15.1379 7.47972L15.118 7.49953L15.0982 7.51931L15.0784 7.53907L15.0587 7.5588L15.0389 7.57851L15.0192 7.59819L14.9996 7.61785L14.9799 7.63748L14.9603 7.65708L14.9407 7.67666L14.9211 7.69621L14.9016 7.71574L14.882 7.73524L14.8625 7.75472L14.8431 7.77417L14.8236 7.7936L14.8042 7.81301L14.7848 7.83239L14.7654 7.85174L14.746 7.87107L14.7267 7.89038L14.7074 7.90966L14.6881 7.92892L14.6689 7.94815L14.6496 7.96736L14.6304 7.98655L14.6113 8.00571L14.5921 8.02485L14.573 8.04397L14.5538 8.06306L14.5347 8.08213L14.5157 8.10118L14.4966 8.1202L14.4776 8.1392L14.4586 8.15818L14.4396 8.17714L14.4207 8.19607L14.4017 8.21498L14.3828 8.23387L14.3639 8.25274L14.3451 8.27158L14.3262 8.2904L14.3074 8.3092L14.2886 8.32798L14.2698 8.34674L14.2511 8.36547L14.2323 8.38418L14.2136 8.40288L14.1949 8.42155L14.1763 8.4402L14.1576 8.45883L14.139 8.47743L14.1204 8.49602L14.1018 8.51459L14.0832 8.53313L14.0647 8.55166L14.0462 8.57016L14.0277 8.58864L14.0092 8.60711L13.9907 8.62555L13.9723 8.64397L13.9538 8.66238L13.9354 8.68076L13.917 8.69913L13.8987 8.71747L13.8803 8.73579L13.862 8.7541L13.8437 8.77239L13.8254 8.79065L13.8071 8.8089L13.7889 8.82713L13.7707 8.84534L13.7524 8.86353L13.7343 8.8817L13.7161 8.89986L13.6979 8.91799L13.6798 8.93611L13.6617 8.95421L13.6436 8.97229L13.6255 8.99036L13.6074 9.0084L13.5894 9.02643L13.5713 9.04444L13.5533 9.06243L13.5353 9.0804L13.5173 9.09836L13.4994 9.1163L13.4814 9.13422L13.4635 9.15213L13.4456 9.17002L13.4277 9.18789L13.4098 9.20574L13.392 9.22358L13.3741 9.2414L13.3563 9.25921L13.3385 9.277L13.3207 9.29477L13.3029 9.31253L13.2852 9.33027L13.2674 9.34799L13.2497 9.3657L13.232 9.38339L13.2143 9.40107L13.1966 9.41873L13.1789 9.43638L13.1613 9.45401L13.1436 9.47163L13.126 9.48923L13.1084 9.50681L13.0908 9.52438L13.0733 9.54194L13.0557 9.55948L13.0381 9.57701L13.0206 9.59452L13.0031 9.61202L12.9856 9.6295L12.9681 9.64697L12.9506 9.66443L12.9332 9.68187L12.9157 9.6993L12.8983 9.71671L12.8809 9.73412L12.8634 9.7515L12.8461 9.76888L12.8287 9.78624L12.8113 9.80358L12.794 9.82092L12.7766 9.83824L12.7593 9.85555L12.742 9.87284L12.7247 9.89013L12.7074 9.9074L12.6901 9.92466L12.6728 9.9419L12.6556 9.95913L12.6383 9.97636L12.6211 9.99356L12.6039 10.0108L12.5867 10.0279L12.5695 10.0451L12.5523 10.0623L12.5351 10.0794L12.518 10.0966L12.5008 10.1137L12.4837 10.1308L12.4666 10.1479L12.4495 10.165L12.4324 10.1821L12.4153 10.1992L12.3982 10.2162L12.3811 10.2333L12.364 10.2503L12.347 10.2674L12.33 10.2844L12.3129 10.3014L12.2959 10.3184L12.2789 10.3354L12.2619 10.3524L12.2449 10.3693L12.2279 10.3863L12.211 10.4032L12.194 10.4202L12.177 10.4371L12.1601 10.454L12.1432 10.471L12.1262 10.4879L12.1093 10.5048L12.0924 10.5216L12.0755 10.5385L12.0586 10.5554L12.0417 10.5723L12.0249 10.5891L12.008 10.606L11.9911 10.6228L11.9743 10.6396L11.9575 10.6565L11.9406 10.6733L11.9238 10.6901L11.907 10.7069L11.8902 10.7237L11.8734 10.7404L11.8566 10.7572L11.8398 10.774L11.823 10.7907L11.8062 10.8075L11.7895 10.8243L11.7727 10.841L11.7559 10.8577L11.7392 10.8745L11.7225 10.8912L11.7057 10.9079L11.689 10.9246L11.6723 10.9413L11.6556 10.958L11.6389 10.9747L11.6221 10.9914L11.6054 11.0081L11.5888 11.0247L11.5721 11.0414L11.5554 11.0581L11.5387 11.0747L11.522 11.0914L11.5054 11.108L11.4887 11.1247L11.4721 11.1413L11.4554 11.1579L11.4388 11.1746L11.4221 11.1912L11.4055 11.2078L11.3888 11.2244L11.3722 11.241L11.3556 11.2576L11.339 11.2742L11.3224 11.2908L11.3057 11.3074L11.2891 11.324L11.2725 11.3406L11.2559 11.3572L11.2393 11.3738L11.2227 11.3903L11.2061 11.4069L11.1895 11.4235L11.173 11.44L11.1564 11.4566L11.1398 11.4732L11.1232 11.4897L11.1066 11.5063L11.0901 11.5228L11.0735 11.5394L11.0569 11.5559L11.0404 11.5725L11.0238 11.589L11.0072 11.6056L10.9907 11.6221L10.9741 11.6386L10.9576 11.6552L10.941 11.6717L10.9245 11.6883L10.9079 11.7048L10.8914 11.7213L10.8748 11.7378L10.8583 11.7544L10.8417 11.7709L10.8252 11.7874L10.8086 11.804L10.7921 11.8205L10.7755 11.837L10.759 11.8535L10.7424 11.8701L10.7259 11.8866L10.7094 11.9031L10.6928 11.9196L10.6763 11.9362L10.6597 11.9527L10.6432 11.9692L10.6266 11.9857L10.6101 12.0023L10.5935 12.0188L10.577 12.0353L10.5604 12.0519L10.5439 12.0684L10.5273 12.0849L10.5108 12.1015L10.4942 12.118L10.4777 12.1345L10.4611 12.1511L10.4446 12.1676L10.428 12.1841L10.4114 12.2007L10.3949 12.2172L10.3783 12.2338L10.3618 12.2503L10.3452 12.2669L10.3286 12.2834L10.312 12.3L10.2955 12.3165L10.2789 12.3331L10.2623 12.3497L10.2457 12.3662L10.2291 12.3828L10.2125 12.3994L10.1959 12.4159L10.1793 12.4325L10.1627 12.4491L10.1461 12.4657L10.1295 12.4823L10.1129 12.4989L10.0963 12.5155L10.0797 12.5321L10.0631 12.5487L10.0464 12.5653L10.0298 12.5819L10.0132 12.5985L9.99652 12.6151L9.97987 12.6318L9.96322 12.6484L9.94657 12.665L9.92991 12.6817L9.91324 12.6983L9.89657 12.715L9.87989 12.7316L9.86321 12.7483L9.84653 12.7649L9.82984 12.7816L9.81314 12.7983L9.79644 12.815L9.77973 12.8317L9.76301 12.8484L9.74629 12.8651L9.72957 12.8818L9.71283 12.8985L9.69609 12.9152L9.67935 12.9319L9.6626 12.9487L9.64584 12.9654L9.62907 12.9822L9.6123 12.9989L9.59552 13.0157L9.57873 13.0324L9.56194 13.0492L9.54514 13.066L9.52833 13.0828L9.51151 13.0996L9.49469 13.1164L9.47786 13.1332L9.46102 13.15L9.44417 13.1668L9.42732 13.1837L9.41045 13.2005L9.39358 13.2174L9.3767 13.2342L9.35981 13.2511L9.34292 13.268L9.32601 13.2849L9.3091 13.3018L9.29217 13.3187L9.27524 13.3356L9.2583 13.3525L9.24135 13.3694L9.22439 13.3864L9.20742 13.4033L9.19044 13.4203L9.17345 13.4372L9.15645 13.4542L9.13945 13.4712L9.12243 13.4882L9.1054 13.5052L9.08836 13.5222L9.07131 13.5393L9.05426 13.5563L9.03719 13.5734L9.02011 13.5904L9.00302 13.6075L8.98592 13.6246L8.9688 13.6417L8.95168 13.6588L8.93455 13.6759L8.9174 13.693L8.90024 13.7101L8.88308 13.7273L8.8659 13.7444L8.84871 13.7616L8.8315 13.7788L8.81429 13.796L8.79706 13.8132L8.77983 13.8304L8.76257 13.8477L8.74531 13.8649L8.72804 13.8821L8.71075 13.8994L8.69345 13.9167L8.67614 13.934L8.65881 13.9513L8.64147 13.9686L8.62412 13.9859L8.60676 14.0033L8.58938 14.0206L8.57199 14.038L8.55458 14.0554L8.53716 14.0728L8.51973 14.0902L8.50229 14.1076L8.48483 14.1251L8.46736 14.1425L8.44987 14.16L8.43237 14.1775L8.41485 14.195L8.39732 14.2125L8.37978 14.23L8.36222 14.2475L8.34465 14.2651L8.32706 14.2827L8.30945 14.3002L8.29184 14.3178L8.2742 14.3355L8.25656 14.3531L8.23889 14.3707L8.22121 14.3884L8.20352 14.4061L8.18581 14.4238L8.16808 14.4415L8.15034 14.4592L8.13258 14.4769L8.11481 14.4947L8.09702 14.5124L8.07921 14.5302L8.06139 14.548L8.04355 14.5658L8.0257 14.5837L8.00783 14.6015L7.98994 14.6194L7.97203 14.6373L7.95411 14.6552L7.93617 14.6731L7.91821 14.691L7.90024 14.709L7.88225 14.727L7.86424 14.7449L7.84621 14.763L7.82817 14.781L7.81011 14.799L7.79203 14.8171L7.77393 14.8352L7.75581 14.8533L7.73768 14.8714L7.71952 14.8895L7.70135 14.9076L7.68316 14.9258L7.66495 14.944L7.64673 14.9622L7.62848 14.9804L7.61022 14.9987L7.59193 15.0169L7.57363 15.0352L7.55531 15.0535L7.53697 15.0718L7.5186 15.0902L7.50022 15.1085L7.48182 15.1269L7.4634 15.1453L7.44496 15.1637L7.4265 15.1822L7.40802 15.2006L7.38952 15.2191L7.371 15.2376L7.35246 15.2561L7.33389 15.2747L7.31531 15.2932L7.29671 15.3118L7.27808 15.3304L7.25944 15.3491L7.24077 15.3677L7.22208 15.3864L7.20337 15.4051L7.18464 15.4238L7.16589 15.4425L7.14712 15.4612L7.12832 15.48L7.10951 15.4988L7.09067 15.5176L7.07181 15.5365L7.05292 15.5553L7.03402 15.5742L7.01509 15.5931L6.99614 15.612C6.27167 16.3357 5.09652 16.3361 4.37259 15.613C3.64838 14.8896 3.64838 13.7168 4.37259 12.9935L13.1214 4.2547L14.4178 5.57764L14.4177 5.57772L14.4254 5.58523Z"
      stroke="black"
    />
    <path
      d="M12.5299 10.2849L7.32791 15.5546C7.12956 15.7556 6.88934 15.9156 6.62689 16.0225C6.08679 16.2425 5.46752 16.224 4.94171 15.9721L4.77945 16.31L4.94171 15.9721C4.6339 15.8246 4.36574 15.6008 4.16736 15.3246L4.02179 15.122C3.60142 14.5368 3.60138 13.749 4.02169 13.1638C4.12291 13.0229 4.24539 12.8984 4.38476 12.795L5.72374 11.8006L5.76816 11.7677L5.80115 11.7233L5.91056 11.5761C6.30572 11.0444 6.96187 10.4244 7.58765 10.0865C7.90229 9.91653 8.17215 9.83821 8.37711 9.84469C8.55555 9.85033 8.69852 9.91798 8.81563 10.1072C8.88186 10.2142 8.92418 10.3701 8.97238 10.5824C8.97507 10.5942 8.9778 10.6063 8.98058 10.6187C9.00013 10.7053 9.02201 10.8022 9.04751 10.8897C9.07575 10.9866 9.11828 11.1087 9.19239 11.2147C9.29475 11.3611 9.4504 11.4075 9.53763 11.4247C9.63768 11.4445 9.74477 11.4447 9.84616 11.4361C10.0516 11.4187 10.299 11.3594 10.5607 11.2643C11.0498 11.0864 11.6345 10.7669 12.1516 10.2849L12.5299 10.2849Z"
      stroke="black"
      strokeWidth="0.75"
    />
  </svg>
);

const GuardrailSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      stroke="currentColor"
    />
    <path
      d="M15.4237 6.90042C15.5191 6.92315 15.6152 6.94413 15.7074 6.96092C15.7135 7.05035 15.7162 7.16454 15.7138 7.30375C15.7056 7.77188 15.6408 8.43317 15.515 9.1653C15.2592 10.6537 14.774 12.3014 14.1 13.2C13.4011 14.1319 12.332 14.9694 11.4101 15.584C10.9538 15.8882 10.5429 16.1317 10.2465 16.2989C10.1617 16.3467 10.0865 16.3882 10.0224 16.423C9.97538 16.3925 9.92211 16.3576 9.86327 16.3183C9.61299 16.1515 9.26304 15.908 8.86735 15.6037C8.07099 14.9911 7.11105 14.148 6.4 13.2C5.71286 12.2838 5.10686 10.6159 4.73507 9.12872C4.55136 8.39389 4.4322 7.73262 4.38844 7.26582C4.37726 7.14653 4.37171 7.04688 4.37029 6.96627C4.68202 6.91822 5.07002 6.82212 5.46167 6.6997C6.04643 6.51692 6.71066 6.25305 7.25513 5.93001C7.78069 5.61819 8.40348 5.00685 8.92133 4.49851C8.96063 4.45994 8.99932 4.42196 9.03732 4.38474C9.32127 4.10667 9.57222 3.86458 9.78023 3.69195C9.86978 3.61763 9.94141 3.56465 9.99619 3.52986C10.0511 3.56629 10.1228 3.62162 10.2126 3.69902C10.4221 3.8796 10.6732 4.13028 10.9589 4.41605L10.9643 4.42138C11.2419 4.69905 11.5471 5.00425 11.8469 5.27159C12.1431 5.53579 12.4648 5.79139 12.7764 5.94721C13.307 6.2125 13.989 6.47149 14.5895 6.66369C14.8912 6.76025 15.179 6.8421 15.4237 6.90042ZM9.92522 3.48908C9.92521 3.48905 9.92594 3.48931 9.92744 3.48994C9.92598 3.48943 9.92523 3.48911 9.92522 3.48908Z"
      stroke="currentColor"
    />
  </svg>
);

const GuardrailFilledSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="3.5"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M9.92516 3.4891C9.92515 3.48907 9.92588 3.48933 9.92738 3.48997C9.92592 3.48946 9.92517 3.48914 9.92516 3.4891ZM9.99613 3.52989C10.051 3.56631 10.1227 3.62164 10.2125 3.69904C10.422 3.87963 10.6731 4.1303 10.9589 4.41608L10.9642 4.4214C11.2419 4.69907 11.5471 5.00428 11.8468 5.27161C12.1431 5.53582 12.4647 5.79142 12.7763 5.94724C13.3069 6.21253 13.9889 6.47151 14.5894 6.66371C14.8911 6.76027 15.179 6.84213 15.4236 6.90044C15.519 6.92317 15.6151 6.94416 15.7074 6.96095C15.7134 7.05037 15.7162 7.16456 15.7137 7.30377C15.7056 7.7719 15.6407 8.4332 15.5149 9.16533C15.2592 10.6537 14.7739 12.3014 14.0999 13.2C13.401 14.1319 12.3319 14.9694 11.4101 15.584C10.9538 15.8882 10.5428 16.1317 10.2465 16.2989C10.1617 16.3467 10.0864 16.3882 10.0223 16.423C9.97532 16.3925 9.92205 16.3576 9.86321 16.3184C9.61293 16.1515 9.26298 15.9081 8.86729 15.6037C8.07092 14.9911 7.11099 14.1481 6.39994 13.2C5.7128 12.2838 5.10679 10.6159 4.73501 9.12874C4.5513 8.39391 4.43214 7.73264 4.38838 7.26584C4.3772 7.14656 4.37164 7.0469 4.37023 6.9663C4.68196 6.91824 5.06996 6.82215 5.46161 6.69972C6.04637 6.51694 6.7106 6.25307 7.25507 5.93003C7.78063 5.61822 8.40342 5.00687 8.92127 4.49853C8.96057 4.45996 8.99926 4.42198 9.03726 4.38477C9.32121 4.1067 9.57216 3.8646 9.78016 3.69197C9.86972 3.61765 9.94135 3.56467 9.99613 3.52989Z"
      stroke="black"
    />
  </svg>
);

export function SpanKindIcon({
  spanKind,
  variant = "fill",
}: {
  spanKind: string;
  variant?: "fill" | "outline";
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isFilled = variant === "fill";
  let icon = isFilled ? <UnknownFilledSVG /> : <UnknownSVG />;
  let color = isDark
    ? "--ac-global-color-grey-600"
    : "--ac-global-color-grey-500";
  switch (spanKind) {
    case "llm":
      color = isDark
        ? "--ac-global-color-orange-1000"
        : "--ac-global-color-orange-500";
      icon = isFilled ? <LLMFilledSVG /> : <LLMSVG />;
      break;
    case "chain":
      color = isDark
        ? "--ac-global-color-blue-1000"
        : "--ac-global-color-blue-500";
      icon = isFilled ? <ChainFilledSVG /> : <ChainSVG />;
      break;
    case "retriever":
      color = isDark
        ? "--ac-global-color-seafoam-1000"
        : "--ac-global-color-seafoam-500";
      icon = isFilled ? <RetrieverFilledSVG /> : <RetrieverSVG />;
      break;
    case "embedding":
      color = isDark
        ? "--ac-global-color-indigo-1000"
        : "--ac-global-color-indigo-500";
      icon = isFilled ? <EmbeddingFilledSVG /> : <EmbeddingSVG />;
      break;
    case "agent":
      color = isDark
        ? "--ac-global-text-color-900"
        : "--ac-global-text-color-500";
      icon = isFilled ? <AgentFilledSVG /> : <AgentSVG />;
      break;
    case "tool":
      color = isDark
        ? "--ac-global-color-yellow-1200"
        : "--ac-global-color-yellow-500";
      icon = isFilled ? <ToolFilledSVG /> : <ToolSVG />;
      break;
    case "reranker":
      color = isDark
        ? "--ac-global-color-celery-1000"
        : "--ac-global-color-celery-500";
      icon = isFilled ? <RerankerFilledSVG /> : <RerankerSVG />;
      break;
    case "evaluator":
      color = isDark
        ? "--ac-global-color-indigo-1000"
        : "--ac-global-color-indigo-500";
      icon = isFilled ? <EvaluatorFilledSVG /> : <EvaluatorSVG />;
      break;
    case "guardrail":
      color = isDark
        ? "--ac-global-color-fuchsia-1200"
        : "--ac-global-color-fuchsia-500";
      icon = isFilled ? <GuardrailFilledSVG /> : <GuardrailSVG />;
      break;
  }

  return (
    <div
      css={css`
        color: var(${color});
        width: 20px;
        height: 20px;
      `}
      title={spanKind}
    >
      {icon}
    </div>
  );
}
