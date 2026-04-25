// Hàm concat để nối 2 mảng lại với nhau  . hàm này sẽ không làm thay đổi mảng gốc ban đầu 

const ar1 = [1,2,3] 
const ar2 = [4, 5 ,6] 
const concatResult = ar1.concat(ar2) 

// slice : trả về một mảng con của mảng ban đầu , vị trí startIndex đến endindex nhưng không bao gồm endindex, không làm thay đổi mảng gốc ban đầu
 
const arr3 = [1,2,3,4,5,6,7] 
const sliceResult = arr3.slice(1,4) 
console.log('Afterr slice : ' , sliceResult)  // [2,3,4]
// hàm splice : CŨng là hàm cắt ra nhưng có thể thay thế  

const ar4 = [1,2,3,4,5,6]  
const spliceResult = ar4.splice() // nếu không truyền gì vào thì kết quả là spickResult là mảng rỗng  
                                  // kết quả ar4 = []  và ar4 còn nguyên 1 2 3 4 5 6
const spliceResult = ar4.splice(2)  // nghĩa là lấy ra tất cả từ vị trí số 2                                  
const spliceResult2 = ar4.splice(2, 3) // tham số đầu tiên là startIndex để bắt đầu lấy , tham số thứ 2 là số lượng phần tử được lấy từ vị trí bắt đầu 
                                   // kết quả là ar4 = [3,4,5] nghĩa là lấy ra 3 số kể từ vị trí index= 2 , arr4 = [1,2,6] 
const spliceResult3 = arr3.splice(2, 3 ,a ,b , c) // các tham số đằng sau tham số số 2 sẽ thay thế cho những giá trị đucợ lấy ra khỏi mảng 


const ar5 = [1,2,3,4,5,6] 
const everyResult = ar5.every(number =>  number %2 )   // hàm này sẽ kiểm trả xem tất cả các phần tử trong mảng có chia hết cho 2 hay không  
                                         // hàm này sẽ trả về true nếu thoả mãn còn nếu không sẽ trả về -1 

// chúng ta còn 2 phương thức khác là toString và join  , Join hơn toString ở cái là join có thể chỉ định được kí tự giữa các chữ cái đucợ nối với nhau  