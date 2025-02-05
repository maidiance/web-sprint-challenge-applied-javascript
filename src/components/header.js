const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // create elements
  const headerDiv = document.createElement('div');
  const dateElem = document.createElement('span');
  const titleElem = document.createElement('h1');
  const tempElem = document.createElement('span');
  // structure elements
  headerDiv.appendChild(dateElem);
  headerDiv.appendChild(titleElem);
  headerDiv.appendChild(tempElem);
  // add classes
  headerDiv.classList.add('header');
  dateElem.classList.add('date');
  tempElem.classList.add('temp');
  // add content
  dateElem.textContent = date;
  titleElem.textContent = title;
  tempElem.textContent = temp;
  // return
  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);
  const headerElem = Header('Components', 'Dec 2 2021', '58F');
  entryPoint.appendChild(headerElem);
}

export { Header, headerAppender }
