function forEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}


function callback(x){
    console.log(x)
}

arr = [1,2,3]
forEach(arr,callback)
