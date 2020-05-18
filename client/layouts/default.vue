<template>
  <main data-currency-iso-code="SEK">
    <a href="#skip-to-content" class="skiptocontent" data-role="none">text.skipToContent</a>
    <a href="#skiptonavigation" class="skiptonavigation" data-role="none">text.skipToNavigation</a>

    <span
      class="apptusconfig"
      data-apptus-market="SE"
      data-apptus-cluster-i-d="w76E66A6F"
      data-apptus-host-base-url="https://w76E66A6F.api.esales.apptus.cloud"
    ></span>

    <div class="yCmsContentSlot">
      <div class="cookie-bar">
        <div id="js-cookie-notification" class="cookie-bar__content main__inner-wrapper hide">
          <div class="cookie-bar__text">
            <span>Vi använder cookies för att ge dig den bästa upplevelsen på vår webbplats. Om du fortsätter samtycker du till vår policyförklaring.</span>

            <a class="cookie-bar__link" href="/se/site-cookie-policy">Läs mer</a>
          </div>

          <button
            class="js-cookie-notification-accept btn btn-primary"
            aria-hidden="true"
            data-dismiss="alert"
            type="button"
          >OK</button>
        </div>
      </div>
    </div>
    <Header />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.co-checkout-text {
  display: block;
  border: 1px solid #806300;
  background: #fffbea;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px 0;
  text-align: center;
}

.co-checkout-text span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #806300;
  text-align: center;
}

#checkoutContent {
  text-align: center;
  margin: auto;
  width: 100%;
  max-width: 992px;
  display: block;
}

#checkoutContent a:hover {
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  #checkoutContent {
    width: initial;
    margin: 12px;
  }
}

.co-info-text-green {
  display: block;
  border: 1px solid #456940;
  background: #daedc1;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px auto;
}
.co-info-text-green span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #456940;
  text-align: center;
}

.co-info-text-yellow {
  display: block;
  border: 1px solid #806300;
  background: #fffaea;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px auto;
}
.co-info-text-yellow span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #806300;
  text-align: center;
}

.co-info-text-red {
  display: block;
  border: 1px solid #d13c75;
  background: #f5dee7;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px auto;
}
.co-info-text-red span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #d13c75;
  text-align: center;
}

.co-info-text-hyper {
  display: block;
  background: #be3760;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px auto;
}
.co-info-text-hyper span {
  display: block;
  margin: auto;
  width: 95%;
  color: #ffffff;
  text-align: center;
}

/* Allmän CSS som gälllller för hela sidan */
.co-block-1,
.co-block-2,
.co-block-3,
.co-block-2halv-vanster,
.co-block-2halv-hoger,
.co-block-2halv-1,
.co-block-lto {
  margin-bottom: 10px;
}
@media only screen and (min-width: 599px) {
  .co-block-1,
  .co-block-2,
  .co-block-3,
  .co-block-2halv-vanster,
  .co-block-2halv-hoger,
  .co-block-2halv-1,
  .co-block-lto {
    margin-bottom: 16px;
  }
}

.co-block-1 img,
.co-block-2 img,
.co-block-3 img,
.co-block-2halv-1 img {
  width: 100%;
  height: auto;
  /* display: inline-block; */
  vertical-align: middle;
  z-index: 1;
}

/* Banner Tag */
.pTag {
  position: absolute;
  top: 0px;
  left: 0;
  color: white;
  font-size: 10px;
  font-weight: bold;
  line-height: 0;
  padding: 12px 20px;
  z-index: 99;
}

/* Text fält på alla banners */

.co-hp-textarea {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 37%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.55)
  );
  z-index: 3;
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
  text-align: center;
}

.co-hp-textarea h2,
.co-hp-textarea h3,
.co-hp-textarea p {
  color: white;
  text-align: center;
}
.co-link-section,
.co-link-section:visited,
.co-link-section:hover,
.co-link-section:active {
  color: white;
  text-decoration: none;
}

.co-marking {
  background: #60afdc;
  padding: 0.1em 0.5em 0.2em;
  color: white;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline;
}

