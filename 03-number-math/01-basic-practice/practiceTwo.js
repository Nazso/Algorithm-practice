// const arr = [5, 2, 3, 4, 9, 6, 1];
// const d = 7;
// const m = 2;
// const arrTwo = [1, 3, 8, -5, -11, 7, 10, 1000, 5, 6];

// console.log(arr.sort());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));
// arr.map((n, i) => {
//     console.log(arr[i] + arrTwo[i]);
// });

// console.log("-------------------------");
// arrTwo.sort((a, b) => a - b);

// console.log(arrTwo);
// console.log("--------------------------");


// arr.map((n, i) => {
//     console.log(arr[i] + arrTwo[i]);
// });

// console.log("-------------------------");
// arrTwo.sort((a, b) => b - a);

// console.log(arrTwo);
// console.log("--------------------------");

// arr.map((n, i) => {
//     console.log(arr[i] + arrTwo[i]);
// });

// let counter = 0;
// const newArr = [];
// console.log(arr.splice(arr[2], m))

// for (let i = 0; i < arr.length; i++) {
    // let newArr = arr.splice(arr[i], m).reduce((a, b) => a + b);
    // let arrTwo = arr.slice(i, i + m);
    // let sum = 0;
    // for (let j = 0; j < arrTwo.length; j++) {
    //     sum = sum + arrTwo[j]
    // }
    // if (sum === 7) {
    //     counter++
    // }
    // console.log(sum)
    // console.log(arrTwo)
// }
// console.log(counter);

// function xorOrNot(c, t) {
//     const C = c.split('');
//     const T = t.split('');

//     let x = C.map((e, i) => Math.abs(C[i] - T[i])).join('');

//     return x;
// }

// console.log(xorOrNot('10101', '00101'))
// console.log(xorOrNot('10110', '00101'))
// console.log(xorOrNot('11001', '00101'))
// console.log(xorOrNot('10101', '11101'))

// for (let i of arrTwo) {
//     console.log(i)
// }
// for (let i in arrTwo) {
//     console.log(i)
// }

// arrTwo.forEach(e => {
//     console.log(e)
// })

// const multiArray = [[2, 3, 4, 6], [4, 3, 7, 8, 6], [2, 3, 9, 8], [1, 4, 3, 5, 7]];

// multiArray.forEach(e => {
    // let sum = e.reduce((a, b) => a + b);
    // let sum = e.map(a => a * 2);
    // let sum = e.sort((a, b) => a - b);
    // let sum = e.sort((a, b) => b - a);
    // let sum = e.filter(d => d >= 4);
    // console.log(sum);
// })
// let item = 3;
// const newArray = new Array(10).fill(item+=1);

// console.log(newArray);

// function highAndLow(numbers){
//     const arr = numbers.split(' ');
//     const sortedArr = arr.sort((a, b) => a - b);

//     const newArr = [];
//     newArr.push(arr[arr.length - 1], arr[0])

//     return newArr.join(' ');
//   }

// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

