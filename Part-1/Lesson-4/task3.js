let grades = [90, 78, 85, 89, 34, 44, 98];

let count = 0
for(let marks of grades){
    console.log(marks)
    count += marks
}
console.log(`total percentage ${(count/grades.length)}`)