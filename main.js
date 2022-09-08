
var noseX=0;
var noseY=0;
var leftwristX=0;
var rightwristX=0;
var difference=0;

function modelLoaded(){
    console.log("PoseNet is initialized")
}
function setup(){
    video=createcapture(VIDEO)
    video.size(550,500)

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX + ", noseY= " + noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX - rightwristX);
}
}

function draw(){
    background("#969a97");
    
    fill("#f90093");
    textSize(difference);
    text('Mariya',50,400)
}
