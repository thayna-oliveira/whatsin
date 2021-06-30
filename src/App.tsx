import React from 'react';
import { GlobalStyle } from './styles/globalStyles';

import { Button } from './components/Button';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Button title="Add to favorites" />
    </div>
  );
}

export default App;
