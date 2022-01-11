import React from 'react';
import selectionSort from "../../SortingAlgorithms/selectionSortAlgo";
import $ from "jquery";
import Elements from "./Elements";

function SelectionSort()
{
    function selectionSortHelper(elements)
    {
        const animationsArray=selectionSort(elements);
        console.log(animationsArray)
        var domArray=[];
        $(document).ready(function(){
           domArray= document.getElementsByClassName('element');

        //    console.log(animationsArray);
           
           for(let i=0;i<animationsArray.length;i++)
           {
            const [index1,index2]=animationsArray[i];
            if(i%2==0){
                //change color to red
                // console.log(domArray[index1]);
                
                setTimeout(()=>{
                    domArray[index1].setAttribute("style","background-color:aqua");
                    domArray[index2].setAttribute("style","background-color:aqua");
                },i*1500);
            }
            else
            {
                let shouldSwap=animationsArray[i][2];
                if(shouldSwap===true)
                {
                    //swap both bars and revert their color
                    setTimeout(()=>{
                        // let temp=domArray[index1].innerHTML;
                        // domArray[index1].innerHTML=domArray[index2].innerHTML;
                        // domArray[index2].innerHTML=temp;

                        domArray[index1].setAttribute("style","background-color:white");
                        domArray[index2].setAttribute("style","background-color:white");
                    },i*1500);
                }
                else
                {
                    //just revert their color
                   
                    setTimeout(()=>{
                        domArray[index1].setAttribute("style","background-color:white");
                        domArray[index2].setAttribute("style","background-color:white");
                    },i*1500);
                }
            }
           }

        });
    }

    return (
        <Elements sort_name="Selection Sort" sort_algo={selectionSortHelper}></Elements>
    );
}

export default SelectionSort;