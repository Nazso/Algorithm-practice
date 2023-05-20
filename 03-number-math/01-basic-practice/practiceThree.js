// const uniqSort = function(arr) {
//     const breadcrumbs = {};
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!breadcrumbs[arr[i]]) {
//             result.push(arr[i]);
//             breadcrumbs[arr[i]] = true;
//         }
//     }
//     return result.sort((a, b) => a - b);
//     // return result;

// }

// console.log(uniqSort([4, 2, 2, 2, 3, 2, 2])); // [2,3,4]


// const times10 = (n) => {
//     n * 10
// }

// console.log('times10 returns: ', times10(9));

// const cache = {};
// // const cache = {9: 90};

// const memoTimes10 = (n) => {
//     if (n in cache) {
//         console.log('Fetching from cache', n);
//         return cache[n];
//     } else {
//         console.log('Calculating result');
//         let result = times10(n);
//         cache[n] = result;
//         return result;
//     }
// }

// console.log('task 2 calculated value: ', memoTimes10(9))
// console.log('task 2 cached value: ', memoTimes10(9))


// function caesarCipher(s, k) {
// //kétféle megoldással lentebb!

//     // Write your code here
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let alphUp = alphabet.toUpperCase();
//     let rotAlph = '';
//     let rotAlphUp = '';

    
//     // console.log(alphUp)
//     // console.log(alphabet)
    
//     let index = [];
//     let endStr = [];
//     // let newK = k;
    
//     // if (k > alphabet.length) {
//     //     newK = (k % 25) - Math.floor(k / 25);
//     // } else if (k === alphabet.length - 1) {
//     //     newK = 0;
//     // }
//     // else newK = k;
    
//     // console.log(newK)
//     // console.log(alphabet.length)
    
//     // let newStr = alphabet.substring(0, newK);
//     // let strTwo = alphabet.slice(newK);
//     // rotAlph = strTwo.concat(newStr);
    
//     // let newStrUp = alphUp.substring(0, newK);
//     // let strTwoUp = alphUp.slice(newK);
//     // rotAlphUp = strTwoUp.concat(newStrUp);
    
//     const small = new Array(5).fill(alphabet).join('');
//     const upper = new Array(5).fill(alphabet.toUpperCase()).join('');
    
//     // console.log(small)
//     // console.log(upper)
//     // console.log(small.length)
//     // console.log(upper.length)
//     // console.log(upper.charAt(s.indexOf('d') + k))
//     // console.log(small.charAt(s.indexOf('d') + k))


//     for (let i = 0; i < s.length; i++) {
//         // for (let j = 0; j < alphabet.length; j++) {
//         //     if (s[i] === alphabet[j]
//         //     ) {
//         //         index.push(alphabet.indexOf(s[i]))
//         //     }
//         // }

//         // if (alphabet.includes(s[i])) {
//         //     index.push(rotAlph.charAt(alphabet.indexOf(s[i])))
//         // } else if (alphUp.includes(s[i])) {
//         //     index.push(rotAlphUp.charAt(alphUp.indexOf(s[i])))
//         // } else if (!alphabet.includes(s[i]) || !alphUp.includes(s[i])) {
//         //     index.push(s[i])
//         // }

//         if (alphabet.includes(s[i])) {
//             index.push(small.charAt(alphabet.indexOf(s[i]) + k))
//         } else if (alphUp.includes(s[i])) {
//             index.push(upper.charAt(alphUp.indexOf(s[i]) + k))
//         } else if (!alphabet.includes(s[i]) || !alphUp.includes(s[i])) {
//             index.push(s[i])
//         }
//     }
//     // index.forEach((i) => {
//     //     if (i > 0) {
//     //         endStr.push(rotAlph.charAt(i));
//     //     }
//     //     else endStr.push(i)
//     // })
//     return index.join('');
//     // return rotAlphUp;
//     // return index;
// }

// console.log(caesarCipher('middle-Outz', 2)) //okffng-Qwvb
// console.log(caesarCipher('www.abc.xy', 87)) //fff.jkl.gh
// console.log(caesarCipher('www.abc.xy', 26)) 


// function descendingOrder(n){
//     //...
//     let str = n.toString()
//     let strArr = str.split('')
//     let numArr = strArr.map((e) => e * 1);

//     numArr.sort((a, b) => b - a)
//     return parseInt(numArr.join(''));

//     // return numArr;
// }

// console.log(descendingOrder(0));  // 0)
// console.log(descendingOrder(1));  // 1)
// console.log(descendingOrder(111));  // 111)
// console.log(descendingOrder(15));  // 51)
// console.log(descendingOrder(1021));  // 2110)
// console.log(descendingOrder(123456789));  // 987654321)


// function grow(x){
//     let numbers = 0;
//     // console.log(x)
    
//     numbers = x.reduce((a, b) => a * b)
//     return numbers;
    
//   }

//   console.log(grow([1, 2, 3])); //, 6);
//   console.log(grow([4, 1, 1, 1, 4])); //, 16); 
//   console.log(grow([2, 2, 2, 2, 2, 2])); //, 64); 


  function maxMin(k, arr) {
    
    // const sortedArr = arr.sort((a, b) => a - b)
    // const newArr = [];
    // let smallest = Infinity;

    // sortedArr.forEach((e, i) => {
    //     let test = sortedArr[i + k - 1] - e;

    //     if (test < smallest) {
    //         smallest = test;
    //     }
    // })

    // return smallest;

    // console.log(sortedArr);

    const one = sortedArr.map((a ) => a - 1335);

    console.log(one);
    
    for(let i = 0; i < k; i++) {
        newArr.push(sortedArr[i])
    }
    console.log(newArr);
    
    let diff = Math.max(...newArr) - Math.min(...newArr);
    
    return diff;

}

// console.log(maxMin(5, [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232]));