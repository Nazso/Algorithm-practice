function twoSum(numbers, target) {

    const indexes = [];
    
    for(let i = 0; i < numbers.length; i++) {

        for(j = numbers.length - 1; j >= 0; j--) {

            // indexes.push(numbers[i] + numbers[j])

            if(target === numbers[i] + numbers[j]
                && numbers.indexOf(numbers[i]) !== numbers.indexOf(numbers[j])
                || numbers.lastIndexOf(numbers[i]) !== numbers.lastIndexOf(numbers[j])) {
                indexes.push(numbers.indexOf(numbers[i]));
            }
        }
        
    }

    return indexes;

  }

  console.log(twoSum([1, 2, 3], 4))
  console.log(twoSum([2, 2, 3], 4))