function twoSum(numbers, target) {

    const indexes = [];
    
    for(let i = 0; i < numbers.length; i++) {

        for(let j = i + 1; j < numbers.length; j++) {

            // indexes.push(numbers[i] + numbers[j])

            if(target === numbers[i] + numbers[j]) {

                indexes.push(numbers.indexOf(numbers[i]));
                indexes.push(numbers.indexOf(numbers[j]));
            }
        }
        
    }

    return indexes;

  }

  console.log(twoSum([1, 2, 3], 4))
  console.log(twoSum([2, 2, 3], 4))