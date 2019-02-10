function colorFunction() {
    var x = document.getElementById("whatever");
     
       if (x.style.color == "red"){
        x.style.color = "blue";
        
       }
        else {x.style.color = "red";}
       
       console.log(x.style.color);
      }

     function boldFunction() {
        var x = document.getElementById("whatever");
         
           if (x.style.fontWeight == "normal"){
            x.style.fontWeight = "bold";
            
           }
            else {x.style.fontWeight = "normal";}
           
           console.log(x.style.fontWeight);
          }
    

   function italicFunction() {
        var x = document.getElementById("whatever");
            
               if (x.style.fontStyle == "normal"){
                x.style.fontStyle = "italic";
                
               }
                else {x.style.fontStyle= "normal";}
               
               console.log(x.style.fontStyle);
              
             }
    
             
     function underlinedFunction() {
        var x = document.getElementById("whatever");
            //console.log(x.style.textDecoration="underline");
               if (x.style.textDecoration == ""){
                x.style.textDecoration = "underline";
                
               }
                else {x.style.textDecoration= "";}
               
               console.log(x.style.textDecoration);
              
             }



function myFunction() {
    var x = document.getElementById("mySelect").value;
         document.getElementById("whatever").style.fontSize = x;
              }
              function myFunction1() {
                var x = document.getElementById("mySelect1").value;
                     document.getElementById("whatever").style.fontFamily = x;
                          }