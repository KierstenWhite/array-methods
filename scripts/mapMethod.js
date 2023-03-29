import { getBusiness } from "./database.js";

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"

const businesses = getBusiness()

// map() Method - create a new array from calling a function for every array element; does not change the original array

/* Using map(), you extract the purchasing agent object
    from each business and store it in a new array */

// const variable = arrayNameToSortThrough.map(singleArrayObject => {
//     return singleArrayObject.specificElement
// })

const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outputContainer.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outputContainer.innerHTML += "<hr/>";
});

// // lightening exercise - use map to find agent name, company, and phone, printing it in the DOM

const buildAgentCard = businesses.map(singleBusiness => {
    outputContainer.innerHTML += `<h2>${singleBusiness.purchasingAgent.nameFirst} ${singleBusiness.purchasingAgent.nameLast}</h2>
    ${singleBusiness.companyName}<br>
    ${singleBusiness.phoneWork}`;
    outputContainer.innerHTML += "<hr/>";
})