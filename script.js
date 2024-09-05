// Good Luck 💪🏾
function mostExpensive(jewelry) {
    let mostExpensiveItem = "";
    let maxPrice = 0;
  
    for (let item in jewelry) {
      if (jewelry[item] > maxPrice) {
        maxPrice = jewelry[item];
        mostExpensiveItem = item;
      }
    }
  
    return `The most expensive one is the ${mostExpensiveItem}`;
  }
  
  // Test cases
  console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  })); 
  // ➞ "The most expensive one is the Pearl Necklace"
  
  console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }));
  // ➞ "The most expensive one is the Diamond Ring"
  