.co-marking-block2 {
  background: #60afdc;
  padding: 0.2em 0.6em 0.3em;
  color: white;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  display: inline;
}

.co-marketing-text {
  margin-top: 7px !important;
}
@media only screen and (min-width: 768px) {
  .co-marketing-text {
    margin-top: 15px !important;
  }
}
.co-marketing-text-block2 {
  margin-top: 10px !important;
}
.co-hp-btn {
  background-color: #60afdc;
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  border-radius: 2px;
  padding: 6px 13px;
  display: inline-block;
  margin: 5px auto 5px auto;
  transition: ease 0.3s all;
  width: 200px;
  text-align: center;
}

@supports (display: grid) {
  .co-hp-btn {
    width: auto;
  }
}
.whiteBtn {
  background-color: white;
  color: black !important;
  margin-top: 10px;
}
.co-hp-btn:hover {
  background-color: rgba(255, 255, 255, 1);
  color: #60afdc;
  text-decoration: none;
}

/* FONT STORLEK, Olika för olika format */
.co-block-1 h2 {
  font-size: 1.2rem;
  margin: 0;
}

.co-hp-textarea h3 {
  font-size: 1.125rem;
  padding-top: 1rem;
  margin: 0;
}

.co-hp-textarea p {
  padding: 0 1rem;
  margin: 0 0 5px;
  font-size: 0.875rem;
}

@media only screen and (min-width: 350px) {
  .co-block-1 h2 {
    font-size: 1.375rem;
  }

  .co-hp-textarea h3 {
    font-size: 1rem;
  }

  .co-hp-textarea p {
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 500px) {
  .co-block-1 h2 {
    font-size: 2.375rem;
  }
  .co-hp-textarea h3 {
    font-size: 1.25rem;
    padding: 15px 15px 0px;
  }
  .co-block-1 .co-hp-textarea p {
    font-size: 1.125rem;
  }
  .co-block-2 .co-hp-textarea h3 {
    font-size: 1.15rem;
  }
  .co-block-2 .co-hp-textarea p {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 700px) {
  .co-block-1-christmas p {
    width: 80%;
  }
}
@media only screen and (min-width: 768px) {
  .co-block-1 h2 {
    font-size: 42px;
  }
  .co-block-1 .co-hp-textarea p {
    font-size: 1.375rem;
  }
}

/* Fullbanner Block 1 på startsidan */

.co-block-1 {
  max-width: 600px;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
}

@media only screen and (min-width: 599px) {
  .co-block-1 {
    max-width: 992px;
  }
}

/* Startpage Block 2 */
.co-block-2 {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  -ms-grid-template-columns: 1fr;
  -ms-grid-template-rows: 1fr 1fr;
  grid-gap: 5px;
  max-width: 600px;
}

.co-block-2-item1 {
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  max-width: 992px;
  z-index: 1;
  margin-bottom: 10px;
}
.co-block-2-item2 {
  grid-row: 2;
  -ms-grid-row: 2;
  position: relative;
  width: 100%;
  max-width: 992px;
  z-index: 1;
}

@supports (display: grid) {
  .co-block-2-item1 {
    margin-bottom: 0px;
    display: grid;
  }
  .co-block-2-item2 {
    display: grid;
  }
}

@media only screen and (min-width: 599px) {
  .co-block-2 {
    display: -ms-grid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 16px 1fr;
    -ms-grid-rows: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    max-width: 992px;
  }

  .co-block-2-item1 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
    margin-bottom: 0px;
  }
  .co-block-2-item2 {
    grid-column: 2;
    -ms-grid-column: 3;
    grid-row: 1;
    -ms-grid-row: 1;
  }
  @supports (display: grid) {
    .co-block-2-item1,
    .co-block-2-item2 {
      margin: 0px;
    }
  }
}

/* 3 - Block */

.co-block-3 {
  /* CSS för 3 lika storlek */
  /* display: -ms-grid;
  display: grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  -ms-grid-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
  max-width: 600px; */

  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 488px));
  grid-template-rows: auto;
  -ms-grid-columns: 1fr 1fr;
  -ms-grid-rows: 200px 200px 2fr;
  grid-gap: 1px;
  max-width: 600px;
}

