const prompt = require("prompt-sync")();


let totalRegisteration = prompt("Total registeration:");
let fieldOne = prompt("Field number one:");


let fields = {
    field1: fieldOne,
    field2: totalRegisteration - 6,
    field4: 3,
    field5: 3,
    field10: 1,
    field11: 2,
}

fields.field3 = fields.field1 - (fields.field2 + fields.field4),
fields.field6 = fields.field3 + fields.field4 + fields.field5,
fields.field7 = fields.field2 - fields.field5,
fields.field8 = fields.field6 + fields.field7,
fields.field9 = fields.field5 + fields.field7,
fields.field12 = fields.field7 - 3,
fields.field13 = fields.field10 + fields.field11 + fields.field12

console.log(fields)

module.exports = { fields }