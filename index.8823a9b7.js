let e,t="30";document.querySelector("body");const n=document.querySelector(".end"),o=document.getElementById("rocket"),c=document.querySelector(".menu");function s(){o.classList.remove("is-hidden");let r=t.toString();o.innerHTML=r.padStart(2,"0"),t--,t<0?(btn.classList.add("rotate-90-cw"),n.classList.remove("end"),clearTimeout(e)):e=setTimeout(s,1e3),"00"===o.textContent&&(c.classList.remove("is-hidden"),o.innerHTML="",console.log("Время вышло"),t="3"),console.log(o)}const r=document.querySelector("#btn"),i=document.querySelector(".menu"),d=(document.querySelector("#rocket"),(e,t)=>{const n=e+Math.random()*(t-e+1);return Math.floor(n)});r.addEventListener("mouseenter",(function(){i.classList.contains("is-hidden")&&(btn.style.left=`${d(0,90)}%`,btn.style.top=`${d(0,90)}%`)})),btn.addEventListener("click",(()=>{menu.classList.contains("is-hidden")&&alert("Congrats! You hit the button! What are you doing with your life? :D"),total+=1}));const u=document.querySelector(".menu"),l=document.querySelector("#start"),a=document.querySelector("#pause");l.addEventListener("click",(function(){u.classList.add("is-hidden"),s(),btn.classList.remove("rotate-90-cw")})),a.addEventListener("click",(function(){s()})),document.addEventListener("keyup",(function(e){"Space"===e.code&&(clearTimeout(timer),console.log(e))}));
//# sourceMappingURL=index.8823a9b7.js.map