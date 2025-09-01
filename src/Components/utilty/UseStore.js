const getreaditems=()=>{
let x=[];
  let store=  localStorage.getItem("store");
    if(store)
    {
        
return  JSON.parse(store);
    }
else{

   return x; 
}
}

const setitemstothat=(id)=>{

let store=getreaditems();
!store.includes(id) &&store.push(id);

let newarr =JSON.stringify(store);
localStorage.setItem("store",newarr);
removeifreadyou(id);

}
const removeifreadyou=(id)=>{
// const read=JSON.parse(localStorage.getItem("store"));
const wishlist=JSON.parse(localStorage.getItem("wish-list"));

if(wishlist.includes(id))
{

let newarray=wishlist.filter(ids=>ids!=id);
const stringfythat=JSON.stringify(newarray);
localStorage.setItem("wish-list",stringfythat);
}
else
{
    return true
}
}

export {setitemstothat,getreaditems} 
