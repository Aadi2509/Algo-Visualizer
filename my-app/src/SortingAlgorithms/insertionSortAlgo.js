function swap(elements,firstIndex,secondIndex)
{
    let temp=elements[firstIndex];
    elements[firstIndex]=elements[secondIndex];
    elements[secondIndex]=temp;
}

function generateAnimations(elements)
{
    for(let i=1;i<elements.length;i++)
    {
        let j=i-1;
        while(j>=0 && elements[j]>elements[j+1])
        {
            swap(elements,j,j+1);
            j--;
        }
    }
}

export default generateAnimations;