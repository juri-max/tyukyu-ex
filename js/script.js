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