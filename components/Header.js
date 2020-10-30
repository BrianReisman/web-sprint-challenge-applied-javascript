// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  //Create elements
  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const h1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  //wire element
  header.appendChild(dateSpan)
  header.appendChild(h1)
  header.appendChild(tempSpan)

  //get classy
  header.classList = 'header'
  dateSpan.classList = 'date'
  tempSpan.classList = 'temp'

  // return
  return header
}
// console.log(Header())
const DOMHeader = document.querySelector('div.header-container')
DOMHeader.appendChild(Header())
// console.log(DOMHeader)