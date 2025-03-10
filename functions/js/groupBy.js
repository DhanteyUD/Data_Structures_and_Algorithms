//* Write a function that groups an array of associative arrays based on a specific key

// Using reduce:
function groupByWithReduce(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupValue = obj[key];

        if (!acc[groupValue]) {
            acc[groupValue] = [];
        }

        acc[groupValue].push(obj);
        return acc;
    }, {});
}

// Using Map:
function groupByWithMap(arr, key) {
    const map = new Map();

    arr.forEach(obj => {
        const groupValue = obj[key];

        if (!map.has(groupValue)) {
            map.set(groupValue, []);
        }

        map.get(groupValue).push(obj);
    });

    return Object.fromEntries(map);
}


const data = [
    { category: "fruit", name: "Apple" },
    { category: "fruit", name: "Banana" },
    { category: "vegetable", name: "Carrot" },
    { category: "fruit", name: "Mango" },
    { category: "vegetable", name: "Lettuce" }
];

console.log(groupByWithReduce(data, "category"));
console.log(groupByWithMap(data, "category"));