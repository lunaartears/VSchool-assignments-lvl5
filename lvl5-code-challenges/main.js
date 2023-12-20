function extractUniqueCharacters(strings) {
    let splitStrings = strings.map(string => string.split(""))
    //console.log(splitStrings)
    let firstPart = splitStrings[0]
    let secondPart = splitStrings[1]
    let thirdPart = splitStrings[2]
    let letters = [...firstPart, ...secondPart, ...thirdPart]
    //console.log(letters)

    let unique =
        letters.filter((letter, index) => {
            return letters.indexOf(letter) === letters.lastIndexOf(letter);
        });
    return unique

}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']




function sortByProperty(objects, propertyName) {
    let sorted = objects.sort((a,b) => a[propertyName] - b[propertyName])
    return sorted
}

const people = [
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'name');
console.log(sortedByAge);


function generateTable(num){
    for (let i = 1; i < 11; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }

}

generateTable(5)
