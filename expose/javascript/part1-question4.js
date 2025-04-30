function sumValues(num1, num2, add) {
    if (add) {
      let result = 0;
      result = num1 + num2;
      console.log('values added: ', result);
    } else return;
    console.log('final result: ', result); // ReferenceError
  }
  
  sumValues(10, 10, true);
  