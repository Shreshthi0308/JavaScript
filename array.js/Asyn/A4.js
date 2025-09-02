let num=2;
let interval=setInterval(multiplication,2000);
function multiplication(){
    console.log(num*2);
    num++;
    console.log(num);
    
    if(num>1)
    {
        clearInterval=(interval);
    }
    
}