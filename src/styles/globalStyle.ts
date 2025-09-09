import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");

  * {
    font-family: 'Pretendard','Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
     margin: 0;
  background-color: #f0f0f0; 
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100vh;      
    }

  input {
    border: none;
    padding: 0;
    margin: 0;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
