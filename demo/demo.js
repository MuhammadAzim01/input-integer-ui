const inputInteger = require('..')

const input1 = inputInteger()

title = 'demo form'
subTitle = 'Please fill out the details:'

const page = document.createElement('div')

page.innerHTML = `
    <h1> ${title} </h1>
    <h2> ${subTitle} </h2>
    <h3> Enter your age </h3>
    <x></x>
`

page.querySelector('x').replaceWith(input1)

document.body.append(page)