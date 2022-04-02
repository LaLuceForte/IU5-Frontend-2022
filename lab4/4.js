/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    d = 1
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? get1DArray(val, d - 1) : val), [])
    : arr.slice();
}

const arr = [[2],[[4],[5]]];
console.log(get1DArray(arr));

module.exports = get1DArray;
