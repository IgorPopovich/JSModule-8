!function(){let e={};const t=document.querySelector(".feedback-form");if(t.addEventListener("input",(a=>{e[a.target.name]=a.target.value.trim();let l=t.elements.email,m=t.elements.message;""!=l.value.trim()&&(localStorage.setItem("feedback-form-state",JSON.stringify(e)),""!=m.value.trim()&&localStorage.setItem("feedback-form-state",JSON.stringify(e)))})),localStorage.getItem("feedback-form-state")){e=JSON.parse(localStorage.getItem("feedback-form-state"));for(let a in e)t.elements[a].value=e[a]}document.querySelector('[type="submit"]').addEventListener("click",(e=>{e.preventDefault();let a=t.elements.email,l=t.elements.message;if(""==a.value.trim()||""==l.value.trim())alert("Всі поля повинні бути заповнені.");else{let e={email:a.value.trim(),message:l.value.trim()};console.log(e),t.reset(),localStorage.removeItem("feedback-form-state")}}))}();
//# sourceMappingURL=03-feedback.b52581aa.js.map
