var x = 10;
const myFnc = () => {
  console.log(x);
  var y = x * 2;
  console.log(y);
};
console.log(x);
myFnc();
// console.log(y);

const a = [2, 4, 2];
const b = [...a, 3, 3, 4];
console.log(b);

const j = {
    name: 'phong'
  };
  
  const l = {
    j,
    age: 19
  };
  
  console.log(l);


const func=(num1, num2, ...numother)=>{
    console.log("x:", num1); 
    console.log("y:", num2);
    console.log("Other number:", numother);
}
func("one", "two", "three", "four", "five", "six");