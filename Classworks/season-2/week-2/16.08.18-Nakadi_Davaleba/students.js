const simpleStatistics = require('simple-statistics');
module.exports = class Student {
    constructor (id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
        this.grades = [];
    }
    addGrade(grade){
        this.grades.push(grade);
    }
    computeGradesAverage(){
        return simpleStatistics.sum(this.grades) / this.grades.length;
    }
}