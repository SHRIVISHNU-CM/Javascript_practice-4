function hello(name) {
    return new Promise((resolve, reject) => {
        resolve(console.log("hello",name))
        
    })
}
hello("Mithin")