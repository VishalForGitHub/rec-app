import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/p2.jpg'
import './App.css'
import { Home } from './component/home.jsx'
import { ExtraSpace } from './component/extraSpace.jsx';
import { About } from './component/about.jsx';
function App() {
  return (
    <div>
       <Home/>
       <ExtraSpace/>
       <About/>
    </div>
  );
}

export default App;
