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
        if(name=="bubble sort")
        return <BubbleSort />
        else if(name=="insertion sort")
        return <InsertionSort />
        else if(name=="selection sort")
        return <SelectionSort />;
        else if(name=="merge sort")
        return <MergeSort />
        else if(name=="quick sort")
        return <QuickSort />
        else if(name=="heap sort")
        return <HeapSort />
        else
        return null;
    }

    return(<>
    <div className="marginTop">
    {findSort()}
    </div>
    </>)

};

export default FoundSort;