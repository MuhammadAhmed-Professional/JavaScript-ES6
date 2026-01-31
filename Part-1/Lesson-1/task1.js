function scope(){
    var first = "var variable called first inside a scope"
    console.log(first)
    return first

}
function secondScoe(){
    let first = "let variable called first inside another scope"
    console.log(first)
    return first
}

console.log(`console.log to accesses the variable outside the scope ${scope()}`) 
console.log(`console.log to accesses the variable outside the scope ${secondScoe()}`)
