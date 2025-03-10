//* Write a function that groups an array of associative arrays based on a specific key

function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupValue = obj[key];

        if (!acc[groupValue]) {
            acc[groupValue] = [];
        }

        acc[groupValue].push(obj);
        return acc;
    }, {});
}

const data = [
    { category: "fruit", name: "Apple" },
    { category: "fruit", name: "Banana" },
    { category: "vegetable", name: "Carrot" },
    { category: "fruit", name: "Mango" },
    { category: "vegetable", name: "Lettuce" }
];

console.log(groupBy(data, "category"));