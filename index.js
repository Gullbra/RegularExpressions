const promptSync = require('prompt-sync')()

/*
    /[a-z]/	    Find any character between the brackets
    /[^0-9]/	  Find any number NOT between the brackets
    /[a-z]/i   	(case insesitive)Find any character between the brackets
    /[a-z]|\s/  Find any lower case characters and whitespaces
    /\d/        Find any digit
    /\D/        Find any non-digit
    /./         Find any character (excluding empty string, \n, \t etc)
*/

console.log(
  "----------------\nRegExp tester JS\n----------------\nCheckout docs: https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
)
let exp =  process.argv[2] 
  ? process.argv[2].split('/')
  : promptSync(`Input regular expression, including /: `).split('/')
console.log()

let regExp = RegExp(exp[1], exp[2])
let inputString;

do {
  console.log('  Testing', regExp)
  inputString = promptSync('Input string to check if it matches, or type "QQ" to quit, or "CC" to change RegExp): ')

  if (inputString === null || inputString.toUpperCase() == 'QQ'){
    break
  }
  else if (inputString.toUpperCase() == 'CC'){
    try {
      console.log(
        "\nCheckout docs: https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
      )
      exp = promptSync(`Input regular expression, including /: `).split('/')
      regExp = RegExp(exp[1], exp[2])
      console.log()
      continue
    }
    catch(e) {
      console.log("Invalid regExp")
      break
    }    
  }

  console.log(
    ' ', 
    inputString,
    '=>', 
    regExp.test(inputString)
  )
  inputString = promptSync()

} while (inputString !== null && inputString.toUpperCase() !== 'QQ')

console.log('\n...shutting down...\n')