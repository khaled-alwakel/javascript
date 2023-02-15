function sumFibs(num) {
    let fib1 = 0;
    let fib2= 1;
    let sum
    for (let i = 2; i < num; i++){ // these comment for the first iteration of loop
        sum = fib1+fib2 // result from fib 1
        fib1 = fib2; // 1
        fib2 = sum ; // 1
       

    }
    return fib2;
  }
  
console.log(sumFibs(4));
  
/**
    fib(1)=0
    fib(2)=1
    fib(3)=fib(2)+fib(1) 1+0 = 1
    fib(4)=fib(3)+fib(2) 1+1 = 2
    fib(5)=fib(4)+fib(3) 2+1 = 3
    fib(6)=fib(5)+fib(4) 3+2 = 5
    fib(7)=fib(6)+fib(5) 5+3 = 8
    fib(8)=fib(7)+fib(6) 8+5 = 13
    fib(9)=fib(8)+fib(7) 13+8 = 21
    fib(10)=fib(9)+fib(8) 21+13 =34
     
    fib(n)=fib(n-1)+fib(n-2)
 */

  