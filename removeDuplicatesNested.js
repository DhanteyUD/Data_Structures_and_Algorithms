//* Write a function that removes duplicate values from a nested array while preserving its structure

function removeDuplicatesNested(array, seen = new Set()) {
    return array.map(item =>
        Array.isArray(item)
            ? removeDuplicatesNested(item, seen)
            : seen.has(item) ? null : (seen.add(item), item)
    ).filter(item => item !== null);
}

const nestedArr = [1, [2, 3, [4, 2], 5], [3, 6, [7, 4]], 8, [9, [6, 10]]];
console.log(removeDuplicatesNested(nestedArr));