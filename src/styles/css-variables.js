import { css } from "styled-components";
import { COLORS } from "./CSS_CONSTANTS";

export const cssVariables = css`
  :root {
    /* COLORS */
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};
    --color-lightgray: ${COLORS.gray300};
    --color-gray: ${COLORS.gray500};
    --color-darkgray: ${COLORS.gray700};
    --color-transparent-gray: ${COLORS.transparentGray35};
    --color-white: ${COLORS.offWhite};

    /* SIZES */
    --slider-width: 950px;
    --slider-height: 475px;

    /* SHADOWS */
    --shadow-color: 0deg 0% 0%;
    --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.1),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.11),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.11),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.11),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.11);
    --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);
  }
`;
