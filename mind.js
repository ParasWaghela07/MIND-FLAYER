let count=0;
let a = document.getElementsByClassName("col");
let b = Math.floor(Math.random() * 9);
a[b].innerHTML = "t";

    function helper(){

    let y = document.getElementsByClassName("col");

    Array.from(allboxes).forEach(e=>{
        e.innerHTML="";
    })

    let o = Math.floor(Math.random() * 9);
    y[o].innerHTML = "t";
    
    }


let allboxes=document.getElementsByClassName("col");

    Array.from(allboxes).forEach(e=>{
        
        e.addEventListener('click',function(){
    
            if(e.innerText==="t"){
                document.getElementById("score").innerText="SCORE : - " + (++count);
                helper();
            }
            else{
                document.getElementById("score").innerText="GAME OVER\n" + "YOUR SCORE :  " + (count) + "\n ( TRY AGAIN ! )";
                count=0;
                alert("BETTER LUCK NEXT TIME !")
            }
    
        })
    }) 

    



