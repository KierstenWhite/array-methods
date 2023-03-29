// reduce() Method

// Example of finding the order amount for each company using forEach() which can work but requires you to declare a variable with a zero value and then invoke forEach() method.
// Reduce() combines the above steps.

businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = 0
    business.orders.forEach(order => totalOrders += order)


    outputContainer.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outputContainer.innerHTML += "<hr/>";
});

//One of the main purposes of the reduce method is to iterate over a collection, do some logic with each item, and have one, single result at the end.

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