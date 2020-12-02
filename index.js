// Code your solutions in this file


function writeCards(names, e) {
    let arr = []
    for (let n = 0; n < names.length; n++){
    arr.push(`Thank you, ${names[n]}, for the wonderful ${e} gift!`)}
        return arr
}

writeCards(names);

