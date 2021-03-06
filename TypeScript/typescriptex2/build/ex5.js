"use strict";
class Shape {
    constructor(color) {
        this._color = color;
    }
    toString() { return `${this._color}`; }
    get color() { return this._color; }
    set color(color) { this._color = color; }
}
//const s = new Shape("blue");
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get area() {
        return 3.14 * (this._radius * this._radius);
    }
    get perimeter() {
        return (2 * this.radius) * 3.14;
    }
    get radius() { return this._radius; }
    set radius(radius) { this._radius = radius; }
}
const c = new Circle("blue", 5);
console.log(c.perimeter);
console.log(c.area);
c.color = "green";
console.log(c.color);
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return (3.14 * 2) * this.radius * (this._height + this.radius);
    }
    get height() { return this._height; }
    set height(height) { this._height = height; }
    getVolume() {
        return 3.14 * (this.radius * this.radius) * this._height;
    }
    get perimeter() {
        throw new Error("Method not implemented.");
    }
}
const cy = new Cylinder("blue", 5, 10);
console.log(cy.getVolume());
console.log(cy.area);
console.log(cy.perimeter);
//# sourceMappingURL=ex5.js.map