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