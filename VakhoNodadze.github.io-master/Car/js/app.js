function Car(){
    this.setName = function(carName){
        this.name = carName
        return this
    }
    this.setColor = function(carColor){
        this.color = carColor
        return this
    }
    this.setBrand = function(carBrand){
        this.brand = carBrand
        return this
    }
    this.save = function(){
        console.log(`Car Name: ${this.name}, Color: ${this.color}, Brand: ${this.brand}`)
    }
}

car = new Car()
car.setName('C230')
car.setColor('White')
car.setBrand('Mercedes')
car.save()
