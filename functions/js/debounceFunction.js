//* Implement a debounce function in JavaScript.

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}

// Example usage:
function searchQuery(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 500);

debouncedSearch("Hello");
debouncedSearch("Hello, Wo");
debouncedSearch("Hello, World!");