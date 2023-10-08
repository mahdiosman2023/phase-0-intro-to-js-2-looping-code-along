// Code your solutions in this file

function countDown(numbers){
 // 3- > 3, 2, 1, 0
 // 5- > 5, 4, 3, 2, 1, 0
// <, >, <=, >=
 while (numbers >= 0) {
 console.log(numbers);
 numbers--

 }

}

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }


