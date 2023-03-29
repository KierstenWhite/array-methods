import { getBusiness } from "./database.js";

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"

const businesses = getBusiness()

// forEach() - calls each function once for each element in an array, in order. it's just a loop.

businesses.forEach(business => {
    outputContainer.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
          ${business.addressFullStreet}
      </section>
      <section>
          ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
    `
    outputContainer.innerHTML += "<hr/>"
  });

  // for loop example of what forEach() does

//   for( let i = 0; i < businesses.length; i++){
//     console.log(businesses[i])
//   }