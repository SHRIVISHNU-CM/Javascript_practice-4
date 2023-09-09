

async function getdata (){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const output = await response.json();
    console.log(output);
}
getdata()