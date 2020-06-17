import React from 'react';
import './App.css';
import Child from './child';

//JSX component always start with capital letter
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Waleed Khan</h1>
        <Child childName="Child-Of-App" childValue="21" />
        <Child childName="Child-Of-App-2" childValue="22" />
        <Child childName="Child-Of-App-3" childValue="23" />
      </header>
    </div>
  );
}

//we can use multiple child in one parent
//the value in the childName will print as it is
export default App;
//by export, we can use App in any js file
