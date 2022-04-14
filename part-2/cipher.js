const decoder = str => {
    let decoded = [];
    let mover = (str.charCodeAt(0) - 96) + (str.charCodeAt(str.length - 1) - 96) 
    for (let i = 1; i < str.length - 1; i++) {
        let charCode = str[i].charCodeAt() + mover
        if (str.charCodeAt(i) === 32) {
            decoded.push(' ')
            }   else if (charCode > 122) {
                    charCode = 96 + (charCode - 122)
                    decoded.push(String.fromCharCode(charCode))
            }   else if (str.charCodeAt(i) === 33 || str.charCodeAt(i) === 46 || str.charCodeAt(i) === 63) {
                    decoded.push(String.fromCharCode(str.charCodeAt(i)))
            }   else decoded.push(String.fromCharCode(charCode))
    }
    return decoded.join('')
}

const coder = (msg, frontMover, backMover) => {
    msg = msg.toLowerCase()
    let mover = frontMover + backMover
    let coded = [];
    coded.push(String.fromCharCode(frontMover + 96))
    for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) === 32) {
            coded.push(' ');
        }    else if (msg.charCodeAt(i) === 33 || msg.charCodeAt(i) === 46 || msg.charCodeAt(i) === 63) {
                coded.push(String.fromCharCode(msg.charCodeAt(i)))
        }   else if (msg.charCodeAt(i) - mover < 97) {
                coded.push(String.fromCharCode(123 - (97 - (msg.charCodeAt(i) - mover))))
        }   else coded.push(String.fromCharCode(msg.charCodeAt(i) - mover))
    }
    coded.push(String.fromCharCode(backMover + 96))
    return coded.join('')
}

console.log(coder('I love cryptography!', 3, 2))
console.log(decoder('cd gjqz xmtkojbmvkct!b'))


