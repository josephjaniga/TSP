
export default class Point {

    constructor(x=0,y=0) {
      this.x = x;
      this.y = y;
    }

    static calculateDistance(A, B) {
        return Math.sqrt( Math.pow(B.x-A.x, 2) + Math.pow(B.y-A.y, 2) );
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }

};