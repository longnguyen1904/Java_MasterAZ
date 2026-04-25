 /*đối với loại rêrence type thì nó  ko được lưu  trực tiếp trong ngăn xếp stack mà nó sẽ tham chiếu đến địa chỉ của đối tượng trong heap Memory
 Các giá trị đucợ tham chiếu có thể thay đổi sau khi chúng được tạo ra  
 Các giá trị tham chiếu có thể được thay đổi sai khi chúng đucợ tạo ra 
 Sau khi gán một đối tượng A cho B thì cả A và B sẽ tham chiếu đến cùng một đối tượng  , chứ không tạo ra bản sao độc lập riêng biệt  .  

 * Reference Typé bao gồm các kiểu dữ liệu phổ biến sau  :  */

 
// Object : ( đối tượng ) :   Đại diện cho một tập hợp các thuộc tính và phương thức  \\
let devoloper = {
    username : 'nguyenlong' ,  
    age : 30 ,  
    greet : function(){
        console.log('Xin chao   ' + this.username + 'hay hoc tot nhe') 
        console.log(`xin chao ${this.username} hay pvan tot nhe`)   
    }
}
devoloper.greet() 



// Array (Mảng) : Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị  .  

 let colors = ['red', 'green' , 'blue', 'yellow'] 



// Function   : Đại điện cho các hàm xư rlý , cũng được coi là loại đối tượng đặc biệt  

function weather(city){
    console.log(`thoi tiet ${city} hnay nong`)
}
weather('hanoi')