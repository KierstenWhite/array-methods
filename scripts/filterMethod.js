import { getBusiness } from "./database.js";

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"

const businesses = getBusiness()

// filter() Method - looks at each object in the array to see if it meets a condition and then returns it

let newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
    
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
    
})

newYorkBusinesses.forEach(business => {
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

// Lightning exercise - filter out just manufacturing businesses

let manufacturingBusinesses = businesses.filter(business => {
    let manufacturing = false

    if (business.companyIndustry === "Manufacturing") {
        manufacturing = true
    }

    return manufacturing
})

manufacturingBusinesses.forEach(business => {
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