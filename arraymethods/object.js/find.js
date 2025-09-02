
let students=[
    {name:"varsha" , marks:78},
    {name:"anushka" , marks:75},
    {name:"sonali" , marks:66},
    {name:"vaishnvi" , marks:59},
    {name:"vina" , marks:88},
    {name:"suhani" , marks:91}
    
];

let topper =students.find(students=> students.marks>90);
console.log(topper);