.co-block-3 picture,
.co-block-3 img {
  width: 100%;
  height: auto;
  z-index: 1;
  object-fit: cover;
}

.co-hp-btn-block3 {
  position: absolute;
  bottom: 20px;
  margin: 0 auto;
  display: block;
  text-align: center;
  background-color: white;
  color: #53afe6;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  border-radius: 2px;
  padding: 6px 13px;
  transition: ease 0.3s all;
  text-decoration: none;
}
.co-hp-btn-block3:hover {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(45, 138, 192);
}

.co-hp-textarea-block3 {
  display: block;
  width: 100%;
  background: #53afe6;
  z-index: 3;
  padding-bottom: 10px;
  position: absolute;
  top: 0;
  text-align: center;
}

.co-hp-textarea-block3 h2,
.co-hp-textarea-block3 h3,
.co-hp-textarea-block3 p {
  color: white;
  text-align: center;
}
.co-hp-textarea-block3 h3 {
  margin-bottom: 0px;
}
.co-hp-textarea-block3 p {
  padding: 0 20px;
}
.co-block-3-item1 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
}
.co-block-3-item2 {
  /* CSS För 3 bilder på rad
   grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 2;
  -ms-grid-row: 2;
  position: relative;
  width: 100%;
  z-index: 1; */

  grid-column: 2;
  -ms-grid-column: 2;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
}
.co-block-3-item3 {
  /* CSS för 3 bilder på rad
    grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 3;
  -ms-grid-row: 3;
  position: relative;
  width: 100%;
  z-index: 1;
  overflow: hidden; */

  grid-column: 1/3;
  -ms-grid-column: 1 span 3;
  grid-row: 2;
  -ms-grid-row: 2;
  position: relative;
  width: 100%;
  z-index: 1;
  overflow: hidden;
}

@media only screen and (min-width: 599px) {
  .co-block-3 {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    -ms-grid-columns: 3fr 16px 3fr 16px 3fr;
    -ms-grid-rows: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    max-width: 992px;
  }

  .co-block-3-item1 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
    margin-bottom: 0px;
  }
  .co-block-3-item2 {
    grid-column: 2;
    -ms-grid-column: 3;
    grid-row: 1;
    -ms-grid-row: 1;
  }
  .co-block-3-item3 {
    grid-column: 3;
    -ms-grid-column: 5;
    grid-row: 1;
    -ms-grid-row: 1;
    margin-top: 0px;
  }

  @supports (display: grid) {
    .co-block-2-item2,
    .co-block-3-item3 {
      margin-left: 0px;
    }
  }
}

/* Startpage Block 2,5 - Miljöbild till höger - Winterkampanj */

.co-block-2halv h3,
.co-block-2halv p {
  color: white;
  text-align: center;
}
.co-block-2halv h3 {
  font-size: 18px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 0;
}
.co-block-2halv p {
  font-size: 16px;
  line-height: 20px;
}
@media only screen and (min-width: 600px) {
  .co-block-2halv h3 {
    margin-top: 20%;
  }
  .co-block-2halv h3,
  .co-block-2halv p {
    text-align: left;
  }
}
@media only screen and (min-width: 732px) {
  .co-block-2halv h3 {
    font-size: 24px;
    line-height: 28px;
    margin-top: 35px;
  }
  .co-block-2halv p {
    font-size: 23px;
    line-height: 28px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 864px) {
  .co-block-2halv h3 {
    font-size: 26px;
    line-height: 30px;
    margin-top: 25%;
  }
  .co-block-2halv p {
    font-size: 25px;
    line-height: 30px;
  }
}

.co-block-2halv-hoger {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 350px;
  grid-template-rows: minmax(1fr, 300px), 226px;
  -ms-grid-rows: 1fr 226px;
  max-width: 600px;
}
.co-block-2halv-hoger > div {
  overflow: hidden;
}
.co-block-2halv-hoger-item2 img {
  width: 100%;
  height: auto;
  z-index: 1;
}

.co-block-2halv-hoger-item1 {
  background: #53afe6;
  padding: 0 20px;
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 2;
  -ms-grid-row: 2;
  display: flex;
  flex-direction: column;
}

.co-block-2halv-hoger-item2 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (min-width: 599px) {
  .co-block-2halv-hoger {
    grid-template-columns: 1fr minmax(225px, 2fr);
    -ms-grid-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    -ms-grid-rows: 350px;
    max-width: 992px;
  }
  .co-block-2halv-hoger-item1 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
  }

  .co-block-2halv-hoger-item2 {
    grid-column: 2;
    -ms-grid-column: 2;
    grid-row: 1;
    -ms-grid-row: 1;
  }
}

