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

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tXm60g-vj/model.json',modelloaded);

function modelloaded()
{
    console.log('model is loaded');
}

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results)
{
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("name1").innerHTML=results[0].label;
    document.getElementById("name2").innerHTML=results[1].label;
    predict_1=results[0].label;
    predict_2=results[1].label;
   
    if(results[0].label=="amazing")
    {
        document.getElementById("emoji1").innerHTML="&#128076;";
    }
    if(results[0].label=="best")
    {
        document.getElementById("emoji1").innerHTML="&#128077;";
    }
    if(results[0].label=="victory")
    {
        document.getElementById("emoji1").innerHTML="&#9996;";
    }
   
    

}
}