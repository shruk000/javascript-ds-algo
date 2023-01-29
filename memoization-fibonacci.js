

function normalFibonacci(ele,a,b){
    console.log(a,",");
    if(ele==2){
        console.log(b);
        return b;
    }
    return normalFibonacci(--ele,b,a+b);
}


function Fibonacci(a){
    if(a==0){
        return 1;
    }
    if(a==1){
        return 2;
    }
    return Fibonacci(a-1)+Fibonacci(a-2);
}


function cachingFibonacci(num){
    const fibValues={};

    function Fibonacci(a){
        if(!fibValues[a]){
            if(a==0){
                return 1;
            }
            if(a==1){
                return 2;
            }
            fibValues[a]=Fibonacci(a-1)+Fibonacci(a-2);
            return fibValues[a];
        }else{
            return fibValues[a];
        }
    }
    return Fibonacci(num);
    
    
}



let startTime=new Date();
// normalFibonacci(100,1,1);
console.log(Fibonacci(40));                  // took 16 sec when Fibonacci(45)..gives 46th term..
console.log(new Date()-startTime);

startTime=new Date();
// normalFibonacci(100,1,1);
console.log(cachingFibonacci(50));       // took 0.0001 sec when Fibonacci(45)..gives 46th term..
console.log(new Date()-startTime);







