let arr = ["orange", "banana", "mango"]
let first = () => {
    let newArr = ""
    arr.forEach((item)=>{
        newArr += item + "a "
    })
}
let fir = first()
console.log(`this is the first one ${fir} `)

let second = () => {
    let newArr = ""
    arr.forEach((item)=>{
        newArr += item + " 1 "
    })
    return newArr
}

let sec = second()
console.log(`this is the second one ${sec}`)