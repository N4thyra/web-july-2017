// $(document).ready( function() {

const leftArrow = $('.news-side-arrow:nth-of-type(2) a');
const rightArrow = $('.news-side-arrow:nth-of-type(1) a');
const leftInfo = $('.middle-left button');
const rightInfo = $('.middle-right button');

let contentLeft = $('.news-wrapper:nth-of-type(2)');
let contentRight = $('.news-wrapper:nth-of-type(3)');

let sample = `
  <img src="http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg" />
  <div class="news-content">
  <div class="news-header-left">
    <h5>Prague 2018 / Super sad kitten</h5>
  </div>
  <p>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <div class="news-button-center">
    <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
  </div>
  `;
let sample2 = `
<img src="https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781" />
<div class="news-content">
  <div class="news-header-left">
    <h5>Italy / Are you going to buy me??? Make me happy!</h5>
  </div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <div class="news-button-center">
    <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
  </div>
  `;

let sample3 = `
<img src="http://1.bp.blogspot.com/-gh1ZlS1-eqM/UC0ZI9KLenI/AAAAAAAAElA/n22HivOht0A/s640/tumblr_m29r7auwhd1qlluv1o1_500_large.jpg" />
<div class="news-content">
  <div class="news-header-left">
    <h5>I am the boss here!</h5>
  </div>
  <p>Lorem Ipsum is simply dummy text of eublishing software like is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlrsions of Lorem Ipsum.
  </p>
  <div class="news-button-center">
    <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
  </div>
  `;
let arr = [sample, sample2, sample3];
let index = 0;
  leftArrow.on("click", function() {
      contentLeft.effect("slide", { direction: "left" }).html(arr[index]);
      index = (index + 1) % arr.length ;
  });

  rightArrow.on("click", function() {
    // if contentRight is NOT shown, keep changing the content of contentLeft
    let a = contentRight.css("display");
    if(a === undefined) {
        contentLeft.effect("slide", { direction: "right" }).html(arr[index]);
      index = (index + 1) % arr.length ;
    } else {
        contentRight.effect("slide", { direction: "right" }).html(arr[index]);
      index = (index + 1) % arr.length ;
    }
  });

// });