function hasSurvived(attackers, defenders){
//     let surv = [];
//     let sum = 0;
//     let sumAttackers = 0;
//     let sumDefenders = 0;

//     for (let i = 0; i < attackers.length; i++) {
//         sumAttackers += attackers[i]
//     }

//     for (let i = 0; i < defenders.length; i++) {
//         sumDefenders += defenders[i]
//     }

//     // surv.push(attackers[i] - defenders[i])
//     if (attackers.length === 0) {
//         return true;
//     } else if (defenders.length === 0) {
//         return false;
//     }


// //&& defenders.length === attackers.length
//     if (attackers.length >= 1 && defenders.length >= 1 && attackers.length > defenders.length || attackers.length === defenders.length) {
//         for (let i = 0; i < attackers.length; i++) {
//             if (attackers[i] - defenders[i] > 0) {
//                 surv.push(1);
//             } else if (attackers[i] - defenders[i] < 0) {
//                 surv.push(-1);
//             } else if (attackers[i] - defenders[i] === 0) {
//                 surv.push(0);
//             // } else if (attackers[i] === undefined) {
//             //     surv.push(-1);
//             } else if (defenders[i] === undefined) {
//                 surv.push(1);
//             }

//         }

//     } else if (attackers.length >= 1 && defenders.length >= 1 &&  attackers.length < defenders.length) {
//         for (let i = 0; i < defenders.length; i++) {
//             if (defenders[i] - attackers[i] < 0) {
//                 surv.push(1);
//             } else if (defenders[i] - attackers[i] > 0) {
//                 surv.push(-1);
//             } else if (attackers[i] - defenders[i] === 0) {
//                 surv.push(0);
//             } else if (attackers[i] === undefined) {
//                 surv.push(-1);
//             // } else if (defenders[i] === undefined) {
//             //     surv.push(1);
//             }
            
//         }
//         // return surv;
    
//     } else if (attackers.length < 1 && defenders.length >= 1) {
//         return true;
//     } else if (attackers.length >= 1 && defenders.length < 1) {
//         return false;
//     } else if (attackers.length > defenders.length && sumAttackers > sumDefenders) {
//         return false;
        
        
//     } else if (attackers.length < defenders.length && sumAttackers < sumDefenders) {
//         return true;
        
    // } 
    
//     for (let i = 0; i < surv.length; i++) {
//         sum += surv[i]; 
//     }

//     return sum;
    
//     if (sum > 0) {
//         return false;
//     } else if (sum < 0) {
//         return true;
//     } else if (sum === 0 && sumAttackers === sumDefenders) {
//         return true;
//     }else if (sum === 0 && sumAttackers > sumDefenders) {
//         return false;
//     } else if(sum === 0 && sumAttackers < sumDefenders) {
//         return true;
//     }
// ------------------------------------------------------------------ másik megoldás-------------------------------------

    // let sumAttackers = attackers.reduce((a, b) => a + b, 0);
    // let sumDefenders = defenders.reduce((a, b) => a + b, 0);
    // const win = [];
    // const lose = [];

    // if (attackers.length === 0) {
    //     return true;
    // } else if (defenders.length === 0) {
    //     return false;
    // }

    // if (attackers.length === defenders.length || defenders.length > attackers.length) {
    //     for (let i = 0; i < defenders.length; i++) {
    //         if (defenders[i] > attackers[i] || attackers[i] === undefined) {
    //             win.push(1)
    //         } else lose.push(0);
    //     }

    // } else {
    //     for (let i = 0; i < attackers.length; i++) {
    //         if (defenders[i] < attackers[i] || defenders[i] === undefined) {
    //             lose.push(0)
    //         } else win.push(1);
    //     }
    // }

    // if (win.length > lose.length) {
    //     return true
    // } else if (win.length < lose.length) {
    //     return false
    // } else if (win.length === lose.length && sumAttackers > sumDefenders) {
    //     return false
    // } else if (win.length === lose.length && sumAttackers < sumDefenders) {
    //     return true
    // } else if (win.length === lose.length && sumAttackers === sumDefenders) {
    //     return true
    // }
    
    // return win;
    // console.log(win)
    // console.log(lose)
  }

// console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); // false;
// console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); // true
// console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); // true
// console.log(hasSurvived([911], [10, 4, 1, 7])); // true???
// console.log(hasSurvived([10, 10, 1, 1], [100])); // false???
// console.log(hasSurvived([], [1, 2, 3])); // true
// console.log(hasSurvived([1, 2, 3], [])); // false;
// console.log(hasSurvived([2, 2, 3], [1, 1, 1, 1, 1, 1, 9])); // true;
// console.log(hasSurvived([1, 1, 1], [2, 2])); // true;


