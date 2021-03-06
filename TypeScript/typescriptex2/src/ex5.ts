abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    toString():string {return `${this._color}`}
    get color():string {return this._color}
    set color(color:string) {this._color = color}
  }

  //const s = new Shape("blue");
  
class Circle extends Shape{
     _radius: number;

     constructor(color:string, radius: number) { 
        super(color);
        this._radius = radius;
    }

    get area(): number {
        return 3.14 * (this._radius*this._radius)
      }
    get perimeter(): number{
        return (2*this.radius) * 3.14
    }
    get radius():number {return this._radius}
    set radius(radius:number) {this._radius = radius}

}

const c = new Circle("blue", 5);
console.log(c.perimeter)
console.log(c.area)
c.color = "green"
console.log(c.color)

class Cylinder extends Circle{
    _height: number;

    constructor(color:string, radius: number, height : number) { 
       super(color,radius);
       this._height = height;
   }
   get area(): number {
    return (3.14 * 2) * this.radius * (this._height + this.radius)
  }

   get height():number {return this._height}
   set height(height:number) {this._height = height}

   getVolume(){
    return 3.14 * (this.radius*this.radius) * this._height
   }

   get perimeter(): number{
    throw new Error("Method not implemented.");
}

}

const cy = new Cylinder("blue", 5, 10);
console.log(cy.getVolume())
console.log(cy.area)
console.log(cy.perimeter)