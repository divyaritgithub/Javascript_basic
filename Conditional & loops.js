// ------------   Print all even numbers in first 50 natural numbers   ----------------

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // --------------- print all odd numbers in natural numbers from 20 to 50 -------------------
  
  for (let i = 20; i <= 50; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  
  // -------------  . print all numbers that are divisible by 5 --------------------------
  
  let arr = [12, 45, 67, 89, 90, 34, 35, 55];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 5) {
      console.log(arr[i]);
    }
  }
  
  // -------------  . print all numbers that are divisible by 5 --------------------------
  
  for (let i = 1; i <= 50; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (i == j) {
      console.log(j + " ");
    }
  }
  
  // ---------------------- Print the Array ------------------------
  
  var a = [[1,2], [3,4], [5,6], [7,8]]
   
  for (var i in a) 
  {
     console.log("row " + i);
     for (var j in a[i]) 
       {
        console.log(" " + a[i][j]);
       }
  }