// ============================================
// フォトスライダー（Swiper.js）
//
// 【Swiperの基本的な使い方】
// new Swiper("対象のクラス名", { オプション })
// オプションで動き・速さ・ループなどを設定する
// ============================================

const photoSlider = new Swiper(".photo-slider__swiper", {

  // ループ設定
  // true にすると最後のスライドの次に最初が来る（無限ループ）
    loop: true,

  // 自動再生設定
    autoplay: {
        delay: 0,          // 0にすると止まらず流れ続ける
        disableOnInteraction: false, // 操作後も自動再生を続ける
    },

  // スライドの速さ（ミリ秒）
  // 数値が大きいほどゆっくり
    speed: 3000,

  // 一度に表示するスライド数
  slidesPerView: "auto", // autoにするとCSSで幅を制御できる

  // スライド間の余白
    spaceBetween: 40,

  // 中央寄せ
    centeredSlides: false,
});

// jQueryが読み込まれてから実行
$(function() {

  // ============================================
  // モーダルウィンドウ
  //
  // 【処理の流れ】
  // 1. news__link をクリック
  // 2. data-modal の値（例：modal-01）を取得
  // 3. その id のモーダルをふわっと表示
  // ============================================

  // モーダルを開く
  $('.news__link').on('click', function(e) {
    e.preventDefault(); // aタグのデフォルト動作（ページ遷移）を止める

    const targetId = $(this).data('modal');
    // data-modal="modal-01" の値を取得 → "modal-01"

    $('#' + targetId).fadeIn(300);
    // #modal-01 をふわっと表示（300ミリ秒）

    $('body').addClass('is-modal-open');
    // bodyにクラスを追加してスクロールを止める
  });

  // モーダルを閉じる（オーバーレイ・✕ボタン・閉じるボタン）
  $(document).on('click', '.modal__overlay, .modal__close, .modal__btn', function(e) {
    e.preventDefault();
    $('.modal').fadeOut(300); // ふわっと非表示
    $('body').removeClass('is-modal-open'); // スクロール再開
  });

});