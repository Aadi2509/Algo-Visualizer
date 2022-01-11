import React, { useState,useEffect } from 'react';
import '../../styles/bubbleSort.css';
import $ from "jquery";

function Elements(props)
{
    var maxSizeOfArray=5;
    var size;

    //generating random array of size given size
    function generateRandomArray(size)
    {
        let arrayElements=[];

        //generating random numbers from 1-999 for the required size
        for(let i=0;i<size;i++)
        {
            let elem=(Math.floor((Math.random()*999))+1);
            arrayElements.push(elem);
        }

        return arrayElements;
    }

    let [elements,setElements]=useState(generateRandomArray(maxSizeOfArray));
    const [sort,setSort]=useState(false);

    // Creating divs for every single elements of array
    function createElement(elem,index)
    {
        return (<div className='element' value={elem} key={index} style={{backgroundColor:"white"}}>{elem}</div>)
    }

    function newElements()
    {
        const nE=elements;
        return nE;
    }

    return (
        <div className="full-height">  
            <h1 className="heading">{props.sort_name}</h1>
    
          <div className='parent'>
            <div className="array_flex">
                {elements.map(createElement)}
            </div>
          </div>
          
          <button className='generate__btn' onClick={()=>{setElements(generateRandomArray(maxSizeOfArray))}}>Generate Array</button>
          <button className='sort__btn' onClick={()=>setSort(true)}>Sort</button>
          {sort===true ? props.sort_algo(newElements()):null}
    
         {/* After Sorting */}


        {/* {props.sort_algo(elements)}
        <div className='parent'>
            <div className="array_flex">
                {elements.map(createElement)}
            </div>
        </div> */}
    
    
        </div>
        );
}


export default Elements;