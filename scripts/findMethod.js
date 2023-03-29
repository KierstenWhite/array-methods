import { getBusiness } from "./database.js";

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"

const businesses = getBusiness()

// find() Method - iterates an array and once it finds one item, passes the condition you provide, and returns the item to you

// Simple Example of find()
const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)

document // This function makes your refresh unless you comment out the find and filter methods above. It also only choose the first match if you type in a letter that has multiple businesses associated with it (like just "C")
    .querySelector("#companySearch") /* Finds the html element to target; in this case, the typeable box */
    .addEventListener("keypress", keyPressEvent =>{ /* Listening for a key press, in this case, hitting enter, as stated on the below line */
        if (keyPressEvent.charCode === 13){  /* WHEN USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find( /* Once you hit enter, if what you typed into the box matches any Company Name, it will output what is put below */
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


// find() Lightening Exercise One - when searching purchasing Agents first name, show purchasing Agent (also only works if things are commented out above)

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

// find() Lightening Exercise Two - when searching purchasing Agents first name OR last name, show purchasing Agent (also only works if things are commented out above)
// find only does one element, so use filter - did not finish this exercise

    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            // const foundPurchasingAgent = businesses.filter(
            //     let agentName = false

            //     if (keyPressEvent.target.value === businesses.nameFirst || businesses.nameLast ) {
                    
            //         agentName = true
            // }
            //     return agentName
            // );

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
    
