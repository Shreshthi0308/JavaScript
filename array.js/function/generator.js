


function* Counter()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let Obj=Counter();
console.log(Obj.next());
console.log(Obj.next());
console.log(Obj.next());
console.log(Obj.next());
console.log(Obj.next());
