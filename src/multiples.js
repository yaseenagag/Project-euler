const multiples = (input) => {
  let result = 0

      for ( var index = 0; index < input; index++ ) {
        if ( index % 3 === 0 || index % 5 === 0 ) {
          result += index
        }
      }
  return result
}

  console.log(multiples(1000))
