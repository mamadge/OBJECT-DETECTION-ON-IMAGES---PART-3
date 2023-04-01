status1 = "";
img="";
objects = [];
function preload()
{
    img = loadImage('fruitb.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML="status: detecting objects";
    od = ml5.objectDetector("cocossd", modelloaded);
}
function draw()
{
    image(img, 0, 0, 640, 420);
    if(status1 != ""){
        for (i = 0; i < objects.length; i++)
        {
            fill(red);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(red);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelloaded()
{
    console.log("ModelLoaded!");
    status1 = true;
}
function gotResult(error, results)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
