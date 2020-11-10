'use strict'

function formula (height, mass) {
    let BMI = mass / height ** 2
    return BMI
}

let tomBMI = formula(9, 8)
let jerryBMI = formula(10, 45)

let tomHigherBMI = tomBMI > jerryBMI

console.log(tomBMI, jerryBMI, tomHigherBMI)