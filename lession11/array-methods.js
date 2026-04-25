// dưới đây là một số phương thức quan trọng trong js để đi làm  


let number = [1,2 ,3 , 4 , 5] 

number.push(6) 

console.log('After Push', number )  // kết quả  : 1 2 3 4 5 6 


number.pop()  // loại bỏ phần tử cuối của mảng  
console.log('number : ' , number)  // 1 2 3 4 5 

number.shift() // laoị bỏ một phần tử đầu mảng  

console.log('numbẻr', number ) 

number.unshift(0) // lthêm  một phần tử vào  đầu mảng  


// forEach : lặp qua từng phần tử của mảng 

number.forEach((numbers, index)=> {
    console.log(`number : ${index} , value: ${numbers}`)
})

// hàm này sẽ trả về một mảng chứa các giá trị thoả mãn  , duyệt cho đến khi hết mảng  
let filterFuntion = number.filter
let hasEvenNumber = number.some((numbers) => {
    return number %2 ===0 
})



// map  : duyệt qua hết phần tử cảu mảng 
let squareNUmbers = number.map((numbers)=> {
    return numbers * numbers
})

// find : duyệt qua mảng và tìm ra giá trị đầu tiên thoả mãn là dùng lại và trả về giá trị đó  , khác với some là trả về boolean  
// Reduce : tính toán một giá trị duy nhất từ mảng tuỳ mvào cách bạn return  
let sum = number.reduce((total , numbers) =>  {
    return  numbers + total ;  
})
console.log(sum) ; 


// Some : chỉ cần check ra true đúng 1 lần là dừng lại 
let hasEvenNumber = number.some((numbers) => {
    return number %2 ===0 
})
console.log('After some() has Even Number:' , hasEvenNumber)  // phần này sẽ trả về true 
