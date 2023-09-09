

function hello(books,callback){

            let output= books.map((book) => {
            return book.title;
        
            

    })
    callback(output)

}

function getarr(output){
    console.log(output.sort()); 
}
hello([
    { author: "vishnu", title: "srihari" },
    { author: "shri", title: "hi" },
    { author: "Om", title: "vishnu" }
],getarr)