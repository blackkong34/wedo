import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  /* @font-face {
    font-family: "notoSans";
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    text-decoration: none;
  }

  html {
    font-size: 16px;
  }

  ol,
  ul {
    list-style: none;
  }

  input,
  button,
  a {
    border: none;
    outline: none;
  }
  button {
    background: none;
    cursor: pointer;
  }
`;
