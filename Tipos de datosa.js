function numarg(a, b) {
    
    if (!isFinite(a) || !isFinite(b) || isNaN(a) || isNaN(b)) {
        return true;
    }else
    {
       return false;
    }
    
   
   
}

console.log(numarg(NaN, 10));
console.log(numarg(Infinity, 10));
console.log(numarg(5, 10));    





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


 function numarg(a, b){
        
    if (a === 0) {
    return true;
} else {
    return false;
}


}
console.log(numarg(10, 2));  
console.log(numarg(10, 0));
