function findStringLengthMost(arrString) {
    if (arrString.length === 0) return []; // Handle empty input case

    // Determine the maximum length of strings
    const maxLength = Math.max(...arrString.map(el => el.length));
    const arrLength = Array(maxLength).fill(0); // Array to track length frequencies
    const arrElement = Array.from({ length: maxLength }, () => []); // Create a 2D array

    // Populate frequency and element arrays
    arrString.forEach(element => {
        const length = element.length;
        arrLength[length - 1] += 1;
        arrElement[length - 1].push(element);
    });

    // Find the most frequent string length
    const maxFrequency = Math.max(...arrLength);
    const index = arrLength.indexOf(maxFrequency);
    
    return arrElement[index];
}

// Test the function
// Test Cases
const testCases = [
    {
        input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
        expected: ['ab', 'cd', 'gh']
    },
    {
        input: ['x', 'xy', 'xyz', 'yz', 'x'],
        expected: ['x', 'x']
    },
    {
        input: ['hello', 'world', 'hi', 'bye', 'ok', 'no'],
        expected: ['hi', 'ok', 'no']
    },
    {
        input: ['one', 'two', 'three', 'four', 'five'],
        expected: ['three']
    },
    {
        input: [],
        expected: []
    }
];

// Unit Test Function
function runTests() {
    for (const { input, expected } of testCases) {
        const result = findStringLengthMost(input);
        console.log(`Input: ${JSON.stringify(input)}`);
        console.log(`Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), 'Test Failed');
    }
    console.log('All tests passed!');
}

runTests();