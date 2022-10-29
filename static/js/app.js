function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){
    background(0, 255, 0)
    drawFlower(window.innerWidth/2, window.innerHeight/2, 170)
    strokeWeight(6)

}

function drawFlower(x, y, d){
    circle(x, y, d)

}