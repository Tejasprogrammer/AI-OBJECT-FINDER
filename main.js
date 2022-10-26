status="";

function setup()
{
    canvas=createCanvas(480,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

input=document.getElementById("object_input").value;

}

function modelloaded()
{
    console.log("ModelLoaded");
    status=true;
}

function draw()
{
    image(video,0,0, 480,350);
}