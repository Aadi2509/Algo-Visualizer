
function swap(elements,firstIndex,secondIndex)
{
    let temp=elements[firstIndex];
    elements[firstIndex]=elements[secondIndex];
    elements[secondIndex]=temp;
}

function generateAnimations(elements,domArray){

    let animations=[];
    // console.log(domArray);

    let size=elements.length;
    for(let i=0;i<size;i++)
    {
        for(var j=0;j<size-1-i;j++)
        {
            animations.push([j,j+1]);
            
            if(elements[j]>elements[j+1])
            {
                animations.push([j,j+1,"true"]);
                swap(elements,j,j+1);
            }
            else
            {
                animations.push([j,j+1,"false"]);
            }
        }
    }

    // console.log(animations);
    return animations;

}


export default generateAnimations;