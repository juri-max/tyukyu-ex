// ===== ローディング画面（初回アクセスのときだけ表示） =====
const loading = document.getElementById('loading');

if (loading) { // ← ローディングが無いページ（about等）では何もしない
  if (sessionStorage.getItem('visited')) {
    // 【2回目以降】もう見たので、出さずにすぐ消す
    loading.style.display = 'none';
  } else {
    // 【初回】読み込み完了後に、少し見せてから消す
    window.addEventListener('load', function() {
      sessionStorage.setItem('visited', 'true'); // 「もう見たよ」を記録
      setTimeout(function() {
        loading.classList.add('is-hidden');       // CSSのtransitionでふわっと消える
      }, 1200);                                    // 1.2秒見せてから消し始める
    });
  }
}



// ============================================
// フォトスライダー（Swiper.js）
// ============================================

const photoSlider = new Swiper(".photo-slider__swiper", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: false,
  breakpoints: {
    520: {
      spaceBetween: 40,
    },
  },    
});

// jQueryが読み込まれてから実行
$(function() {

  // ============================================
  // ハンバーガーメニュー
  // ============================================
  $('#hamburger').on('click', function() {
    $(this).toggleClass('is-open');
    $('#sp-nav').toggleClass('is-open');
    $('body').toggleClass('is-modal-open');
  });

  // ← 追加！sp-nav内の✕ボタンで閉じる
  $('#sp-nav-close').on('click', function() {
    $('#hamburger').removeClass('is-open'); // ハンバーガーを3本線に戻す
    $('#sp-nav').removeClass('is-open');    // navを非表示に
    $('body').removeClass('is-modal-open'); // スクロール再開
  });

  // ============================================
  // サイドバー アコーディオンメニュー
  // ============================================
  $('.has-child').on('click', function() {
    $(this).toggleClass('is-open');
  });

  // ============================================
  // モーダルウィンドウ
  // ============================================
  $('.news__link').on('click', function(e) {
    e.preventDefault();
    const targetId = $(this).data('modal');
    $('#' + targetId).fadeIn(300);
    $('body').addClass('is-modal-open');
  });

  $(document).on('click', '.modal__overlay, .modal__close, .modal__btn', function(e) {
    e.preventDefault();
    $('.modal').fadeOut(300);
    $('body').removeClass('is-modal-open');
  });

});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitBtn = contactForm.querySelector('.contact-form__submit');
  contactForm.addEventListener('input', function() {
    submitBtn.disabled = !contactForm.checkValidity();
  });
}