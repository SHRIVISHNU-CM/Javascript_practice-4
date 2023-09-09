
function arryofelements(arr, callback){
    let newarr=[];
    for(let key of arr){
        ele = callback(key)
        newarr.push(ele)
    }
    console.log(newarr)
    return newarr;
    
}
function double(n){
    return n*n;
}

arryofelements([1,2,3,4],double)


