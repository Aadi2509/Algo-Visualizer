import React from 'react';
import insertionSort from "../../SortingAlgorithms/insertionSortAlgo";
import $ from "jquery";
import Elements from "./Elements";

function InsertionSort()
{

    function insertionSortHelper(elements)
    {
        insertionSort(elements);
    }

    return (
        <Elements sort_name="Insertion Sort" sort_algo={insertionSortHelper}></Elements>
    );

}

export default InsertionSort;