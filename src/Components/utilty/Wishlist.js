const getwishitem=()=>{

    const wishlist=localStorage.getItem("wish-list");
    if(wishlist)
    {
const wishlists= JSON.parse(wishlist)
return wishlists;
    }
    else
    {
        return [];
    }
}

const setitemstowishlist=(id)=>{
const read=JSON.parse(localStorage.getItem("store"));
const wishlist=getwishitem();



    (!wishlist.includes(id) && !read.includes(id)   ) && wishlist.push(id);

const newdata=JSON.stringify(wishlist);
localStorage.setItem("wish-list",newdata);


}



export {setitemstowishlist,getwishitem}