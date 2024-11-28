import React, { useState } from 'react';
import Nav from './Nav';
import Body from './Body'; // Assuming Body is another component

function App() {
  const [logoval, setlogoval] = useState<boolean>(true); // Default to light mode

  return (
    <div className="App">
      <div className="container">
        <Nav logoval={logoval} setlogoval={setlogoval} />
        <Body logoval={logoval}/>
      </div>
    </div>
  );
}

export default App;
