import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --soft-red:hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-cyan-text: hsl(167, 40%, 24%);
    --dark-blue-text:  hsl(198, 62%, 26%);
    --dark-cyan-footer: hsl(168, 34%, 41%);

    --dark-blue-2:hsl(212, 27%, 19%);
    --very-dark-grayish-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%)



  }

  .font-b {
     font-family: 'Barlow', sans-serif;
  }
  .font-f {
     font-family: 'Fraunces', serif;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1440px;
    /* width: 90%; */
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      z-index: 101;
     
      .scrollbar-thumb-y {
        background: var(--gray-1);

      }
    }
  }
`;
export default GlobalStyles;
