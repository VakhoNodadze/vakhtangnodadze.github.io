module.exports = class Circle {
    constructor (radious){
        this.radious = radious;
    }

    getArea(){
        return Math.PI * Math.pow(this.radious, 2);
    }
}