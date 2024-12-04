import { readFileSync } from 'fs'

let leftList: Array<number> = []
let rightList: Array<number> = []

const input = readFileSync('inputs/input1', 'utf8')

input.split('\n').forEach((line) => {
    if (line.trim().length === 0) return

    const numberLeft = Number(line.trim().split('|')[0])
    const numberRight = Number(line.trim().split('|')[1])

    leftList.push(numberLeft)
    rightList.push(numberRight)
})

leftList.sort((a, b) => a - b)
rightList.sort((a, b) => a - b)

let totalDifference = 0

leftList.forEach((_, index) => {
    const difference = Math.abs(leftList[index] - rightList[index])
    totalDifference += difference
})

let similarityScore = 0
leftList.forEach((value) => {
    let numberOccurrences = 0

    rightList.forEach((value2) => {
        if (value === value2) {
            numberOccurrences++
        }
    })

    similarityScore += value * numberOccurrences
})

console.log('Total difference:', totalDifference)
console.log('Similarity score:', similarityScore)
