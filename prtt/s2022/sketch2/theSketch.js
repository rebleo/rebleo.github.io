console.log("javascript")

function setup(){
    console.log("p5.js!!")
    createCanvas(windowWidth/2,windowHeight);
    background(255)
}

function draw(){
    fill(theVariable)
    noStroke()
    rect(mouseX, mouseY, 30,25);
}

// native js
let theVariable = "blue";