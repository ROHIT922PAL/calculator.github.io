let result = document.getElementById("input");
let Calculate =(number)=>{
    result.value += number;
}

let Result =()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Please! Enter the valid input")
    }
}
function Clr(){
    result.value =" ";
}
function Del(){
    result.value =result.value.slice(0,-1);
}