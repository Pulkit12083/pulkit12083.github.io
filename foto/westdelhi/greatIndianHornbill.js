var rotate = false;
setbackground();

function setbackground(){
    window.setTimeout( "setbackground()", 3500);
    newImage = rotate ? 'img/IMG_20210627_193123.jpg' : 'img/IMG_20210627_192922.jpg' ;
    rotate = !rotate;
    document.images["hornbillPicture"].src = newImage;
    console.log("changed")
}

