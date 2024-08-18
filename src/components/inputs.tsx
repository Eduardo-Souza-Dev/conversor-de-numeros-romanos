import { toast } from 'react-toastify';
import { useState } from 'react';
import '../App.css';
import { ImForward3 } from "react-icons/im";
import { Lists } from './list';
import { createContext } from 'react';
import ConvertNumber from '../ConvertNumber';
const NumberContext = createContext(0);
const RomanContext = createContext('');




function Inputs(){
    const [ value, setValue ] = useState(0);
    const [ romanValue, setRomanValue ] = useState('');
function convertNumber(){
    let number: HTMLInputElement | null = document.getElementById("number") as HTMLInputElement;
    let roman: HTMLInputElement | null = document.getElementById("roman") as HTMLInputElement;
    let convertedNumber;
    
    
    
    let value = parseInt(number.value)
    

    if(isNaN(value) || value < 1 || value > 1000){
        toast.warning("Valor inválido!");
        number.value = '';
        roman.value = ''
        setValue(0);
        setRomanValue('')
    }else{
      setValue(value);
      convertedNumber = new ConvertNumber(value).convertNumberToRoman();
      setRomanValue(convertedNumber);
      roman.value = convertedNumber;
    }


    
    }

    return (
        <NumberContext.Provider value={value}>
            <RomanContext.Provider value={romanValue}>
             <Lists/>
        <div>
            <input id="number" className='inputs' type="text" placeholder="Número" />
            <button onClick={convertNumber} className='buttonSpan'><ImForward3 className='iconSpan'/></button>
            <input id="roman" className='inputs' type="text" placeholder="Romano" readOnly />
        </div>
        </RomanContext.Provider>
        </NumberContext.Provider>
    )
}

export {Inputs,NumberContext, RomanContext};