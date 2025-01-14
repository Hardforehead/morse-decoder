const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var a = expr.match(/.{1,10}/g);
    a.map((e, i) => {
        var b = e.replace(/^0+/, '')
        b = b.replace(/10/gi, '\.')
        b = b.replace(/11/gi, '-')
        a[i] = b;
    })
    a.map((e, i) => {
        if (e === '**********'){
            a[i] = ' ';
        }
        for (var k in MORSE_TABLE){
            if (k === e){
                a[i] = MORSE_TABLE[k];
            }
        }
    })
    return a.join('');
}
module.exports = {
    decode
}