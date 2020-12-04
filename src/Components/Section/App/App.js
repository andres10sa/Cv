import React from "react";
import styles from "./StyleApp";

const App = () => {
  const { General } = styles;

  return (
    <General>
      <p><small>1</small> <span>import</span> Profile <span>from</span>
        <span className="amarillo">'./Components/Profile';</span>
      </p>
      <p><small>1</small> <span>import</span> Technologies <span>from</span>
        <span className="amarillo">'./Components/Technologies';</span>
      </p>
      <p><small>1</small> <span>import</span> Studies <span>from</span>
        <span className="amarillo">'./Components/Studies';</span>
      </p>
      <p><small>1</small> <span>import</span> Experience <span>from</span>
        <span className="amarillo">'./Components/Experience';</span>
      </p>
      <p><small>1</small> <span>import</span> 
        <span className="amarillo"> './Components/App.css';</span>
      </p>
      <small className="saltos">2</small>
      <small className="saltos">3</small>
      <p><small>4</small> 
         <span>function App</span> ( 
         </p>
          <p><small>5 </small><span>&nbsp; &nbsp;return</span>  (</p> 
         <p><small>6</small>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Profile()</p> 
         <p><small>6</small>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Technologies()</p> 
         <p><small>6</small>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Studies()</p> 
         <p><small>6</small>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Experience()</p> 
          <p><small>8 </small>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;)  </p>
          <p><small>8 </small>&nbsp; ) ; </p>
         <p><small>9</small> <span>export default</span> App ;</p> 
        
    </General>
  );
};

export default App;

// import Index from './Components/Index/Index';

// function App() {
//   return (
//     <div className="App">
//      <Index/>
//     </div>
//   );
// }

// export default App;
