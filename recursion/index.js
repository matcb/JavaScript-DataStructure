// recursive algorithm to solve factorials
function factorial(n){
  if (n === 1 || n === 0 ){
    return 1
  } return n * factorial(n-1) //recursive call 
}
console.log(factorial(5))
