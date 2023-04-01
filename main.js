img=""
status1=""
objects = [];
function preload()
{
    img = loadImage('fruitb.jpg');
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}