/* Startpage Block 2,5 - Miljöbild till vänster - Winterkampanj */

.co-block-2halv-vanster {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-template-rows: minmax(1fr, 300px), 226px;
  -ms-grid-rows: 1fr 226px;
  max-width: 600px;
}
.co-block-2halv-vanster > div {
  overflow: hidden;
}
.co-block-2halv-vanster-item2 img {
  width: 100%;
  height: auto;
  z-index: 1;
}

.co-block-2halv-vanster-item1 {
  background: #53afe6;
  padding: 0 20px;
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 2;
  -ms-grid-row: 2;
  display: flex;
  flex-direction: column;
}

.co-block-2halv-vanster-item2 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (min-width: 599px) {
  .co-block-2halv-vanster {
    grid-template-columns: minmax(225px, 2fr) 1fr;
    -ms-grid-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    -ms-grid-rows: 350px;
    max-width: 992px;
  }
  .co-block-2halv-vanster-item1 {
    grid-column: 2;
    -ms-grid-column: 2;
    grid-row: 1;
    -ms-grid-row: 1;
  }

  .co-block-2halv-vanster-item2 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
  }
}

/* Startpage Block 2,5 - 1 tex Clas Fixare banners */

.co-block-2halv-1 {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-template-rows: 282px 0.5fr;
  -ms-grid-rows: 282px 0.5fr;
  grid-gap: 5px;
  max-width: 600px;
}
.co-block-2halv-1 > div {
  overflow: hidden;
}
.co-block-2halv-1-item2 img {
  width: 100%;
  height: auto;
  z-index: 1;
}

.co-block-2halv-1-item1 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.co-block-2halv-1-item2 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 2;
  -ms-grid-row: 2;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.co-block-2halv-1-tag {
  position: absolute;
  top: 0;
  left: 0;
}
@supports (display: grid) {
  .co-block-2halv-1-item1 {
    margin-bottom: 0;
  }
}

@media only screen and (min-width: 599px) {
  .co-block-2halv-1 {
    grid-template-columns: 2fr minmax(225px, 1fr);
    -ms-grid-columns: 2fr 16px 1fr;
    grid-template-rows: 282px;
    -ms-grid-rows: 282px;
    grid-gap: 16px;
    max-width: 992px;
  }
  .co-block-2halv-1-item1 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
  }

  .co-block-2halv-1-item2 {
    grid-column: 2;
    -ms-grid-column: 3;
    grid-row: 1;
    -ms-grid-row: 1;
  }

  /* Fonter 2-halv banner */
}

@media only screen and (min-width: 820px) {
  .co-btn-hoger {
    float: right;
    margin-right: 10px;
    transform: translateY(-50%);
  }

  .co-hp-left p {
    width: 75%;
    float: left;
  }
}

/* STYLE FÖR USP */
.co-usp-component ul {
  margin: 0 auto;
  max-width: 500px;
  padding: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  -webkit-flex-flow: row wrap;
  color: black;
}

.co-usp-component li {
  flex: 1;
  min-width: 140px;
  height: 90px;
  text-align: center;
}

.co-usp-component a {
  color: black;
  text-decoration: none;
}

