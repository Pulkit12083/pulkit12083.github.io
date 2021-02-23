var counter = 0;

var img = [
    "img_made/perchedonatree.jpeg",
    "img_made/20210126_131522.jpg",
    "img_made/20210126_131525.jpg",
    "img_made/IMG_20210123_180946.jpg",
    "img_made/hand.jpeg",
    "img_made/photo_2020-10-04_20-41-04.jpg",
    "img_made/photo_2020-05-05_03.15.59.jpeg",
    "img_made/imongrass.jpeg",
    "img_made/photo_2020-10-04_22-16-16.jpg",
    "img_made/photo_2020-10-04_22-21-01.jpg",
    "img_made/photo_2020-10-04_22-21-02.jpg"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function imageClicked()
{
//    counter=getRandomInt(img.length)
//    if (document.images["introPicture"].src.endsWith(img[counter])) {
//	counter=counter+1;
    //    }
    counter=counter+1;
    document.images["introPicture"].src = img[counter%img.length];
}
