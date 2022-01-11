import React, { useState,useEffect } from 'react';
import '../../styles/bubbleSort.css';
import bubbleSort from "../../SortingAlgorithms/bubbleSortAlgo";
import $ from "jquery";
import Elements from "./Elements";

function BubbleSort()
{
    // creates animation array and helps to swap and apply animations
    
    function BubbleSortHelper(elements)
    {
        console.log("I am Called");
        var domArray=[];
      $(document).ready(function(){
         domArray= document.getElementsByClassName('element');
        //domArray[8].setAttribute("style","background-color:aqua");
        
        
        const animationsArray=bubbleSort(elements,domArray);
        // console.log(animationsArray);
        
        for(let i=0;i<animationsArray.length;i++){

            //currently comparing these values
            const [index1,index2]=animationsArray[i];
            if(i%2==0){
                //change color to red
                // console.log(domArray[index1]);
                
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
    });
    console.log('I am done');
  
}

    return (
        <Elements sort_name="Bubble Sort" sort_algo={BubbleSortHelper} ></Elements>
    );
}

export default BubbleSort;