.co-usp-component svg {
  height: 25px;
  width: 25px;
}

.co-usp-component-text {
  color: black;
  display: block;
}

@media only screen and (min-width: 436px) {
  .co-usp-component li {
    min-width: 210px;
  }
}

@media only screen and (min-width: 768px) {
  .co-usp-component ul {
    max-width: 992px;
  }

  .co-usp-component li {
    min-width: 180px;
  }
}

/* Startpage LTO - MiljÃ¶bild till vÃ¤nster  */

.co-block-lto {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  /* grid-template-rows: 300px 1fr; */
  -ms-grid-rows: 1fr 1fr;
  max-width: 600px;
}

.co-block-lto > div {
  overflow: hidden;
}

.co-block-lto-item2 img {
  width: 100%;
  height: auto;
  z-index: 1;
}

.co-block-lto-item1 {
  background: #53afe6;
  padding: 20px 20px 30px;
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 2;
  -ms-grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
@media only screen and (min-width: 600px) {
  .co-block-lto-item1 {
    padding: 7px 20px 8px;
  }
}
@media only screen and (min-width: 622px) {
  .co-block-lto-item1 {
    padding: 15px 10px 10px;
  }
}
@media only screen and (min-width: 780px) {
  .co-block-lto-item1 {
    padding: 30px 20px 20px;
  }
}
@media only screen and (min-width: 900px) {
  .co-block-lto-item1 {
    padding: 50px 20px 20px;
  }
}

.co-block-lto-item2 {
  grid-column: 1;
  -ms-grid-column: 1;
  grid-row: 1;
  -ms-grid-row: 1;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: center/cover no-repeat;
}

@media only screen and (min-width: 599px) {
  .co-block-lto {
    grid-template-columns: minmax(250px, 2fr) 1fr;
    -ms-grid-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    -ms-grid-rows: 350px;
    max-width: 992px;
  }

  .co-block-lto-item1 {
    grid-column: 2;
    -ms-grid-column: 2;
    grid-row: 1;
    -ms-grid-row: 1;
  }

  .co-block-lto-item2 {
    grid-column: 1;
    -ms-grid-column: 1;
    grid-row: 1;
    -ms-grid-row: 1;
  }
}

/* Fonter för LTOn, storlek osv */
.co-block-lto-date,
.co-block-lto-erbj,
.co-block-lto-text,
.co-block-lto-finstilt,
.co-block-lto-kod {
  margin: 0;
}

.co-block-lto-date {
  font-size: 1.75rem;
}

.co-block-lto-erbj {
  font-size: 7.375rem;
  color: white;
  line-height: 0.7;
  margin-bottom: 7px;
}

.co-block-lto-text {
  font-size: 1.1875rem;
  text-align: center;
}

.co-block-lto-finstilt {
  font-size: 0.7rem;
}

.co-block-lto-kod {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10px 0 0;
  color: white;
}

@media only screen and (min-width: 599px) {
  .co-block-lto-date {
    font-size: 1.25rem;
  }

  .co-block-lto-erbj {
    font-size: 4.375rem;
  }

  .co-block-lto-text {
    font-size: 1rem;
  }

  .co-block-lto-finstilt {
    font-size: 0.7rem;
  }

  .co-block-lto-kod {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 8px 0;
  }
}

@media only screen and (min-width: 768px) {
  .co-block-lto-date {
    font-size: 1.75rem;
  }

  .co-block-lto-erbj {
    font-size: 6.375rem;
  }

  .co-block-lto-text {
    font-size: 1.1875rem;
  }

  .co-block-lto-finstilt {
    font-size: 0.8rem;
  }

  .co-block-lto-kod {
    font-size: 1.5rem;
    font-weight: 700;
  }
}

/* GOOD STUFF GREEN */
.co-info-text-green {
  display: block;
  border: 1px solid #456940;
  background: #daedc1;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px 0;
}
.co-info-text-green span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #456940;
  text-align: center;
}

