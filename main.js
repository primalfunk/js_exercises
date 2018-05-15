// 1.  Sum two numbers

function add_together(num1, num2) {
  return num1 + num2
}

//2.  Sum an array

function sum_array(arr) {
  var array_sum = 0
  for(var i = 0; i < arr.length; i++) {
    array_sum += arr[i]
  }
  return array_sum
}

//3.  Fahrenheit to Celsius 

function Fahrenheit_to_Celsius(f_temp) {
  c_temp = (f_temp - 32) * (5/9)
  return c_temp
}

//4.  Vowel Count

function howManyVowels(str) {
  var counter = 0
  for(var i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
      counter ++
  }
  return counter
}

//5.  Dice - Write a function that rolls 2-6 sided dice and returns the two values in an array
function rollDice(num) {
  var roll = []
  for(var i = 0; i < num; i++) {
    roll.push(Math.floor(Math.random * 6) + 1)
  }
  return roll
}

//6.  Average of an array  - Write a function that takes in any array and returns the Avg.
function averageArray(arr) {
  arr_total = 0
  for(var i = 0; i < arr.length; i++) {
    arr_total += arr[i]
  }
  return arr_total / arr.length
}


//7.  Fizzbuzz  - Write a function that loops over numbers from 1-100 with the following rules
// -  If the number is divisible by 3 print "Fizz"
// - If the number is divisible by 5 print "Buzz"
// - If the number is divisible by both 3 & 5 print "FizzBuzz"
// - Otherwise, print the number
//  HINT:  console.log to print.  Use % (modulus to do remainder math)

function fizzBuzz() {
  for(var i = 0; i = 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

//8.  Factorial  - Write a function that takes in any number and returns the factorial value
function factorial(num) {
  total = 0
  for(var i = ; i = 0; i--) {
    total *= 
  }
}

//9.  Fibonacci  - Write a function that takes in an integer
/*  - Find the # in the Fibonacci sequence that is in the index described by the integer

   Example: fib(6) would return 8.

   For more info on Fibonacci see https://en.wikipedia.org/wiki/Fibonacci_number (Links to an external site.) (Links to an external site.)
*/

function fib(num) {
  fib_s = [0, 1]
  for(var i = 2; i<50000; i++) {
    fib_s.push(fib_s[i-2]+fib_s[i-1])
  }
  return fib_s[num]
}

//Bonus: Roman Numeral Converter - Write a function that takes a normal number and returns the roman numeral equivalent.  Some relevant info:

function arabicToRoman(num) {
  var charArray = []
  var mult = 0
  
  if (num >= '1000') {
    mult = (num - (num % 1000)) / 1000
    for(var i = 0; mult; i++) {
      charArray.push("M")
    }
  }
  //num should now be <= 999
  num = rem
  if (mult > 0) {
    mult = (num - (num % 100)) / 100
    if (mult < 5) {
      for(var i = 0; mult; i++) {
        charArray.push("C")
      }
    } else if (mult < 9) {
      //solution not finished
      
    }
  }
  //solution not finished
}


/*
The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice
these letters have lots of straight lines and are hence easy to hack
into stone tablets).

```
1 => I
10 => X
7 => VII
```

There is no need to be able to convert numbers larger than about 3000.
(The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each
digit separately starting with the left most digit and skipping any
digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M
900=CM
90=XC

2008 is written as MMVIII:

2000=MM
8=VIII
*/