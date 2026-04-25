// charAt()   // trả về giá trị của vị trí cụ thể  trong chuỗi   
const str1 = 'Hello world' 
console.log(str1.charAt(0)) // kết quả : H 
console.log(str1.charAt(1))  // kết quả : e 
console.log(str1.charAt(70)) // kết quả  : ''   trả về chuỗi rỗng 
console.log( typeof str1.charAt(70))  // String 


// hàm concat() : Nối chuỗi  
const str2 = 'longGDev'
const str4 = ' '
const str3 = 'Một lập trình viên '
const str5 = str2.concat(str4).concat(str3)    // trả về longGdev Một lập trình viên 

// IndexOf : giống y hệt như thằng findIndexOf   : trả về bị trí đầu tiên xuất hiện chuỗi đucợ truyền vào hàm indexOF 

// Slice 
//SubString: gióng y hệt slice tuy nhiên là nó sẽ tự đọng đảo ngược index của start và end nếu bị truyền ngược  và substring chỉ dùng cho chuỗi được thôi 

// split thì ngược lại với với ToStrìng , nó tách chuõi thành mảnh bởi tham số được truyền voà , ví dụ split('-') 
// hàm include  : kiểm tra xem có chưa chuỗi trong String  , nếu có trả về true , nếu ko trả về -1   




















































