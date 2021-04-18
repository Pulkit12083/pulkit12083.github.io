var rotate = false;
setbackground();

function setbackground(){
  window.setTimeout( "setbackground()", 1000);
  newImage = rotate ? 'url(img_made/vlcsnap-2021-04-18-18h59m17s658.jpg)' : 'url(img_made/vlcsnap-2021-04-18-18h59m20s393.jpg)';
    rotate = !rotate;
    document.body.style.backgroundImage = newImage;
}

