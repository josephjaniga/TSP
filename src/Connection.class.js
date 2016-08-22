
import Point from './Point.class.js';

export default class Connection {

    constructor(A, B) {
        this.A = A;
        this.B = B;
        this.distance = Point.calculateDistance(A, B);
    }

};