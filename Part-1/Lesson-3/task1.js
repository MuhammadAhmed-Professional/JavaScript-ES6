let object = {
    name : "Muhammad Ahmed",
    first : function () { console.log(`hello from a normal function my name is ${this.name}`)},
    second : () => {console.log(`hello from arrow function my name is ${this.name}`)}
}
object.first()
object.second()