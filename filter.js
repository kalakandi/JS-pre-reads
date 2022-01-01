function filter(arr, callback){
  resArr = []
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i])){
      resArr.push(arr[i]);
    }
  }

  return resArr;
}

function callback(x){
  if(x>5)
  return true;

  return false;
}

arr = [2,4,6,8,10]
console.log(filter(arr,callback))