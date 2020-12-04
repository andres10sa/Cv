import React from 'react';
import styles from './StyleAppcss';

const Appcss = () => {
    const {General} = styles;
   
    return ( 
        <General>
           <p><small>1</small> *(</p>
            <p><small>2</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;margin</span> : <span className="valor">0;</span> </p>
            <p><small>3</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;padding</span> : <span className="valor">0;</span> </p>
            <p><small>4</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;box-sizing</span> : <span className="valor">border-box;</span> </p>
            <p><small>5</small> )</p>
            <p><small>6</small> body(</p>
            <p><small>7</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;font-family</span> : <span className="valor">Open Sans;</span> </p>
            <p><small>8</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;margin</span> : <span className="valor">0;</span> </p>
            <p><small>9</small><span className='propiedad'>&nbsp; &nbsp;&nbsp;height</span> : <span className="valor">100vh;</span> </p>
            <p><small>10</small> )</p>
     
        </General>
     );
}
 
export default Appcss;