


function Calculator (){
  
    this.read = function () {
        this.x = +prompt("Enter x")
        this.y = +prompt("Enter y")
    
    }
    this.sum = function () {
   
        console.log(this.x + this.y);
    }
    this.mul = function (){
 
        console.log(this.x * this.y);
    }
}



    const number = new Calculator()
    console.log(number);
    number.read()
    number.sum()
    number.mul()
 