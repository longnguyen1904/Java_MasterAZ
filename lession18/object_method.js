// freeze() 
const obj1 = {a:1 , b:2} ;  
Object.freeze(obj1) ;   // hàm này sẽ đóng băng đối tượng lại không cho thao tác với object 
obj1.c = 4  // thêm 
obj1.a = 2 // sửa 
delete obj1.b // xoá 

// isFrozen() : hàm này kiểm tra xem là đối tượng đã bị đóng băng hay chưa  

Object.isFrozen(obj1) ; 

//seal() : hàm này để niêm phong đối tương , không cho thêm và xoá nhưng lại cho sửa giá trị  


//isSealEd() : kiểm tra xem nó bị seal hay chưa 


//is()  : toán tử so sánh :  



//hasOwn() 
const obj3 = {name : 'trungquandev' , age : 30}
console.log("object.hasOwn() > name" , Object.hasOwn(obj3 , 'name'))  // trả về true 

//groupBy() 

const inventories = [
    {name :"shrimp" , type : "vegetable"},
    {name :"banana" , type : "fruit"},
    {name :"goat" , type : "meat"},
    {name :"cherry" , type : "meat"},
    {name :"fish" , type : "meat"},
] ;


const groupByResult = Object.groupBy(inventories , ({type}) =>  type) ;   // đây là cách 1 dùng destructoring
const groupByResult = Object.groupBy(inventories , (item) =>  item.type) ; // cách 2 dùng luôn biến mới  