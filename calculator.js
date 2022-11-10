

let calculate=(number)=>{
    document.getElementById("inputtext").value+=number
}

let clr=()=>{
    document.getElementById("inputtext").value =" ";
}
function compute(){
    let x = document.getElementById("inputtext").value
    let y =eval(x)
    document.getElementById("inputtext").value=y

}