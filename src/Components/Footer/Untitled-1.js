
 
var expect = function (val) {
    return {
        "toBe": function (newdata) {
           
           
    if (val === newdata)
         { return  val === newdata  }

  
        
          
        else {
                return  "Not Equal" ;
                
            }
              

        }
        ,
        "notToBe": function (newdata) {
           
        
           
            if (val !== newdata) 
                { return  true }
           
       else
           {
                return  "equal" ;
            }
          
        }
    }

};

console.log(expect(5).toBe(null))

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */