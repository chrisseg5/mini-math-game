"use strict";

let tries=0;
let success=0;
const numbers=[2,3,4,5,6,7,8,9];
let choice=prompt(" Δώσε αριθμό :");
let h3=document.querySelector('h3');
let h4=document.querySelector('h4');
let h5=document.querySelector('h5');
let i =0;
h3.innerHTML='2 x '+choice+' = <input type="text">'


function ask(){
    h3.innerHTML=numbers[i] + ' x '+choice+' = <input type="text" id="answer" size="3"> <button id="c">OK</button>   '
    document.querySelector('button').addEventListener('click',function(){
        let self=this;
        let text=this.innerText;
        this.innerText='You clicked me !';
        setTimeout(function(){
            self.innerText=text
        },3000)
        if (numbers[i] * choice==document.querySelector('#answer').value){
            h4.innerText='Συγχαρητήρια! '
            h4.style.backgroundColor = "green";
            h4.style.marginTop="100px";
            success++;
            i++
        }else{
            h4.innerText="Δοκίμασε ξανά ! "
            h4.style.backgroundColor = "red";
            h4.style.marginTop="100px";
        }
        tries++;
        document.querySelector('h2').innerText='Σκορ '+success+ '  στις  '+tries+ '  Προσπάθειες';
        if(i<numbers.length){
            ask()
        } else{
            location.reload(); 
        }
    })

}

ask()
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }