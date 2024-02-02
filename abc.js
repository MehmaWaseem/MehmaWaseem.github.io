var imageIndex1 = 0;
var imageIndex2=0;
displayimages1();
displayimages2();

function displayimages1(){
  var i;
  var images = document.getElementsByClassName("imageslider1");
  for(i=0;i<images.length;i++)
  {
    images[i].style.display = "none";
  }
  imageIndex1++ ;
  if (imageIndex1 > images.length) {imageIndex1 = 1}
  images[imageIndex1-1].style.display= " initial";
  setTimeout(displayimages1, 3000);
}

function displayimages2(){
  var i;
  var images = document.getElementsByClassName("imageslider2");
  for(i=0;i<images.length;i++)
  {
    images[i].style.display = "none";
  }
  imageIndex2++ ;
  if (imageIndex2 > images.length) {imageIndex2 = 1}
  images[imageIndex2-1].style.display= " initial";
  setTimeout(displayimages2, 3000);
}