Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'capture_img' src='"+ data_uri +"'/>"; 
    });

}

console.log('ml5 version', ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EzvO2gz5u/model.json", modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the predection is " + Prediction_1;

    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}
function check() {
    var img = document.getElementById("capture_img");
    Classifier.classify(img, gotResult);
}function modelLoaded(){
    console.log("modelLoaded");
}


function gotResult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_hands_name1").innerHTML = results[0].label;
        Prediction_1 = results[0].label;
        speak();
        if(results[0].label == "good"){
            document.getElementById("update_hand").innerHTML = "&#128077";
        }
        if(results[0].label == "perfect"){
            document.getElementById("update_hand").innerHTML = "&#128076";
        }
        if(results[0].label == "bad"){
            document.getElementById("update_hand").innerHTML = "&#128078";
        }
        }
}