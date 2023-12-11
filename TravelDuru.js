var targetCounts = document.querySelectorAll(".count");
var duration = 1000; 
var interval = 10;  
var scrollTriggered = false;

window.addEventListener("scroll", function () {
  if (!scrollTriggered && isScrolledIntoView(document.querySelector(".numbers-sc"))) {
    scrollTriggered = true;

    targetCounts.forEach(targetCount => {
      var targetNumber = parseInt(targetCount.textContent);
      var increment = (targetNumber / duration) * interval;
      var currentNumber = 0;

      var updateCount = () => {
        if (currentNumber < targetNumber) {
          currentNumber += increment;
          targetCount.textContent = Math.ceil(currentNumber);
          setTimeout(updateCount, interval);
        } else {
          targetCount.textContent = targetNumber;
        }
      };

      updateCount();
    });
  }
});

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}


const items = document.querySelectorAll('.all-pics .item');
const prevButton = document.querySelector('.owl-prev');
const nextButton = document.querySelector('.owl-next');
let currentIndex = 0;

function showItems() {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }

  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (items[i]) {
      items[i].classList.add('active');
    }
  }
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showItems();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 3) {
    currentIndex++;
    showItems();
  }
});

showItems();

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