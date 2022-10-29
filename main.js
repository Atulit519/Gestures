Webcam.set({
    width: 337,
    height: 292,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function take_photo(){
    Webcam.snap(function(hello){
        document.getElementById("result").innerHTML = "<img src='"+hello+"' id='snapshot'>";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W_6-WxNkj/model.json", modelLoaded)

function modelLoaded(){
    console.log("Model Loaded")
}