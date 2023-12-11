var targetCounts = document.querySelectorAll(".count");
var duration = 1000; 
var interval = 10;  
var scrollTriggered = false;

const clientsInner = document.querySelector(".clients-inner");
const clientsLogos = clientsInner.querySelectorAll(".clients-logo");

let currentLogoIndex = clientsLogos.length - 1;

function createAnimation() {
  clientsInner.insertBefore(clientsLogos[currentLogoIndex], clientsLogos[0]);
  currentLogoIndex = (currentLogoIndex === 0) ? clientsLogos.length - 1 : currentLogoIndex - 1;
}

setInterval(() => {
  createAnimation();
}, 3000); 


window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");

  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#008fff 0%, #008fff ${scrollValue}%, #c0c0ff ${scrollValue}%, #c0c0ff 100%)`;

  if (pos > 100) {
    scrollProgress.style.opacity = 1;
  } else {
    scrollProgress.style.opacity = 0;
  }

  progressValue.addEventListener("click", scrollToTop);
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.onscroll = scrollPercentage;


document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    document.querySelector(".preloader-bg").style.display = "none";
    document.querySelector("#progress").style.opacity = "0";
  }
};

///////////////////////////////////
const galleryImages = document.querySelectorAll(".gallery-img img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentImageIndex = 0;

function openModal(index) {
    modalImage.src = galleryImages[index].src;
    modal.style.display = "block";
    currentImageIndex = index;
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        openModal(index);
        console.log(image);
    });
});

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    modalImage.src = galleryImages[currentImageIndex].src;
}

document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
        if (e.key === "ArrowLeft") {
            changeImage(-1);
        } else if (e.key === "ArrowRight") {
            changeImage(1);
        }
    }
});

const videoButtons = document.querySelectorAll(".video-gallery-button");
const customVideoModal = document.getElementById("customVideoModal");
const customVideoFrame = document.getElementById("customVideoFrame");
const customCloseModalBtn = document.querySelector(".custom-close-modal");

function openCustomVideoModal(videoUrl) {
    customVideoFrame.src = videoUrl;
    customVideoModal.style.display = "block";
}

customCloseModalBtn.addEventListener("click", () => {
    customVideoFrame.src = "";
    customVideoModal.style.display = "none";
});

videoButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const videoUrl = button.getAttribute("href");
        openCustomVideoModal(videoUrl);
    });
});


