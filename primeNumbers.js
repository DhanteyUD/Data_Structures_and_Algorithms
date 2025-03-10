//* Write a function to print prime number from 1 to a thousand

function primeNumbers() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i < Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

primeNumbers();
