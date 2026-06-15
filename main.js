// 臣璽律師事務所 — 全站共用腳本
(function(){
  // header 捲動變色
  var header = document.querySelector('.site-header');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // 手機選單
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav .close');
  if(menuBtn && mobileNav){
    menuBtn.addEventListener('click', function(){ mobileNav.classList.add('open'); });
  }
  if(closeBtn && mobileNav){
    closeBtn.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  }
  if(mobileNav){
    mobileNav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
    });
  }

  // scroll reveal
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // 表單送出（前端示意）
  var form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var note = document.querySelector('#formNote');
      if(note){ note.textContent = '已收到您的諮詢需求，我們將於一個工作天內回覆。'; note.style.display='block'; }
      form.reset();
    });
  }
})();
