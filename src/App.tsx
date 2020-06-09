import { css } from '@emotion/core';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const color = 'white';

  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );
}

export default App;
