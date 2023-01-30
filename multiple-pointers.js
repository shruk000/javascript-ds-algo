// sorted array sumZero
function sumZero(arr){
   let i=0,j=arr.length-1;
   while(j-i>0){
    if(arr[i]+arr[j]===0){
        return [i,j];
    }else{
        if(arr[j]+arr[i]>0){
            j--;
        }else{
            i++;
        }
    }

   }
   return false;
}

const a1=[-2,0,1,3];
const a2=[-3,-2,-1,0,0,1];      // [-1,1]==0, [2,5],0 based..
// console.log(sumZero(a1));
// console.log(sumZero(a2));



function countUniqueValues(arr){
    let i=0,j=1;
    let unique=1;
    if(arr.length==0){
        return 0;
    }

    while(j<arr.length){
        if(arr[i]==arr[j]){
            j++;
        }
        else{
            i=j;
            j++;
            unique++;
        }
    }
    return unique;


}
const b1=[1,1,1,1,2,3,4,5]; 
const b2=[1,1,3,5,5,5,4,4];


// console.log(countUniqueValues(b1));
// console.log(countUniqueValues(b2));



// sliding window
function maxSubArraySum(arr,n){
    let i=0,j=n-1;
    let index=[];
    let maxSum=Number.NEGATIVE_INFINITY;
    if(n>arr.length)return -1;
    let currentSum= arr.slice(0,n).reduce((prev,curr)=>prev+curr,0);

    while(j<arr.length){
        if(currentSum>maxSum){
            maxSum=currentSum;
            index=[i,j];
        }else{
            currentSum=currentSum-arr[i]+arr[j+1];
            i++;
            j++;
        }

    }
    return {index,maxSum};
    

}



const c1=[1,1,1,1,2,3,4,5]; 
const c2=[1,1,3,5,5,5,4,4];
const c3=[1];
// console.log(maxSubArraySum(c1,2));
// console.log(maxSubArraySum(c2,3));
// console.log(maxSubArraySum(c3,2));


// find longest substring without repeating character
function longestSubString(str){
    const charMap={};
    let i=0,j=1;
    let maxlength=str.length>=1?1:0,maxArr=[i,i];
    charMap[str[i]]=i;
    
    while(j<str.length){
        if(str[j] in charMap){
            
            if(maxlength<j-i-1){
                maxlength=j-i-1;
                maxArr=[i,j-1];
            }
            i=charMap[str[j]]+1;
            charMap[str[j]]=j;
        }else{
            charMap[str[j]]=j;
            j++;
        }
        
    }
    return {maxlength,maxArr};


}


console.log(longestSubString("ABDEFGAB"));













