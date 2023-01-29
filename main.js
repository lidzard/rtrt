status = "";
function preload()
{

}
function setup()
{
    canvas = createCanvas(500, 400);
    canvas.position(470, 350);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw()
{
    image(cam, 0, 0 , 500, 400);
}
function Start()
{
   objectDetector =  ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("start3").innerHTML = "Status: Detecting Objects";
   input = document.getElementById("input").value;
}
function modelLoaded()
{
   console.log("model Is Loaded"); 
   status = true;
}