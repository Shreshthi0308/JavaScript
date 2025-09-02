
//object is a collection of variables and key value pairs
//it is also known as JSON(javaScript object notation)
//. operator can access
//multiple data types is one variable.

var data={
    name:"shreshthi",
    age:21,
    degree:"BSc",
    field:"Computer Science",
    percentage:89,
    college:"S.G.M.College Karad",

    demo:function ()
    {
      console.log("age:"+this.age +"   degree"+this.degree + "   name:"+ this.name);
      
        
    }
}

data.demo();




