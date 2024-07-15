var Car = /** @class */ (function () {
    function Car(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Engine started');
    };
    return Car;
}());
var mycar = new Car('Ford', 'Fiesta', 2019);
mycar.start();
//# sourceMappingURL=main.js.map