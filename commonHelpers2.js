import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const o={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]')},a=o.form.elements.state;o.form.addEventListener("submit",m);function m(r){r.preventDefault();const s=o.inputDelay.value,f=a.value;function i(e){return new Promise((n,l)=>{setTimeout(()=>{f==="fulfilled"?n(`Fulfilled promise in ${e}ms`):l(`Rejected promise in ${e}ms`)},e)})}i(s).then(e=>{t.success({theme:"dark",message:`${e}`,messageColor:"#ffffff",backgroundColor:"#59a10d",position:"topRight",iconUrl:"../img/circle.svg",progressBarColor:"#326101",pauseOnHover:!1,closeColor:"#ffffff",timeout:"3000"})}).catch(e=>{t.error({theme:"dark",message:`${e}`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:"../img/octagon.svg",progressBarColor:"#b51b1b",pauseOnHover:!1,closeColor:"#ffffff",timeout:"3000"})})}
//# sourceMappingURL=commonHelpers2.js.map