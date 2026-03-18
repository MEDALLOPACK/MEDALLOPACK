// MEDALLOPACK — main script
function toggleMenu(){ document.querySelector('.nav-links')?.classList.toggle('open'); }
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
// Fade-in cards on scroll
document.querySelectorAll('.project-card,.feature-card').forEach(el=>{
  el.style.cssText+='opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease;';
  new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity='1';el.style.transform='translateY(0)';}},{threshold:0.1}).observe(el);
});
// Docs sidebar active link
const secs=document.querySelectorAll('section[id]'),slinks=document.querySelectorAll('.sidebar-link');
if(secs.length&&slinks.length){
  new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){slinks.forEach(l=>l.classList.remove('active'));document.querySelector('.sidebar-link[href="#'+e.target.id+'"]')?.classList.add('active');}});},{threshold:0.5}).observe(...secs);
}
console.log('✅ MEDALLOPACK listo.');
