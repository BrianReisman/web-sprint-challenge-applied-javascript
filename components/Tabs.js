// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//import
import banana from "axios"

//constructor
const tabMaker = function(content){
  const tab = document.createElement('div')  //create the element
  tab.classList = 'tab'  //assign it the class
  tab.textContent = content  //set its text content
  return tab  //return out of the function
  }
// console.log(tabMaker('hello')) //returns as expected: <div class=​"tab">​hello​</div>​

//api???
banana
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then((yay) => { //then with the result I expect
    const theGoods = yay.data.topics // drill down into the data(an ojbect) and take the property that is the array I want to deal with(topics) and call that theGoods <<Array.from(yay.data.topics)>>
    // console.log(theGoods)
    const DOMdiv = document.querySelector('.topics') //*this needed to be outside of the forEach() */
//    console.log(DOMdiv)
    theGoods.forEach(topic => { //now in that var theGoods which contains an array, for each topic in the array of topics, 
      tabMaker(topic) //I want to pass each as an argument into the component function I made called tabMaker
//      console.log(tabMaker(topic)) //what do I get? 5 different <div class="tab">node.js</div>. Good!
      // DOMdiv.appendChild(topic)


      // DOMdiv.appendChild(topic)
    })
    // console.log(DOMdiv)
    // console.log(theGoods)

  }).catch((boo) => {
    
    console.log(boo)
    debugger
  });