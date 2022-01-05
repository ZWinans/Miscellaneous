/*
* Author - Zach Winans
* Purpose - To allow a user to upload images of a specific size, and then have those
*           images displayed. Intended to later incorporate deletion and slideshow functionality
*/

const myImages = [];
let index = 0;
var flag = false;

// get elements
const img = document.getElementById('myImages');
const uploadMsg = document.getElementById('successMsg');

//Add button listeners
const button = document.getElementById('add');
button.addEventListener('click', update);

/*
PURPOSE: To get our file input from the uploader and add it to our images array/display it
*/
function update() {
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length === 1) {

    addImage(fileInput.files[0]);
    showImage();
    index++;
    
  } else {
    alert('No file selected. Select a file and try again.');
  }
  
}

/*
PURPOSE: To add the blob to the images album
*/
function addImage(blob) {
    let url = URL.createObjectURL(blob);
    myImages.push(url);
    uploadMsg.innerHTML += "<h3>Image added successfully!</h3>";
    setTimeout(function() { uploadMsg.innerHTML="" }, 1400);
    
}

/*
PURPOSE: To cycle through the slides based on if any of the arrows are selected
*/
function display(n) {

  if (n > 0) {index+=1}
  if (n < 0) {index-=1}

  if (index < 0) {index = myImages.length-1}
  if (index > myImages.length-1) {index = 0}

  img.src = myImages[index];

}

/*
PURPOSE: to display the last image in the images array
*/
function showImage() {
  img.src = myImages[myImages.length-1];
}

/*
PURPOSE: References a function from index.html, when an arrow is selected, pass +1 or -1 to this function
*/
function switchSlide(n) {
  
  if (flag == false && myImages.length > 0) {
    index--;
    flag = true;
  }

  if (myImages.length > 0) {
    display(n);
  }
  
}

/*
* PURPOSE: Pauses the slide show, TO BE IMPLEMENTED
*/
function pauseSlideshow() {
	playing = false;
	clearInterval(slideInterval);
}

/*
* PURPOSE: unpauses the slide show, TO BE IMPLEMENTED
*/
function playSlideshow() {
	playing = true;
	slideInterval = setInterval(showSlider, 2000);
}


