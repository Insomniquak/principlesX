console.log('hello')

let moment = require('moment')
let _ = require('lodash')


let date1 = moment().format('MMMM Do YYYY, h:mm:ss a')

let d = new Date()

console.log(date1)
console.log(d)

let string = "HELLO"

console.log(_.lowerCase(string))