function movie_times(open, close, length) {
    //...
    // const movieShowTimes = [];
    // let movieLength = Math.ceil(length / 60);
    // let movieLengthMin = length - 60;
    // console.log(movieLength);
    // console.log(movieLengthMin);

    // movieShowTimes.push([open, 0]);
    // for (let i = open; i < close; i++) {
    //     movieShowTimes.push([(i + movieLength), movieLengthMin + 45]);
    // }

    // return movieShowTimes;

    // const fullLength = length + 15;
    // const duration = close > open ? (close - open) * 60 : (24 - open + close) * 60;
    // const ss = Math.floor((duration + 15)/ fullLength);
    // const arr = [];

    // for (let i = 0; i < ss; i++) {
    //     if (i === 0) {
    //         arr.push([open, 0]);
    //     } else {
    // 	    const h = i * fullLength / 60 + open; 
    // 	    const hour = Math.floor(h);
    //         arr.push([hour > 23 ? hour - 24 : hour, Math.round((h - hour) * 60)]);
    //     }
    // }
    // return arr;
  }

// console.log(movie_times(13, 23, 60));  // [[13, 0], [14, 15], [15, 30], [16, 45], [18, 0], [19, 15], [20, 30], [21, 45]]);
// console.log(movie_times(16, 3, 75));  // [[16, 0], [17, 30], [19, 0], [20, 30], [22, 0], [23, 30], [1, 0]]);
// console.log(movie_times(16, 21, 90));  // [[16, 0], [17, 45], [19, 30]]);

// function getSum( a, b ) {
    // const arr = [];
    // const newArr = [];
    // let sum = 0;
    // arr.push(a);
    // arr.push(b);

    // const sortedArr = arr.sort((a, b) => a - b);
    // // console.log(sortedArr);
    // // console.log(sum);
    // // console.log(arr);

    // for (let i = sortedArr[0]; i <= sortedArr[1]; i ++) {
    //     newArr.push(i);
    // }

    // // return newArr;

    // for (let i = 0; i < newArr.length; i++) {
    //     // console.log(sortedArr[i])
    //     sum = sum + newArr[i];
    //     }
    
    //     if (a === b) {

    //         return a;

    //     }
    //         return sum;
// }


// console.log(getSum(0,-1));  //-1);
// console.log(getSum(0,1));  //1);
// console.log(getSum(2,2));  //2);
// console.log(getSum(21,29));  //);
// console.log(getSum(357,400));  //16654);


// function bouncingBall(h,  bounce,  window) {
//     // your code here
//     let counter = -1;
//     if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
//         return -1;
//     // } else if (h * bounce > window) {
//     //     return true;
//     } else {
//         const level = [];
        
//         // for (let i = h; i > 0; i--) {
//         //     let newHight = i * bounce;
//         //     level.push(newHight);
//         // }
//         for (let i = h; i> window; i *=bounce) {
//             level.push(i);
//         }
//         console.log(level);
//         for (let i = 0; i < level.length; i++) {
//             if (level[i] >= window) {
//                 counter = counter + 2;
//                 // console.log(level[i])
//             }
//         }
//     }

//     return counter;
//   }

// console.log(bouncingBall(3.0, 0.66, 1.5));  // 3))
// console.log('-------------')
// console.log(bouncingBall(30.0, 0.66, 1.5));  // 15))
// console.log('-------------')
// console.log(bouncingBall(3.0, 1.0, 1.5));  // -1))


// function sockMerchant(n, ar) {
//     // Write your code here
//     let counter = 0;
//     let pairs = [];
//     let sockes = new Set();
//     // const newArr = ar.sort((a, b) => a - b);
//     // console.log(newArr);
//     for (let i = 0; i < ar.length; i++) {
//         if (sockes.has(ar[i])) {
//             counter++
//             sockes.delete(ar[i])
//         }
//         else {
//             sockes.add(ar[i])
//         }
//     }

    
   
   
//     // if (pairs.length % 2 === 0) {
//     //     return pairs.length - 2;
//     // } return Math.floor(pairs.length / 2 + 1)
//     return counter;
// }


// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) //3
// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) //2
// console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])) //6



// function processData(n, a) {
//     //Enter your code here
//     const k = (n + 1) / 2;
//     const incArr = [];
//     const decrArr = [];
//     const sortedArr = a.sort((a, b) => a - b);
//     // console.log(sortedArr);

//     for(let i = 0; i < sortedArr[k - 2]; i++) {
//         incArr.push(sortedArr[i]);
//     }
//     incArr.push(sortedArr.length);
//     for(let i = sortedArr.length - 2; i >= k - 1; i--) {
//         incArr.push(sortedArr[i])
//     }

