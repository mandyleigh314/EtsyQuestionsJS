// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sum = 0
  for (var i = 0; i < data.length; i++) {
    sum = (sum + data[i].price)
  }
  let averagePrice = (sum / data.length).toFixed(2)

  console.log("The average price is $" + averagePrice)

}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  for (var i = 0; i < data.length; i++) {
    let price2 = data[i].price
    if (price2 > 13.99 && price2 < 18.01){
      console.log(data[i].title)
    }
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
   for (var i = 0; i < data.length; i++) {
     if (data[i].currency_code === "GBP") {
       console.log(data[i].title + " costs " + data[i].price + " pounds")
     }
   }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  for (var i = 0; i < data.length; i++) {
    let materials1 = data[i].materials
    for (var k = 0; k < materials1.length; k++) {
      if (materials1[k] === "wood") {
        console.log(data[i].title)
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for (var i = 0; i < data.length; i++) {
      if (data[i].materials.length >= 8) {
      console.log(data[i].title, data[i].materials.length, data[i].materials)
    }
  }
}


// 6: How many items were made by their sellers?
function question6 () {
  let count = 0
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did")
    count = (count + 1)
    }
    console.log(count + " items were made by their sellers.")
  }
