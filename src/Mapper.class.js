
export default class Mapper {

    constructor() {

        this.canvas = document.createElement("canvas");
        this.canvas.id = "map";
        document.body.appendChild(this.canvas);
        this.canvas.style.background = "#cccccc";
        this.canvas.width = 500;
        this.canvas.height = 500;

        this.ctx = this.canvas.getContext("2d");

    }

    addPoints(pointsArray){
        this.points = pointsArray;
        this.draw();

        this.itty = (function* genny(scope){
            let i=1,
                pointsTotal = scope.points.length;
            while( i < pointsTotal ){
                let A, B;
                A = scope.points[i-1];
                B = scope.points[i];
                scope.ctx.beginPath();
                scope.ctx.moveTo(A.x, A.y);
                scope.ctx.lineTo(B.x, B.y);
                scope.ctx.strokeStyle = '#ff0000';
                scope.ctx.stroke();
                i++;
                console.log(i);
                yield;
                if ( i == pointsTotal ){
                    scope.draw();
                    i=1;
                }
            }
            yield;
        })(this);
    }

    draw(){
        this.clearCanvas();
        //this.drawConnections();
        this.drawPoints();
    }

    drawPoints(){
        for(let i=0; i< this.points.length; i++){
            let p = this.points[i];
            this.ctx.fillRect(p.x-2, p.y-2, 5, 5);
        }
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawConnections(){
        let i=1;
        while( i < this.points.length ){
            let A, B;
            A = this.points[i-1];
            B = this.points[i];
            this.ctx.beginPath();
            this.ctx.moveTo(A.x, A.y);
            this.ctx.lineTo(B.x, B.y);
            this.ctx.strokeStyle = '#ff0000';
            this.ctx.stroke();
            i++;
        }
    }

};