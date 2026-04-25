function Devoloper (userName) {
    this.username = userName
    this.great =  ()=>{
        console.log(`Hi Aliens , i am  ${this.username} from the planet Earth ${typeof this.username}`)
    }

    // nếu như đoạn này chúng ta sử dụng arrow function thay vì sử dụng funtion thì thí.username sẽ thành undefine trong một số ngữ cảnh  
}

 const trungquandevReal = new Devoloper('TrungQuanDev (Real)') 
 trungquandevReal.great()
 const trugquandevFake = new Devoloper('TrungQuanDev (Fake)') 
 trugquandevFake.great() 
