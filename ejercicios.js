function numarg(a, b) {
    
    if (!isFinite(a) || !isFinite(b) || isNaN(a) || isNaN(b)) {
        return 0;
    }else
    {
       return a + b;
    }
    
   
   
}

console.log(numarg(5, 10));    
//console.log(numarg(NaN, 10));  
//console.log(numarg(Infinity,10)); 
