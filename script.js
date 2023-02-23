function getlen(){
    let getval = document.getElementById("get").value;
    let setval = document.getElementById("set").value;
    let x = document.getElementById("demo");
    let y = document.getElementById("inc");
    if(getval===setval){
        alert(`if you are convert ${getval} into ${getval} you get same answer`)
    }
    // now we convert meter into foot
    if(getval==="meter" && setval==="foot"){
        y.innerText = x.innerText * 3.28084;
    }
    //now we convert meter into cm
    else if(getval==="meter" && setval==="cm"){
        y.innerText = x.innerText * 100;
    }
    //now we convert foot into meter
    else if(getval==="foot" && setval==="meter"){
        y.innerText = x.innerText /3.281;
    }
    //now we convert foot into cm
    else if(getval==="foot" && setval==="cm"){
        y.innerText = x.innerText * 30.48;
    }
    //cm into foot
    else if(getval==="cm" && setval==="foot"){
        y.innerText = x.innerText / 30.48;
    }
    //cm into meter
    else if(getval==="cm" && setval==="meter"){
        y.innerText = x.innerText /100;
    }
    //cm into meter
    else if(getval==="cm" && setval==="meter"){
        y.innerText = x.innerText * 30.48;
    }
    //if user input the alphabet show alert
    let z = /[a-z]/i
    if(z.test(x.innerText) === true){
        alert("enter valid number");
    }
}
//celi into fahreheit
function getceli(){
    let x = document.getElementById("celi");
    let y = document.getElementById("fah");
    y.innerText = x.innerText * 1.8 + 32;
     //if user input the alphabet show alert
     let z = /[a-z]/i
     if(z.test(x.innerText) === true){
         alert("enter valid number");
     }
}
function getf(){
    let x = document.getElementById("celi");
    let y = document.getElementById("fah");
    x.innerText = (y.innerText - 32)*5/9;
     //if user input the alphabet show alert
     let z = /[a-z]/i
     if(z.test(y.innerText) === true){
         alert("enter valid number");
     }
}
//kilogram into gram
function getgram(){
    let x = document.getElementById("kilo");
    let y = document.getElementById("gram");
    y.innerText =x.innerText * 1000;
    let z = /[a-z]/i
    if(z.test(x.innerText) === true){
        alert("enter valid number");
    }
}
//gram into kilo
function getkilo(){
    let x = document.getElementById("kilo");
    let y = document.getElementById("gram");
    x.innerText =y.innerText / 1000;
    let z = /[a-z]/i
    if(z.test(y.innerText) === true){
        alert("enter valid number");
    }
}