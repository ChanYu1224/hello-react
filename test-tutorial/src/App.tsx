import { useState } from 'react';
import { SimpleButton } from './components/SimpleButton';

export const App = () => {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  return <SimpleButton state={state} onClick={handleClick} />;
};

export default App
