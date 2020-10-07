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
  let chars = [];
  for (let i = 0; i < expr.length-9; i += 10) {
    chars.push(expr.slice(i, i+10));
  }

  const make_code = (num) => {
    const code = [];
    for (let i = 0; i < 10; i += 2) {
      if (num[i] + num[i+1] == '10') code.push('.');
      if (num[i] + num[i+1] == '11') code.push('-');
    }
    return code.join('');
  }
  console.log(make_code(chars[0]))

  let result = [];
  for (let code of chars) {
    (code == '**********') ? result.push(' ') : result.push(MORSE_TABLE[make_code(code)]);
  }
  return result.join('');
}

module.exports = {
    decode
}