/* MEDIUM YELLOW */
.co-info-text-yellow {
  display: block;
  border: 1px solid #806300;
  background: #fffaea;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px 0;
}
.co-info-text-yellow span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #806300;
  text-align: center;
}

/* IMPORTANT RED */
.co-info-text-red {
  display: block;
  border: 1px solid #d13c75;
  background: #f5dee7;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px 0;
}
.co-info-text-red span {
  display: block;
  margin: 7px auto;
  width: 95%;
  color: #d13c75;
  text-align: center;
}

/* HYPER IMPORTANT */
.co-info-text-hyper {
  display: block;
  /* border: 1px solid #ffffff; */
  background: #be3760;
  border-radius: 3px;
  width: 100%;
  max-width: 992px;
  font-size: 12px;
  line-height: 1.42;
  margin: 16px 0;
}
.co-info-text-hyper span {
  display: block;
  margin: auto;
  width: 95%;
  color: #ffffff;
  text-align: center;
  padding: 16px;
}

/* Avancerad MODUL4 Meny SPRING */

.co-spring-meny {
  display: block;
  color: #fff;
  text-align: center;
  background: url(https://images.clasohlson.com/global/images/spring/spring-meny-2-992-all.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 16px;
  width: 100%;
  max-width: 992px;
  height: 300px;
  padding: 30px 40px;
}
@media only screen and (min-width: 900px) {
  .co-spring-meny {
    height: 400px;
    padding: 90px 90px;
  }
}
.co-spring-meny p {
  font-size: 1rem;
  text-shadow: 1px 1px 10px #333;
}

.co-thin-rubrik {
  margin-bottom: 7px;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 10px #333;
  font-size: 20px;
}
@media only screen and (min-width: 600px) {
  .co-thin-rubrik {
    font-size: 25px;
  }
}
@media only screen and (min-width: 760px) {
  .co-thin-rubrik {
    font-size: 30px;
  }
}

#col4-grid {
  max-width: 832px;
  display: -ms-grid;
  display: grid;
  justify-content: space-around;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  -ms-grid-rows: 40px 40px;
  grid-template-rows: 40px 40px;
  grid-gap: 10px;
  margin: 0 auto;
  font-weight: 700;
}
@media only screen and (min-width: 574px) {
  #col4-grid {
    max-width: 550px;
  }
}
@media only screen and (min-width: 768px) {
  #col4-grid {
    max-width: 700px;
  }
}
@media only screen and (min-width: 850px) {
  #col4-grid {
    max-width: 780px;
  }
}
#col4-grid h3 {
  text-align: center;
  line-height: 1.22;
  margin: 0px;
}
#col4-grid a {
  color: white;
  text-decoration: none;
}

.col4-1-black {
  -ms-grid-column: 1;
  -ms-grid-row: 1;
  grid-column: 1;
  grid-row: 1;
}

.col4-2-black {
  -ms-grid-column: 2;
  -ms-grid-row: 1;
  grid-column: 2;
  grid-row: 1;
  margin-left: 10px;
}

.col4-3-black {
  -ms-grid-column: 1;
  -ms-grid-row: 2;
  grid-column: 1;
  grid-row: 2;
}

.col4-4-black {
  -ms-grid-column: 2;
  -ms-grid-row: 2;
  grid-column: 2;
  grid-row: 2;
  margin-left: 10px;
}
.col4-1-black,
.col4-2-black,
.col4-3-black,
.col4-4-black {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.65);
}

.col4-1-black:hover,
.col4-2-black:hover,
.col4-3-black:hover,
.col4-4-black:hover {
  background: rgba(0, 0, 0, 0.8);
}

@supports (display: grid) {
  .col4-1-black,
  .col4-2-black,
  .col4-3-black,
  .col4-4-black {
    margin-left: 0px;
    margin-bottom: 0px;
  }
}

