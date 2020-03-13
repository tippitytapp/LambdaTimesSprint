/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(createCarousel());
console.log(carouselContainer);
function createCarousel(){
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add("carousel");
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = "<";
  const mountains = document.createElement("img");
  mountains.src = "./assets/carousel/mountains.jpeg";
  mountains.classList.add("current-img");
  mountains.classList.add("first-img")
  const computer = document.createElement("img");
  computer.src = "./assets/carousel/computer.jpeg";
  const trees = document.createElement("img");
  trees.src = "./assets/carousel/trees.jpeg";
  const turntable = document.createElement("img");
  turntable.src = "./assets/carousel/turntable.jpeg";
  turntable.classList.add("last-img")
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ">";

  rightButton.addEventListener('click', e => {
    const currentImage = document.querySelector(".current-img");
    // const nextImage = currentImage.nextElementSibling;
    const firstImage = mountains;
    if (currentImage === turntable){
      let nextImage = firstImage
    } else { nextImage = currentImage.nextElementSibling
      }
    // if (currentImage !== turntable){
      currentImage.classList.remove("current-img");
      nextImage.classList.add("current-img");
    // } else if (currentImage === turntable) {
    //   rightButton.style.display = "none"
    // } 

  })
  leftButton.addEventListener('click', e => {
    const currentImage = document.querySelector(".current-img");
    const lastImage = turntable;
    // if (currentImage !== mountains){
      if (currentImage === mountains){
        let previousImage = lastImage
      } else { previousImage = currentImage.previousElementSibling;
        }
    currentImage.classList.remove("current-img");
    previousImage.classList.add("current-img");
    // } else if (currentImage === mountains) {
    //   leftButton.style.display = "none"
    // }
})
  carouselDiv.append(leftButton, mountains, computer, trees, turntable, rightButton);
return carouselDiv;
}