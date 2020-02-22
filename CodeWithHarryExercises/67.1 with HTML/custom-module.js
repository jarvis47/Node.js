console.log("This is a custom module !");

function sum(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
}

module.exports = {
    sum : sum,
    name : "module_sum"
}