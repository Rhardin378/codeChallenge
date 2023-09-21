const findSum = function(array) {
    return array.reduce(function(accumulator,number){
        return accumulator + number 
    })
  };
  
  const findFrequency = function(array) {
    let count = {}

    array.forEach(function(letter){
    if (count.hasOwnProperty(letter)){
      count[letter] += 1;
    } else {
      count[letter] = 1
    }
    })
    
    let arr = Object.values(count)
    let min = Math.min(...arr)
    let max = Math.max(...arr) 
    let leastFrequent; 
    let mostFrequent;
    
    for (let prop in count ) {
    if (count[prop] === min ){
    leastFrequent = `${prop}`
    } else if (count[prop] === max) {
    mostFrequent = `${prop}`
    }}

    return { most: `${mostFrequent}`, least: `${leastFrequent}` }
};
  
  const isPalindrome = function(str) {
      if(str.split("").reverse().join('') === str) {
          return true
      } else { 
          return false }
  };
  
  const largestPair = function(array) {
    let productArray = []
    for (let i = 0; i < array.length; i++){
      let currentNum = array[i]
      let nextNum = array[i+1]
    
      if(nextNum){
        let product = currentNum * nextNum
        productArray.push(product)
      }
    }
    return Math.max(...productArray)
  };
  
  const removeParenth = function(str) {
    let removeLeftP = str.split("(")[0]
    let removeRightP = str.split(")")[1]
    return removeLeftP + removeRightP
  
  };
  
  const scoreScrabble = function(str) {
    let score = 0
  for (let i = 0; i< str.length; i++) {
    if (str[i] === 'a'||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u' ||
        str[i] === 'l' ||
        str[i] === 'n' ||
        str[i] === 'r' ||
        str[i] === 's' ||
        str[i] === 't' 
        ) {
          score += 1
        } else if (str[i] === 'd' || str[i] === 'g'){
          score += 2
        } else if (str[i] === 'b' || 
                   str[i] === 'c' ||
                   str[i] === 'm' || 
                   str[i] === 'p'){
          score += 3
        } else if  (str[i] === 'f' || 
                    str[i] === 'h' ||
                    str[i] === 'v' ||
                    str[i] === 'w' || 
                    str[i] === 'y'){
            score += 4} 
          else if (str[i] === 'k') {
            score += 5
          } else if (str[i] === 'j' || str[i] ==='x'){
            score += 8
          } else {
            score += 10
          }
  }
    return score
  };
