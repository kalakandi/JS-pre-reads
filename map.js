function map(arr,callback){
    result = []
    for(let i=0;i<arr.length;i++){
      result.push(callback(arr[i]));
    }
    return result
  }
  
  function twice(x)
  {
    return x*2;
  }
  
  list = [1,2,3]
  
  li = map(list,plusOne)
  
  console.log(li)