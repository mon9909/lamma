document.addEventListener('DOMContentLoaded',()=>{
 const button=document.querySelector('.menu');
 const nav=document.querySelector('#primary-navigation');
 if(button&&nav){
  const close=()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')};
  button.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close()});
 }
 document.querySelectorAll('a').forEach(a=>{if(a.href===location.href)a.setAttribute('aria-current','page')});
});