//     return incArr;
    
// }



// console.log(processData(5, [2, 3, 5, 1, 4]))
// console.log(processData(7, [1, 2, 3, 4, 5, 6, 7]))


// function pageCount(n, p) {
//     // Write your code here
//     const pages = [];
//     let beginCount = 0;
//     let endCount = 0;

//     for (let i = 0; i <= n; i = i + 2) {
//         if (!pages.includes(i)) {
//             pages.push([i, i + 1])
//         }
//     }
//     console.log(pages)

//     for(let i = 0; i < pages.length; i++) {
//         if (pages[i].includes(p)) {
//             beginCount = i;
//         }
//     }
//     for(let i = pages.length - 1; i >= 0; i--) {
//         if (pages[i].includes(p)) {
//             endCount = pages.length - 1 - i;
//         }
//     }

//     return beginCount < endCount ? beginCount : endCount;
// }


// console.log(pageCount(5, 3))
// console.log(pageCount(6, 2))
// console.log(pageCount(5, 4))

// console.log(+"2" + +"3");
// console.log(2 + 3);

// const arr = ["2", "3"];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + +arr[i]
// }
// console.log(sum);

// function toCsvText(array) {
//     // good luck
//     let str = '';
//     array.forEach((e) => {
//         // e.push('\\n')
//         let strTwo = '';
//         for (let i = 0; i < e.length; i++) {
//             strTwo = strTwo.concat(",", e[i]);
            
//             // console.log(strTwo);
//         }
//         let strThree = strTwo.replace(",", "")
//         // console.log(strThree)
//         str = str.concat(strThree, "\\n");
//     })

//     return str.slice(0, -2);
//  }

// console.log(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
//    ])); // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');)

// function removeExclamationMarks(s) {
//     const splitted = s.split('')
//     let newStr = [];
//     // for (let i = 0; i < splitted.length; i++) {
//     //   if (splitted[i] === '!' && splitted.lastIndexOf(splitted[i]) === splitted.length - 1) {
//     //     splitted.splice(splitted.indexOf(splitted[i]), 2)
//     //   } else if (splitted[i] === '!' && splitted.lastIndexOf(splitted[i]) !== splitted.length - 1) {
//     //     splitted.splice(splitted.indexOf(splitted[i]), 1)
//     //   }
//     // }

//     for (let i = 0; i < splitted.length; i++) {
//         if (splitted[i] !== '!') {
//             newStr.push(splitted[i])
//         }
//     }

    
//     // console.log(splitted)
//     // console.log(newStr)
//     // console.log(splitted.lastIndexOf('!') === splitted.length - 1)
//     return newStr.join('');
//   }


//   console.log(removeExclamationMarks("Hello World!")); // "Hello World"))
//   console.log(removeExclamationMarks("Hello World!!")); // "Hello World"))
//   console.log(removeExclamationMarks("He!llo World")); // "Hello World"))
//   console.log(removeExclamationMarks("He!llo World!!")); // "Hello World"))
//   console.log(removeExclamationMarks("Hello World!!!")); // "Hello World"))


  function htmlspecialchars(formData) {
    // Insert your code here
    const splitted = formData.split("");
    const newData = [];

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === '<') {
            splitted[i] = "&lt;"
        } else if (splitted[i] === '>') {
            splitted[i] = "&gt;"
        } else if (splitted[i] === '"') {
            splitted[i] = "&quot;"
        } else if (splitted[i] === '&') {
            splitted[i] = "&amp;"
        }
        newData.push(splitted[i])
    }
    
    return newData.join('');
  }


  console.log(htmlspecialchars("<h2>Hello World</h2>"));
    // "&lt;h2&gt;Hello World&lt;/h2&gt;"
  
  console.log(htmlspecialchars("Hello, how would you & I fare?"));
    // "Hello, how would you &amp; I fare?"
  
  console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));
    // 'How was &quot;The Matrix&quot;?  Did you like it?'
  
  console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
    // "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
