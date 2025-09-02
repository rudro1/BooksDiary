const matrix = [];
const rows = 5;
const cols = 5;

let text="abcdefghijklmnopqwrstwxyz" ;

text=text.split('');

// Starting value for demonstration
// for(let i=0;i<rows;i++)
// {
//     matrix [i]=[];
//     for(let j=0;j<cols;j++)
//     {
//         // matrix[i][j]=value[j]
        
//         // console.log(i,"i",j,"j")
//      if(text[count]=="i" && text[count+1]=="j")
//         {
//             text[count]="i/j";
//             text[count+1]=text[count+1+1];
//         }
//         matrix[i][j]=text[count];
     

   

//       count<25 &&   count++;
//     }

    
   
// }



// console.log(keymat)
// // keymat[1].push(1)
// console.log(keymat[1])

let keymat=[];
let value = "student";
let newarr=[];
value=value.split("");
value.forEach(x => {
  ! newarr.includes(x) && newarr.push(x)

});
// console.log(newarr,"value")
let keycount=0;
let count=0;
let len=newarr.length;

// keymat=[...matrix];
for(let i=0;i<rows;i++)
    {
       keymat[i]=[];
    for(let j=0;j<cols;j++)
    {
 
     if( keycount<len)   
     {  
      
     {

       keymat[i][j]=newarr[keycount];
      keycount++
   }
    
 
     }

      else
       {
if(!keymat.some(data=>data.includes(text[count])))
  {
         keymat[i][j]=text[count];
      
   console.log(count)
          count++;   
       }
       else{
        
   count++;   
  
       }

    }

  

 
   
     
     
      
    
    }

    }
// console.log(keymat.indexOf("s"))     
// console.log(keymat.includes("a"))
console.log(keymat)


    //  if(text[count]=="i" && text[count+1]=="j")
    //     {
               
    //         text[count]="i/j";
    //          text[count+1]=text[count+1+1];
        
    //     }