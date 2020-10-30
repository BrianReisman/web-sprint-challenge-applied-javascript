// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
import banana from 'axios'

const cardContainer = document.querySelector('.cards-container') //exists in HTML
    // console.log(cardContainer); //returns what I'd expect

banana
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((result) => {
    const data = result.data.articles;
    const bootstrap = result.data.articles.bootstrap; //array of objects with properties
    bootstrap.forEach(article => {  //taking the bootstrap ARRAY and for each OBJECT in the array put it through the articleMaker function (it is taking one object) and within the function I will syphen off whichever properties I need
      let post = articleMaker(article); //* I needed to not just call the function but assign it's result its product to a variable before appending
      cardContainer.appendChild(post);
      // cardContainer.appendChild(articleMaker(article)); //*<<<This works
    })
    const javascript = result.data.articles.javascript
    javascript.forEach(article => {
      cardContainer.appendChild(articleMaker(article)); //*<<<This works
    })
    const jquery = result.data.articles.jquery
    jquery.forEach(article => {
      cardContainer.appendChild(articleMaker(article));`` //*<<<This works
    })
    const node = result.data.articles.node
    node.forEach(article => {
      cardContainer.appendChild(articleMaker(article)); //*<<<This works
    })
    const technology = result.data.articles.technology
    technology.forEach(article => {
      cardContainer.appendChild(articleMaker(article)); //*<<<This works
    })

  }).catch((err) => {
    console.log(err)
    debugger
  });
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:

function articleMaker(singleObj){ 
  //create + classes
  const card = document.createElement('div');
  card.classList = 'card';
  const headline = document.createElement('div');
  headline.classList = 'headline';
  const author = document.createElement('div');
  author.classList = 'author';
  const imgContainer = document.createElement('div');
  imgContainer.classList = 'img-container';
  const img = document.createElement('img'); //src takes from elsewhere
  const span = document.createElement('span');
  //wiring them up
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);
  //text content + src for img
  headline.textContent = singleObj.headline; //drill down
  span.textContent = `By: ${singleObj.authorName}`; //drill down
  img.setAttribute('src', `${singleObj.authorPhoto}`); //drill down

  //event listener
  card.addEventListener('click', function(e){
    console.log(headline.textContent) //*<<<make this the headline text of the article
  });

  return card;
}
// console.log(articleMaker());

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
