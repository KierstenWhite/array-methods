// All exercises are on this page. Separate .js files have been split up to include notes and extra examples.

import { getBusiness } from "./database.js";

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"

const businesses = getBusiness()

// forEach()

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

// filter() Method

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

// Filter Lightning Exercise #1

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

// map() Method

const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outputContainer.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outputContainer.innerHTML += "<hr/>";
});

// Lightening exercise

const buildAgentCard = businesses.map(singleBusiness => {
    outputContainer.innerHTML += `<h2>${singleBusiness.purchasingAgent.nameFirst} ${singleBusiness.purchasingAgent.nameLast}</h2>
    ${singleBusiness.companyName}<br>
    ${singleBusiness.phoneWork}`;
    outputContainer.innerHTML += "<hr/>";
})

//find() Method

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent =>{
        if (keyPressEvent.charCode === 13){ 
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outputContainer.innerHTML = `
            <h2>
            ${foundBusiness.companyName}
            </h2>
            <section>
            ${foundBusiness.addressFullStreet}
            
            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
            `;
        }
    });


//find() Lightening Exercise One

    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundPurchasingAgent = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
            );

            outputContainer.innerHTML = `
                <h2>
                ${foundPurchasingAgent.companyName} - ${foundPurchasingAgent.purchasingAgent.nameFirst} ${foundPurchasingAgent.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundPurchasingAgent.addressFullStreet}

                </section>
                <section>
                ${foundPurchasingAgent.addressCity},
                ${foundPurchasingAgent.addressStateCode}
                ${foundPurchasingAgent.addressZipCode}
                </section>
            `;
        }
    });
    

// reduce() Method

// /* CALCULATE ORDER SUMMARY */
businesses.forEach(business => {
    let totalOrders = business.orders.reduce((currentTotal, nextValue) => currentTotal += nextValue)
    
console.log(totalOrders)
})

// Lightning Exercise 1 - Use the reduce method on the following array to determine how much total rain fell last month.

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((finalTotal, singleRainfall) => finalTotal += singleRainfall)

console.log(totalRainfall)

// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((allWords, individualWord) => allWords += ' ' + individualWord)

console.log(sentence)