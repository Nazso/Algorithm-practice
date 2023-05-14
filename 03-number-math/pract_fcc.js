// function telephoneCheck(str) {

//     const regexOne = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
//     const regexTwo = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

//     if (regexOne.test(str)) {
//         return true;
//     }
//     else if (regexTwo.test(str)) {
//         return true;
//     }
//     else return false;
// }
  
//   console.log(telephoneCheck("1 555-555-5555"));    //true
//   console.log(telephoneCheck("1 456 789 4444"));    //true
//   console.log(telephoneCheck("1 (555) 555-5555"));    //true
//   console.log(telephoneCheck("(555)555-5555"));    //true
//   console.log(telephoneCheck("123**&!!asdf#")); //false
//   console.log(telephoneCheck("2 (757) 622-7382"));  //false
//   console.log(telephoneCheck("27576227382"));   //false



  function checkCashRegister(price, cash, cid) {
    // const littleCash = cash - price;

    // for(i = 0; i < cid.length; i++) {

    // }

    // return littleCash;

    // var change_arr = denom.reduce(function(acc, curr) {
    //     var value = 0;
    //     // While there is still money of this type in the drawer
    //     // And while the denomination is larger than the change reminaing
    //     while (register[curr.name] > 0 && change >= curr.val) {
    //       change -= curr.val;
    //       register[curr.name] -= curr.val;
    //       value += curr.val;
    //       // Round change to the nearest hundreth deals with precision errors
    //       change = Math.round(change * 100) / 100;
    //     }
    //     // Add this denomination to the output only if any was used.
    //     if (value > 0) {
    //         acc.push([ curr.name, value ]);
    //     }
    //     return acc; // Return the current Change Array
    //   }, []); // Initial value of empty array for reduce


        let stat = {status: "OPEN", change: []};
        let tot = 0;

        for (let coin of cid) {
          tot += coin[1];
        }

        let total = tot.toFixed(2);
        let newarr = [];
        let cd = JSON.parse(JSON.stringify(cid));

        console.log(cd)
        
        function changer(chan) {
          chan = Number(chan.toFixed(2));
          
          if (chan >= 100 && cd[8][1] >= 100) {
            cd[8][1] -= 100;
            changer(chan - 100);
          } else if (chan >= 20 && cd[7][1] >= 20) {
            cd[7][1] -= 20;
            changer(chan - 20);
          } else if (chan >= 10 && cd[6][1] >= 10) {
            cd[6][1] -= 10;
            changer(chan - 10);
          } else if (chan >= 5 && cd[5][1] >= 5) {
            cd[5][1] -= 5;
            changer(chan - 5);
          } else if (chan >= 1 && cd[4][1] >= 1) {
            cd[4][1] -= 1;
            changer(chan - 1);
          } else if (chan >= 0.25 && cd[3][1] >= 0.25) {
            cd[3][1] -= 0.25;
            changer(chan - 0.25);
          } else if (chan >= 0.1 && cd[2][1] >= 0.1) {
            cd[2][1] -= 0.1;
            changer(chan - 0.1);
          } else if (chan >= 0.05 && cd[1][1] >= 0.05) {
            cd[1][1] -= 0.05;
            changer(chan - 0.05);
          } else if (chan >= 0.01 && cd[0][1] >= 0.01) {
            cd[0][1] -= 0.01;
            changer(chan - 0.01);
          }
          
          newarr.push([cd[8][0],cid[8][1]-cd[8][1]],[cd[7][0],cid[7][1]-cd[7][1]],[cd[6][0],cid[6][1]-cd[6][1]],[cd[5][0],cid[5][1]-cd[5][1]],[cd[4][0],cid[4][1]-cd[4][1]],[cd[3][0],cid[3][1]-cd[3][1]],[cd[2][0],Number((cid[2][1]-cd[2][1]).toFixed(2))],[cd[1][0],cid[1][1]-cd[1][1]],[cd[0][0],Number((cid[0][1]-cd[0][1]).toFixed(2))]);
          return newarr;
        }
        
        let obj;
        if (total < cash-price) {
          stat.status = "INSUFFICIENT_FUNDS";
          stat.change = [];
        } else if (total == cash-price) {
          stat.status = "CLOSED";
          stat.change = cid;
        } else {
          stat.status = "OPEN";
          obj = changer(cash-price);
          for (let i = 0; i<9;i++) {
            if (obj[i][1] != 0) {
            stat.change.push(obj[i]);
            }
          }
        }
        // console.log(stat)
        return stat;
        
        
    } 

  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));