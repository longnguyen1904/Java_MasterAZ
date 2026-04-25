//Có rất nhiều cách để khởi tạo một đối tượng Date trong JavaScript trong JavaScript với những sự khác nhau như sau  :  
// Cách 1 : 

const now = new Date() ;  
console.log('now Object' , now)    // chỗ này sẽ trả về dữ liệu dạng Object  
console,log('now String',now.toLocaleString ) // chỗ này sẽ trả về dạng string  



//cách 2 : Nghĩa là chúng ta truyền tham số vào thì nó sẽ là ngày cố định  
const specificDate = new Date("2024-11-07 17:17:00")   
console.log('specìication' , specificDate.toLocaleString) ;  


// cách 3 : Với năm tháng , ngày , giờ , phút , giây 
const customDate = new Date(2024, 10 , 7, 17, 17 , 0)  // lưu ý  : tháng trong đây sẽ chạy theo index sẽ chạy theo index nên ví dụ 1 ~ tháng 2  hoặc 4~ t5

//  Cách 4 : Chúng ta dùng timeStamp , tính từ ngày  1/1/1970   thìdùng  const a =   Date().now.toLocalString() 



const startDate = new Date("2024-11-01") 
const endDate = new Date("2024-11-06")
console.log(endDate-startDate)
const diffDay = (endDate -startDate) /(1000 * 60 *60 *24 )



const formatDate = new Date() 
// toIOSString() : chuỗi định dạng IOS , dạng này phổ biến khi làm việc với API backEnd  
console.log('toIOSString ' , formatDate.toISOString())   // trả về String dưới dạng  : (11/08/2024)  

//
console.log('toLocaleDateString ' , formatDate.toLocaleDateString())   // chỉ lấy ra ngày tháng năm  11/8/2024
// 
console.log('toLocaleTimeString' , formatDate.toLocaleTimeString())    // chỉ lấy ra giờ phút giây  12:05:30
//
console.log('toDateString', formatDate.toDateString())  // trả về dạng này  :  Fri Nov 08 2024  
//
console.log('toTimeString', formatDate.toTimeString())  // trả về dạng 23 : 02 : 05 GMT + 0700   // chứa cả toạ độ  