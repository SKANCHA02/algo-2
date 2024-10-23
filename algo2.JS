function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function power(base, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        return 1 / power(base, -exp);
    } else {
        return base * power(base, exp - 1);
    }
}

function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if (s.length <= 1) {
        return true;
    } else {
        return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1));
    }
}

const n = parseInt(prompt("Enter a number to find its Fibonacci:"));
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

const base = parseFloat(prompt("Enter the base:"));
const exp = parseInt(prompt("Enter the exponent:"));
const result = power(base, exp);
console.log(`${base} raised to the power of ${exp} is: ${result}`);

const string = prompt("Enter a string to check if it's a palindrome:");
if (isPalindrome(string)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
