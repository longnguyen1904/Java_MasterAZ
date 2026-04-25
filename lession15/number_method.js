const num1 = 3.1474627162 
const fixedNum = num1.toFixed(2) ;  // Giữ lại 2 số sau dấu phẩy  
console.log('Afterr toFixed', fixedNum)  // tuy nhiên kiểu dữ liệu của nó sẽ là String 


 const num2 = 123.454
 const precission = num2.toPrecision(5) 
 console.log(precission) 