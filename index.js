class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    };

    set diameter(value) {
        this.radius = value/2
    };

    get circumference() {
        return Math.PI * this.diameter 
    };

    set circumference(value) {
        this.diameter = value/Math.PI
    };

    get area() {
        return Math.PI * (this.radius**2)
    };

    set area(value) {
        let newArea = value/Math.PI;
        this.radius = Math.sqrt(newArea);
    };
}