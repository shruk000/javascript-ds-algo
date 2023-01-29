// node builtin-sort

const arr=[1,2,3,10,12,14,14,3,5,7,8,2];

console.log("builtin sort",arr.sort());


console.log("slightly modified array", arr.sort((a,b)=>a-b));

// remove duplicates --
const unique=new Set(arr);
console.log("unique array",...unique);

function myunique(arr){
    const obj=new Object();
    for(const ele of arr){
        if(!obj[ele]){
            obj[ele]=ele;
        }
    }
    return obj;
}

console.log(arr);
console.log(Object.keys(myunique(arr)));    //return keys as string element ['1','2','3'...];
console.log(Object.values(myunique(arr)));

