function Accumulator() {
    this.read = function(){
        this.currentValue = 0
        this.startingValue = +prompt("Enter value")
        this.currentValue = this.currentValue + this.startingValue
    }
    this.show = function(){
        alert(this.currentValue)
    }
}

const newValue = new Accumulator()
console.log(newValue);
newValue.read()
newValue.show()

