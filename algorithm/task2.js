function findSumOnTopTwo(arrInt) {
    if (arrInt.length < 2) {
        throw new Error("Array must contain at least two integers.");
    }

    let max1 = -Infinity;
    let max2 = -Infinity;

    // Find the two largest integers in one traversal
    for (const num of arrInt) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 + max2;
}

const testCases = [
    { input: [1, 4, 2, 3, 5], expected: 9 },
    { input: [-1, -2, -3, -4, -5], expected: -3 },
    { input: [10, 10, 10], expected: 20 },
    { input: [1, 2], expected: 3 },
    { input: [0, 0, 0], expected: 0 }
];

function testFindSumOnTopTwo() {
    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = findSumOnTopTwo(input);
            const passed = result === expected;
            console.log(`Test Case ${index + 1}:`, passed ? "PASSED" : "FAILED");
            if (!passed) {
                console.log(`  Input: ${JSON.stringify(input)}`);
                console.log(`  Expected: ${expected}`);
                console.log(`  Got: ${result}`);
            }
        } catch (error) {
            console.log(`Test Case ${index + 1}: FAILED with error - ${error.message}`);
        }
    });
}

// Run test cases
testFindSumOnTopTwo();