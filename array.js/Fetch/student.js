

function student(){
  let id = 101;
  let name="shreshthi";
  let pass=3446;

  function password(v){
  
    if(pass==v){
        console.log("yes you can enter>>>>>>>");
        console.log("student name is shreshthi:" +name);
        console.log("student id is:" +id);
        
    }else{

        console.log("sorry wrong password!......");
        
    }
}

    // function confirmpass()
    // {
    //     return name;
    // }


return [password];

}

let [password]=student();
password(7645);

