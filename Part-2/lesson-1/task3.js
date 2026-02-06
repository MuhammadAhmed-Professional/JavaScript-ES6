let array = ["Muhammd", "Ahmed", "Qasim"];

function mapCopy (arr, callback) {
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        let result = callback(arr[i], i, arr)
        newarr.push(result)
    }
    return newarr
}

let usingMap = mapCopy(array, (item)=>{
    return item += " Dev"
})

console.log(usingMap)