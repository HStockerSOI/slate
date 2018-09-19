// Get the imgModel
var imgModel = document.getElementById('myimgModel');

// Get the image and insert it inside the imgModel - use its "alt" text as a caption
var img = document.getElementById('myImg');
var imgModelImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    imgModel.style.display = "block";
    imgModelImg.src = this.src;
}

// Get the <span> element that closes the imgModel
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the imgModel
span.onclick = function() { 
  imgModel.style.display = "none";
}