function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
     video.position(150,150)
   
     canvas = createCanvas(550,500)
    canvas.position(screen.width/2,150);
}

function draw(){
    background("aliceblue");
}