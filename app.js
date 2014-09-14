$(document).ready(function() {
    // When clicking the Submit button, start the function
   $('#submit').on('click', function() {
       // Store the number entered in the input field as input variable
       var input = $('#number').val();
       // Start a for loop using input variable as the conditional check
       for (var i = 1; i <= input; i++) {
           // If number is divisible by both 3 and 5, append FizzBuzz to result div
           if (i % 3 === 0 && i % 5 === 0) {
               $('#result').append('FizzBuzz' + '<p>');
            // If number is divisible by 3, append Fizz to result div
           } else if (i % 3 === 0) {
               $('#result').append('Fizz' + '<p>');
            // If number is divisible by 5, append Buzz to result div
           } else if (i % 5 === 0) {
               $('#result').append('Buzz' + '<p>');
            // If number is not divisible by 3 or 5, append the number to result div
           } else {
               $('#result').append(i + '<p>');
           }
       }
   });
    // Resets the game and provides blank number entry input
    $('#reset').on('click', function() {
        $('#result').empty();
        $('#number').val('');
    });
});