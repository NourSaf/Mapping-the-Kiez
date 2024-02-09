var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('/csv/images.csv', 'csv', 'header');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  // textSize(10);
  showData();
}

function showData(){
  var count = table.getRowCount();
  var images = []; 

  for (var i=0; i<count; i++) {

      
    var subheadlineContent = table.getString(i,0);
    var imageContent = table.getString(i,1);
    var textContent = table.getString(i,3);

    var maindiv = document.createElement('div');
    maindiv.classList.add('maincontainer');
    var subdiv = document.createElement('div');
    subdiv.classList.add('subcontainer');

    
    var imagecontainer = document.createElement('div');
    imagecontainer.classList.add ('grid-item')
    
    
    var image = document.createElement('img');
    image.classList.add('imgs');
    image.src = imageContent + ".jpg"
    
    var subheadline = document.createElement('h3');
    subheadline.classList.add("gridItem");
    subheadline.innerHTML = subheadlineContent
    imagecontainer.appendChild(image);
    subdiv.appendChild(imagecontainer);
    subdiv.appendChild(subheadline);

    maindiv.appendChild(subdiv);
    document.getElementById('website').appendChild(maindiv);
    var imageUrl = table.getString(i, 1) + ".jpg";
    images.push(imageUrl); // Add image URL to array
    image.onclick = function() {
      openLightbox(this.src); // Pass the clicked image source to openLightbox
    };
  }

  function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.querySelector('.lightbox-img').src = src;
    startSlideshow(images, src); // Start slideshow from the clicked image
  }
  
}


function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Start slideshow
function startSlideshow(images, startSrc) {
  let index = images.indexOf(startSrc); // Find the index of the starting image
  function nextImage() {
    index = (index + 1) % images.length; // Cycle through the images array
    document.querySelector('.lightbox-img').src = images[index];
  }
  clearInterval(window.slideshowInterval); // Clear existing interval
  window.slideshowInterval = setInterval(nextImage, 500); // Change image every 2 seconds
}

// Ensure to clear the interval when lightbox is closed
function closeLightbox() {
  clearInterval(window.slideshowInterval); // Clear the slideshow interval
  document.getElementById('lightbox').style.display = 'none';
}