(()=>{"use strict";const e=document.querySelector(".message"),t=document.querySelector(".number"),o=document.querySelector(".score"),n=document.querySelector(".check"),c=document.querySelector("body"),l=document.getElementById("input"),r=document.querySelector(".highscore"),u=document.querySelector(".again"),d=document.getElementById("btn-check"),s=document.querySelector(".guess");let m=0,i=5,a=0;o.textContent=i;const y=()=>{m=Math.trunc(20*Math.random())+1},h=t=>{e.textContent=t},b=e=>{o.textContent=e};y(),console.log(m),n.onclick=()=>{const e=Number(s.value);e?e===m?(h("🎉 Correct Number!"),c.classList.add("body-win"),t.textContent=m,t.style.width="30rem",i>a&&(a=i,r.textContent=a),d.disabled=!0):e!==m&&(i>1?(e=>{i--,h(e),b(i)})(e>m?"📈 Too high!":"📉 Too low!"):(h("💥 You lost the game!"),o.textContent=0,d.disabled=!0)):h("⛔️ No number!!")},l.addEventListener("keyup",(e=>{13===e.keyCode&&l.value.length>=0&&n.click()})),u.onclick=()=>{i=5,b(i),c.classList.remove("body-win"),s.value="",y(),t.textContent="?",t.style.width="15rem",console.log(m),d.disabled=!1}})();