function reduce(arr, callback){
  let returnValue = callback(arr[0],arr[1]);

  for(let i=2;i<arr.length;i++){
    returnValue = callback(returnValue,arr[i]);
  }

  return returnValue
}

function callback(x,y){
  return x+y;
}

arr=[1,2,3,4]

res = reduce(arr,callback)
console.log(res)