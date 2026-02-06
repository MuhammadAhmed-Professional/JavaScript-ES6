let arr = [
    {name: "Muhammad", age : 19 , score: 80, active: true },
    {name: "Tariq", age : 22 , score: 50, active: true },
    {name: "Qasim", age : 21 , score: 90, active: false },
    {name: "Shayan", age : 24 , score: 70, active: true }
]

console.log(`original array`)
console.log(arr)
// creating closure

function createScoreChecker(minScore) {
  console.log(`Closure created with minScore = ${minScore}`);
  return function (score) {
    return score >= minScore;
};
}

const isPassingScore = createScoreChecker(60);

// filter only active student

const activeUsers = arr.filter((ele)=>{if(ele.active === true){return ele}});

console.log(`list of active users only:`)
console.log(activeUsers)

// transforming array destructuring and spread

let transformed = activeUsers.map(user => {
    let {name, score} = user
    return{
        ...user,
        passed : isPassingScore(score),
        lebel: `${name} ${score}`
    }
})

console.log(transformed)

//using reduce to find total score 

let total = transformed.reduce((acc, {score} )=> {
    return acc + score
}, 0)

console.log(`total score ${total}`)

console.log("unexpected behaviour 1 : have to console arr sepratly using template litrels does not help")
console.log("unexpected behaviour 2 : i didnt know that i had to put score in this {score} for it to work")