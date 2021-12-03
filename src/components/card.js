import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // create elements
  const cardElem = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgDiv = document.createElement('div');
  const imgElem = document.createElement('img');
  const authorElem = document.createElement('span');

  // add classes
  cardElem.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgDiv.classList.add('img-container');
  
  // add content
  headline.textContent = article.headline;
  imgElem.src = article.authorPhoto;
  authorElem.textContent = article.authorName;

  // structure elements
  cardElem.appendChild(headline);
  cardElem.appendChild(author);
  author.appendChild(imgDiv);
  imgDiv.appendChild(imgElem);
  author.appendChild(authorElem);

  // return
  return cardElem;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const entryPoint = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
    .then(response => {
      console.log(response);
      const articles = response.data.articles;
      for (const item in articles){
        // console.log(`${item}`);
        for (let i = 0; i < articles[item].length; i++){
          // console.log(articles[item]);
          const articleElem = {
            headline: articles[item][i].headline,
            authorPhoto: articles[item][i].authorPhoto,
            authorName: articles[item][i].authorName,
          };
          const cardElem = Card(articleElem);
          entryPoint.appendChild(cardElem);
        }
      }
    })
    .catch(error => {
      console.error(error);
    })
}

export { Card, cardAppender }
