console.log("long nguyen" , nameVar);  
var nameVar  ; 

// khi  chưa khai báo thì chạy file sẽ bị lỗi còn nếu như khai báo sau khi đã dùng biến thì biến sẽ thuộc kiểu undefine 
// điều là này diễn ra do cơ chế hoisting 
// hoisting : biến được khai báo bằng var sẽ di chuyển lên đầu phạm vi khối của nó  


var nameVar = "bien khai bao lan 2 " ;  
// chúng ta có thể tái khai báo cùng một tên biến var nhiều lần  
// chúng ta cũng có thể gán lại giá trị của biến var 