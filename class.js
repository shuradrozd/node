function Car(name) {
    this.name = name;
}

Car.prototype.logName = function() {
    console.log(this.name);
};


module.exports.carClass = Car;
//global.Car = Car;
