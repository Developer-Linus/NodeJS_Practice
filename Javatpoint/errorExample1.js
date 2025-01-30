// An example to show Reference Error. This error is thrown when a variable is not defined.
try{
    const a = 1;
    const c = a + b;
}catch(err){
    console.log(err);
}