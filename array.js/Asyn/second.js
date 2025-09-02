let num=200;

function number(){
    console.log("your eligible");
    num++;
    console.log(num);
    


if(num>50){
    clearInterval(intervel);
}
}
let intervel=setInterval(number,2000);