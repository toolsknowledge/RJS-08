import React, {lazy,Suspense} from 'react';
import './App.css';
//import Heavy from './components/Heavy';

const Heavy = lazy(()=>import("./components/Heavy"));

function App() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="App">
          <Heavy></Heavy>
      </div>
    </Suspense>
  );
}

export default App;
