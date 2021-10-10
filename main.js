predict_1="";
predict_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach('#cam');
function takepic()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });

}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('',modelloaded);
function modelloaded()
{
    console.log('model is loaded');
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_1="the first prediction is"+predict_1;
    speak_2=" and the second prediction is"+predict_2;
    var utterThis=new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterThis);
}