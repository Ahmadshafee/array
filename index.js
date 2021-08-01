var fruits = ['mango','apple','orange','banana','grapes']

var len=fruits.length   //to find the length of the array
console.log(len);

fruits.push('grapes')   //to add elements at yhe end
console.log(fruits);

fruits.pop()            //to delete element at the last
console.log(fruits);

fruits.unshift(kiwi)   // to add a element in the beginning
console.log(fruits);

fruits.shift(kiwi)     // to  remove a element from begninning
console.log(fruits);

fruits.splice(2,0,'orange');   //inserting at the middle using--index,count and element
console.log(fruits);
 
var a =[1,2];           //concateration of arrays
var b =[3,4];

var c = a.concat(b)
console.log(c);

var c = b.concat(a)
console.log(c);
 
//Iteration of an array (assignment)

var animals=['lion','tiger','puma','cheetah','leopard','deer','hyena','wilderbeast','fox','elephant']
for(var i=0 ,i <= animals.length-1 ,i++){
    console.log(animals[i]);
}


