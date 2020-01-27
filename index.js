// Code your solutions in this file
function writeCards(array, event) {
    let my_arr = [];
    for (let i = 0; i < array.length; i++) {
        my_arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
        return my_arr
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num--
    }
}
