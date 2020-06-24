let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW

let tacoCatInc = {
  sale: function(order) {
    
    let price = 0;
    
    for (let item in order) {
      let specificItem = order[item];
      let costObject = this[item][specificItem];
      
      price += costObject["cost"];
      costObject["quantity"] --;
    }
    
    this.cash += price;
    return price; 
  },
  
  currentInventory: function(){
    let total = 0;
    let keys = Object.keys(tacoCatInc);
    
    for(let i = 0; i < keys.length; i++) {
      if (typeof this[keys[i]] !== "function") {
        let itemsObj = this[keys[i]];
        for(let item in itemsObj){
          let costObj = itemsObj[item];
          total += costObj["cost"] * costObj["quantity"];
        }
      }
    }
    return total;
  }