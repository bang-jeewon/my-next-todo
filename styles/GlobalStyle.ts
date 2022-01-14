import { createGlobalStyle, css } from "styled-components";
//글로벌 스타일을 리셋하는 방법
//무조건 GlobalStyle로 먼저 셋팅함
import reset from "styled-reset";

const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
  
`;

export default GlobalStyle;
