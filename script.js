const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-offer]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();alert('Connect your approved AdBlueMedia offer URL here. Review the offer terms and eligibility before publishing.');}));
