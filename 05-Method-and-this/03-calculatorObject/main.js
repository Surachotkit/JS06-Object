let calculator = {
    read() {
        this.x = +prompt("Enter num1"); //line 9 : calculator.x = +prompt()
        this.y = +prompt("Enter num2"); //calculator.y = +prompt()
      },
    sum(){
        return this.x + this.y
    },
    mul(){
        return this.x * this.y
    }
}
  
  console.log(calculator);
  
  calculator.read();
  console.log(calculator);
  console.log(calculator.sum());
  console.log(calculator.mul());

  alert(calculator.sum());
  alert(calculator.mul());