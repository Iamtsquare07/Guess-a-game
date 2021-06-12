//This is my first Object in JavaScript: The objects are created during my JavaScript Lessons

//This is an object
var premierLeague = {
    Teams: {
        Arsenal: {
            stadium: 'Emirates studium',
            Managers: {
                HeadCoach: {
                    Name: 'Mikel Arteta',
                    Country: 'Spain',
                },
            },
            Players: ['Rúnar Alex Rúnarsson', 'Dejan Iliev', 'Gabriel', 'Rob Holding', 'Calum Chambers', 'Pablo Marí', 'David Luiz', 'Kieran Tierney', 'Héctor Bellerín', 'Cédric Soares', 'Thomas Partey', 'Granit Xhaka', 'Mohamed Elneny', 'Dani Ceballos', 'Martin Ødegaard']
        },
        AstonVilla: {

        },
        Brighton: {

        },
        Burnley: {

        },
        Chelsea: {

        },
        CrystalPalace: {

        },
        Everton: {

        },
        Fulham: {

        },
        LeedsUnited: {

        },
        Leicester: {

        },
        Liverpool: {
            
        },
        ManchesterCity: {

        },
        ManchesterUnited: {

        },
        Newcastle: {

        },
        SheffieldUnited: {

        },
        Southampton: {

        },
        Tottenham: {
            
        },
        Westbrom: {

        },
        Westham: {

        },
        Wolves: {
            
        },
    },
};

//calling an objects property
console.log(premierLeague.Teams['Arsenal'].Managers.HeadCoach)

//Manipulating the Docucumt with JS
document.getElementById('JSinject').innerHTML = 'This is JavaScript';


//Randon Number Function
let getNum = (val) => {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  const num = getNum(10);
  
  console.log(getNum());
  
  //Object with a getter
  const robot = {
    //The underscore _ before a value tells developers that the value is not intended to be changed
      _model: '1E78V2',
      _energyLevel: num,
  
      get energyLevel() {
        if (typeof this._energyLevel === 'number'){
          return `My current energy level is ${this._energyLevel}`
        } else {
          return 'System malfunction: cannot retrieve energy level'
        }
      }
    };
    
    console.log(robot.energyLevel);
  

    //Factory Function
function player(name, age, country, city, isCoder){
  return {
  name,
  age,
  country,
  city,
  isCoder
  }
};

//Adding values to the factory function
const thePlayer = player('Victor', 22, 'Nigeria', 'Asaba', true);

console.log(thePlayer.name)

//JavaScript Classese
class Games {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 //Static is a single use method in a class
  static generateName() {
    const names = ['PlayStation', 'Xbox', 'FIFA', 'PES', 'WE'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

console.log(Games.generateName())


// A simple program that randomly guess what the visitor likes

const randomNum = Math.floor(Math.random() * 5) * 2000;

const sportGames = ['FIFA', 'PES', 'KONAMI', 'WINNING ELEVEN'];
const gameSelector = Math.floor(Math.random() * 5);
const selectGame = sportGames[gameSelector];



console.log(gameSelector)

const delayedMessage = () => {
    var visitor = document.getElementById("visitorName").value;
    document.getElementById("visitorWN").innerHTML = "Thanks for checking in " + visitor;
  if (1 != 2) {
    document.getElementById("fOut").innerHTML = `<b>It looks like you are an excellent player of ${selectGame} game ${visitor}</b>`;
    console.log(`It looks like you are an excellent player of ${selectGame} game ${visitor}`);
  } /*else if (selectGame == 'FIFA') {
    console.log('You are a great FIFA player lad');
  } else if(selectGame == 'PES') {
    console.log('You have extraordinary skills in PES');
  } else if(selectGame == 'KONAMI') {
    console.log('You have extraordinary skills in KONAMI Games');
  }*/ else {
    document.getElementById("fOut").innerHTML = 'You may leave now';
    console.log('You may leave now');
  }
};

const analyse = () => {
  document.getElementById("visitorName").onclick = () => {
  document.getElementById('fOut').innerHTML = "Analysing Visitor... Click 'Start' to continue";
  }
};

setTimeout(analyse, 5000);
document.getElementById("pBut").onclick = () => {
  document.getElementById("fOut").innerHTML = "Analysing... Please Wait!";
    setTimeout(delayedMessage, 5000);
};

//Set timeout is a build in function with 2 parameters, the first is the result the second is the time


//A simple program that prints out bible verses on every load
console.log(randomNum)

const bibleVerse = () => {
  if (randomNum < 3000) {
  document.getElementById("JSProgram").innerHTML = 'God so loved the world that he gave his only begotten son, that who so ever believe in him should not perish but have everlasting life';
  } else if (randomNum > 3000) {
    document.getElementById("JSProgram").innerHTML = 'The fear of God is the beginning of wisdom';
}
};

setTimeout(bibleVerse, randomNum)

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

/*
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});



const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};


---------------------

const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

module.exports = { checkAvailability };


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
};




const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);


*/