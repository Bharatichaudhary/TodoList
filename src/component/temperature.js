import React from 'react';

export default function Temperature(){
    /*const[text1,setText1]= useState();
    const[text2,setText2]= useState();
    let newText=0;
    const convert=()=>{
        newText=Number(text1)*1.8+32;
    }
    const change=(event)=>{
        setText1(event.target.value);
        setText2(event.target.value);
    }*/
   let celsius=document.getElementById("celsius");
    let fahrenheit=document.getElementById("fahrenheit");
    celsius.oninput=()=>{
        let output= parseFloat(celsius.value)*(9/5)+32;
        fahrenheit.value=parseFloat(output.toFixed(2));
    };
    fahrenheit.oninput=()=>{
        let output=( parseFloat(fahrenheit.value)-32)*(5/9);
        celsius.value=parseFloat(output.toFixed(2));
    }



    
    return(
        <>
        <div>
        <h2>Temperature Converter</h2>
        <label forHtml='celsius'>Celcius :</label>
        <input id="celsius"type="number"></input><br/>
        <label forHtml='fahrenheit'>Fahrenheit :</label>
        <input id="fahrenheit" type="number"></input><hr/>

        <button>convert</button>
           
        </div>
        </>

    )
}
