import '../App.css';
import { useContext, useState, useEffect } from 'react';
import { NumberContext, RomanContext } from './inputs';

function Lists() {
const [arrayTeste, setArrayTeste] = useState<number[]>([]);
const [arrayTeste2, setArrayTeste2] = useState<string[]>([]);
const valueNumber = useContext(NumberContext);
const valueRoman = useContext(RomanContext);
// let previousNumber:number;
// let previousRoman:string;



useEffect(() => {
    if (valueNumber !== null || valueNumber != 0) {
      setArrayTeste((index) => 
        valueNumber !== 0 ? [...index, valueNumber] : index
      );
      setArrayTeste2((index) => 
        valueNumber !== 0 ? [...index, valueRoman] : index
      );
    }
}, [valueNumber]);

return (
<>
        <section>
          <strong><h1>Conversor de números Romanos</h1></strong>
        </section>
        <div className="card">
        
          <p>{
          arrayTeste.map((number) =>{
            return (
              <div>
              <span key={number}>{number}</span><span id='separator'>-</span><br/> 
              </div>
            )
          })
          }</p>
          
          <p>{
          arrayTeste2.map((romano) =>{
            return (
              <div>
              <span key={romano}>{romano}</span><br/>
              </div>
            )
          })
          }</p>

        </div>
        </>
    );  
}

export {Lists};
