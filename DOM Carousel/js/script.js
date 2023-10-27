const dots = document.querySelector(".dots");
const arrowPrev = document.querySelector(".prev");
const arrowNext = document.querySelector(".next");
const sliderImg = document.querySelector(".slider-img");
const sliderImages = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  // "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
];

let currentIndex = 0;

function showDots() {
  sliderImages.forEach((sliderImage, index) => {
    let newDots = document.createElement("div");
    if (index === 0) {
      newDots.classList.add("dot", "active");
    } else {
      newDots.classList.add("dot");
    }
    newDots.setAttribute("onclick", `getIndex(${index})`);
    dots.appendChild(newDots);
  });
}

function getIndex(indexNumber) {
  currentIndex = indexNumber;
  sliderImg.src = sliderImages[indexNumber];
  showActiveDot(indexNumber);
}

arrowPrev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex -= 1;
    sliderImg.src = sliderImages[currentIndex];
    showActiveDot(currentIndex);
  }
});
arrowNext.addEventListener("click", function () {
  console.log(currentIndex);
  if (currentIndex < sliderImages.length - 1) {
    currentIndex += 1;
    console.log(currentIndex);
    sliderImg.src = sliderImages[currentIndex];
    showActiveDot(currentIndex);
  }
});

function showActiveDot(indexNumber) {
  const dots = document.querySelectorAll(".dot");
  const activeDot = document.querySelector(".active");

  if (indexNumber < sliderImages.length) {
    let isActive = dots[indexNumber].getAttribute("class").includes("active");
    if (!isActive) {
      dots[indexNumber].classList.add("active");
      activeDot.classList.remove("active");
    }
  }
}

showDots();

// function autoPlay() {
//   setInterval(chnagingImage, 1000);

//   function chnagingImage() {
//     currentIndex++;
//     if (currentIndex < sliderImages.length) {
//       sliderImg.src = sliderImages[currentIndex];
//     }
//     showActiveDot(currentIndex);
//     if (currentIndex > sliderImages.length) {
//       currentIndex = -1;
//     }
//   }
// }

// autoPlay();
