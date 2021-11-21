import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import BubbleSort from "./Sorts/Bubble Sort";
import InsertionSort from "./Sorts/Insertion Sort";
import SelectionSort from './Sorts/Selection Sort';
import QuickSort from './Sorts/Quick Sort';
import MergeSort from './Sorts/Merge Sort';
import HeapSort from './Sorts/Heap Sort';

function FoundSort(){

    let params=useParams();
    var name=params.name;
    
    // var processedName;

    // for(let i=0;i<name.length;i++)
    // {
    //     if(name[i]!==' ')
    //     processedName+=name[i];
    // }

    function findSort()
    {
        if(name=="Bubble Sort")
        return <BubbleSort />
        else if(name=="Insertion Sort")
        return <InsertionSort />
        else if(name=="Selection Sort")
        return <SelectionSort />;
        else if(name=="Merge Sort")
        return <MergeSort />
        else if(name=="Quick Sort")
        return <QuickSort />
        else if(name=="Heap Sort")
        return <HeapSort />
        else
        return null;
    }

    return(<>
    {findSort()}
    </>)

};

export default FoundSort;