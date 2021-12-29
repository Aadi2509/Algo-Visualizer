import React, { useState } from 'react';
import '../../styles/bubbleSort.css';
import bubbleSort from "../../SortingAlgorithms/bubbleSortAlgo";



function BubbleSort()
{
    var maxSizeOfArray=15;
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

    let elements=generateRandomArray(maxSizeOfArray);

    // Creating divs for every single elements of array
    function createElement(elem,index)
    {
        return (<div className='element' value={elem} key={index} style={{backgroundColor:"white"}}>{elem}</div>)
    }

    


    // creates animation array and helps to swap and apply animations
    function BubbleSortHelper(elements)
    {
        var domArray=[];
       window.onload=function(){
         domArray= document.getElementsByClassName('element');
        //domArray[8].setAttribute("style","background-color:aqua");
        
        
        const animationsArray=bubbleSort(elements,domArray);
        console.log(animationsArray);
        
        for(let i=0;i<animationsArray.length;i++){

            //currently comparing these values
            const [index1,index2]=animationsArray[i];
            if(i%2==0){
                //change color to red
                console.log(domArray[index1]);
                
                setTimeout(()=>{
                    domArray[index1].setAttribute("style","background-color:aqua");
                    domArray[index2].setAttribute("style","background-color:aqua");
                },i*500);
            }
            else
            {
                let shouldSwap=animationsArray[i][2];
                if(shouldSwap==="true")
                {
                    //swap both bars and revert their color
                    setTimeout(()=>{
                        let temp=domArray[index1].innerHTML;
                        domArray[index1].innerHTML=domArray[index2].innerHTML;
                        domArray[index2].innerHTML=temp;

                        domArray[index1].setAttribute("style","background-color:white");
                        domArray[index2].setAttribute("style","background-color:white");
                    },i*500);
                }
                else
                {
                    //just revert their color
                   
                    setTimeout(()=>{
                        domArray[index1].setAttribute("style","background-color:white");
                        domArray[index2].setAttribute("style","background-color:white");
                    },i*500);
                }
            }
        }
    }
    }

// returning the value of BubbleSort Function
    return (
    <div className="full-height">  
        <h1 className="heading">Bubble Sort</h1>

      <div className='parent'>
        <div className="array_flex">
            {elements.map(createElement)}
        </div>
      </div>
      
      <button className='sort__btn'>Sort</button>

     {BubbleSortHelper(elements)}

     {/* After Sorting */}

    {/* <div className='parent'>
        <div className="array_flex">
            {elements.map(createElement)}
        </div>
    </div> */}


    </div>
    );
}

export default BubbleSort;

