
function swap(elements,firstIndex,secondIndex)
{
    let temp=elements[firstIndex];
    elements[firstIndex]=elements[secondIndex];
    elements[secondIndex]=temp;
}

function generateAnimations(elements){

    var animations=[];
    let size=elements.length;

    for(let i=0;i<size-1;i++)
    {
        let small_index=i;
        for(let j=i+1;j<size;j++)
        {
            //compare j and small_index
            animations.push([small_index,j]);
            animations.push([small_index,j,false]);
            if(elements[j]<elements[small_index])
            {
                small_index=j;
            }
        }

        if(small_index!==i)
        {
            swap(elements,i,small_index);
            animations.push([i,small_index]);
            animations.push([i,small_index,true]);

        }
        

    }


    return animations;

}

export default generateAnimations;