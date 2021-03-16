var counter = 0;

var img = [
    "img_made/IMG_20210218_185110.jpg",
    "img_made/IMG_20201210_202445.jpg",
    "img_made/IMG_20210130_142818.jpg",
    "img_made/IMG_20210130_142748.jpg",
    "img_made/IMG_20201105_154514.jpg",
    "img_made/IMG_20210126_135718.jpg",
    "img_made/IMG_20210130_143204.jpg",
    "img_made/IMG_20210126_135830.jpg",
    "img_made/IMG_20210126_135404.jpg",
    "img_made/IMG_20210127_214357.jpg",
    "img_made/IMG_20210226_110605.jpg",
    "img_made/IMG_20210226_110624.jpg",
    "img_made/IMG_20210226_110628.jpg",
    "img_made/IMG_20210126_135412.jpg",
    "img_made/IMG_20210127_214426.jpg",
    "img_made/IMG_20210126_135705.jpg",
    "img_made/IMG_20210130_143012.jpg",
    "img_made/IMG_20210130_142843.jpg",
    "img_made/IMG_20210130_142752.jpg",
    "img_made/IMG_20210130_142809.jpg"    
];


var recycleSound = new Audio("audio/W98Recycle.mp3");

function recycleBinClicked()
{
    recycleSound.currentTime=0;
    recycleSound.play();
    counter=counter+1;
    document.body.style.backgroundImage = "url("+img[counter%img.length]+") ";  //changing bg image
}

function toggleTrashyText()
{
    var trashyTextDivDoc = document.getElementById("trashyTextDiv");
    if (trashyTextDivDoc.style.display === "none") {
	trashyTextDivDoc.style.display = "block";
    }
    else {
	trashyTextDivDoc.style.display = "none";
    }
}
