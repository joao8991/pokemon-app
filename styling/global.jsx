import { createGlobalStyle } from "styled-components";

export const AppGlobalStyles = createGlobalStyle`
        html,
        body {
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
        ::selection {
          background: #529eefcc;
          color: white;
        }
      `;
