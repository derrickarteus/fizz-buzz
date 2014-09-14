$(document).ready(function() {
    
    // When clicking submit button, start the function
    $('#submit').click(function() {
        // Store the number entered in numEnter variable
        var numEnter = +$('#number').val();
        // Check if numEnter is less than 0 or greater than 100
        if (numEnter < 0 || numEnter > 100) {
            alert('Please enter a number between 0 and 100 only');
            $('#number').val('');
            $('#result').empty();
        // Check if numEnter is not a number
        } else if (isNaN(numEnter)) {
            alert('Please enter a number');
            $('#number').val('');
            $('#result').empty();
        // Check if number is a decimal
        } else if (numEnter %1 != 0) {
            alert('Please enter a whole number only');
            $('#number').val('');
            $('#result').empty();
        // If valid, store number in fuzzBuzz function
        } else {
            fizzBuzz(numEnter);
        }
    });
    
    // When clicking the Submit button, start the function
   var fizzBuzz = function(input) {
       // Empty the result div each time function is ran so results do not stack
       $('#result').empty();
       // Store the number entered in the input field as input variable
       input = +$('#number').val();
       // Start a for loop using input variable as the truth
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
            // If number is not divisible by 3 or 5, append hte number to result div
           } else {
               $('#result').append(i + '<p>');
           }
       }
   };
    
    // Resets the game and provides blank number entry input
    $('#reset').on('click', function() {
        $('#result').empty();
        $('#number').val('');
    });
});