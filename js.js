document.addEventListener('DOMContentLoaded', () => {

    const menuCheck = document.getElementById('menu-btn-check');
    const menuLinks = document.querySelectorAll('.menu-content a');
  
    let scrollPos = 0;
  
    if (!menuCheck) return;
  
    menuCheck.addEventListener('change', () => {
      if (menuCheck.checked) {
        // 現在位置保存
        scrollPos = window.scrollY;
  
        // smooth scroll を一時的に無効化
        document.documentElement.style.scrollBehavior = 'auto';
  
        // body固定
        document.body.classList.add('no-scroll');
        document.body.style.top = `-${scrollPos}px`;
      } else {
        closeMenu();
      }
    });
  
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuCheck.checked = false;
        closeMenu();
      });
    });
  
    function closeMenu() {
      document.body.classList.remove('no-scroll');
      document.body.style.top = '';
  
      // 即座に元の位置へ戻す
      window.scrollTo(0, scrollPos);
  
      // smooth scroll を元に戻す
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  
  
  
    /* ===== Swiper 無限スライダー ===== */
    if (document.querySelector('.infinite-slider')) {
      new Swiper('.infinite-slider', {
        loop: true,
        loopedSlides: 8,
        slidesPerView: 'auto',
        speed: 10000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }
  
  });
  
   // 「reloaded」という印が保存されていない場合のみ実行
   if (!sessionStorage.getItem('reloaded')) {
    sessionStorage.setItem('reloaded', 'true'); // 印を付ける
    window.location.reload();                   // リロード実行
  }