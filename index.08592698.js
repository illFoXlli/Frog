document.querySelector("body");const t=document.querySelector(".end"),e=(t,e)=>{const o=t+Math.random()*(e-t+1);return Math.floor(o)};let o=0;const n=document.querySelector("#btn");let r;n.addEventListener("mouseenter",(()=>{l>0&&(n.style.left=`${e(0,90)}%`,n.style.top=`${e(0,90)}%`),0===l&&(n.style.left="50%",n.style.top="50%")})),n.addEventListener("click",(()=>{alert("Congrats! You hit the button! What are you doing with your life? :D"),o+=1}));let l="30";!function e(){let o=l.toString();document.getElementById("rocket").innerHTML=o.padStart(2,"0"),l--,l<0?(n.classList.add("rotate-90-cw"),t.classList.remove("end"),clearTimeout(r)):r=setTimeout(e,1e3)}();
//# sourceMappingURL=index.08592698.js.map
