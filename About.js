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