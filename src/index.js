import Point from './Point.class.js';

let A = new Point(2,2),
    B = new Point(1,1);

console.log("Point A: " + A.toString());
console.log("Point B: " + B.toString());
console.log(Point.calculateDistance(A, B));

