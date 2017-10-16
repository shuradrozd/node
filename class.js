function Car(name) {
    this.name = name;
}

Car.prototype.logName = function() {
    console.log(this.name);
};

const str = 'Hello Alex';

module.exports = {
    str: str
}