/* 
    Promise: Is part of the Constructor Function. Uses the keyword new.
A promise has 3 states:
Resolved: The condition has been fuilfilled.
Rejected: The condition has not been fulfilled. 
Pending: The condition is yet to be fulfilled.

*/

//Numbers cannot be devided by 0 in JS as it will result in Infinity.

//Resolved Example:
// To check input element  for numbers that are 1 and above to be resolved, any numbers less will result in rejected.

//when selecting multiple elements use querySelectAll with a loop for each element value
document.querySelector('[division]').addEventListener('click', division)

function division() {
    // + (unary operator) will turn the element from a string into a number.
    let fOp = +document.querySelector('[firstOp]').value  
    let output = document.querySelector('[output]')
    let sOp = +document.querySelector('[secondOp]').value

    // Make a promise
    let myPromise = new Promise((resolve, reject) => {
        // if(fOp < 1 && sOp < 1)
        //     reject('You can\'t divide a number by 0')
        // resolve(fOp / sOp)
        if((fOp < 1) || (sOp < 1))
            reject('Please contact our administrator')
        else 
            resolve(fOp / sOp)
    }) //.then will grab the value when the promise is resolved. Since the reason is the only value we grabbing we only use one ().
    myPromise.then(value => {   
        output.textContent = value
    })
    .catch( value => {
        output.textContent = value // .catch will grab the value when the promise is rejected
    })
}