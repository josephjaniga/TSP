import Mapper from './Mapper.class.js';
import Point from './Point.class.js';

document.addEventListener('DOMContentLoaded', ()=>{

    let pointsArray = [];

    for(let i=0; i<22; i++){
        pointsArray.push(new Point(randInt(), randInt()));
    }

    let mpr = new Mapper();

    mpr.addPoints(pointsArray);

    setInterval(()=>{
        mpr.itty.next();
    }, 200);

}, false);


function randInt(){
    return Math.floor(Math.random()*500);
}