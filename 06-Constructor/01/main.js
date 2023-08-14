


function Calculator (x,y){
    this.x = x
    this.y = y
    this.read = function () {
        return prompt(this.x)
    }
    this.sum = function(){
        return x+y
    } 
    this.mul = function(){
        return x*y
    } 
}
        
// Cal.Cal();
//   console.log(Cal);
//   console.log(Cal.sum());
//   console.log(Cal.mul());

//   alert(Cal.sum());
//   alert(Cal.mul());

  const number1 = new Calculator("Enter x")
  const number2 = new Calculator("Enter y")
  console.log(`x = ${x} y= ${y}`);