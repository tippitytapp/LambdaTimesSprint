// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

console.log(cardsContainer);
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
const topics = Object.entries(response.data.articles);
topics.forEach(subject => {
    subject[1].forEach(data => {
        const articleCard = createCard(data);
        cardsContainer.append(articleCard);
    });
})
// console.log(response.data.articles)
})
.catch(err => {
    console.log(err, "error received")
});

function createCard(arr) {
    const card = document.createElement("div");
    card.classList.add("card");
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = arr.headline ;
    const author = document.createElement("div");
    author.classList.add("author");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const image = document.createElement("img");
    image.src = arr.authorPhoto;
    const authorsName = document.createElement("span");
    authorsName.textContent = `By ${arr.authorName}`;

    card.append(headline, author);
    author.append(imgContainer, authorsName);
    imgContainer.append(image)

return card;

}