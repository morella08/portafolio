
const hero = document.querySelector('.hero');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 20;
  const y = (e.clientY / window.innerHeight) * 20;
  hero.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
