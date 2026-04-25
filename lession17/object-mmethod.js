


// khichúng ta truyền 1 class vào trong hàm create thì nó sẽ là nguyên mẫu  của object mới , object mới đó sẽ kế thừa đucợ những thuộc tính và chức năng mà nguyên mẫu có  
const person = {
    greet (name)  {
        console.log(`Hello ${name} there `) 
    }
} ;  


const Gdev = Object.create(person) 
Gdev.name = "Long Moi" 
Gdev.greet(Gdev.name) 



console.log('----------------------------') 


// Hàm Asssgin : Sao chép tất cả cácb thuộc tính của một hoặc nhiều đối tượng ban đầu vào đối tượng đích . Kết quả trả về đối tượng đích  
// - Nếu một thuọc tính đã tônnf tại tỏng đối tượng đích thì nó sẽ bị ghi đè .  
// phương thức này sẽ làm thay đổi đói tượng đích , không làm thay đổi đối tượng nguồn  

const targetObj = {a:1 , b:2} ;  
const originObj = {b:4 , c:5} ; 
const result = Object.assign(targetObj, originObj) ;  
console.log('Object.assign() > result ', result )  // a : 1 , b 4 , c5 
console.log('Object.assign() > originObj ', originObj) ;  // b: 4 , c:5
console.log('Object.assign() > result ', targetObj) ;  // a:1 , b: 4 , c: 5 


// hàm defineProperty() 
const obj1 =  {}   // chúng ta khởi tạo ra một đối tượng chưa có thuọc tính gì hết sau đó dùng hàm để tạo thuộc tính cho chúng 
Object.defineProperty(obj1 , 'name' , {
    value : 'longGdev' ,
    writable : true // có nghĩa là cho phép sửa thuộc tính hay không 
})


const obj2 = {}
Object.defineProperties(obj2 , {
    firstname :{
        value : 'moi',
        writable : false
    } ,
    lastname : {
        value : 'long',
        writable : true 
    }
}) ; 


// chúng ta còn một số hàm như là keys() : lấy hết ra các key của object và trả về mảng  
                                  // values() : lấy tất cả các values của object và trả về mảng  
                                  // entries :  nó sẽ tách key và values của object thành cặp và cho vào mảng , sau đó return mảng [ ["a" ,1] , ["b" , 2] , ["c" , 3] ]
                                  // hàm fromEntries : Nó sẽ làm ngược lại với entries là đưa mảng về thành đối tượng  