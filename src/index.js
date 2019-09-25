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
    // write your solution here
let d="";
let c="";
let b="";
let a=1;
let letters="";
        for (let i = 0; i <= expr.length; i=i+2) {
            b=" ";
            if (a==6) {
                a=1;
                letters=letters+(MORSE_TABLE[c]);
                c="";
                b="";
            }
            d=(expr[i]+expr[i+1]);
                    switch(d){
                        case '10':
                        d="."
                        break;
                        case '11':
                        d="-"
                        break;
                        
                        case '00':
                        d=""
                            break;     
                    }
                    if(d=='**'){
                        i=i+8;
                        letters=letters+" ";
                        continue;
                    }   
            c=c+d;
            d="";
            a++;       
        }
        return letters;
}

module.exports = {
    decode
}