img="";
Status="";
objects=[];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml="Status:Detecting Objects";
}
function draw(){
    image(video,0,0,380,380);
    if(Status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
        for(i = 0; 1<objects.lenght;i++){
            document.getElementById("status").innerHTML="status:Object Detected";
            document.getElementById("number_of_object"),innerHTML="Number of object detected are :"+objects.lenght
            fill(r,g,b);
            fill("#FF0000");
            percent=floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x,object[i].y,object[i].width, object[i].height);
        }

    }
   /* fill("#FF0000");
    text("dog",45,80);
    noFill();
    stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
text("cat",311,80);
noFill();
stroke("#FF0000");
rect(300,60,100,350);*/
}
function modelLoaded(){
    console.log("Model Loaded!")
    Status=true;
}
function gotResult(error,results){
    if(error){
console.log(error);
    }
    else{console.log(results);
        object=results;
    }
    
}