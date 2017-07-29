// $(document).ready( function() {

const leftArrow = $('.news-side-arrow:nth-of-type(2) a');
const rightArrow = $('.news-side-arrow:nth-of-type(1) a');
const leftInfo = $('.middle-left button');
const rightInfo = $('.middle-right button');

let contentLeft = $('.news-body');
let contentRight = $('.news-body');

let sample =
`        <div class="news-side-content">
          <div class="news-side-image">
            <div class="news-wrapper">
              <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
              <div class="news-content">
                <div class="news-header-left">
                  <h5>Marriott 2016 / out door lighting</h5>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div class="news-side-arrow"><a href="#"><</a></div>
        </div>

          <div class="news-wrapper">
            <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
            <div class="news-content">
              <div class="news-header-left">
                <h5>Marriott 2016 / out door lighting</h5>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div class="news-button-center">
                <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
              </div>
            </div>
          </div>

          <div class="news-wrapper">
            <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
            <div class="news-content">
              <div class="news-header-left">
                <h5>Szonka czerna 2016 / out door lighting</h5>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div class="news-button-center">
                <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
              </div>
            </div>
          </div>

        <div class="news-side-content">
          <div class="news-side-arrow"><a href="#">></a></div>
          <div class="news-side-image">
            <div class="news-wrapper">
              <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
              <div class="news-content">
                <div class="news-header-left">
                  <h5>Marriott 2016 / out door lighting</h5>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>`

          let sample2 =
          `        <div class="news-side-content">
                    <div class="news-side-image">
                      <div class="news-wrapper">
                        <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                        <div class="news-content">
                          <div class="news-header-left">
                            <h5>Marriott 2016 / out door lighting</h5>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="news-side-arrow"><a href="#"><</a></div>
                  </div>

                    <div class="news-wrapper">
                      <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                      <div class="news-content">
                        <div class="news-header-left">
                          <h5>Marriott 2016 / out door lighting</h5>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div class="news-button-center">
                          <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
                        </div>
                      </div>
                    </div>

                    <div class="news-wrapper">
                      <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                      <div class="news-content">
                        <div class="news-header-left">
                          <h5>Szonka czerna 2016 / out door lighting</h5>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div class="news-button-center">
                          <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
                        </div>
                      </div>
                    </div>

                  <div class="news-side-content">
                    <div class="news-side-arrow"><a href="#">></a></div>
                    <div class="news-side-image">
                      <div class="news-wrapper">
                        <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                        <div class="news-content">
                          <div class="news-header-left">
                            <h5>Marriott 2016 / out door lighting</h5>
                          </div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                    </div>`

                    let sample3 =
                    `        <div class="news-side-content">
                              <div class="news-side-image">
                                <div class="news-wrapper">
                                  <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                                  <div class="news-content">
                                    <div class="news-header-left">
                                      <h5>Marriott 2016 / out door lighting</h5>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="news-side-arrow"><a href="#"><</a></div>
                            </div>

                              <div class="news-wrapper">
                                <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                                <div class="news-content">
                                  <div class="news-header-left">
                                    <h5>Marriott 2016 / out door lighting</h5>
                                  </div>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  </p>
                                  <div class="news-button-center">
                                    <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
                                  </div>
                                </div>
                              </div>

                              <div class="news-wrapper">
                                <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                                <div class="news-content">
                                  <div class="news-header-left">
                                    <h5>Szonka czerna 2016 / out door lighting</h5>
                                  </div>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  </p>
                                  <div class="news-button-center">
                                    <button type="button" name="button" onclick="location.href='detail.html'">More Information</button>
                                  </div>
                                </div>
                              </div>

                            <div class="news-side-content">
                              <div class="news-side-arrow"><a href="#">></a></div>
                              <div class="news-side-image">
                                <div class="news-wrapper">
                                  <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/da/e8/74/thinkstockphotos-516418718.jpg" />
                                  <div class="news-content">
                                    <div class="news-header-left">
                                      <h5>Marriott 2016 / out door lighting</h5>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                  </div>
                                </div>
                              </div>`

$('').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});




// let arr = [sample, sample2, sample3];
// let index = 0;
//   leftArrow.on("click", function() {
//       //contentLeft.effect("slide", { direction: "left" }).html(arr[index]);
//       $('.news-wrapper').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//        });
//       //index = (index + 1) % arr.length ;
//   });
//
//   rightArrow.on("click", function() {
//     // if contentRight is NOT shown, keep changing the content of contentLeft
//     let a = contentRight.css("display");
//     if(a === undefined) {
//         contentLeft.effect("slide", { direction: "right" }).html(arr[index]);
//       index = (index + 1) % arr.length ;
//     } else {
//         contentRight.effect("slide", { direction: "right" }).html(arr[index]);
//       index = (index + 1) % arr.length ;
//     }
//   });

// });
