import fs from 'fs';
console.log(123);
const addNumber = (a, b) => {
    return a + b;
};
fs.writeFileSync("test.txt", "test");
console.log("sum is:", addNumber(1, 2));
