const getListPokemon = (apiEndPoint , callBack) => {
    const requestAPI = new XMLHttpRequest() ;
    requestAPI.open("GET", apiEndPoint) 
    requestAPI.onload=() => {
        if(requestAPI.status >= 200 && requestAPI.status <= 299){
            const responData = JSON.parse(requestAPI.responseText)
            callBack(responData)
        }
    }
    requestAPI.send() 
}

getListPokemon('http/.....', (responData)=> {
    console.log('responData', responData)
})