@media only screen and (min-width: 575px) {
  #col4-grid {
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(4, minmax(15%, 1fr));
    -ms-grid-rows: 40px;
    grid-template-rows: 40px;
    grid-gap: 20px;
    margin-bottom: 16px;
    /* padding: 10px 10px 0; */
  }

  .col4-3-black {
    -ms-grid-column: 3;
    -ms-grid-row: 1;
    grid-column: 3;
    grid-row: 1;
    margin-left: 10px;
  }
  .col4-4-black {
    -ms-grid-column: 4;
    -ms-grid-row: 1;
    grid-column: 4;
    grid-row: 1;
  }

  @supports (display: grid) {
    .col4-1-black,
    .col4-2-black,
    .col4-3-black,
    .col4-4-black {
      margin-left: 0px;
      margin-bottom: 0px;
    }
  }
}

.co-usp-component ul {
  max-width: 410px;
  font-size: 10px;
  margin-top: 15px;
  margin-bottom: 3px;
}

@media only screen and (min-width: 670px) {
  .co-usp-component ul {
    max-width: 769px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

@media only screen and (min-width: 768px) {
  .co-usp-component ul {
    font-size: 11px;
  }
}

@media only screen and (min-width: 800px) {
  .co-usp-component ul {
    max-width: 992px;
    font-size: 12px;
  }
}

@media only screen and (min-width: 670px) {
  .co-usp-component li:nth-child(2) {
    order: 3;
  }

  .co-usp-component li:nth-child(3) {
    order: 2;
  }
}

.co-usp-component-text {
  color: black;
  display: inline-block;
  text-align: left;
  margin-left: 5px;
  line-height: 1.2;
}

.mg-8 {
  margin-left: 8px;
}

@media only screen and (min-width: 600px) {
  .co-usp-component-text {
    margin-left: 10px;
    vertical-align: super;
  }
}

@media only screen and (min-width: 800px) {
  .co-usp-component-text {
    vertical-align: baseline;
  }
}

.co-usp-component li {
  flex: 1;
  min-width: 140px;
  height: 37px;
  text-align: center;
}

@media only screen and (min-width: 600px) {
  .co-usp-component li {
    height: 47px;
  }
}

.co-usp-component li:nth-child(2),
.co-usp-component li:nth-child(4) {
  text-align: left;
}

.co-usp-component li:nth-child(4) {
  order: 3;
}

@media only screen and (min-width: 670px) {
  .co-usp-component li:nth-child(2),
  .co-usp-component li:nth-child(4) {
    text-align: center;
  }
}

.co-usp-component svg {
  height: 20px;
  width: 20px;
}

@media only screen and (min-width: 600px) {
  .co-usp-component svg {
    height: 25px;
    width: 25px;
  }
}

.co-info-sections {
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  -ms-grid-template-columns: 1fr;
  -ms-grid-template-rows: 1fr 10px 1fr 10px 1fr;
  grid-gap: 10px;
  max-width: 600px;
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
}

/* .co-info-section-one {
        -ms-grid-columns: 1;
        -ms-grid-rows: 1;
    }

    .co-info-section-two {
        -ms-grid-columns: 1;
        -ms-grid-rows: 3;
    }

    .co-info-section-three {
        -ms-grid-columns: 1;
        -ms-grid-rows: 5;
    } */

.co-info-sections img {
  grid-row: 1/3;
  height: 30px;
  width: 30px;
}

@media only screen and (min-width: 599px) {
  .co-info-sections img {
    height: 65px;
    width: 65px;
  }
}

@media only screen and (min-width: 599px) {
  .co-info-sections {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    -ms-grid-columns: 1fr 10px 1fr 10px 1fr;
    -ms-grid-rows: 1fr;
    grid-gap: 16px;
    margin-bottom: 16px;
    max-width: 992px;
    padding: 0;
  }

  .co-info-section-one {
    -ms-grid-column: 1;
    -ms-grid-row: 1;
  }

  .co-info-section-two {
    -ms-grid-column: 3;
    -ms-grid-row: 1;
  }

  .co-info-section-three {
    -ms-grid-column: 5;
    -ms-grid-row: 1;
  }
}

.co-info-section-one,
.co-info-section-two,
.co-info-section-three {
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  padding: 25px;
  position: relative;
}

@media only screen and (min-width: 599px) {
  .co-info-section-one,
  .co-info-section-two,
  .co-info-section-three {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ebebeb;
    padding: 25px;
    min-height: 215px;
    position: relative;
  }
}

.co-info-sections h3 {
  text-align: left;
  margin: 0;
  align-self: end;
  grid-column: 2;
}

@media only screen and (min-width: 599px) {
  .co-info-sections h3 {
    text-align: center;
    align-self: center;
    padding-top: 20px;
    font-size: 18px;
  }
}

.co-info-sections p {
  font-size: 12px;
  text-align: left;
  margin: 0;
  grid-column: 2;
  grid-row: 2;
  width: 99%;
}

@media only screen and (min-width: 599px) {
  .co-info-sections p {
    text-align: center;
    font-size: 14px;
  }
}

.co-info-section-one > h3 a::after,
.co-info-section-two > h3 a::after,
.co-info-section-three > h3 a::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.co-info-sections-black {
  color: black;
  text-align: center;
}

.co-info-sections-black:hover {
  color: black;
  text-decoration: none;
}

.co-banner-icon-text {
  color: #000;
  width: 95%;
  margin: auto auto 16px;
  max-width: 992px;
  height: 100%;
  text-align: left;
  background: #fff;
  border: #ebebeb 1px solid;
  display: flex;
  flex-direction: row;
  align-content: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.02);
}
.co-banner-text h2 {
  color: #000;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  line-height: 1;
  margin-bottom: 5px;
}
.co-banner-icon svg {
  display: block;
  fill: #298bc2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: auto;
  margin: auto;
}
.co-banner-icon {
  /* background: rgba(96,175,220,1); */
  position: relative;
  height: 80px;
  width: 8px;
  white-space: nowrap;
  margin: auto 35px;
}
.co-banner-text {
  /* background: rgba(255, 255, 255, 1); */
  height: 100%;
  width: 95%;
}
.co-banner-text p {
  width: 100%;
}
.co-banner-text p:first-of-type {
  margin: auto auto auto 0;
  padding-bottom: 8.5px;
  border-bottom: #ebebeb 1px solid;
  width: 95%;
  font-size: 12px;
}
.co-banner-text p:nth-of-type(2) {
  margin-top: 10px;
  font-size: 10px;
}
.klikk-hent-banner,
.klikk-hent-banner:active,
.klikk-hent-banner:hover {
  color: #000;
  text-decoration: none;
}
@media only screen and (min-width: 495px) {
  .co-banner-icon-text {
    color: #000; /* text-align: left; */
    padding: 0;
    margin: auto auto 16px;
  }
  .co-banner-text {
    padding: 10px 0;
    text-align: center;
    width: 98%;
    margin: auto;
  }
  .co-banner-text h2 {
    margin: auto;
    font-size: 18px;
    word-wrap: normal;
    color: #000;
    text-align: center;
  }
  .co-banner-text p:first-of-type {
    margin: 6px auto;
    padding-top: 0;
    padding-bottom: 10px;
    width: 85%;
    font-size: 14px;
  }
  .co-banner-text p:nth-of-type(2) {
    padding-bottom: 0px;
    margin-left: auto;
    font-size: 12px;
  }
  .co-banner-text p {
    display: block;
    margin: auto auto;
  }
  .co-banner-icon {
    max-width: 150px;
    height: auto;
  }
  .co-banner-icon svg {
    width: 55px;
    margin: auto 10px;
  }
}
@media only screen and (min-width: 767px) {
  .co-banner-icon svg {
    margin: auto 35px;
  }
}
@media only screen and (min-width: 1000px) {
  .co-banner-icon-text {
    width: 100%;
  }
}

.cls-1 {
  fill: none;
}
.cls-2 {
  fill: #298bc3;
}
.cls-3 {
  clip-path: url(#clip-path);
}
.cls-4 {
  fill: #fff;
}
.cls-5 {
  clip-path: url(#clip-path-2);
}
</style>

