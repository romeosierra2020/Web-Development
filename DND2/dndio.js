/*
function recurse(count = 0) {
    if (count === 5) return "done";
    const newCount = count + 1;
    return recurse((newCount));

}

const output = recurse();
console.log(output);
*/


function recurse(count, factor) {
    
    if(count ===0) return factor;
    const newFactor = factor * count;
    count--;
    return(recurse(count, newFactor));
}
console.log(recurse(10,1));