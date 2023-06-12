// function twoSum(numbers, target) {

//     const indexes = [];
    
//     for(let i = 0; i < numbers.length; i++) {

//         for(let j = i + 1; j < numbers.length; j++) {

//             // indexes.push(numbers[i] + numbers[j])

//             if(target === numbers[i] + numbers[j]) {

//                 indexes.push(numbers.indexOf(numbers[i]));
//                 indexes.push(numbers.indexOf(numbers[j]));
//             }
//         }
        
//     }

//     return indexes;

//   }

//   console.log(twoSum([1, 2, 3], 4))
//   console.log(twoSum([2, 2, 3], 4))



// function squareDigits(num){
//     const numStr = num.toString()
//     const arr = [];

//     const squareArr = [];

//     for(let i = 0; i < numStr.length; i++) {
//         arr.push(numStr[i]);
//     }

//     for(let i = 0; i < arr.length; i++) {
//         let sqr = arr[i] * arr[i];
//         squareArr.push(sqr);
//     }

//     return +squareArr.join('');
    
//   }


//   console.log(squareDigits(3212)); //9414
//   console.log(squareDigits(2112)); //4114


//   function decompose(num, base=2) {

//     const ki = Math.log(num)/Math.log(base) | 0;
//     if (ki <= 1) return [[], num];
    
//     const [arr, r] = decompose(num - base ** ki, ++base);  
//     return [[ki, ...arr], r];
    
//   }


//     console.log(decompose(0));  //[[], 0]);
//     console.log(decompose(4));  //[[2], 0]);
//     console.log(decompose(9));  //[[3], 1]);
//     console.log(decompose(25));  //[[4, 2], 0]);
//     console.log(decompose(8330475));  //[[22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0]);
//     console.log(decompose(9819938));  //[[23, 12, 9, 8, 6, 6, 5, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0]);
//     console.log(decompose(8331299));  //[[22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2], 199]);
//     console.log(decompose(8328441));  //[[22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 50]);

// function getCharacters(obj, key, val) {
//     val = val.toLowerCase();
//     let object = obj.filter(v => (v[key] || '').toLowerCase() == val);
    
//     return object.length === 0 ? false : true;

//   }

//   console.log(getCharacters([{"name":"Dipper Pines", "age":"12", "speciality":"adventurer"}], 'name', 'Dipper Pines'));
//     //   [{"name":"Dipper Pines", "age":"12", "speciality":"adventurer"}]); //, true, 
//       //'Function should be able to match passed criteria.')

//     console.log(getCharacters([{"name":"Waddles", "age":"Unknown", "speciality":"pig stuff"}], 'name', 'waddles'));
//     //   [{"name":"Waddles", "age":"Unknown", "speciality":"pig stuff"}]); //, true, 
//       //'Match should be case insensitive.')

//     console.log(getCharacters([{"name":"Wendy Corduroy", "age":"15", "speciality":"sociable and nonchalant"}], 'name', 'Wendy')); 
//     //   [{"name":"Wendy Corduroy", "age":"15", "speciality":"sociable and nonchalant"}]); //, false,


//     function sortArray(a1, a2) {

//         // const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
//         // const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

//         const newArr = [];

//         for(let i = 0; i < a1.length; i++) {
//             for(let j = 0; j < a2.length; j++) {
//                 if(a1[i][0] === a2[j][0]) {
//                     newArr.push(a2[j])
//                 }
//             }
//         }

//         return newArr;
//     }

// console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'], ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'])); // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);


// function contamination(text, char){
//     let num = text.split('').length;
//     return char.repeat(num);
//   }

//   console.log(contamination("abc","z")); // "zzz")
//   console.log(contamination("","z")); // "")
//   console.log(contamination("abc","")); // "")
//   console.log(contamination("_3ebzgh4","&")); // "&&&&&&&&")
//   console.log(contamination("//case"," ")); // "      ")

function multipleOfIndex(array) {
    const newArr = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] % i === 0) {
            newArr.push(array[i]);
        }
    }

    return newArr;

  }

    console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]);
    console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])); // [-1, 10]);
    console.log(multipleOfIndex([11, -11])); // [-11]);
    console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68])); // [-85, 72, 0, 68]);
    console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51])); // [38, -44, -99]);
    console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35])); // [-49, 8, -60, 35]);
