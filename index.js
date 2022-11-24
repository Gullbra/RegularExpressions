// * imports
const promptSync = require('prompt-sync')()

// ! https://www.w3schools.com/jsref/jsref_obj_regexp.asp
/*
    /[a-z]/	    Find any character between the brackets
    /[^0-9]/	Find any number NOT between the brackets
    /[a-z]/i   	(case insesitive)Find any character between the brackets
    /[a-z]|\s/  Find any lower case characters and whitespaces
    /\d/        Find any digit
    /\D/        Find any non-digit
    /./         Find any character (excluding empty string, \n, \t etc)
*/


let exp =  process.argv[2].split('/') || promptSync('Input regular Expression: ').split('/')
let regExp = RegExp(exp[1], exp[2])
console.log('Input "quit" to quit, "change" to change expression, "view" to view expression\n')

while (true){
    let testStr = promptSync('Input Test String ("quit" to quit, "view" to view, "change" to change): ')
    if (testStr.toLowerCase() == 'quit'){
        break
    }
    else if (testStr.toLowerCase() == 'change'){
        exp = promptSync('Input regular Expression: ').split('/')
        regExp = RegExp(exp[1],exp[2])
        console.log('\n')
        continue
    }
    else if (testStr.toLowerCase() == 'view'){
        console.log(`RegExp: ${regExp}\n`)
        continue
    }

    // console.log(
    //     testStr.split(regExp),
    //     testStr.split(regExp).map(word => {
    //         return word[0].toUpperCase() + word.slice(1)
    //     })
    // )

    console.log(
        regExp.test(testStr)
    )
}
console.log('end\n')