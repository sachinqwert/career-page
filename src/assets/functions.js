export function separateObjects (arr){
  let Engineering = [],Design = [],Culture = [];
  for(let obj of arr){
    if(obj.category === 'Engineering')
      Engineering.push(obj);
    else if(obj.category === 'Design and Research')
      Design.push(obj);
    else  
      Culture.push(obj);
  }

  let response =  {
    Engineering,
    Design,
    Culture
  }
  console.log(response);
  return response;
}

