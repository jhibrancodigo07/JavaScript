for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//-----------------------------------

function esPar(numero){
return  numero % 2 === 0 ? "Par" : "impar";
}

console.log(esPar(10));
console.log(esPar(7));
//-------------------------------------------

for (i=0; i<=100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
        console.log("FizzBuzz")
        }
        else if(i % 3 === 0) 
        {
        console.log("Fizz")
        }  
    
        else if (i % 5 === 0) 
        {
        console.log("Buzz")
        }   
        
    
        else
        {
        console.log(i);
        }     
    
    
    }
