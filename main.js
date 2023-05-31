function countEvenNumbers(array) {
    var count = 0;
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        count++;
      }
    }
  
    return count;
  }
  
  var inputArray = [2, 5, 8, 3, 6];
  var evenCount = countEvenNumbers(inputArray);
  
  document.write("Number of even numbers in the array: " + evenCount);