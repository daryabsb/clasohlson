<template>
  <cont>
    <div class="yCmsContentSlot container-fluid">
      <div class="content">
        <style type="text/css">
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
        </style>
      </div>
    </div>
    <a id="skip-to-content"></a>

    <div class="main__inner-wrapper">
      <div class="col-sm-12 col-md-12 yComponentWrapper banner-content">
        <div class="category__description">
          <h1 class="title-two">Accessoarer – små, viktiga saker som behövs varje dag</h1>
          <p>Här har vi samlat våra accessoarer som är små viktiga saker som behövs i vardagen – plånböcker, korthållare, läsglasögon och armbandsklockor. Du hittar till exempel smarta bank- och kreditkortsskydd som skyddar mot trådlös skimning och allt som behövs till dina glasögon för att hålla dem på plats runt halsen eller skyddade när de förvaras. Här kan du läsa mer om glasögonfodral, glasögonsnoddar och även solglasögon.</p>
        </div>
      </div>
      <div class="helper clearfix hidden-md hidden-lg"></div>
      <div class="sort-refine-bar">
        <div class="row">
          <!-- mobile facets-->
          <div class="col-xs-6 col-sm-6 col-md-4 hidden-md hidden-lg refine-products">
            <span></span>
            <div
              class="btn btn-default js-mobile-facets"
              data-select-refinements-title="Förfina produkter"
            >
              Förfina
              <ec class="mobile-filter-count"></ec>
            </div>
          </div>
          <!-- end -->
          <div class="col-md-12 col-sm-6 col-xs-6">
            <div class="align-right-sort">
              <div class="sorting-plp">
                <ul id="be-select" class="zg-ul-select">
                  <span class="sortingdrop"></span>
                  <li class="active">
                    <a
                      rel="nofollow"
                      href="&sortProperty=&amp;sortOrder="
                      class="selected"
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Mest populär'});"
                    >Mest populär</a>
                  </li>
                  <li class>
                    <a
                      rel="nofollow"
                      href="&sortProperty=custRating&amp;sortOrder=desc"
                      class
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Kundomdömen'});"
                    >Kundomdömen</a>
                  </li>
                  <li class>
                    <a
                      rel="nofollow"
                      href="&sortProperty=sortingPrice&amp;sortOrder=desc"
                      class
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Högsta pris'});"
                    >Högsta pris</a>
                  </li>
                  <li class>
                    <a
                      rel="nofollow"
                      href="&sortProperty=sortingPrice&amp;sortOrder=asc"
                      class
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Lägsta pris'});"
                    >Lägsta pris</a>
                  </li>
                  <li class>
                    <a
                      rel="nofollow"
                      href="&sortProperty=name_sv&amp;sortOrder=asc"
                      class
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Namn A-Ö'});"
                    >Namn A-Ö</a>
                  </li>
                  <li class>
                    <a
                      rel="nofollow"
                      href="&sortProperty=name_sv&amp;sortOrder=desc"
                      class
                      onclick="dataLayer.push({'event': 'interaction', 'eventCategory': 'Product', 'eventAction': 'Sort products', 'eventLabel': 'Namn Ö-A'});"
                    >Namn Ö-A</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="category-listing category-landing-page">
          <div class="col-xs-3 col-md-4 col-lg-3 filter-sidebar">
            <div class="yCmsContentSlot product-grid-left-refinements-slot">
              <div class="yCmsComponent yComponentWrapper product-grid-left-refinements-component">
                <div id="product-facet" class="visible-md-* product__facet js-product-facet">
                  <div class="mobile-facet-heading">
                    <div class="js-close-mobile-facet">
                      <svg class="icon cross">
                        <use xlink:href="#icon-cross" />
                      </svg>
                    </div>
                    <div class="mobile-filter-heading">Förfina produkter</div>
                  </div>
                  <div class="facets-list">
                    <div class="facet js-facet facet_filters">
                      <div class="selected_filter">
                        Valt filter
                        <span></span>
                      </div>
                      <div class="filter_list">
                        <ul></ul>
                        <div class="reset-link">
                          <label class="formresetLink">
                            <a>Nollställ filter</a>
                          </label>
                          <span class="reset_all_selected_filters">&#x00D7</span>
                        </div>
                      </div>
                    </div>

                    <div class="filter-categories accordian js-accordian-nav facet hidden-xs">
                      <div
                        class="facet-title"
                        data-toggle="collapse"
                        href="#category-nav"
                        aria-expanded="false"
                      >
                        <label class="facettitle">Kategori</label>
                      </div>
                      <div class="facet-text facet__value collapse in" id="category-nav">
                        <ul class="filter-list-category category-page">
                          <li data-value="1030" class="facet-value first-level 1030">
                            <div class="cat-head">
                              <label
                                for="opt1030"
                                class="truncate collapsed"
                                data-toggle="collapse"
                                href="#cat_1030"
                                aria-controls="cat_1030"
                              >Bygg (2879)</label>
                            </div>
                            <!-- Level 2 -->
                            <ul class="second-level collapse" id="cat_1030">
                              <li>
                                <span class="list-gradient"></span>
                              </li>
                              <li data-value="1884" class="facet-value second-level 1884">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1884"
                                  aria-expanded="false"
                                  href="#cat_1884"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/c/1884"
                                      class="truncate"
                                    >Beslag & upphängning (365)</a>
                                  </label>
                                  <span class="product-count">(365)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1884">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1171"
                                    data-value="1171"
                                    class="facet-value third-level 1171"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Krokar/c/1171">
                                      <label class="truncate">Krokar (37)</label>
                                      <span class="product-count">(37)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1172"
                                    data-value="1172"
                                    class="facet-value third-level 1172"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Hängare-&-klädkrokar/c/1172"
                                    >
                                      <label class="truncate">Hängare & klädkrokar (45)</label>
                                      <span class="product-count">(45)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1190"
                                    data-value="1190"
                                    class="facet-value third-level 1190"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Handtag-&-knoppar/c/1190"
                                    >
                                      <label class="truncate">Handtag & knoppar (51)</label>
                                      <span class="product-count">(51)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1192"
                                    data-value="1192"
                                    class="facet-value third-level 1192"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Golvskydd/c/1192">
                                      <label class="truncate">Golvskydd (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2286"
                                    data-value="2286"
                                    class="facet-value third-level 2286"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Rullgardin/c/2286">
                                      <label class="truncate">Rullgardin (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1173"
                                    data-value="1173"
                                    class="facet-value third-level 1173"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Hyllor-&-konsoler/c/1173"
                                    >
                                      <label class="truncate">Hyllor & konsoler (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1176"
                                    data-value="1176"
                                    class="facet-value third-level 1176"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Persiennmaterial/c/1176">
                                      <label class="truncate">Persiennmaterial (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1568"
                                    data-value="1568"
                                    class="facet-value third-level 1568"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Möbelbeslag/c/1568">
                                      <label class="truncate">Möbelbeslag (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1188"
                                    data-value="1188"
                                    class="facet-value third-level 1188"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Gångjärn/c/1188">
                                      <label class="truncate">Gångjärn (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1907"
                                    data-value="1907"
                                    class="facet-value third-level 1907"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Gardinbeslag/c/1907">
                                      <label class="truncate">Gardinbeslag (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1952"
                                    data-value="1952"
                                    class="facet-value third-level 1952"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Dörrstoppar/c/1952">
                                      <label class="truncate">Dörrstoppar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1177"
                                    data-value="1177"
                                    class="facet-value third-level 1177"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Tätningslister/c/1177">
                                      <label class="truncate">Tätningslister (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1942"
                                    data-value="1942"
                                    class="facet-value third-level 1942"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Beslag-ytterdörr/c/1942">
                                      <label class="truncate">Beslag ytterdörr (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1219"
                                    data-value="1219"
                                    class="facet-value third-level 1219"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Magneter/c/1219">
                                      <label class="truncate">Magneter (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1922"
                                    data-value="1922"
                                    class="facet-value third-level 1922"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Fönsterbeslag/c/1922">
                                      <label class="truncate">Fönsterbeslag (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1220"
                                    data-value="1220"
                                    class="facet-value third-level 1220"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Kardborre/c/1220">
                                      <label class="truncate">Kardborre (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1948"
                                    data-value="1948"
                                    class="facet-value third-level 1948"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Beslag-innerdörr/c/1948">
                                      <label class="truncate">Beslag innerdörr (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1187"
                                    data-value="1187"
                                    class="facet-value third-level 1187"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Haspar-&-reglar/c/1187">
                                      <label class="truncate">Haspar & reglar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1995"
                                    data-value="1995"
                                    class="facet-value third-level 1995"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Lådbeslag/c/1995">
                                      <label class="truncate">Lådbeslag (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1906"
                                    data-value="1906"
                                    class="facet-value third-level 1906"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Dekorkedjor/c/1906">
                                      <label class="truncate">Dekorkedjor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1994"
                                    data-value="1994"
                                    class="facet-value third-level 1994"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Låsbeslag/c/1994">
                                      <label class="truncate">Låsbeslag (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2003"
                                    data-value="2003"
                                    class="facet-value third-level 2003"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Garderobsinredning/c/2003"
                                    >
                                      <label class="truncate">Garderobsinredning (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1180"
                                    data-value="1180"
                                    class="facet-value third-level 1180"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Dörrbromsar-&-dörrstängare/c/1180"
                                    >
                                      <label class="truncate">Dörrbromsar & dörrstängare (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1889"
                                    data-value="1889"
                                    class="facet-value third-level 1889"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Öljetter/c/1889">
                                      <label class="truncate">Öljetter (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1997"
                                    data-value="1997"
                                    class="facet-value third-level 1997"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Hyllbärare/c/1997">
                                      <label class="truncate">Hyllbärare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2004"
                                    data-value="2004"
                                    class="facet-value third-level 2004"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Golvlister/c/2004">
                                      <label class="truncate">Golvlister (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2007"
                                    data-value="2007"
                                    class="facet-value third-level 2007"
                                  >
                                    <a href="/se/Bygg/Beslag-&-upphängning/Plexiglas/c/2007">
                                      <label class="truncate">Plexiglas (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1181"
                                    data-value="1181"
                                    class="facet-value third-level 1181"
                                  >
                                    <a
                                      href="/se/Bygg/Beslag-&-upphängning/Fönster--&-dörrmontering/c/1181"
                                    >
                                      <label class="truncate">Fönster- & dörrmontering (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1046" class="facet-value second-level 1046">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1046"
                                  aria-expanded="false"
                                  href="#cat_1046"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/c/1046"
                                      class="truncate"
                                    >Handverktyg & redskap (490)</a>
                                  </label>
                                  <span class="product-count">(490)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1046">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1146"
                                    data-value="1146"
                                    class="facet-value third-level 1146"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Verktygssatser/c/1146">
                                      <label class="truncate">Verktygssatser (39)</label>
                                      <span class="product-count">(39)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1143"
                                    data-value="1143"
                                    class="facet-value third-level 1143"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Tänger/c/1143">
                                      <label class="truncate">Tänger (51)</label>
                                      <span class="product-count">(51)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1151"
                                    data-value="1151"
                                    class="facet-value third-level 1151"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Knivar-&-brynen/c/1151">
                                      <label class="truncate">Knivar & brynen (52)</label>
                                      <span class="product-count">(52)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1140"
                                    data-value="1140"
                                    class="facet-value third-level 1140"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Skruvmejslar/c/1140">
                                      <label class="truncate">Skruvmejslar (43)</label>
                                      <span class="product-count">(43)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1150"
                                    data-value="1150"
                                    class="facet-value third-level 1150"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Såga/c/1150">
                                      <label class="truncate">Såga (36)</label>
                                      <span class="product-count">(36)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1144"
                                    data-value="1144"
                                    class="facet-value third-level 1144"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Fasta-&-ställbara-nycklar/c/1144"
                                    >
                                      <label class="truncate">Fasta & ställbara nycklar (29)</label>
                                      <span class="product-count">(29)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1154"
                                    data-value="1154"
                                    class="facet-value third-level 1154"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Häftpistoler/c/1154">
                                      <label class="truncate">Häftpistoler (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1145"
                                    data-value="1145"
                                    class="facet-value third-level 1145"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Mätverktyg/c/1145">
                                      <label class="truncate">Mätverktyg (35)</label>
                                      <span class="product-count">(35)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2513"
                                    data-value="2513"
                                    class="facet-value third-level 2513"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Laserinstrument/c/2513">
                                      <label class="truncate">Laserinstrument (42)</label>
                                      <span class="product-count">(42)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1149"
                                    data-value="1149"
                                    class="facet-value third-level 1149"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Tvingar-&-skruvstycken/c/1149"
                                    >
                                      <label class="truncate">Tvingar & skruvstycken (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1147"
                                    data-value="1147"
                                    class="facet-value third-level 1147"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Hammare-&-släggor/c/1147"
                                    >
                                      <label class="truncate">Hammare & släggor (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1138"
                                    data-value="1138"
                                    class="facet-value third-level 1138"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Filar-&-stålborstar/c/1138"
                                    >
                                      <label class="truncate">Filar & stålborstar (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1211"
                                    data-value="1211"
                                    class="facet-value third-level 1211"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Pallar-&-stegar/c/1211">
                                      <label class="truncate">Pallar & stegar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1136"
                                    data-value="1136"
                                    class="facet-value third-level 1136"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Stansa-&-märka/c/1136">
                                      <label class="truncate">Stansa & märka (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1204"
                                    data-value="1204"
                                    class="facet-value third-level 1204"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Kärror-&-vagnar/c/1204">
                                      <label class="truncate">Kärror & vagnar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1152"
                                    data-value="1152"
                                    class="facet-value third-level 1152"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Multitänger/c/1152">
                                      <label class="truncate">Multitänger (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1955"
                                    data-value="1955"
                                    class="facet-value third-level 1955"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Regeldetektorer/c/1955">
                                      <label class="truncate">Regeldetektorer (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1551"
                                    data-value="1551"
                                    class="facet-value third-level 1551"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Stämjärn-&-hyvlar/c/1551"
                                    >
                                      <label class="truncate">Stämjärn & hyvlar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2514"
                                    data-value="2514"
                                    class="facet-value third-level 2514"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Vattenpass/c/2514">
                                      <label class="truncate">Vattenpass (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1134"
                                    data-value="1134"
                                    class="facet-value third-level 1134"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Nittänger/c/1134">
                                      <label class="truncate">Nittänger (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1148"
                                    data-value="1148"
                                    class="facet-value third-level 1148"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Kofot/c/1148">
                                      <label class="truncate">Kofot (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1142"
                                    data-value="1142"
                                    class="facet-value third-level 1142"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Magnetverktyg/c/1142">
                                      <label class="truncate">Magnetverktyg (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1618"
                                    data-value="1618"
                                    class="facet-value third-level 1618"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Kabelskalare/c/1618">
                                      <label class="truncate">Kabelskalare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1137"
                                    data-value="1137"
                                    class="facet-value third-level 1137"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Syl-&-pryl/c/1137">
                                      <label class="truncate">Syl & pryl (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1135"
                                    data-value="1135"
                                    class="facet-value third-level 1135"
                                  >
                                    <a
                                      href="/se/Bygg/Handverktyg-&-redskap/Huggmejslar-&-drivdorn/c/1135"
                                    >
                                      <label class="truncate">Huggmejslar & drivdorn (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1139"
                                    data-value="1139"
                                    class="facet-value third-level 1139"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Gängverktyg/c/1139">
                                      <label class="truncate">Gängverktyg (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1155"
                                    data-value="1155"
                                    class="facet-value third-level 1155"
                                  >
                                    <a href="/se/Bygg/Handverktyg-&-redskap/Glasskärare/c/1155">
                                      <label class="truncate">Glasskärare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1052" class="facet-value second-level 1052">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1052"
                                  aria-expanded="false"
                                  href="#cat_1052"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/c/1052"
                                      class="truncate"
                                    >Arbetskläder & skyddsprodukter (115)</a>
                                  </label>
                                  <span class="product-count">(115)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1052">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1712"
                                    data-value="1712"
                                    class="facet-value third-level 1712"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Handskar/c/1712"
                                    >
                                      <label class="truncate">Handskar (36)</label>
                                      <span class="product-count">(36)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2550"
                                    data-value="2550"
                                    class="facet-value third-level 2550"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Arbetskläder/c/2550"
                                    >
                                      <label class="truncate">Arbetskläder (50)</label>
                                      <span class="product-count">(50)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1226"
                                    data-value="1226"
                                    class="facet-value third-level 1226"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Hörselskydd/c/1226"
                                    >
                                      <label class="truncate">Hörselskydd (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1713"
                                    data-value="1713"
                                    class="facet-value third-level 1713"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Skyddsglasögon/c/1713"
                                    >
                                      <label class="truncate">Skyddsglasögon (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1717"
                                    data-value="1717"
                                    class="facet-value third-level 1717"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Skyddskläder/c/1717"
                                    >
                                      <label class="truncate">Skyddskläder (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1716"
                                    data-value="1716"
                                    class="facet-value third-level 1716"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Sågskydd/c/1716"
                                    >
                                      <label class="truncate">Sågskydd (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1718"
                                    data-value="1718"
                                    class="facet-value third-level 1718"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Andningsskydd/c/1718"
                                    >
                                      <label class="truncate">Andningsskydd (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1714"
                                    data-value="1714"
                                    class="facet-value third-level 1714"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Knäskydd/c/1714"
                                    >
                                      <label class="truncate">Knäskydd (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1715"
                                    data-value="1715"
                                    class="facet-value third-level 1715"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetskläder-&-skyddsprodukter/Säkerhetsutrustning/c/1715"
                                    >
                                      <label class="truncate">Säkerhetsutrustning (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2275" class="facet-value second-level 2275">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2275"
                                  aria-expanded="false"
                                  href="#cat_2275"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/c/2275"
                                      class="truncate"
                                    >Verktygstillbehör (408)</a>
                                  </label>
                                  <span class="product-count">(408)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2275">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1553"
                                    data-value="1553"
                                    class="facet-value third-level 1553"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Slippapper-och-tillbehör/c/1553"
                                    >
                                      <label class="truncate">Slippapper och tillbehör (51)</label>
                                      <span class="product-count">(51)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1115"
                                    data-value="1115"
                                    class="facet-value third-level 1115"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Borrar-&-hålsågar/c/1115">
                                      <label class="truncate">Borrar & hålsågar (52)</label>
                                      <span class="product-count">(52)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2281"
                                    data-value="2281"
                                    class="facet-value third-level 2281"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Multiverktygstillbehör/c/2281"
                                    >
                                      <label class="truncate">Multiverktygstillbehör (94)</label>
                                      <span class="product-count">(94)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1862"
                                    data-value="1862"
                                    class="facet-value third-level 1862"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Sågblad/c/1862">
                                      <label class="truncate">Sågblad (60)</label>
                                      <span class="product-count">(60)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1122"
                                    data-value="1122"
                                    class="facet-value third-level 1122"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Laddare-&-batterier/c/1122">
                                      <label class="truncate">Laddare & batterier (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1141"
                                    data-value="1141"
                                    class="facet-value third-level 1141"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Bits-&-bitshållare/c/1141">
                                      <label class="truncate">Bits & bitshållare (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1861"
                                    data-value="1861"
                                    class="facet-value third-level 1861"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Kapskivor-&-navrondeller/c/1861"
                                    >
                                      <label class="truncate">Kapskivor & navrondeller (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1117"
                                    data-value="1117"
                                    class="facet-value third-level 1117"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Slipa-&-polera-tillbehör/c/1117"
                                    >
                                      <label class="truncate">Slipa & polera tillbehör (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2280"
                                    data-value="2280"
                                    class="facet-value third-level 2280"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Slipmaskinstillbehör/c/2280"
                                    >
                                      <label class="truncate">Slipmaskinstillbehör (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2276"
                                    data-value="2276"
                                    class="facet-value third-level 2276"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Sågklingor/c/2276">
                                      <label class="truncate">Sågklingor (21)</label>
                                      <span class="product-count">(21)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2279"
                                    data-value="2279"
                                    class="facet-value third-level 2279"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Sågstativ/c/2279">
                                      <label class="truncate">Sågstativ (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1118"
                                    data-value="1118"
                                    class="facet-value third-level 1118"
                                  >
                                    <a href="/se/Bygg/Verktygstillbehör/Fräsar/c/1118">
                                      <label class="truncate">Fräsar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2278"
                                    data-value="2278"
                                    class="facet-value third-level 2278"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Hyvelstål-&-kutterstål/c/2278"
                                    >
                                      <label class="truncate">Hyvelstål & kutterstål (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2277"
                                    data-value="2277"
                                    class="facet-value third-level 2277"
                                  >
                                    <a
                                      href="/se/Bygg/Verktygstillbehör/Borrmaskinstillbehör/c/2277"
                                    >
                                      <label class="truncate">Borrmaskinstillbehör (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1051" class="facet-value second-level 1051">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1051"
                                  aria-expanded="false"
                                  href="#cat_1051"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Tejp-&-kemikalier/c/1051"
                                      class="truncate"
                                    >Tejp & kemikalier (236)</a>
                                  </label>
                                  <span class="product-count">(236)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1051">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1218"
                                    data-value="1218"
                                    class="facet-value third-level 1218"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Tejp/c/1218">
                                      <label class="truncate">Tejp (59)</label>
                                      <span class="product-count">(59)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1221"
                                    data-value="1221"
                                    class="facet-value third-level 1221"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Lim/c/1221">
                                      <label class="truncate">Lim (48)</label>
                                      <span class="product-count">(48)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2287"
                                    data-value="2287"
                                    class="facet-value third-level 2287"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Rengöring/c/2287">
                                      <label class="truncate">Rengöring (68)</label>
                                      <span class="product-count">(68)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1222"
                                    data-value="1222"
                                    class="facet-value third-level 1222"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Fog-&-tätning/c/1222">
                                      <label class="truncate">Fog & tätning (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1100"
                                    data-value="1100"
                                    class="facet-value third-level 1100"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Limpistoler/c/1100">
                                      <label class="truncate">Limpistoler (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2053"
                                    data-value="2053"
                                    class="facet-value third-level 2053"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Smörjmedel/c/2053">
                                      <label class="truncate">Smörjmedel (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2054"
                                    data-value="2054"
                                    class="facet-value third-level 2054"
                                  >
                                    <a href="/se/Bygg/Tejp-&-kemikalier/Bränsle/c/2054">
                                      <label class="truncate">Bränsle (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1042" class="facet-value second-level 1042">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1042"
                                  aria-expanded="false"
                                  href="#cat_1042"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/c/1042"
                                      class="truncate"
                                    >Elverktyg & maskiner (336)</a>
                                  </label>
                                  <span class="product-count">(336)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1042">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1674"
                                    data-value="1674"
                                    class="facet-value third-level 1674"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Högtryckstvättar/c/1674">
                                      <label class="truncate">Högtryckstvättar (42)</label>
                                      <span class="product-count">(42)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1119"
                                    data-value="1119"
                                    class="facet-value third-level 1119"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Skruvdragare/c/1119">
                                      <label class="truncate">Skruvdragare (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1209"
                                    data-value="1209"
                                    class="facet-value third-level 1209"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Grovdammsugare/c/1209">
                                      <label class="truncate">Grovdammsugare (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1113"
                                    data-value="1113"
                                    class="facet-value third-level 1113"
                                  >
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/Lödning-&-tillbehör/c/1113"
                                    >
                                      <label class="truncate">Lödning & tillbehör (30)</label>
                                      <span class="product-count">(30)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1132"
                                    data-value="1132"
                                    class="facet-value third-level 1132"
                                  >
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/Svets-&-tillbehör/c/1132"
                                    >
                                      <label class="truncate">Svets & tillbehör (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1106"
                                    data-value="1106"
                                    class="facet-value third-level 1106"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Multiverktyg/c/1106">
                                      <label class="truncate">Multiverktyg (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1641"
                                    data-value="1641"
                                    class="facet-value third-level 1641"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Sticksågar/c/1641">
                                      <label class="truncate">Sticksågar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1112"
                                    data-value="1112"
                                    class="facet-value third-level 1112"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Polermaskiner/c/1112">
                                      <label class="truncate">Polermaskiner (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1644"
                                    data-value="1644"
                                    class="facet-value third-level 1644"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Cirkelsågar/c/1644">
                                      <label class="truncate">Cirkelsågar (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1858"
                                    data-value="1858"
                                    class="facet-value third-level 1858"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Excenterslipar/c/1858">
                                      <label class="truncate">Excenterslipar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1107"
                                    data-value="1107"
                                    class="facet-value third-level 1107"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Vinkelslipar/c/1107">
                                      <label class="truncate">Vinkelslipar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1645"
                                    data-value="1645"
                                    class="facet-value third-level 1645"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Tigersågar/c/1645">
                                      <label class="truncate">Tigersågar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1101"
                                    data-value="1101"
                                    class="facet-value third-level 1101"
                                  >
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/Varmluftspistoler/c/1101"
                                    >
                                      <label class="truncate">Varmluftspistoler (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1853"
                                    data-value="1853"
                                    class="facet-value third-level 1853"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Multislipar/c/1853">
                                      <label class="truncate">Multislipar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1860"
                                    data-value="1860"
                                    class="facet-value third-level 1860"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Bandslipar/c/1860">
                                      <label class="truncate">Bandslipar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1126"
                                    data-value="1126"
                                    class="facet-value third-level 1126"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Bänkslipmaskiner/c/1126">
                                      <label class="truncate">Bänkslipmaskiner (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1103"
                                    data-value="1103"
                                    class="facet-value third-level 1103"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Borrmaskiner/c/1103">
                                      <label class="truncate">Borrmaskiner (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2274"
                                    data-value="2274"
                                    class="facet-value third-level 2274"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Spikpistoler/c/2274">
                                      <label class="truncate">Spikpistoler (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1124"
                                    data-value="1124"
                                    class="facet-value third-level 1124"
                                  >
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/Kap--&-geringssågar/c/1124"
                                    >
                                      <label class="truncate">Kap- & geringssågar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1105"
                                    data-value="1105"
                                    class="facet-value third-level 1105"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Handöverfräsar/c/1105">
                                      <label class="truncate">Handöverfräsar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1857"
                                    data-value="1857"
                                    class="facet-value third-level 1857"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Borrhammare/c/1857">
                                      <label class="truncate">Borrhammare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1127"
                                    data-value="1127"
                                    class="facet-value third-level 1127"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Hyvlar/c/1127">
                                      <label class="truncate">Hyvlar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1104"
                                    data-value="1104"
                                    class="facet-value third-level 1104"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Mutterdragare/c/1104">
                                      <label class="truncate">Mutterdragare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2289"
                                    data-value="2289"
                                    class="facet-value third-level 2289"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Bordscirkelsågar/c/2289">
                                      <label class="truncate">Bordscirkelsågar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1130"
                                    data-value="1130"
                                    class="facet-value third-level 1130"
                                  >
                                    <a
                                      href="/se/Bygg/Elverktyg-&-maskiner/Pelarborrmaskiner/c/1130"
                                    >
                                      <label class="truncate">Pelarborrmaskiner (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1856"
                                    data-value="1856"
                                    class="facet-value third-level 1856"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Planslipar/c/1856">
                                      <label class="truncate">Planslipar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2290"
                                    data-value="2290"
                                    class="facet-value third-level 2290"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Bandsågar/c/2290">
                                      <label class="truncate">Bandsågar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1205"
                                    data-value="1205"
                                    class="facet-value third-level 1205"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Elverk/c/1205">
                                      <label class="truncate">Elverk (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1129"
                                    data-value="1129"
                                    class="facet-value third-level 1129"
                                  >
                                    <a href="/se/Bygg/Elverktyg-&-maskiner/Spånsugar/c/1129">
                                      <label class="truncate">Spånsugar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1047" class="facet-value second-level 1047">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1047"
                                  aria-expanded="false"
                                  href="#cat_1047"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Skruv-&-spik/c/1047"
                                      class="truncate"
                                    >Skruv & spik (173)</a>
                                  </label>
                                  <span class="product-count">(173)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1047">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1790"
                                    data-value="1790"
                                    class="facet-value third-level 1790"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Träskruvar/c/1790">
                                      <label class="truncate">Träskruvar (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2021"
                                    data-value="2021"
                                    class="facet-value third-level 2021"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Maskinskruv-&-bult/c/2021">
                                      <label class="truncate">Maskinskruv & bult (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1169"
                                    data-value="1169"
                                    class="facet-value third-level 1169"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Pluggar/c/1169">
                                      <label class="truncate">Pluggar (35)</label>
                                      <span class="product-count">(35)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2027"
                                    data-value="2027"
                                    class="facet-value third-level 2027"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Brickor/c/2027">
                                      <label class="truncate">Brickor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2026"
                                    data-value="2026"
                                    class="facet-value third-level 2026"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Muttrar/c/2026">
                                      <label class="truncate">Muttrar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2039"
                                    data-value="2039"
                                    class="facet-value third-level 2039"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Sortimentsatser/c/2039">
                                      <label class="truncate">Sortimentsatser (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1170"
                                    data-value="1170"
                                    class="facet-value third-level 1170"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Expander/c/1170">
                                      <label class="truncate">Expander (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1159"
                                    data-value="1159"
                                    class="facet-value third-level 1159"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Trådspik-&-dyckert/c/1159">
                                      <label class="truncate">Trådspik & dyckert (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1788"
                                    data-value="1788"
                                    class="facet-value third-level 1788"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Specialspikar/c/1788">
                                      <label class="truncate">Specialspikar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2296"
                                    data-value="2296"
                                    class="facet-value third-level 2296"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Montageskruv/c/2296">
                                      <label class="truncate">Montageskruv (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2285"
                                    data-value="2285"
                                    class="facet-value third-level 2285"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Bandad-spik/c/2285">
                                      <label class="truncate">Bandad spik (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1792"
                                    data-value="1792"
                                    class="facet-value third-level 1792"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Plåtskruvar/c/1792">
                                      <label class="truncate">Plåtskruvar (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2022"
                                    data-value="2022"
                                    class="facet-value third-level 2022"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Vagnsbultar/c/2022">
                                      <label class="truncate">Vagnsbultar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1789"
                                    data-value="1789"
                                    class="facet-value third-level 1789"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Tråd-&-märlor/c/1789">
                                      <label class="truncate">Tråd & märlor (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2041"
                                    data-value="2041"
                                    class="facet-value third-level 2041"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Gipsskruvar/c/2041">
                                      <label class="truncate">Gipsskruvar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2025"
                                    data-value="2025"
                                    class="facet-value third-level 2025"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Gängade-stänger/c/2025">
                                      <label class="truncate">Gängade stänger (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2297"
                                    data-value="2297"
                                    class="facet-value third-level 2297"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Spånskiveskruv/c/2297">
                                      <label class="truncate">Spånskiveskruv (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2499"
                                    data-value="2499"
                                    class="facet-value third-level 2499"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Golv--&-listskruvar/c/2499">
                                      <label class="truncate">Golv- & listskruvar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2028"
                                    data-value="2028"
                                    class="facet-value third-level 2028"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Låsvätskor/c/2028">
                                      <label class="truncate">Låsvätskor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1791"
                                    data-value="1791"
                                    class="facet-value third-level 1791"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Universalskruvar/c/1791">
                                      <label class="truncate">Universalskruvar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2500"
                                    data-value="2500"
                                    class="facet-value third-level 2500"
                                  >
                                    <a href="/se/Bygg/Skruv-&-spik/Betongskruvar/c/2500">
                                      <label class="truncate">Betongskruvar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1039" class="facet-value second-level 1039">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1039"
                                  aria-expanded="false"
                                  href="#cat_1039"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Vatten-&-avlopp/c/1039"
                                      class="truncate"
                                    >Vatten & avlopp (174)</a>
                                  </label>
                                  <span class="product-count">(174)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1039">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2300"
                                    data-value="2300"
                                    class="facet-value third-level 2300"
                                  >
                                    <a
                                      href="/se/Bygg/Vatten-&-avlopp/Tillbehör-till-blandare/c/2300"
                                    >
                                      <label class="truncate">Tillbehör till blandare (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1070"
                                    data-value="1070"
                                    class="facet-value third-level 1070"
                                  >
                                    <a
                                      href="/se/Bygg/Vatten-&-avlopp/Duschhandtag-&-duschset/c/1070"
                                    >
                                      <label class="truncate">Duschhandtag & duschset (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2306"
                                    data-value="2306"
                                    class="facet-value third-level 2306"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Avloppsrengöring/c/2306">
                                      <label class="truncate">Avloppsrengöring (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1078"
                                    data-value="1078"
                                    class="facet-value third-level 1078"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Rörkopplingar/c/1078">
                                      <label class="truncate">Rörkopplingar (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1085"
                                    data-value="1085"
                                    class="facet-value third-level 1085"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Tätning/c/1085">
                                      <label class="truncate">Tätning (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1082"
                                    data-value="1082"
                                    class="facet-value third-level 1082"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Kulventiler-&-kranar/c/1082">
                                      <label class="truncate">Kulventiler & kranar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2018"
                                    data-value="2018"
                                    class="facet-value third-level 2018"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Slangar/c/2018">
                                      <label class="truncate">Slangar (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2013"
                                    data-value="2013"
                                    class="facet-value third-level 2013"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Vattenfilter/c/2013">
                                      <label class="truncate">Vattenfilter (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1074"
                                    data-value="1074"
                                    class="facet-value third-level 1074"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Toalettsitsar/c/1074">
                                      <label class="truncate">Toalettsitsar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1076"
                                    data-value="1076"
                                    class="facet-value third-level 1076"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Avlopp/c/1076">
                                      <label class="truncate">Avlopp (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1083"
                                    data-value="1083"
                                    class="facet-value third-level 1083"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Rördelar/c/1083">
                                      <label class="truncate">Rördelar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2305"
                                    data-value="2305"
                                    class="facet-value third-level 2305"
                                  >
                                    <a
                                      href="/se/Bygg/Vatten-&-avlopp/PEM-slangar-&-kopplingar/c/2305"
                                    >
                                      <label class="truncate">PEM-slangar & kopplingar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1081"
                                    data-value="1081"
                                    class="facet-value third-level 1081"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Montering/c/1081">
                                      <label class="truncate">Montering (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2015"
                                    data-value="2015"
                                    class="facet-value third-level 2015"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Slangklämmor/c/2015">
                                      <label class="truncate">Slangklämmor (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1087"
                                    data-value="1087"
                                    class="facet-value third-level 1087"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Vattenpumpar/c/1087">
                                      <label class="truncate">Vattenpumpar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1089"
                                    data-value="1089"
                                    class="facet-value third-level 1089"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/VVS-verktyg/c/1089">
                                      <label class="truncate">VVS-verktyg (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1080"
                                    data-value="1080"
                                    class="facet-value third-level 1080"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Rörisolering/c/1080">
                                      <label class="truncate">Rörisolering (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2304"
                                    data-value="2304"
                                    class="facet-value third-level 2304"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Vattenlås/c/2304">
                                      <label class="truncate">Vattenlås (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2302"
                                    data-value="2302"
                                    class="facet-value third-level 2302"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Köksblandare/c/2302">
                                      <label class="truncate">Köksblandare (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2301"
                                    data-value="2301"
                                    class="facet-value third-level 2301"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Duschblandare/c/2301">
                                      <label class="truncate">Duschblandare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1077"
                                    data-value="1077"
                                    class="facet-value third-level 1077"
                                  >
                                    <a href="/se/Bygg/Vatten-&-avlopp/Kopparrör/c/1077">
                                      <label class="truncate">Kopparrör (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1041" class="facet-value second-level 1041">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1041"
                                  aria-expanded="false"
                                  href="#cat_1041"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Måla-&-tapetsera/c/1041"
                                      class="truncate"
                                    >Måla & tapetsera (144)</a>
                                  </label>
                                  <span class="product-count">(144)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1041">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2412"
                                    data-value="2412"
                                    class="facet-value third-level 2412"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Tapeter/c/2412">
                                      <label class="truncate">Tapeter (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1094"
                                    data-value="1094"
                                    class="facet-value third-level 1094"
                                  >
                                    <a
                                      href="/se/Bygg/Måla-&-tapetsera/Maskering-&-täckmaterial/c/1094"
                                    >
                                      <label class="truncate">Maskering & täckmaterial (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1097"
                                    data-value="1097"
                                    class="facet-value third-level 1097"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Penslar/c/1097">
                                      <label class="truncate">Penslar (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1098"
                                    data-value="1098"
                                    class="facet-value third-level 1098"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Spackla/c/1098">
                                      <label class="truncate">Spackla (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1868"
                                    data-value="1868"
                                    class="facet-value third-level 1868"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Roller/c/1868">
                                      <label class="truncate">Roller (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2263"
                                    data-value="2263"
                                    class="facet-value third-level 2263"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Rengöring-&-verktyg/c/2263">
                                      <label class="truncate">Rengöring & verktyg (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2262"
                                    data-value="2262"
                                    class="facet-value third-level 2262"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Sprayfärg/c/2262">
                                      <label class="truncate">Sprayfärg (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1093"
                                    data-value="1093"
                                    class="facet-value third-level 1093"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Tapetverktyg/c/1093">
                                      <label class="truncate">Tapetverktyg (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1870"
                                    data-value="1870"
                                    class="facet-value third-level 1870"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Kakla-&-mura/c/1870">
                                      <label class="truncate">Kakla & mura (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2260"
                                    data-value="2260"
                                    class="facet-value third-level 2260"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Specialfärg/c/2260">
                                      <label class="truncate">Specialfärg (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2298"
                                    data-value="2298"
                                    class="facet-value third-level 2298"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Tapetlim/c/2298">
                                      <label class="truncate">Tapetlim (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1102"
                                    data-value="1102"
                                    class="facet-value third-level 1102"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Färgsprutor/c/1102">
                                      <label class="truncate">Färgsprutor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2258"
                                    data-value="2258"
                                    class="facet-value third-level 2258"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Tak--&-väggfärg/c/2258">
                                      <label class="truncate">Tak- & väggfärg (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2294"
                                    data-value="2294"
                                    class="facet-value third-level 2294"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Utomhusfärg/c/2294">
                                      <label class="truncate">Utomhusfärg (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2259"
                                    data-value="2259"
                                    class="facet-value third-level 2259"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Lackfärg/c/2259">
                                      <label class="truncate">Lackfärg (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2264"
                                    data-value="2264"
                                    class="facet-value third-level 2264"
                                  >
                                    <a href="/se/Bygg/Måla-&-tapetsera/Träolja/c/2264">
                                      <label class="truncate">Träolja (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1876" class="facet-value second-level 1876">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1876"
                                  aria-expanded="false"
                                  href="#cat_1876"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Fordonsvård-&-tillbehör/c/1876"
                                      class="truncate"
                                    >Fordonsvård & tillbehör (146)</a>
                                  </label>
                                  <span class="product-count">(146)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1876">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1216"
                                    data-value="1216"
                                    class="facet-value third-level 1216"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Bilvård/c/1216">
                                      <label class="truncate">Bilvård (59)</label>
                                      <span class="product-count">(59)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1203"
                                    data-value="1203"
                                    class="facet-value third-level 1203"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Bilverktyg/c/1203">
                                      <label class="truncate">Bilverktyg (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1200"
                                    data-value="1200"
                                    class="facet-value third-level 1200"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Lastsäkring/c/1200">
                                      <label class="truncate">Lastsäkring (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1207"
                                    data-value="1207"
                                    class="facet-value third-level 1207"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Biltillbehör/c/1207">
                                      <label class="truncate">Biltillbehör (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1599"
                                    data-value="1599"
                                    class="facet-value third-level 1599"
                                  >
                                    <a
                                      href="/se/Bygg/Fordonsvård-&-tillbehör/Fordonsladdare/c/1599"
                                    >
                                      <label class="truncate">Fordonsladdare (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1324"
                                    data-value="1324"
                                    class="facet-value third-level 1324"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Bilvärme/c/1324">
                                      <label class="truncate">Bilvärme (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1199"
                                    data-value="1199"
                                    class="facet-value third-level 1199"
                                  >
                                    <a
                                      href="/se/Bygg/Fordonsvård-&-tillbehör/Släpvagnstillbehör/c/1199"
                                    >
                                      <label class="truncate">Släpvagnstillbehör (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2383"
                                    data-value="2383"
                                    class="facet-value third-level 2383"
                                  >
                                    <a
                                      href="/se/Bygg/Fordonsvård-&-tillbehör/Domkraft-&-pallbockar/c/2383"
                                    >
                                      <label class="truncate">Domkraft & pallbockar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2012"
                                    data-value="2012"
                                    class="facet-value third-level 2012"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Kabelskor/c/2012">
                                      <label class="truncate">Kabelskor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1322"
                                    data-value="1322"
                                    class="facet-value third-level 1322"
                                  >
                                    <a href="/se/Bygg/Fordonsvård-&-tillbehör/Billampor/c/1322">
                                      <label class="truncate">Billampor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2381" class="facet-value second-level 2381">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2381"
                                  aria-expanded="false"
                                  href="#cat_2381"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Arbetsbänkar-&-förvaring/c/2381"
                                      class="truncate"
                                    >Arbetsbänkar & förvaring (132)</a>
                                  </label>
                                  <span class="product-count">(132)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2381">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1215"
                                    data-value="1215"
                                    class="facet-value third-level 1215"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetsbänkar-&-förvaring/Lådor-&-sortimentskåp/c/1215"
                                    >
                                      <label class="truncate">Lådor & sortimentskåp (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1210"
                                    data-value="1210"
                                    class="facet-value third-level 1210"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetsbänkar-&-förvaring/Redskap--&-verktygsförvaring/c/1210"
                                    >
                                      <label class="truncate">Redskap- & verktygsförvaring (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1214"
                                    data-value="1214"
                                    class="facet-value third-level 1214"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetsbänkar-&-förvaring/Verktygslådor-&-vagnar/c/1214"
                                    >
                                      <label class="truncate">Verktygslådor & vagnar (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1213"
                                    data-value="1213"
                                    class="facet-value third-level 1213"
                                  >
                                    <a href="/se/Bygg/Arbetsbänkar-&-förvaring/Hyllor/c/1213">
                                      <label class="truncate">Hyllor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1212"
                                    data-value="1212"
                                    class="facet-value third-level 1212"
                                  >
                                    <a
                                      href="/se/Bygg/Arbetsbänkar-&-förvaring/Arbetsbänkar-&-bockar/c/1212"
                                    >
                                      <label class="truncate">Arbetsbänkar & bockar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1179" class="facet-value second-level 1179">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1179"
                                  aria-expanded="false"
                                  href="#cat_1179"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Lås-&-säkerhet/c/1179"
                                      class="truncate"
                                    >Lås & säkerhet (87)</a>
                                  </label>
                                  <span class="product-count">(87)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1179">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1182"
                                    data-value="1182"
                                    class="facet-value third-level 1182"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Nyckelringar/c/1182">
                                      <label class="truncate">Nyckelringar (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1185"
                                    data-value="1185"
                                    class="facet-value third-level 1185"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Hänglås/c/1185">
                                      <label class="truncate">Hänglås (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1184"
                                    data-value="1184"
                                    class="facet-value third-level 1184"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Kombinationslås/c/1184">
                                      <label class="truncate">Kombinationslås (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1186"
                                    data-value="1186"
                                    class="facet-value third-level 1186"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Låskättingar-&-vajrar/c/1186">
                                      <label class="truncate">Låskättingar & vajrar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2317"
                                    data-value="2317"
                                    class="facet-value third-level 2317"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Nyckelskåp/c/2317">
                                      <label class="truncate">Nyckelskåp (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2316"
                                    data-value="2316"
                                    class="facet-value third-level 2316"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Låshus/c/2316">
                                      <label class="truncate">Låshus (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2312"
                                    data-value="2312"
                                    class="facet-value third-level 2312"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Dörrkikare/c/2312">
                                      <label class="truncate">Dörrkikare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2313"
                                    data-value="2313"
                                    class="facet-value third-level 2313"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Säkerhetskedja/c/2313">
                                      <label class="truncate">Säkerhetskedja (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1976"
                                    data-value="1976"
                                    class="facet-value third-level 1976"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/TSA-lås/c/1976">
                                      <label class="truncate">TSA-lås (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2315"
                                    data-value="2315"
                                    class="facet-value third-level 2315"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Låscylinder/c/2315">
                                      <label class="truncate">Låscylinder (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2314"
                                    data-value="2314"
                                    class="facet-value third-level 2314"
                                  >
                                    <a href="/se/Bygg/Lås-&-säkerhet/Fönsterlås/c/2314">
                                      <label class="truncate">Fönsterlås (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1193" class="facet-value second-level 1193">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1193"
                                  aria-expanded="false"
                                  href="#cat_1193"
                                >
                                  <label>
                                    <a href="/se/Bygg/Hjul/c/1193" class="truncate">Hjul (28)</a>
                                  </label>
                                  <span class="product-count">(28)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1193">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1195"
                                    data-value="1195"
                                    class="facet-value third-level 1195"
                                  >
                                    <a href="/se/Bygg/Hjul/Länkhjul/c/1195">
                                      <label class="truncate">Länkhjul (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1197"
                                    data-value="1197"
                                    class="facet-value third-level 1197"
                                  >
                                    <a href="/se/Bygg/Hjul/Luftgummihjul/c/1197">
                                      <label class="truncate">Luftgummihjul (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1194"
                                    data-value="1194"
                                    class="facet-value third-level 1194"
                                  >
                                    <a href="/se/Bygg/Hjul/Möbelhjul/c/1194">
                                      <label class="truncate">Möbelhjul (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1196"
                                    data-value="1196"
                                    class="facet-value third-level 1196"
                                  >
                                    <a href="/se/Bygg/Hjul/Universalhjul/c/1196">
                                      <label class="truncate">Universalhjul (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2291" class="facet-value second-level 2291">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2291"
                                  aria-expanded="false"
                                  href="#cat_2291"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Tryckluft/c/2291"
                                      class="truncate"
                                    >Tryckluft (41)</a>
                                  </label>
                                  <span class="product-count">(41)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2291">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2292"
                                    data-value="2292"
                                    class="facet-value third-level 2292"
                                  >
                                    <a href="/se/Bygg/Tryckluft/Tryckluftsverktyg/c/2292">
                                      <label class="truncate">Tryckluftsverktyg (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2293"
                                    data-value="2293"
                                    class="facet-value third-level 2293"
                                  >
                                    <a href="/se/Bygg/Tryckluft/Tryckluftstillbehör/c/2293">
                                      <label class="truncate">Tryckluftstillbehör (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1131"
                                    data-value="1131"
                                    class="facet-value third-level 1131"
                                  >
                                    <a href="/se/Bygg/Tryckluft/Kompressorer/c/1131">
                                      <label class="truncate">Kompressorer (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2307" class="facet-value second-level 2307">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2307"
                                  aria-expanded="false"
                                  href="#cat_2307"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Eldning-&-sotning/c/2307"
                                      class="truncate"
                                    >Eldning & sotning (35)</a>
                                  </label>
                                  <span class="product-count">(35)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2307">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1156"
                                    data-value="1156"
                                    class="facet-value third-level 1156"
                                  >
                                    <a href="/se/Bygg/Eldning-&-sotning/Sotning/c/1156">
                                      <label class="truncate">Sotning (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2309"
                                    data-value="2309"
                                    class="facet-value third-level 2309"
                                  >
                                    <a
                                      href="/se/Bygg/Eldning-&-sotning/Spis-&-kamintillbehör/c/2309"
                                    >
                                      <label class="truncate">Spis & kamintillbehör (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2308"
                                    data-value="2308"
                                    class="facet-value third-level 2308"
                                  >
                                    <a href="/se/Bygg/Eldning-&-sotning/Vedkorgar/c/2308">
                                      <label class="truncate">Vedkorgar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2311"
                                    data-value="2311"
                                    class="facet-value third-level 2311"
                                  >
                                    <a href="/se/Bygg/Eldning-&-sotning/Kaminfläktar/c/2311">
                                      <label class="truncate">Kaminfläktar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2310"
                                    data-value="2310"
                                    class="facet-value third-level 2310"
                                  >
                                    <a href="/se/Bygg/Eldning-&-sotning/Eldställ/c/2310">
                                      <label class="truncate">Eldställ (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1157" class="facet-value second-level 1157">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1157"
                                  aria-expanded="false"
                                  href="#cat_1157"
                                >
                                  <label>
                                    <a
                                      href="/se/Bygg/Byggbeslag/c/1157"
                                      class="truncate"
                                    >Byggbeslag (12)</a>
                                  </label>
                                  <span class="product-count">(12)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1157">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1821"
                                    data-value="1821"
                                    class="facet-value third-level 1821"
                                  >
                                    <a href="/se/Bygg/Byggbeslag/Vinkelbeslag/c/1821">
                                      <label class="truncate">Vinkelbeslag (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1833"
                                    data-value="1833"
                                    class="facet-value third-level 1833"
                                  >
                                    <a href="/se/Bygg/Byggbeslag/Spikband-&-spikbleck/c/1833">
                                      <label class="truncate">Spikband & spikbleck (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1826"
                                    data-value="1826"
                                    class="facet-value third-level 1826"
                                  >
                                    <a href="/se/Bygg/Byggbeslag/Balkskor/c/1826">
                                      <label class="truncate">Balkskor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1829"
                                    data-value="1829"
                                    class="facet-value third-level 1829"
                                  >
                                    <a href="/se/Bygg/Byggbeslag/Jordankare-&-stolpskor/c/1829">
                                      <label class="truncate">Jordankare & stolpskor (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li data-value="1033" class="facet-value first-level 1033">
                            <div class="cat-head">
                              <label
                                for="opt1033"
                                class="truncate collapsed"
                                data-toggle="collapse"
                                href="#cat_1033"
                                aria-controls="cat_1033"
                              >El (1764)</label>
                            </div>
                            <!-- Level 2 -->
                            <ul class="second-level collapse" id="cat_1033">
                              <li>
                                <span class="list-gradient"></span>
                              </li>
                              <li data-value="1608" class="facet-value second-level 1608">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1608"
                                  aria-expanded="false"
                                  href="#cat_1608"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Lampor-&-belysning/c/1608"
                                      class="truncate"
                                    >Lampor & belysning (486)</a>
                                  </label>
                                  <span class="product-count">(486)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1608">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1719"
                                    data-value="1719"
                                    class="facet-value third-level 1719"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Solcellsbelysning/c/1719">
                                      <label class="truncate">Solcellsbelysning (56)</label>
                                      <span class="product-count">(56)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2395"
                                    data-value="2395"
                                    class="facet-value third-level 2395"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Ljusslingor/c/2395">
                                      <label class="truncate">Ljusslingor (50)</label>
                                      <span class="product-count">(50)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1576"
                                    data-value="1576"
                                    class="facet-value third-level 1576"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Julbelysning/c/1576">
                                      <label class="truncate">Julbelysning (130)</label>
                                      <span class="product-count">(130)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1313"
                                    data-value="1313"
                                    class="facet-value third-level 1313"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Belysningstillbehör/c/1313">
                                      <label class="truncate">Belysningstillbehör (37)</label>
                                      <span class="product-count">(37)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1839"
                                    data-value="1839"
                                    class="facet-value third-level 1839"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Taklampor/c/1839">
                                      <label class="truncate">Taklampor (42)</label>
                                      <span class="product-count">(42)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1302"
                                    data-value="1302"
                                    class="facet-value third-level 1302"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Fasadbelysning/c/1302">
                                      <label class="truncate">Fasadbelysning (48)</label>
                                      <span class="product-count">(48)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1311"
                                    data-value="1311"
                                    class="facet-value third-level 1311"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Bordslampor/c/1311">
                                      <label class="truncate">Bordslampor (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1307"
                                    data-value="1307"
                                    class="facet-value third-level 1307"
                                  >
                                    <a
                                      href="/se/El/Lampor-&-belysning/Downlights-&-spotlights/c/1307"
                                    >
                                      <label class="truncate">Downlights & spotlights (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1312"
                                    data-value="1312"
                                    class="facet-value third-level 1312"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Dekorativ-belysning/c/1312">
                                      <label class="truncate">Dekorativ belysning (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2267"
                                    data-value="2267"
                                    class="facet-value third-level 2267"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Fönsterlampor/c/2267">
                                      <label class="truncate">Fönsterlampor (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1736"
                                    data-value="1736"
                                    class="facet-value third-level 1736"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Trädgårdsbelysning/c/1736">
                                      <label class="truncate">Trädgårdsbelysning (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1847"
                                    data-value="1847"
                                    class="facet-value third-level 1847"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/LED-lister/c/1847">
                                      <label class="truncate">LED-lister (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1310"
                                    data-value="1310"
                                    class="facet-value third-level 1310"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Nattlampor/c/1310">
                                      <label class="truncate">Nattlampor (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1566"
                                    data-value="1566"
                                    class="facet-value third-level 1566"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Arbetsbelysning/c/1566">
                                      <label class="truncate">Arbetsbelysning (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2269"
                                    data-value="2269"
                                    class="facet-value third-level 2269"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Vägglampor/c/2269">
                                      <label class="truncate">Vägglampor (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2515"
                                    data-value="2515"
                                    class="facet-value third-level 2515"
                                  >
                                    <a
                                      href="/se/El/Lampor-&-belysning/Stolplyktor-&-pollare/c/2515"
                                    >
                                      <label class="truncate">Stolplyktor & pollare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2271"
                                    data-value="2271"
                                    class="facet-value third-level 2271"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Skrivbordslampor/c/2271">
                                      <label class="truncate">Skrivbordslampor (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1758"
                                    data-value="1758"
                                    class="facet-value third-level 1758"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Lysrörsarmaturer/c/1758">
                                      <label class="truncate">Lysrörsarmaturer (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2268"
                                    data-value="2268"
                                    class="facet-value third-level 2268"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Golvlampor/c/2268">
                                      <label class="truncate">Golvlampor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1842"
                                    data-value="1842"
                                    class="facet-value third-level 1842"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Bänkbelysning/c/1842">
                                      <label class="truncate">Bänkbelysning (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1837"
                                    data-value="1837"
                                    class="facet-value third-level 1837"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Badrumsbelysning/c/1837">
                                      <label class="truncate">Badrumsbelysning (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1755"
                                    data-value="1755"
                                    class="facet-value third-level 1755"
                                  >
                                    <a href="/se/El/Lampor-&-belysning/Tavelbelysning/c/1755">
                                      <label class="truncate">Tavelbelysning (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1256" class="facet-value second-level 1256">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1256"
                                  aria-expanded="false"
                                  href="#cat_1256"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Elinstallation/c/1256"
                                      class="truncate"
                                    >Elinstallation (334)</a>
                                  </label>
                                  <span class="product-count">(334)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1256">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1264"
                                    data-value="1264"
                                    class="facet-value third-level 1264"
                                  >
                                    <a
                                      href="/se/El/Elinstallation/Kabelkanaler-&-kabelsamlare/c/1264"
                                    >
                                      <label class="truncate">Kabelkanaler & kabelsamlare (46)</label>
                                      <span class="product-count">(46)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1621"
                                    data-value="1621"
                                    class="facet-value third-level 1621"
                                  >
                                    <a href="/se/El/Elinstallation/Vägguttag/c/1621">
                                      <label class="truncate">Vägguttag (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1619"
                                    data-value="1619"
                                    class="facet-value third-level 1619"
                                  >
                                    <a href="/se/El/Elinstallation/Strömbrytare/c/1619">
                                      <label class="truncate">Strömbrytare (39)</label>
                                      <span class="product-count">(39)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1263"
                                    data-value="1263"
                                    class="facet-value third-level 1263"
                                  >
                                    <a href="/se/El/Elinstallation/Kabelklammer/c/1263">
                                      <label class="truncate">Kabelklammer (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1671"
                                    data-value="1671"
                                    class="facet-value third-level 1671"
                                  >
                                    <a href="/se/El/Elinstallation/Buntband/c/1671">
                                      <label class="truncate">Buntband (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1260"
                                    data-value="1260"
                                    class="facet-value third-level 1260"
                                  >
                                    <a href="/se/El/Elinstallation/Infällda-dosor/c/1260">
                                      <label class="truncate">Infällda dosor (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1257"
                                    data-value="1257"
                                    class="facet-value third-level 1257"
                                  >
                                    <a
                                      href="/se/El/Elinstallation/Normcentraler-&-tillbehör/c/1257"
                                    >
                                      <label class="truncate">Normcentraler & tillbehör (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1278"
                                    data-value="1278"
                                    class="facet-value third-level 1278"
                                  >
                                    <a href="/se/El/Elinstallation/Stickproppar/c/1278">
                                      <label class="truncate">Stickproppar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1630"
                                    data-value="1630"
                                    class="facet-value third-level 1630"
                                  >
                                    <a href="/se/El/Elinstallation/Täck--&-förhöjningsramar/c/1630">
                                      <label class="truncate">Täck- & förhöjningsramar (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1259"
                                    data-value="1259"
                                    class="facet-value third-level 1259"
                                  >
                                    <a href="/se/El/Elinstallation/Armaturtillbehör/c/1259">
                                      <label class="truncate">Armaturtillbehör (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1623"
                                    data-value="1623"
                                    class="facet-value third-level 1623"
                                  >
                                    <a href="/se/El/Elinstallation/Dimmer/c/1623">
                                      <label class="truncate">Dimmer (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1698"
                                    data-value="1698"
                                    class="facet-value third-level 1698"
                                  >
                                    <a href="/se/El/Elinstallation/Säkringar-&-passdelar/c/1698">
                                      <label class="truncate">Säkringar & passdelar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1258"
                                    data-value="1258"
                                    class="facet-value third-level 1258"
                                  >
                                    <a href="/se/El/Elinstallation/Kopplingsklämmor/c/1258">
                                      <label class="truncate">Kopplingsklämmor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1279"
                                    data-value="1279"
                                    class="facet-value third-level 1279"
                                  >
                                    <a href="/se/El/Elinstallation/Sladdställ/c/1279">
                                      <label class="truncate">Sladdställ (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2398"
                                    data-value="2398"
                                    class="facet-value third-level 2398"
                                  >
                                    <a href="/se/El/Elinstallation/Utanpåliggande-dosor/c/2398">
                                      <label class="truncate">Utanpåliggande dosor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1854"
                                    data-value="1854"
                                    class="facet-value third-level 1854"
                                  >
                                    <a href="/se/El/Elinstallation/Skarvuttag/c/1854">
                                      <label class="truncate">Skarvuttag (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2390"
                                    data-value="2390"
                                    class="facet-value third-level 2390"
                                  >
                                    <a href="/se/El/Elinstallation/Nätverksuttag/c/2390">
                                      <label class="truncate">Nätverksuttag (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2399"
                                    data-value="2399"
                                    class="facet-value third-level 2399"
                                  >
                                    <a href="/se/El/Elinstallation/VP-rör-&-flexslangar/c/2399">
                                      <label class="truncate">VP-rör & flexslangar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1631"
                                    data-value="1631"
                                    class="facet-value third-level 1631"
                                  >
                                    <a href="/se/El/Elinstallation/Rörelsevakter/c/1631">
                                      <label class="truncate">Rörelsevakter (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1859"
                                    data-value="1859"
                                    class="facet-value third-level 1859"
                                  >
                                    <a href="/se/El/Elinstallation/Sladdströmbrytare/c/1859">
                                      <label class="truncate">Sladdströmbrytare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1280"
                                    data-value="1280"
                                    class="facet-value third-level 1280"
                                  >
                                    <a href="/se/El/Elinstallation/Sladdimmer/c/1280">
                                      <label class="truncate">Sladdimmer (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2397"
                                    data-value="2397"
                                    class="facet-value third-level 2397"
                                  >
                                    <a href="/se/El/Elinstallation/Krympslangar/c/2397">
                                      <label class="truncate">Krympslangar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1262"
                                    data-value="1262"
                                    class="facet-value third-level 1262"
                                  >
                                    <a href="/se/El/Elinstallation/Spisinstallation/c/1262">
                                      <label class="truncate">Spisinstallation (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1624"
                                    data-value="1624"
                                    class="facet-value third-level 1624"
                                  >
                                    <a href="/se/El/Elinstallation/Antennuttag/c/1624">
                                      <label class="truncate">Antennuttag (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1247" class="facet-value second-level 1247">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1247"
                                  aria-expanded="false"
                                  href="#cat_1247"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Batterier-&-laddare/c/1247"
                                      class="truncate"
                                    >Batterier & laddare (133)</a>
                                  </label>
                                  <span class="product-count">(133)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1247">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1248"
                                    data-value="1248"
                                    class="facet-value third-level 1248"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Alkaliska-batterier/c/1248">
                                      <label class="truncate">Alkaliska batterier (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1249"
                                    data-value="1249"
                                    class="facet-value third-level 1249"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Knappcellsbatterier/c/1249">
                                      <label class="truncate">Knappcellsbatterier (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1251"
                                    data-value="1251"
                                    class="facet-value third-level 1251"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Specialbatterier/c/1251">
                                      <label class="truncate">Specialbatterier (31)</label>
                                      <span class="product-count">(31)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1250"
                                    data-value="1250"
                                    class="facet-value third-level 1250"
                                  >
                                    <a
                                      href="/se/El/Batterier-&-laddare/Laddningsbara-batterier/c/1250"
                                    >
                                      <label class="truncate">Laddningsbara batterier (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1254"
                                    data-value="1254"
                                    class="facet-value third-level 1254"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Spänningsomvandlare/c/1254">
                                      <label class="truncate">Spänningsomvandlare (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1253"
                                    data-value="1253"
                                    class="facet-value third-level 1253"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Batteriladdare/c/1253">
                                      <label class="truncate">Batteriladdare (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1252"
                                    data-value="1252"
                                    class="facet-value third-level 1252"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Batteritillbehör/c/1252">
                                      <label class="truncate">Batteritillbehör (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2009"
                                    data-value="2009"
                                    class="facet-value third-level 2009"
                                  >
                                    <a
                                      href="/se/El/Batterier-&-laddare/Hörapparatsbatterier/c/2009"
                                    >
                                      <label class="truncate">Hörapparatsbatterier (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2002"
                                    data-value="2002"
                                    class="facet-value third-level 2002"
                                  >
                                    <a href="/se/El/Batterier-&-laddare/Växelriktare/c/2002">
                                      <label class="truncate">Växelriktare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1323" class="facet-value second-level 1323">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1323"
                                  aria-expanded="false"
                                  href="#cat_1323"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Klimat-&-värme/c/1323"
                                      class="truncate"
                                    >Klimat & värme (232)</a>
                                  </label>
                                  <span class="product-count">(232)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1323">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1893"
                                    data-value="1893"
                                    class="facet-value third-level 1893"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Luftrenare/c/1893">
                                      <label class="truncate">Luftrenare (43)</label>
                                      <span class="product-count">(43)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1327"
                                    data-value="1327"
                                    class="facet-value third-level 1327"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Element/c/1327">
                                      <label class="truncate">Element (53)</label>
                                      <span class="product-count">(53)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1901"
                                    data-value="1901"
                                    class="facet-value third-level 1901"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Infravärmare/c/1901">
                                      <label class="truncate">Infravärmare (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1888"
                                    data-value="1888"
                                    class="facet-value third-level 1888"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Fläktar/c/1888">
                                      <label class="truncate">Fläktar (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1334"
                                    data-value="1334"
                                    class="facet-value third-level 1334"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Ventilationstillbehör/c/1334">
                                      <label class="truncate">Ventilationstillbehör (33)</label>
                                      <span class="product-count">(33)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1887"
                                    data-value="1887"
                                    class="facet-value third-level 1887"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Avfuktare/c/1887">
                                      <label class="truncate">Avfuktare (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1898"
                                    data-value="1898"
                                    class="facet-value third-level 1898"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Kaminer/c/1898">
                                      <label class="truncate">Kaminer (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1886"
                                    data-value="1886"
                                    class="facet-value third-level 1886"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Luftfuktare/c/1886">
                                      <label class="truncate">Luftfuktare (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1329"
                                    data-value="1329"
                                    class="facet-value third-level 1329"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Frostskydd/c/1329">
                                      <label class="truncate">Frostskydd (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1883"
                                    data-value="1883"
                                    class="facet-value third-level 1883"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Badrumsfläktar/c/1883">
                                      <label class="truncate">Badrumsfläktar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1328"
                                    data-value="1328"
                                    class="facet-value third-level 1328"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Golvvärme/c/1328">
                                      <label class="truncate">Golvvärme (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1326"
                                    data-value="1326"
                                    class="facet-value third-level 1326"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Värmefläktar/c/1326">
                                      <label class="truncate">Värmefläktar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1331"
                                    data-value="1331"
                                    class="facet-value third-level 1331"
                                  >
                                    <a
                                      href="/se/El/Klimat-&-värme/Termostater-&-hygrostater/c/1331"
                                    >
                                      <label class="truncate">Termostater & hygrostater (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1899"
                                    data-value="1899"
                                    class="facet-value third-level 1899"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Luftkonditionering/c/1899">
                                      <label class="truncate">Luftkonditionering (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1891"
                                    data-value="1891"
                                    class="facet-value third-level 1891"
                                  >
                                    <a
                                      href="/se/El/Klimat-&-värme/Kanalfläktar-&-rörfläktar/c/1891"
                                    >
                                      <label class="truncate">Kanalfläktar & rörfläktar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1333"
                                    data-value="1333"
                                    class="facet-value third-level 1333"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Fläktar-övrigt/c/1333">
                                      <label class="truncate">Fläktar övrigt (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1904"
                                    data-value="1904"
                                    class="facet-value third-level 1904"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Varvtalsregulatorer/c/1904">
                                      <label class="truncate">Varvtalsregulatorer (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1325"
                                    data-value="1325"
                                    class="facet-value third-level 1325"
                                  >
                                    <a href="/se/El/Klimat-&-värme/Byggfläktar/c/1325">
                                      <label class="truncate">Byggfläktar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1315" class="facet-value second-level 1315">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1315"
                                  aria-expanded="false"
                                  href="#cat_1315"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Ljuskällor/c/1315"
                                      class="truncate"
                                    >Ljuskällor (149)</a>
                                  </label>
                                  <span class="product-count">(149)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1315">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1318"
                                    data-value="1318"
                                    class="facet-value third-level 1318"
                                  >
                                    <a href="/se/El/Ljuskällor/LED-lampor/c/1318">
                                      <label class="truncate">LED-lampor (96)</label>
                                      <span class="product-count">(96)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1319"
                                    data-value="1319"
                                    class="facet-value third-level 1319"
                                  >
                                    <a href="/se/El/Ljuskällor/Halogenlampor/c/1319">
                                      <label class="truncate">Halogenlampor (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1317"
                                    data-value="1317"
                                    class="facet-value third-level 1317"
                                  >
                                    <a href="/se/El/Ljuskällor/Lysrör/c/1317">
                                      <label class="truncate">Lysrör (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1848"
                                    data-value="1848"
                                    class="facet-value third-level 1848"
                                  >
                                    <a href="/se/El/Ljuskällor/Lampor-med-skymningsrelä/c/1848">
                                      <label class="truncate">Lampor med skymningsrelä (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1321"
                                    data-value="1321"
                                    class="facet-value third-level 1321"
                                  >
                                    <a href="/se/El/Ljuskällor/Speciallampor/c/1321">
                                      <label class="truncate">Speciallampor (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1320"
                                    data-value="1320"
                                    class="facet-value third-level 1320"
                                  >
                                    <a href="/se/El/Ljuskällor/Glödlampor/c/1320">
                                      <label class="truncate">Glödlampor (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1852"
                                    data-value="1852"
                                    class="facet-value third-level 1852"
                                  >
                                    <a href="/se/El/Ljuskällor/Färgade-lampor/c/1852">
                                      <label class="truncate">Färgade lampor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1851"
                                    data-value="1851"
                                    class="facet-value third-level 1851"
                                  >
                                    <a href="/se/El/Ljuskällor/Glimtändare/c/1851">
                                      <label class="truncate">Glimtändare (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1281" class="facet-value second-level 1281">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1281"
                                  aria-expanded="false"
                                  href="#cat_1281"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Grenuttag-&-skarvsladdar/c/1281"
                                      class="truncate"
                                    >Grenuttag & skarvsladdar (53)</a>
                                  </label>
                                  <span class="product-count">(53)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1281">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1284"
                                    data-value="1284"
                                    class="facet-value third-level 1284"
                                  >
                                    <a href="/se/El/Grenuttag-&-skarvsladdar/Grenuttag/c/1284">
                                      <label class="truncate">Grenuttag (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1286"
                                    data-value="1286"
                                    class="facet-value third-level 1286"
                                  >
                                    <a href="/se/El/Grenuttag-&-skarvsladdar/Skarvsladdar/c/1286">
                                      <label class="truncate">Skarvsladdar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1863"
                                    data-value="1863"
                                    class="facet-value third-level 1863"
                                  >
                                    <a
                                      href="/se/El/Grenuttag-&-skarvsladdar/Förgreningskontakter/c/1863"
                                    >
                                      <label class="truncate">Förgreningskontakter (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1285"
                                    data-value="1285"
                                    class="facet-value third-level 1285"
                                  >
                                    <a href="/se/El/Grenuttag-&-skarvsladdar/Kabelvindor/c/1285">
                                      <label class="truncate">Kabelvindor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1287"
                                    data-value="1287"
                                    class="facet-value third-level 1287"
                                  >
                                    <a href="/se/El/Grenuttag-&-skarvsladdar/CEE-don/c/1287">
                                      <label class="truncate">CEE-don (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1228" class="facet-value second-level 1228">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1228"
                                  aria-expanded="false"
                                  href="#cat_1228"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Larm-&-säkerhet/c/1228"
                                      class="truncate"
                                    >Larm & säkerhet (112)</a>
                                  </label>
                                  <span class="product-count">(112)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1228">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1231"
                                    data-value="1231"
                                    class="facet-value third-level 1231"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Brandvarnare/c/1231">
                                      <label class="truncate">Brandvarnare (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1233"
                                    data-value="1233"
                                    class="facet-value third-level 1233"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Inbrottslarm/c/1233">
                                      <label class="truncate">Inbrottslarm (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1229"
                                    data-value="1229"
                                    class="facet-value third-level 1229"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Dörrklockor-&-tillbehör/c/1229">
                                      <label class="truncate">Dörrklockor & tillbehör (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1933"
                                    data-value="1933"
                                    class="facet-value third-level 1933"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Övervakningskameror/c/1933">
                                      <label class="truncate">Övervakningskameror (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1234"
                                    data-value="1234"
                                    class="facet-value third-level 1234"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Överfallslarm/c/1234">
                                      <label class="truncate">Överfallslarm (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1931"
                                    data-value="1931"
                                    class="facet-value third-level 1931"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Brandsläckare/c/1931">
                                      <label class="truncate">Brandsläckare (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1940"
                                    data-value="1940"
                                    class="facet-value third-level 1940"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Brandfiltar/c/1940">
                                      <label class="truncate">Brandfiltar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1936"
                                    data-value="1936"
                                    class="facet-value third-level 1936"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Gaslarm/c/1936">
                                      <label class="truncate">Gaslarm (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1938"
                                    data-value="1938"
                                    class="facet-value third-level 1938"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Vattenlarm/c/1938">
                                      <label class="truncate">Vattenlarm (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1232"
                                    data-value="1232"
                                    class="facet-value third-level 1232"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Larm-övrigt/c/1232">
                                      <label class="truncate">Larm övrigt (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1941"
                                    data-value="1941"
                                    class="facet-value third-level 1941"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Brandstegar/c/1941">
                                      <label class="truncate">Brandstegar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1939"
                                    data-value="1939"
                                    class="facet-value third-level 1939"
                                  >
                                    <a href="/se/El/Larm-&-säkerhet/Spislarm/c/1939">
                                      <label class="truncate">Spislarm (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1613" class="facet-value second-level 1613">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1613"
                                  aria-expanded="false"
                                  href="#cat_1613"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/c/1613"
                                      class="truncate"
                                    >Termometrar & väderstationer (40)</a>
                                  </label>
                                  <span class="product-count">(40)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1613">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1969"
                                    data-value="1969"
                                    class="facet-value third-level 1969"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Digitala-termometrar/c/1969"
                                    >
                                      <label class="truncate">Digitala termometrar (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1240"
                                    data-value="1240"
                                    class="facet-value third-level 1240"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Väderstationer/c/1240"
                                    >
                                      <label class="truncate">Väderstationer (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1970"
                                    data-value="1970"
                                    class="facet-value third-level 1970"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Analoga-termometrar/c/1970"
                                    >
                                      <label class="truncate">Analoga termometrar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1975"
                                    data-value="1975"
                                    class="facet-value third-level 1975"
                                  >
                                    <a href="/se/El/Termometrar-&-väderstationer/Regnmätare/c/1975">
                                      <label class="truncate">Regnmätare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1972"
                                    data-value="1972"
                                    class="facet-value third-level 1972"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Hygrometrar/c/1972"
                                    >
                                      <label class="truncate">Hygrometrar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1973"
                                    data-value="1973"
                                    class="facet-value third-level 1973"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Bastutermometrar/c/1973"
                                    >
                                      <label class="truncate">Bastutermometrar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2391"
                                    data-value="2391"
                                    class="facet-value third-level 2391"
                                  >
                                    <a
                                      href="/se/El/Termometrar-&-väderstationer/Badtermometrar/c/2391"
                                    >
                                      <label class="truncate">Badtermometrar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1265" class="facet-value second-level 1265">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1265"
                                  aria-expanded="false"
                                  href="#cat_1265"
                                >
                                  <label>
                                    <a href="/se/El/Kablar/c/1265" class="truncate">Kablar (57)</a>
                                  </label>
                                  <span class="product-count">(57)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1265">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1266"
                                    data-value="1266"
                                    class="facet-value third-level 1266"
                                  >
                                    <a href="/se/El/Kablar/Starkströmskablar/c/1266">
                                      <label class="truncate">Starkströmskablar (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1275"
                                    data-value="1275"
                                    class="facet-value third-level 1275"
                                  >
                                    <a href="/se/El/Kablar/Anslutningskablar/c/1275">
                                      <label class="truncate">Anslutningskablar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1273"
                                    data-value="1273"
                                    class="facet-value third-level 1273"
                                  >
                                    <a href="/se/El/Kablar/Högtalarkablar/c/1273">
                                      <label class="truncate">Högtalarkablar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1269"
                                    data-value="1269"
                                    class="facet-value third-level 1269"
                                  >
                                    <a href="/se/El/Kablar/Bil--&-båtkablar/c/1269">
                                      <label class="truncate">Bil- & båtkablar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1276"
                                    data-value="1276"
                                    class="facet-value third-level 1276"
                                  >
                                    <a href="/se/El/Kablar/Gummikablar/c/1276">
                                      <label class="truncate">Gummikablar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1272"
                                    data-value="1272"
                                    class="facet-value third-level 1272"
                                  >
                                    <a href="/se/El/Kablar/Koaxialkablar/c/1272">
                                      <label class="truncate">Koaxialkablar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1274"
                                    data-value="1274"
                                    class="facet-value third-level 1274"
                                  >
                                    <a href="/se/El/Kablar/Signal--&-datakablar/c/1274">
                                      <label class="truncate">Signal- & datakablar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1268"
                                    data-value="1268"
                                    class="facet-value third-level 1268"
                                  >
                                    <a href="/se/El/Kablar/Jordkablar/c/1268">
                                      <label class="truncate">Jordkablar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1293" class="facet-value second-level 1293">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1293"
                                  aria-expanded="false"
                                  href="#cat_1293"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Ficklampor-&-pannlampor/c/1293"
                                      class="truncate"
                                    >Ficklampor & pannlampor (44)</a>
                                  </label>
                                  <span class="product-count">(44)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1293">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1295"
                                    data-value="1295"
                                    class="facet-value third-level 1295"
                                  >
                                    <a href="/se/El/Ficklampor-&-pannlampor/Ficklampor/c/1295">
                                      <label class="truncate">Ficklampor (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1299"
                                    data-value="1299"
                                    class="facet-value third-level 1299"
                                  >
                                    <a href="/se/El/Ficklampor-&-pannlampor/Pannlampor/c/1299">
                                      <label class="truncate">Pannlampor (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2010"
                                    data-value="2010"
                                    class="facet-value third-level 2010"
                                  >
                                    <a
                                      href="/se/El/Ficklampor-&-pannlampor/Nyckelringslampor/c/2010"
                                    >
                                      <label class="truncate">Nyckelringslampor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1600"
                                    data-value="1600"
                                    class="facet-value third-level 1600"
                                  >
                                    <a href="/se/El/Ficklampor-&-pannlampor/Reservlampor/c/1600">
                                      <label class="truncate">Reservlampor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2011"
                                    data-value="2011"
                                    class="facet-value third-level 2011"
                                  >
                                    <a href="/se/El/Ficklampor-&-pannlampor/Kepslampor/c/2011">
                                      <label class="truncate">Kepslampor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1612" class="facet-value second-level 1612">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1612"
                                  aria-expanded="false"
                                  href="#cat_1612"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Mätinstrument-&-elmätare/c/1612"
                                      class="truncate"
                                    >Mätinstrument & elmätare (43)</a>
                                  </label>
                                  <span class="product-count">(43)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1612">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1245"
                                    data-value="1245"
                                    class="facet-value third-level 1245"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Alkoholtestare/c/1245">
                                      <label class="truncate">Alkoholtestare (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1246"
                                    data-value="1246"
                                    class="facet-value third-level 1246"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Multimeter/c/1246">
                                      <label class="truncate">Multimeter (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1953"
                                    data-value="1953"
                                    class="facet-value third-level 1953"
                                  >
                                    <a
                                      href="/se/El/Mätinstrument-&-elmätare/Temperaturmätare/c/1953"
                                    >
                                      <label class="truncate">Temperaturmätare (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1959"
                                    data-value="1959"
                                    class="facet-value third-level 1959"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Radonmätare/c/1959">
                                      <label class="truncate">Radonmätare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1244"
                                    data-value="1244"
                                    class="facet-value third-level 1244"
                                  >
                                    <a
                                      href="/se/El/Mätinstrument-&-elmätare/Spänningsprovare/c/1244"
                                    >
                                      <label class="truncate">Spänningsprovare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1243"
                                    data-value="1243"
                                    class="facet-value third-level 1243"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Fuktmätare/c/1243">
                                      <label class="truncate">Fuktmätare (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1292"
                                    data-value="1292"
                                    class="facet-value third-level 1292"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Elmätare/c/1292">
                                      <label class="truncate">Elmätare (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1958"
                                    data-value="1958"
                                    class="facet-value third-level 1958"
                                  >
                                    <a
                                      href="/se/El/Mätinstrument-&-elmätare/Inspektionskameror/c/1958"
                                    >
                                      <label class="truncate">Inspektionskameror (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1956"
                                    data-value="1956"
                                    class="facet-value third-level 1956"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Batteritestare/c/1956">
                                      <label class="truncate">Batteritestare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1963"
                                    data-value="1963"
                                    class="facet-value third-level 1963"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/PH-mätare/c/1963">
                                      <label class="truncate">PH-mätare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2392"
                                    data-value="2392"
                                    class="facet-value third-level 2392"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Ljusmätare/c/2392">
                                      <label class="truncate">Ljusmätare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1962"
                                    data-value="1962"
                                    class="facet-value third-level 1962"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Varvtalsmätare/c/1962">
                                      <label class="truncate">Varvtalsmätare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1964"
                                    data-value="1964"
                                    class="facet-value third-level 1964"
                                  >
                                    <a href="/se/El/Mätinstrument-&-elmätare/Ljudmätare/c/1964">
                                      <label class="truncate">Ljudmätare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1288" class="facet-value second-level 1288">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1288"
                                  aria-expanded="false"
                                  href="#cat_1288"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Hemautomation/c/1288"
                                      class="truncate"
                                    >Hemautomation (59)</a>
                                  </label>
                                  <span class="product-count">(59)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1288">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1291"
                                    data-value="1291"
                                    class="facet-value third-level 1291"
                                  >
                                    <a href="/se/El/Hemautomation/Insticksmottagare/c/1291">
                                      <label class="truncate">Insticksmottagare (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2403"
                                    data-value="2403"
                                    class="facet-value third-level 2403"
                                  >
                                    <a
                                      href="/se/El/Hemautomation/Fjärrkontroller-och-sändare/c/2403"
                                    >
                                      <label class="truncate">Fjärrkontroller och sändare (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2401"
                                    data-value="2401"
                                    class="facet-value third-level 2401"
                                  >
                                    <a href="/se/El/Hemautomation/Inbyggnadsmottagare/c/2401">
                                      <label class="truncate">Inbyggnadsmottagare (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2400"
                                    data-value="2400"
                                    class="facet-value third-level 2400"
                                  >
                                    <a href="/se/El/Hemautomation/GSM-styrning/c/2400">
                                      <label class="truncate">GSM-styrning (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2408"
                                    data-value="2408"
                                    class="facet-value third-level 2408"
                                  >
                                    <a href="/se/El/Hemautomation/Rörelsesensorer/c/2408">
                                      <label class="truncate">Rörelsesensorer (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2402"
                                    data-value="2402"
                                    class="facet-value third-level 2402"
                                  >
                                    <a href="/se/El/Hemautomation/Kontrollenheter/c/2402">
                                      <label class="truncate">Kontrollenheter (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2404"
                                    data-value="2404"
                                    class="facet-value third-level 2404"
                                  >
                                    <a href="/se/El/Hemautomation/Magnetkontakter/c/2404">
                                      <label class="truncate">Magnetkontakter (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2411"
                                    data-value="2411"
                                    class="facet-value third-level 2411"
                                  >
                                    <a href="/se/El/Hemautomation/Ljussensorer/c/2411">
                                      <label class="truncate">Ljussensorer (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1609" class="facet-value second-level 1609">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1609"
                                  aria-expanded="false"
                                  href="#cat_1609"
                                >
                                  <label>
                                    <a
                                      href="/se/El/12-V-&-elektroniktillbehör/c/1609"
                                      class="truncate"
                                    >12 V & elektroniktillbehör (31)</a>
                                  </label>
                                  <span class="product-count">(31)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1609">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1314"
                                    data-value="1314"
                                    class="facet-value third-level 1314"
                                  >
                                    <a
                                      href="/se/El/12-V-&-elektroniktillbehör/Kontakter-&-kopplingar/c/1314"
                                    >
                                      <label class="truncate">Kontakter & kopplingar (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2014"
                                    data-value="2014"
                                    class="facet-value third-level 2014"
                                  >
                                    <a href="/se/El/12-V-&-elektroniktillbehör/Säkringar/c/2014">
                                      <label class="truncate">Säkringar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2016"
                                    data-value="2016"
                                    class="facet-value third-level 2016"
                                  >
                                    <a href="/se/El/12-V-&-elektroniktillbehör/Strömbrytare/c/2016">
                                      <label class="truncate">Strömbrytare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1616"
                                    data-value="1616"
                                    class="facet-value third-level 1616"
                                  >
                                    <a
                                      href="/se/El/12-V-&-elektroniktillbehör/Solpanelstillbehör/c/1616"
                                    >
                                      <label class="truncate">Solpanelstillbehör (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1255"
                                    data-value="1255"
                                    class="facet-value third-level 1255"
                                  >
                                    <a
                                      href="/se/El/12-V-&-elektroniktillbehör/Komponenter-&-lysdioder/c/1255"
                                    >
                                      <label class="truncate">Komponenter & lysdioder (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2556" class="facet-value second-level 2556">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2556"
                                  aria-expanded="false"
                                  href="#cat_2556"
                                >
                                  <label>
                                    <a
                                      href="/se/El/Timer-&-brytare/c/2556"
                                      class="truncate"
                                    >Timer & brytare (28)</a>
                                  </label>
                                  <span class="product-count">(28)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2556">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1653"
                                    data-value="1653"
                                    class="facet-value third-level 1653"
                                  >
                                    <a href="/se/El/Timer-&-brytare/Kopplingsur/c/1653">
                                      <label class="truncate">Kopplingsur (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1654"
                                    data-value="1654"
                                    class="facet-value third-level 1654"
                                  >
                                    <a href="/se/El/Timer-&-brytare/Skymningsreläer/c/1654">
                                      <label class="truncate">Skymningsreläer (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2557"
                                    data-value="2557"
                                    class="facet-value third-level 2557"
                                  >
                                    <a href="/se/El/Timer-&-brytare/Korttidstimers/c/2557">
                                      <label class="truncate">Korttidstimers (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1283"
                                    data-value="1283"
                                    class="facet-value third-level 1283"
                                  >
                                    <a href="/se/El/Timer-&-brytare/Överspänningsskydd/c/1283">
                                      <label class="truncate">Överspänningsskydd (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2558"
                                    data-value="2558"
                                    class="facet-value third-level 2558"
                                  >
                                    <a href="/se/El/Timer-&-brytare/Jordfelsbrytare/c/2558">
                                      <label class="truncate">Jordfelsbrytare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li data-value="1036" class="facet-value first-level 1036">
                            <div class="cat-head">
                              <label
                                for="opt1036"
                                class="truncate collapsed"
                                data-toggle="collapse"
                                href="#cat_1036"
                                aria-controls="cat_1036"
                              >Fritid (1792)</label>
                            </div>
                            <!-- Level 2 -->
                            <ul class="second-level collapse" id="cat_1036">
                              <li>
                                <span class="list-gradient"></span>
                              </li>
                              <li data-value="1037" class="facet-value second-level 1037">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1037"
                                  aria-expanded="false"
                                  href="#cat_1037"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Utemiljö/c/1037"
                                      class="truncate"
                                    >Utemiljö (258)</a>
                                  </label>
                                  <span class="product-count">(258)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1037">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1579"
                                    data-value="1579"
                                    class="facet-value third-level 1579"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Skadedjursbekämpning/c/1579">
                                      <label class="truncate">Skadedjursbekämpning (53)</label>
                                      <span class="product-count">(53)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1054"
                                    data-value="1054"
                                    class="facet-value third-level 1054"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Trädgårdsmöbler/c/1054">
                                      <label class="truncate">Trädgårdsmöbler (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2434"
                                    data-value="2434"
                                    class="facet-value third-level 2434"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Grilltillbehör/c/2434">
                                      <label class="truncate">Grilltillbehör (30)</label>
                                      <span class="product-count">(30)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1057"
                                    data-value="1057"
                                    class="facet-value third-level 1057"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Postlådor-&-hussiffror/c/1057">
                                      <label class="truncate">Postlådor & hussiffror (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1578"
                                    data-value="1578"
                                    class="facet-value third-level 1578"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Flaggor-&-tillbehör/c/1578">
                                      <label class="truncate">Flaggor & tillbehör (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1534"
                                    data-value="1534"
                                    class="facet-value third-level 1534"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Grillar/c/1534">
                                      <label class="truncate">Grillar (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1053"
                                    data-value="1053"
                                    class="facet-value third-level 1053"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Paviljonger-&-partytält/c/1053">
                                      <label class="truncate">Paviljonger & partytält (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1682"
                                    data-value="1682"
                                    class="facet-value third-level 1682"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Trädgårdsdekorationer/c/1682">
                                      <label class="truncate">Trädgårdsdekorationer (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2573"
                                    data-value="2573"
                                    class="facet-value third-level 2573"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Eldkorgar/c/2573">
                                      <label class="truncate">Eldkorgar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1680"
                                    data-value="1680"
                                    class="facet-value third-level 1680"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Kompostering/c/1680">
                                      <label class="truncate">Kompostering (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1683"
                                    data-value="1683"
                                    class="facet-value third-level 1683"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Parasoller/c/1683">
                                      <label class="truncate">Parasoller (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1201"
                                    data-value="1201"
                                    class="facet-value third-level 1201"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Presenningar/c/1201">
                                      <label class="truncate">Presenningar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1056"
                                    data-value="1056"
                                    class="facet-value third-level 1056"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Fågelmatare/c/1056">
                                      <label class="truncate">Fågelmatare (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2560"
                                    data-value="2560"
                                    class="facet-value third-level 2560"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Golvplattor-&-trall/c/2560">
                                      <label class="truncate">Golvplattor & trall (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1678"
                                    data-value="1678"
                                    class="facet-value third-level 1678"
                                  >
                                    <a
                                      href="/se/Fritid/Utemiljö/Regnvattenspridare-&-mätare/c/1678"
                                    >
                                      <label class="truncate">Regnvattenspridare & mätare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2572"
                                    data-value="2572"
                                    class="facet-value third-level 2572"
                                  >
                                    <a href="/se/Fritid/Utemiljö/Vindskydd/c/2572">
                                      <label class="truncate">Vindskydd (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2571"
                                    data-value="2571"
                                    class="facet-value third-level 2571"
                                  >
                                    <a
                                      href="/se/Fritid/Utemiljö/Marschaller-&-marschallhållare/c/2571"
                                    >
                                      <label class="truncate">Marschaller & marschallhållare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1706" class="facet-value second-level 1706">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1706"
                                  aria-expanded="false"
                                  href="#cat_1706"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/c/1706"
                                      class="truncate"
                                    >Friluftsliv & camping (361)</a>
                                  </label>
                                  <span class="product-count">(361)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1706">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2452"
                                    data-value="2452"
                                    class="facet-value third-level 2452"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Funktionskläder/c/2452"
                                    >
                                      <label class="truncate">Funktionskläder (54)</label>
                                      <span class="product-count">(54)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1521"
                                    data-value="1521"
                                    class="facet-value third-level 1521"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Fisketillbehör/c/1521"
                                    >
                                      <label class="truncate">Fisketillbehör (93)</label>
                                      <span class="product-count">(93)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1533"
                                    data-value="1533"
                                    class="facet-value third-level 1533"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Campingkök/c/1533">
                                      <label class="truncate">Campingkök (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1707"
                                    data-value="1707"
                                    class="facet-value third-level 1707"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Kylboxar/c/1707">
                                      <label class="truncate">Kylboxar (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2449"
                                    data-value="2449"
                                    class="facet-value third-level 2449"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Campingmöbler/c/2449">
                                      <label class="truncate">Campingmöbler (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1537"
                                    data-value="1537"
                                    class="facet-value third-level 1537"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Reflexer/c/1537">
                                      <label class="truncate">Reflexer (33)</label>
                                      <span class="product-count">(33)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1539"
                                    data-value="1539"
                                    class="facet-value third-level 1539"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Termosar-&-termosmuggar/c/1539"
                                    >
                                      <label class="truncate">Termosar & termosmuggar (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1532"
                                    data-value="1532"
                                    class="facet-value third-level 1532"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Eldredskap/c/1532">
                                      <label class="truncate">Eldredskap (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1540"
                                    data-value="1540"
                                    class="facet-value third-level 1540"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Paraplyer-&-regnkläder/c/1540"
                                    >
                                      <label class="truncate">Paraplyer & regnkläder (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2084"
                                    data-value="2084"
                                    class="facet-value third-level 2084"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Redskap-&-verktyg/c/2084"
                                    >
                                      <label class="truncate">Redskap & verktyg (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1703"
                                    data-value="1703"
                                    class="facet-value third-level 1703"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Vattenflaskor/c/1703">
                                      <label class="truncate">Vattenflaskor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2457"
                                    data-value="2457"
                                    class="facet-value third-level 2457"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Luftmadrasser/c/2457">
                                      <label class="truncate">Luftmadrasser (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2455"
                                    data-value="2455"
                                    class="facet-value third-level 2455"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Muggar-&-kåsor/c/2455"
                                    >
                                      <label class="truncate">Muggar & kåsor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2094"
                                    data-value="2094"
                                    class="facet-value third-level 2094"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Ryggsäckar-hiking/c/2094"
                                    >
                                      <label class="truncate">Ryggsäckar hiking (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2454"
                                    data-value="2454"
                                    class="facet-value third-level 2454"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Vattenförvaring/c/2454"
                                    >
                                      <label class="truncate">Vattenförvaring (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1560"
                                    data-value="1560"
                                    class="facet-value third-level 1560"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Kikare/c/1560">
                                      <label class="truncate">Kikare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2451"
                                    data-value="2451"
                                    class="facet-value third-level 2451"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Sitt--&-liggunderlag/c/2451"
                                    >
                                      <label class="truncate">Sitt- & liggunderlag (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1704"
                                    data-value="1704"
                                    class="facet-value third-level 1704"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Sanitet/c/1704">
                                      <label class="truncate">Sanitet (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2448"
                                    data-value="2448"
                                    class="facet-value third-level 2448"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Bär--&-svampplockning/c/2448"
                                    >
                                      <label class="truncate">Bär- & svampplockning (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2456"
                                    data-value="2456"
                                    class="facet-value third-level 2456"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Tallrikar-&-bestick/c/2456"
                                    >
                                      <label class="truncate">Tallrikar & bestick (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1525"
                                    data-value="1525"
                                    class="facet-value third-level 1525"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Tält/c/1525">
                                      <label class="truncate">Tält (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1541"
                                    data-value="1541"
                                    class="facet-value third-level 1541"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Kompasser/c/1541">
                                      <label class="truncate">Kompasser (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2450"
                                    data-value="2450"
                                    class="facet-value third-level 2450"
                                  >
                                    <a href="/se/Fritid/Friluftsliv-&-camping/Sovsäckar/c/2450">
                                      <label class="truncate">Sovsäckar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1745"
                                    data-value="1745"
                                    class="facet-value third-level 1745"
                                  >
                                    <a
                                      href="/se/Fritid/Friluftsliv-&-camping/Komradio-&-PMR/c/1745"
                                    >
                                      <label class="truncate">Komradio & PMR (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2100" class="facet-value second-level 2100">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2100"
                                  aria-expanded="false"
                                  href="#cat_2100"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/c/2100"
                                      class="truncate"
                                    >Trädgårdsmaskiner (175)</a>
                                  </label>
                                  <span class="product-count">(175)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2100">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2576"
                                    data-value="2576"
                                    class="facet-value third-level 2576"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Robotgräsklippartillbehör/c/2576"
                                    >
                                      <label class="truncate">Robotgräsklippartillbehör (36)</label>
                                      <span class="product-count">(36)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2575"
                                    data-value="2575"
                                    class="facet-value third-level 2575"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Grästrimmertillbehör/c/2575"
                                    >
                                      <label class="truncate">Grästrimmertillbehör (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2082"
                                    data-value="2082"
                                    class="facet-value third-level 2082"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Grästrimmers/c/2082">
                                      <label class="truncate">Grästrimmers (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1067"
                                    data-value="1067"
                                    class="facet-value third-level 1067"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Motorsågstillbehör/c/1067"
                                    >
                                      <label class="truncate">Motorsågstillbehör (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1066"
                                    data-value="1066"
                                    class="facet-value third-level 1066"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Röjsågar-&-tillbehör/c/1066"
                                    >
                                      <label class="truncate">Röjsågar & tillbehör (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2081"
                                    data-value="2081"
                                    class="facet-value third-level 2081"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Gräsklippare/c/2081">
                                      <label class="truncate">Gräsklippare (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2393"
                                    data-value="2393"
                                    class="facet-value third-level 2393"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Robotgräsklippare/c/2393">
                                      <label class="truncate">Robotgräsklippare (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2090"
                                    data-value="2090"
                                    class="facet-value third-level 2090"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Mossrivare/c/2090">
                                      <label class="truncate">Mossrivare (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2083"
                                    data-value="2083"
                                    class="facet-value third-level 2083"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Häcksaxar-&-multitrimmers/c/2083"
                                    >
                                      <label class="truncate">Häcksaxar & multitrimmers (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1676"
                                    data-value="1676"
                                    class="facet-value third-level 1676"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Trädgårdspumpar/c/1676">
                                      <label class="truncate">Trädgårdspumpar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1069"
                                    data-value="1069"
                                    class="facet-value third-level 1069"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsmaskiner/Vedklyvar-&-vedkapar/c/1069"
                                    >
                                      <label class="truncate">Vedklyvar & vedkapar (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1065"
                                    data-value="1065"
                                    class="facet-value third-level 1065"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Motorsågar/c/1065">
                                      <label class="truncate">Motorsågar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2574"
                                    data-value="2574"
                                    class="facet-value third-level 2574"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Grensågar/c/2574">
                                      <label class="truncate">Grensågar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2089"
                                    data-value="2089"
                                    class="facet-value third-level 2089"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Lövblås/c/2089">
                                      <label class="truncate">Lövblås (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2085"
                                    data-value="2085"
                                    class="facet-value third-level 2085"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Kompostkvarnar/c/2085">
                                      <label class="truncate">Kompostkvarnar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2097"
                                    data-value="2097"
                                    class="facet-value third-level 2097"
                                  >
                                    <a href="/se/Fritid/Trädgårdsmaskiner/Snöslungor/c/2097">
                                      <label class="truncate">Snöslungor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1908" class="facet-value second-level 1908">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1908"
                                  aria-expanded="false"
                                  href="#cat_1908"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Leksaker-&-spel/c/1908"
                                      class="truncate"
                                    >Leksaker & spel (321)</a>
                                  </label>
                                  <span class="product-count">(321)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1908">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1494"
                                    data-value="1494"
                                    class="facet-value third-level 1494"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Rita-&-måla/c/1494">
                                      <label class="truncate">Rita & måla (49)</label>
                                      <span class="product-count">(49)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1498"
                                    data-value="1498"
                                    class="facet-value third-level 1498"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Spel-&-pussel/c/1498">
                                      <label class="truncate">Spel & pussel (41)</label>
                                      <span class="product-count">(41)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1708"
                                    data-value="1708"
                                    class="facet-value third-level 1708"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Sommarlek/c/1708">
                                      <label class="truncate">Sommarlek (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1910"
                                    data-value="1910"
                                    class="facet-value third-level 1910"
                                  >
                                    <a
                                      href="/se/Fritid/Leksaker-&-spel/Experiment,-lek-&-lär/c/1910"
                                    >
                                      <label class="truncate">Experiment, lek & lär (21)</label>
                                      <span class="product-count">(21)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2461"
                                    data-value="2461"
                                    class="facet-value third-level 2461"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Ballonger-&-kalas/c/2461">
                                      <label class="truncate">Ballonger & kalas (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2265"
                                    data-value="2265"
                                    class="facet-value third-level 2265"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Pyssel/c/2265">
                                      <label class="truncate">Pyssel (29)</label>
                                      <span class="product-count">(29)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2460"
                                    data-value="2460"
                                    class="facet-value third-level 2460"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Badleksaker/c/2460">
                                      <label class="truncate">Badleksaker (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1909"
                                    data-value="1909"
                                    class="facet-value third-level 1909"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Radiostyrt/c/1909">
                                      <label class="truncate">Radiostyrt (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2471"
                                    data-value="2471"
                                    class="facet-value third-level 2471"
                                  >
                                    <a
                                      href="/se/Fritid/Leksaker-&-spel/Dockor,-figurer-&-gosedjur/c/2471"
                                    >
                                      <label class="truncate">Dockor, figurer & gosedjur (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2469"
                                    data-value="2469"
                                    class="facet-value third-level 2469"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Redskap-för-barn/c/2469">
                                      <label class="truncate">Redskap för barn (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2266"
                                    data-value="2266"
                                    class="facet-value third-level 2266"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Sportleksaker/c/2266">
                                      <label class="truncate">Sportleksaker (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2468"
                                    data-value="2468"
                                    class="facet-value third-level 2468"
                                  >
                                    <a
                                      href="/se/Fritid/Leksaker-&-spel/Leksaksbilar-&-fordon/c/2468"
                                    >
                                      <label class="truncate">Leksaksbilar & fordon (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2462"
                                    data-value="2462"
                                    class="facet-value third-level 2462"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Byggleksaker/c/2462">
                                      <label class="truncate">Byggleksaker (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1710"
                                    data-value="1710"
                                    class="facet-value third-level 1710"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Vinterlek/c/1710">
                                      <label class="truncate">Vinterlek (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2474"
                                    data-value="2474"
                                    class="facet-value third-level 2474"
                                  >
                                    <a
                                      href="/se/Fritid/Leksaker-&-spel/Maskerad-&-utklädning/c/2474"
                                    >
                                      <label class="truncate">Maskerad & utklädning (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2472"
                                    data-value="2472"
                                    class="facet-value third-level 2472"
                                  >
                                    <a href="/se/Fritid/Leksaker-&-spel/Interaktiv-lek/c/2472">
                                      <label class="truncate">Interaktiv lek (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2435" class="facet-value second-level 2435">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2435"
                                  aria-expanded="false"
                                  href="#cat_2435"
                                >
                                  <label>
                                    <a href="/se/Fritid/Odling/c/2435" class="truncate">Odling (78)</a>
                                  </label>
                                  <span class="product-count">(78)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2435">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1058"
                                    data-value="1058"
                                    class="facet-value third-level 1058"
                                  >
                                    <a href="/se/Fritid/Odling/Blomkrukor-&-lådor/c/1058">
                                      <label class="truncate">Blomkrukor & lådor (35)</label>
                                      <span class="product-count">(35)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1681"
                                    data-value="1681"
                                    class="facet-value third-level 1681"
                                  >
                                    <a href="/se/Fritid/Odling/Odlingstillbehör/c/1681">
                                      <label class="truncate">Odlingstillbehör (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2440"
                                    data-value="2440"
                                    class="facet-value third-level 2440"
                                  >
                                    <a href="/se/Fritid/Odling/Växtstöd-&-uppbindning/c/2440">
                                      <label class="truncate">Växtstöd & uppbindning (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2437"
                                    data-value="2437"
                                    class="facet-value third-level 2437"
                                  >
                                    <a href="/se/Fritid/Odling/Fröer/c/2437">
                                      <label class="truncate">Fröer (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2438"
                                    data-value="2438"
                                    class="facet-value third-level 2438"
                                  >
                                    <a href="/se/Fritid/Odling/Förkultivering/c/2438">
                                      <label class="truncate">Förkultivering (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2441"
                                    data-value="2441"
                                    class="facet-value third-level 2441"
                                  >
                                    <a href="/se/Fritid/Odling/Jord/c/2441">
                                      <label class="truncate">Jord (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2394"
                                    data-value="2394"
                                    class="facet-value third-level 2394"
                                  >
                                    <a href="/se/Fritid/Odling/Växtbelysning/c/2394">
                                      <label class="truncate">Växtbelysning (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2447" class="facet-value second-level 2447">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2447"
                                  aria-expanded="false"
                                  href="#cat_2447"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Trädgårdsredskap/c/2447"
                                      class="truncate"
                                    >Trädgårdsredskap (161)</a>
                                  </label>
                                  <span class="product-count">(161)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2447">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1061"
                                    data-value="1061"
                                    class="facet-value third-level 1061"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Bevattning/c/1061">
                                      <label class="truncate">Bevattning (79)</label>
                                      <span class="product-count">(79)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2444"
                                    data-value="2444"
                                    class="facet-value third-level 2444"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsredskap/Övriga-trädgårdsredskap/c/2444"
                                    >
                                      <label class="truncate">Övriga trädgårdsredskap (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1063"
                                    data-value="1063"
                                    class="facet-value third-level 1063"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Beskärning/c/1063">
                                      <label class="truncate">Beskärning (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2445"
                                    data-value="2445"
                                    class="facet-value third-level 2445"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Korgar-&-tunnor/c/2445">
                                      <label class="truncate">Korgar & tunnor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1068"
                                    data-value="1068"
                                    class="facet-value third-level 1068"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Yxor/c/1068">
                                      <label class="truncate">Yxor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2443"
                                    data-value="2443"
                                    class="facet-value third-level 2443"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Spadar-&-skyfflar/c/2443">
                                      <label class="truncate">Spadar & skyfflar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1679"
                                    data-value="1679"
                                    class="facet-value third-level 1679"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Trycksprutor/c/1679">
                                      <label class="truncate">Trycksprutor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2096"
                                    data-value="2096"
                                    class="facet-value third-level 2096"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsredskap/Snöredskap-&-tillbehör/c/2096"
                                    >
                                      <label class="truncate">Snöredskap & tillbehör (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2442"
                                    data-value="2442"
                                    class="facet-value third-level 2442"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Krattor-&-räfsor/c/2442">
                                      <label class="truncate">Krattor & räfsor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2577"
                                    data-value="2577"
                                    class="facet-value third-level 2577"
                                  >
                                    <a href="/se/Fritid/Trädgårdsredskap/Skogsverktyg/c/2577">
                                      <label class="truncate">Skogsverktyg (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2446"
                                    data-value="2446"
                                    class="facet-value third-level 2446"
                                  >
                                    <a
                                      href="/se/Fritid/Trädgårdsredskap/Skottkärror-&-vagnar/c/2446"
                                    >
                                      <label class="truncate">Skottkärror & vagnar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1664" class="facet-value second-level 1664">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1664"
                                  aria-expanded="false"
                                  href="#cat_1664"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Cyklar-&-elfordon/c/1664"
                                      class="truncate"
                                    >Cyklar & elfordon (119)</a>
                                  </label>
                                  <span class="product-count">(119)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1664">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1545"
                                    data-value="1545"
                                    class="facet-value third-level 1545"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykeltillbehör/c/1545">
                                      <label class="truncate">Cykeltillbehör (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2459"
                                    data-value="2459"
                                    class="facet-value third-level 2459"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykelreparation/c/2459">
                                      <label class="truncate">Cykelreparation (32)</label>
                                      <span class="product-count">(32)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1697"
                                    data-value="1697"
                                    class="facet-value third-level 1697"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykelpumpar/c/1697">
                                      <label class="truncate">Cykelpumpar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1544"
                                    data-value="1544"
                                    class="facet-value third-level 1544"
                                  >
                                    <a
                                      href="/se/Fritid/Cyklar-&-elfordon/Cykeldäck-&-cykelslang/c/1544"
                                    >
                                      <label class="truncate">Cykeldäck & cykelslang (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1699"
                                    data-value="1699"
                                    class="facet-value third-level 1699"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykellås/c/1699">
                                      <label class="truncate">Cykellås (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1700"
                                    data-value="1700"
                                    class="facet-value third-level 1700"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykelbelysning/c/1700">
                                      <label class="truncate">Cykelbelysning (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2458"
                                    data-value="2458"
                                    class="facet-value third-level 2458"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cykelhjälmar/c/2458">
                                      <label class="truncate">Cykelhjälmar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2590"
                                    data-value="2590"
                                    class="facet-value third-level 2590"
                                  >
                                    <a
                                      href="/se/Fritid/Cyklar-&-elfordon/Balans--&-barncyklar/c/2590"
                                    >
                                      <label class="truncate">Balans- & barncyklar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2591"
                                    data-value="2591"
                                    class="facet-value third-level 2591"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Sparkcyklar/c/2591">
                                      <label class="truncate">Sparkcyklar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2077"
                                    data-value="2077"
                                    class="facet-value third-level 2077"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/Cyklar/c/2077">
                                      <label class="truncate">Cyklar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2593"
                                    data-value="2593"
                                    class="facet-value third-level 2593"
                                  >
                                    <a href="/se/Fritid/Cyklar-&-elfordon/El-scootrar/c/2593">
                                      <label class="truncate">El-scootrar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2610" class="facet-value second-level 2610">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2610"
                                  aria-expanded="false"
                                  href="#cat_2610"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Baby-&-barn/c/2610"
                                      class="truncate"
                                    >Baby & barn (96)</a>
                                  </label>
                                  <span class="product-count">(96)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2610">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1230"
                                    data-value="1230"
                                    class="facet-value third-level 1230"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnsäkerhet/c/1230">
                                      <label class="truncate">Barnsäkerhet (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2617"
                                    data-value="2617"
                                    class="facet-value third-level 2617"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnkläder/c/2617">
                                      <label class="truncate">Barnkläder (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2597"
                                    data-value="2597"
                                    class="facet-value third-level 2597"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnmöbler/c/2597">
                                      <label class="truncate">Barnmöbler (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2611"
                                    data-value="2611"
                                    class="facet-value third-level 2611"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Babyvakter/c/2611">
                                      <label class="truncate">Babyvakter (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2613"
                                    data-value="2613"
                                    class="facet-value third-level 2613"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnvagnar-&-tillbehör/c/2613">
                                      <label class="truncate">Barnvagnar & tillbehör (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2614"
                                    data-value="2614"
                                    class="facet-value third-level 2614"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnstolar/c/2614">
                                      <label class="truncate">Barnstolar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2612"
                                    data-value="2612"
                                    class="facet-value third-level 2612"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnhjälmar/c/2612">
                                      <label class="truncate">Barnhjälmar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2615"
                                    data-value="2615"
                                    class="facet-value third-level 2615"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Barnsängar/c/2615">
                                      <label class="truncate">Barnsängar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2616"
                                    data-value="2616"
                                    class="facet-value third-level 2616"
                                  >
                                    <a href="/se/Fritid/Baby-&-barn/Bärselar-&-bärsjalar/c/2616">
                                      <label class="truncate">Bärselar & bärsjalar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2623"
                                    data-value="2623"
                                    class="facet-value third-level 2623"
                                  >
                                    <a
                                      href="/se/Fritid/Baby-&-barn/Bilbarnstolar-&-bälteskuddar/c/2623"
                                    >
                                      <label class="truncate">Bilbarnstolar & bälteskuddar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1546" class="facet-value second-level 1546">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1546"
                                  aria-expanded="false"
                                  href="#cat_1546"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Resetillbehör/c/1546"
                                      class="truncate"
                                    >Resetillbehör (106)</a>
                                  </label>
                                  <span class="product-count">(106)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1546">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1549"
                                    data-value="1549"
                                    class="facet-value third-level 1549"
                                  >
                                    <a href="/se/Fritid/Resetillbehör/Resetillbehör/c/1549">
                                      <label class="truncate">Resetillbehör (61)</label>
                                      <span class="product-count">(61)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1775"
                                    data-value="1775"
                                    class="facet-value third-level 1775"
                                  >
                                    <a href="/se/Fritid/Resetillbehör/Resväskor/c/1775">
                                      <label class="truncate">Resväskor (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1282"
                                    data-value="1282"
                                    class="facet-value third-level 1282"
                                  >
                                    <a href="/se/Fritid/Resetillbehör/Reseadaptrar/c/1282">
                                      <label class="truncate">Reseadaptrar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1547"
                                    data-value="1547"
                                    class="facet-value third-level 1547"
                                  >
                                    <a href="/se/Fritid/Resetillbehör/Ryggsäckar/c/1547">
                                      <label class="truncate">Ryggsäckar (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2466"
                                    data-value="2466"
                                    class="facet-value third-level 2466"
                                  >
                                    <a href="/se/Fritid/Resetillbehör/Resekomfort/c/2466">
                                      <label class="truncate">Resekomfort (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1505" class="facet-value second-level 1505">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1505"
                                  aria-expanded="false"
                                  href="#cat_1505"
                                >
                                  <label>
                                    <a href="/se/Fritid/Båt/c/1505" class="truncate">Båt (49)</a>
                                  </label>
                                  <span class="product-count">(49)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1505">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1510"
                                    data-value="1510"
                                    class="facet-value third-level 1510"
                                  >
                                    <a href="/se/Fritid/Båt/Båtbeslag/c/1510">
                                      <label class="truncate">Båtbeslag (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1515"
                                    data-value="1515"
                                    class="facet-value third-level 1515"
                                  >
                                    <a href="/se/Fritid/Båt/Flytvästar-&-livräddning/c/1515">
                                      <label class="truncate">Flytvästar & livräddning (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1556"
                                    data-value="1556"
                                    class="facet-value third-level 1556"
                                  >
                                    <a href="/se/Fritid/Båt/Båttillbehör/c/1556">
                                      <label class="truncate">Båttillbehör (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1507"
                                    data-value="1507"
                                    class="facet-value third-level 1507"
                                  >
                                    <a href="/se/Fritid/Båt/Tågvirke/c/1507">
                                      <label class="truncate">Tågvirke (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1512"
                                    data-value="1512"
                                    class="facet-value third-level 1512"
                                  >
                                    <a href="/se/Fritid/Båt/Båtvård/c/1512">
                                      <label class="truncate">Båtvård (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1506"
                                    data-value="1506"
                                    class="facet-value third-level 1506"
                                  >
                                    <a href="/se/Fritid/Båt/Förtöjning-&-ankring/c/1506">
                                      <label class="truncate">Förtöjning & ankring (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1660" class="facet-value second-level 1660">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1660"
                                  aria-expanded="false"
                                  href="#cat_1660"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/c/1660"
                                      class="truncate"
                                    >Husdjurstillbehör (68)</a>
                                  </label>
                                  <span class="product-count">(68)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1660">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2585"
                                    data-value="2585"
                                    class="facet-value third-level 2585"
                                  >
                                    <a href="/se/Fritid/Husdjurstillbehör/Koppel-&-halsband/c/2585">
                                      <label class="truncate">Koppel & halsband (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2586"
                                    data-value="2586"
                                    class="facet-value third-level 2586"
                                  >
                                    <a href="/se/Fritid/Husdjurstillbehör/Djurleksaker/c/2586">
                                      <label class="truncate">Djurleksaker (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1686"
                                    data-value="1686"
                                    class="facet-value third-level 1686"
                                  >
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/Pälsvård-&-klovård/c/1686"
                                    >
                                      <label class="truncate">Pälsvård & klovård (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2588"
                                    data-value="2588"
                                    class="facet-value third-level 2588"
                                  >
                                    <a href="/se/Fritid/Husdjurstillbehör/Djursäkerhet/c/2588">
                                      <label class="truncate">Djursäkerhet (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2587"
                                    data-value="2587"
                                    class="facet-value third-level 2587"
                                  >
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/Djurmat-&-djurgodis/c/2587"
                                    >
                                      <label class="truncate">Djurmat & djurgodis (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1690"
                                    data-value="1690"
                                    class="facet-value third-level 1690"
                                  >
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/Djurtoalettartiklar/c/1690"
                                    >
                                      <label class="truncate">Djurtoalettartiklar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1688"
                                    data-value="1688"
                                    class="facet-value third-level 1688"
                                  >
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/Matskålar-&-foderförvaring/c/1688"
                                    >
                                      <label class="truncate">Matskålar & foderförvaring (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1689"
                                    data-value="1689"
                                    class="facet-value third-level 1689"
                                  >
                                    <a
                                      href="/se/Fritid/Husdjurstillbehör/Djurfiltar-&-handdukar/c/1689"
                                    >
                                      <label class="truncate">Djurfiltar & handdukar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1687"
                                    data-value="1687"
                                    class="facet-value third-level 1687"
                                  >
                                    <a href="/se/Fritid/Husdjurstillbehör/Burar-&-korgar/c/1687">
                                      <label class="truncate">Burar & korgar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1536" class="facet-value second-level 1536">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1536"
                                  aria-expanded="false"
                                  href="#cat_1536"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/c/1536"
                                      class="truncate"
                                    >Sport- & träningsutrustning (35)</a>
                                  </label>
                                  <span class="product-count">(35)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1536">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1691"
                                    data-value="1691"
                                    class="facet-value third-level 1691"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Träningsutrustning/c/1691"
                                    >
                                      <label class="truncate">Träningsutrustning (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2056"
                                    data-value="2056"
                                    class="facet-value third-level 2056"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Broddar-&-halkskydd/c/2056"
                                    >
                                      <label class="truncate">Broddar & halkskydd (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2464"
                                    data-value="2464"
                                    class="facet-value third-level 2464"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Stegräknare/c/2464"
                                    >
                                      <label class="truncate">Stegräknare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1695"
                                    data-value="1695"
                                    class="facet-value third-level 1695"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Sportskydd/c/1695"
                                    >
                                      <label class="truncate">Sportskydd (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2465"
                                    data-value="2465"
                                    class="facet-value third-level 2465"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Iläggssulor/c/2465"
                                    >
                                      <label class="truncate">Iläggssulor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1238"
                                    data-value="1238"
                                    class="facet-value third-level 1238"
                                  >
                                    <a href="/se/Fritid/Sport--&-träningsutrustning/Stoppur/c/1238">
                                      <label class="truncate">Stoppur (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1692"
                                    data-value="1692"
                                    class="facet-value third-level 1692"
                                  >
                                    <a
                                      href="/se/Fritid/Sport--&-träningsutrustning/Träningsklockor/c/1692"
                                    >
                                      <label class="truncate">Träningsklockor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2475" class="facet-value second-level 2475">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2475"
                                  aria-expanded="false"
                                  href="#cat_2475"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Pool-&-pooltillbehör/c/2475"
                                      class="truncate"
                                    >Pool & pooltillbehör (19)</a>
                                  </label>
                                  <span class="product-count">(19)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2475">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1513"
                                    data-value="1513"
                                    class="facet-value third-level 1513"
                                  >
                                    <a
                                      href="/se/Fritid/Pool-&-pooltillbehör/Pool-&-pooltillbehör/c/1513"
                                    >
                                      <label class="truncate">Pool & pooltillbehör (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2619" class="facet-value second-level 2619">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2619"
                                  aria-expanded="false"
                                  href="#cat_2619"
                                >
                                  <label>
                                    <a
                                      href="/se/Fritid/Drönare-&-tillbehör/c/2619"
                                      class="truncate"
                                    >Drönare & tillbehör (15)</a>
                                  </label>
                                  <span class="product-count">(15)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2619">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2621"
                                    data-value="2621"
                                    class="facet-value third-level 2621"
                                  >
                                    <a
                                      href="/se/Fritid/Drönare-&-tillbehör/Drönare-för-barn/c/2621"
                                    >
                                      <label class="truncate">Drönare för barn (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2620"
                                    data-value="2620"
                                    class="facet-value third-level 2620"
                                  >
                                    <a href="/se/Fritid/Drönare-&-tillbehör/Drönare/c/2620">
                                      <label class="truncate">Drönare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2622"
                                    data-value="2622"
                                    class="facet-value third-level 2622"
                                  >
                                    <a
                                      href="/se/Fritid/Drönare-&-tillbehör/Tillbehör-för-drönare/c/2622"
                                    >
                                      <label class="truncate">Tillbehör för drönare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li data-value="1035" class="facet-value first-level 1035">
                            <div class="cat-head">
                              <label
                                for="opt1035"
                                class="truncate collapsed"
                                data-toggle="collapse"
                                href="#cat_1035"
                                aria-controls="cat_1035"
                              >Hem (2402)</label>
                            </div>
                            <!-- Level 2 -->
                            <ul class="second-level collapse" id="cat_1035">
                              <li>
                                <span class="list-gradient"></span>
                              </li>
                              <li data-value="1454" class="facet-value second-level 1454">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1454"
                                  aria-expanded="false"
                                  href="#cat_1454"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Städa-&-diska/c/1454"
                                      class="truncate"
                                    >Städa & diska (312)</a>
                                  </label>
                                  <span class="product-count">(312)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1454">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1458"
                                    data-value="1458"
                                    class="facet-value third-level 1458"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Övrig-städutrustning/c/1458">
                                      <label class="truncate">Övrig städutrustning (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1457"
                                    data-value="1457"
                                    class="facet-value third-level 1457"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Moppar-&-hinkar/c/1457">
                                      <label class="truncate">Moppar & hinkar (32)</label>
                                      <span class="product-count">(32)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1459"
                                    data-value="1459"
                                    class="facet-value third-level 1459"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Diska/c/1459">
                                      <label class="truncate">Diska (44)</label>
                                      <span class="product-count">(44)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1460"
                                    data-value="1460"
                                    class="facet-value third-level 1460"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Avfall/c/1460">
                                      <label class="truncate">Avfall (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1455"
                                    data-value="1455"
                                    class="facet-value third-level 1455"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Dammsugare-&-tillbehör/c/1455">
                                      <label class="truncate">Dammsugare & tillbehör (50)</label>
                                      <span class="product-count">(50)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2254"
                                    data-value="2254"
                                    class="facet-value third-level 2254"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Fönsterrengöring/c/2254">
                                      <label class="truncate">Fönsterrengöring (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1996"
                                    data-value="1996"
                                    class="facet-value third-level 1996"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Tork--&-disktrasor/c/1996">
                                      <label class="truncate">Tork- & disktrasor (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2253"
                                    data-value="2253"
                                    class="facet-value third-level 2253"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Dammsugarpåsar-&-filter/c/2253">
                                      <label class="truncate">Dammsugarpåsar & filter (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2256"
                                    data-value="2256"
                                    class="facet-value third-level 2256"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Rengöringsmedel/c/2256">
                                      <label class="truncate">Rengöringsmedel (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2387"
                                    data-value="2387"
                                    class="facet-value third-level 2387"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Robotdammsugare/c/2387">
                                      <label class="truncate">Robotdammsugare (54)</label>
                                      <span class="product-count">(54)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2257"
                                    data-value="2257"
                                    class="facet-value third-level 2257"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Sopborstar/c/2257">
                                      <label class="truncate">Sopborstar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2282"
                                    data-value="2282"
                                    class="facet-value third-level 2282"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Ångtvättar/c/2282">
                                      <label class="truncate">Ångtvättar (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2581"
                                    data-value="2581"
                                    class="facet-value third-level 2581"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Golvvårdsmaskiner/c/2581">
                                      <label class="truncate">Golvvårdsmaskiner (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2480"
                                    data-value="2480"
                                    class="facet-value third-level 2480"
                                  >
                                    <a href="/se/Hem/Städa-&-diska/Ultraljudsrengöring/c/2480">
                                      <label class="truncate">Ultraljudsrengöring (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1463" class="facet-value second-level 1463">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1463"
                                  aria-expanded="false"
                                  href="#cat_1463"
                                >
                                  <label>
                                    <a href="/se/Hem/Kontor/c/1463" class="truncate">Kontor (474)</a>
                                  </label>
                                  <span class="product-count">(474)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1463">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1468"
                                    data-value="1468"
                                    class="facet-value third-level 1468"
                                  >
                                    <a href="/se/Hem/Kontor/Block-&-papper/c/1468">
                                      <label class="truncate">Block & papper (55)</label>
                                      <span class="product-count">(55)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1467"
                                    data-value="1467"
                                    class="facet-value third-level 1467"
                                  >
                                    <a href="/se/Hem/Kontor/Pennor/c/1467">
                                      <label class="truncate">Pennor (114)</label>
                                      <span class="product-count">(114)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1881"
                                    data-value="1881"
                                    class="facet-value third-level 1881"
                                  >
                                    <a href="/se/Hem/Kontor/Kontorstillbehör/c/1881">
                                      <label class="truncate">Kontorstillbehör (62)</label>
                                      <span class="product-count">(62)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1872"
                                    data-value="1872"
                                    class="facet-value third-level 1872"
                                  >
                                    <a href="/se/Hem/Kontor/Brev-&-paket/c/1872">
                                      <label class="truncate">Brev & paket (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1855"
                                    data-value="1855"
                                    class="facet-value third-level 1855"
                                  >
                                    <a href="/se/Hem/Kontor/Pärmar-&-register/c/1855">
                                      <label class="truncate">Pärmar & register (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1878"
                                    data-value="1878"
                                    class="facet-value third-level 1878"
                                  >
                                    <a href="/se/Hem/Kontor/Anslagstavlor-&-whiteboard/c/1878">
                                      <label class="truncate">Anslagstavlor & whiteboard (44)</label>
                                      <span class="product-count">(44)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1472"
                                    data-value="1472"
                                    class="facet-value third-level 1472"
                                  >
                                    <a href="/se/Hem/Kontor/Märkmaskiner/c/1472">
                                      <label class="truncate">Märkmaskiner (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1874"
                                    data-value="1874"
                                    class="facet-value third-level 1874"
                                  >
                                    <a href="/se/Hem/Kontor/Dokumentförvaring/c/1874">
                                      <label class="truncate">Dokumentförvaring (32)</label>
                                      <span class="product-count">(32)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1900"
                                    data-value="1900"
                                    class="facet-value third-level 1900"
                                  >
                                    <a href="/se/Hem/Kontor/Saxar/c/1900">
                                      <label class="truncate">Saxar (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1902"
                                    data-value="1902"
                                    class="facet-value third-level 1902"
                                  >
                                    <a href="/se/Hem/Kontor/Kontorstejp/c/1902">
                                      <label class="truncate">Kontorstejp (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1896"
                                    data-value="1896"
                                    class="facet-value third-level 1896"
                                  >
                                    <a href="/se/Hem/Kontor/Laminering-&-bindning/c/1896">
                                      <label class="truncate">Laminering & bindning (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1897"
                                    data-value="1897"
                                    class="facet-value third-level 1897"
                                  >
                                    <a href="/se/Hem/Kontor/Kalkylatorer/c/1897">
                                      <label class="truncate">Kalkylatorer (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1882"
                                    data-value="1882"
                                    class="facet-value third-level 1882"
                                  >
                                    <a href="/se/Hem/Kontor/Häftapparater/c/1882">
                                      <label class="truncate">Häftapparater (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1903"
                                    data-value="1903"
                                    class="facet-value third-level 1903"
                                  >
                                    <a href="/se/Hem/Kontor/Kontorslim/c/1903">
                                      <label class="truncate">Kontorslim (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2559"
                                    data-value="2559"
                                    class="facet-value third-level 2559"
                                  >
                                    <a href="/se/Hem/Kontor/Presentkort/c/2559">
                                      <label class="truncate">Presentkort (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1869"
                                    data-value="1869"
                                    class="facet-value third-level 1869"
                                  >
                                    <a href="/se/Hem/Kontor/Kontorsförvaring/c/1869">
                                      <label class="truncate">Kontorsförvaring (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1879"
                                    data-value="1879"
                                    class="facet-value third-level 1879"
                                  >
                                    <a href="/se/Hem/Kontor/Kalendrar/c/1879">
                                      <label class="truncate">Kalendrar (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1471"
                                    data-value="1471"
                                    class="facet-value third-level 1471"
                                  >
                                    <a href="/se/Hem/Kontor/Dokumentförstörare/c/1471">
                                      <label class="truncate">Dokumentförstörare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1885"
                                    data-value="1885"
                                    class="facet-value third-level 1885"
                                  >
                                    <a href="/se/Hem/Kontor/Hålslag/c/1885">
                                      <label class="truncate">Hålslag (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1731"
                                    data-value="1731"
                                    class="facet-value third-level 1731"
                                  >
                                    <a href="/se/Hem/Kontor/Skärmaskiner/c/1731">
                                      <label class="truncate">Skärmaskiner (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1864"
                                    data-value="1864"
                                    class="facet-value third-level 1864"
                                  >
                                    <a href="/se/Hem/Kontor/Kassa--&-dokumentskåp/c/1864">
                                      <label class="truncate">Kassa- & dokumentskåp (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2552"
                                    data-value="2552"
                                    class="facet-value third-level 2552"
                                  >
                                    <a href="/se/Hem/Kontor/Böcker-&-kataloger/c/2552">
                                      <label class="truncate">Böcker & kataloger (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1877"
                                    data-value="1877"
                                    class="facet-value third-level 1877"
                                  >
                                    <a href="/se/Hem/Kontor/Boklampor/c/1877">
                                      <label class="truncate">Boklampor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2124" class="facet-value second-level 2124">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2124"
                                  aria-expanded="false"
                                  href="#cat_2124"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Inredning/c/2124"
                                      class="truncate"
                                    >Inredning (330)</a>
                                  </label>
                                  <span class="product-count">(330)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2124">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1489"
                                    data-value="1489"
                                    class="facet-value third-level 1489"
                                  >
                                    <a href="/se/Hem/Inredning/Ramar/c/1489">
                                      <label class="truncate">Ramar (32)</label>
                                      <span class="product-count">(32)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2599"
                                    data-value="2599"
                                    class="facet-value third-level 2599"
                                  >
                                    <a href="/se/Hem/Inredning/Möbler/c/2599">
                                      <label class="truncate">Möbler (45)</label>
                                      <span class="product-count">(45)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1916"
                                    data-value="1916"
                                    class="facet-value third-level 1916"
                                  >
                                    <a href="/se/Hem/Inredning/Presentinslagning/c/1916">
                                      <label class="truncate">Presentinslagning (70)</label>
                                      <span class="product-count">(70)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1403"
                                    data-value="1403"
                                    class="facet-value third-level 1403"
                                  >
                                    <a href="/se/Hem/Inredning/Ljus/c/1403">
                                      <label class="truncate">Ljus (41)</label>
                                      <span class="product-count">(41)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2600"
                                    data-value="2600"
                                    class="facet-value third-level 2600"
                                  >
                                    <a href="/se/Hem/Inredning/Kuddar/c/2600">
                                      <label class="truncate">Kuddar (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2126"
                                    data-value="2126"
                                    class="facet-value third-level 2126"
                                  >
                                    <a href="/se/Hem/Inredning/Krukor-&-vaser/c/2126">
                                      <label class="truncate">Krukor & vaser (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2127"
                                    data-value="2127"
                                    class="facet-value third-level 2127"
                                  >
                                    <a href="/se/Hem/Inredning/Upphängning/c/2127">
                                      <label class="truncate">Upphängning (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1239"
                                    data-value="1239"
                                    class="facet-value third-level 1239"
                                  >
                                    <a href="/se/Hem/Inredning/Klocktillbehör/c/1239">
                                      <label class="truncate">Klocktillbehör (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2606"
                                    data-value="2606"
                                    class="facet-value third-level 2606"
                                  >
                                    <a href="/se/Hem/Inredning/Konstväxter/c/2606">
                                      <label class="truncate">Konstväxter (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1919"
                                    data-value="1919"
                                    class="facet-value third-level 1919"
                                  >
                                    <a href="/se/Hem/Inredning/Dekoration/c/1919">
                                      <label class="truncate">Dekoration (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2601"
                                    data-value="2601"
                                    class="facet-value third-level 2601"
                                  >
                                    <a href="/se/Hem/Inredning/Filtar/c/2601">
                                      <label class="truncate">Filtar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1917"
                                    data-value="1917"
                                    class="facet-value third-level 1917"
                                  >
                                    <a href="/se/Hem/Inredning/Passepartout/c/1917">
                                      <label class="truncate">Passepartout (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1335"
                                    data-value="1335"
                                    class="facet-value third-level 1335"
                                  >
                                    <a href="/se/Hem/Inredning/Väckarklockor/c/1335">
                                      <label class="truncate">Väckarklockor (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2510"
                                    data-value="2510"
                                    class="facet-value third-level 2510"
                                  >
                                    <a href="/se/Hem/Inredning/Tändare-&-braständare/c/2510">
                                      <label class="truncate">Tändare & braständare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1237"
                                    data-value="1237"
                                    class="facet-value third-level 1237"
                                  >
                                    <a href="/se/Hem/Inredning/Väggklockor/c/1237">
                                      <label class="truncate">Väggklockor (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2108"
                                    data-value="2108"
                                    class="facet-value third-level 2108"
                                  >
                                    <a href="/se/Hem/Inredning/Lyktor/c/2108">
                                      <label class="truncate">Lyktor (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2109"
                                    data-value="2109"
                                    class="facet-value third-level 2109"
                                  >
                                    <a href="/se/Hem/Inredning/Ljusstakar/c/2109">
                                      <label class="truncate">Ljusstakar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1918"
                                    data-value="1918"
                                    class="facet-value third-level 1918"
                                  >
                                    <a href="/se/Hem/Inredning/Tavlor-&-bilder/c/1918">
                                      <label class="truncate">Tavlor & bilder (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1985"
                                    data-value="1985"
                                    class="facet-value third-level 1985"
                                  >
                                    <a href="/se/Hem/Inredning/Klockradio/c/1985">
                                      <label class="truncate">Klockradio (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2602"
                                    data-value="2602"
                                    class="facet-value third-level 2602"
                                  >
                                    <a href="/se/Hem/Inredning/Sängkläder/c/2602">
                                      <label class="truncate">Sängkläder (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1677" class="facet-value second-level 1677">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1677"
                                  aria-expanded="false"
                                  href="#cat_1677"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/c/1677"
                                      class="truncate"
                                    >Tillreda & matförvaring (282)</a>
                                  </label>
                                  <span class="product-count">(282)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1677">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2503"
                                    data-value="2503"
                                    class="facet-value third-level 2503"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Burkar-&-flaskor/c/2503"
                                    >
                                      <label class="truncate">Burkar & flaskor (50)</label>
                                      <span class="product-count">(50)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1981"
                                    data-value="1981"
                                    class="facet-value third-level 1981"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Bakredskap/c/1981">
                                      <label class="truncate">Bakredskap (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1396"
                                    data-value="1396"
                                    class="facet-value third-level 1396"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Övriga-köksredskap/c/1396"
                                    >
                                      <label class="truncate">Övriga köksredskap (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1390"
                                    data-value="1390"
                                    class="facet-value third-level 1390"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Matlådor/c/1390">
                                      <label class="truncate">Matlådor (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1406"
                                    data-value="1406"
                                    class="facet-value third-level 1406"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Stek--&-kokkärl/c/1406"
                                    >
                                      <label class="truncate">Stek- & kokkärl (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1980"
                                    data-value="1980"
                                    class="facet-value third-level 1980"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Folie-&-påsar/c/1980">
                                      <label class="truncate">Folie & påsar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1407"
                                    data-value="1407"
                                    class="facet-value third-level 1407"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Te--&-kaffetillbehör/c/1407"
                                    >
                                      <label class="truncate">Te- & kaffetillbehör (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2049"
                                    data-value="2049"
                                    class="facet-value third-level 2049"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Skärbrädor/c/2049">
                                      <label class="truncate">Skärbrädor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2502"
                                    data-value="2502"
                                    class="facet-value third-level 2502"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Rivjärn-&-multihackare/c/2502"
                                    >
                                      <label class="truncate">Rivjärn & multihackare (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1397"
                                    data-value="1397"
                                    class="facet-value third-level 1397"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Kökstermometrar-&-timers/c/1397"
                                    >
                                      <label class="truncate">Kökstermometrar & timers (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1843"
                                    data-value="1843"
                                    class="facet-value third-level 1843"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Drinktillbehör/c/1843">
                                      <label class="truncate">Drinktillbehör (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1974"
                                    data-value="1974"
                                    class="facet-value third-level 1974"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Köksvågar-&-måttredskap/c/1974"
                                    >
                                      <label class="truncate">Köksvågar & måttredskap (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2048"
                                    data-value="2048"
                                    class="facet-value third-level 2048"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Knivar-&-knivblock/c/2048"
                                    >
                                      <label class="truncate">Knivar & knivblock (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1984"
                                    data-value="1984"
                                    class="facet-value third-level 1984"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Kak--&-bakformar/c/1984"
                                    >
                                      <label class="truncate">Kak- & bakformar (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1831"
                                    data-value="1831"
                                    class="facet-value third-level 1831"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Silar-&-durkslag/c/1831"
                                    >
                                      <label class="truncate">Silar & durkslag (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2508"
                                    data-value="2508"
                                    class="facet-value third-level 2508"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Vispar-&-slickepott/c/2508"
                                    >
                                      <label class="truncate">Vispar & slickepott (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1841"
                                    data-value="1841"
                                    class="facet-value third-level 1841"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Grytlappar-&-underlägg/c/1841"
                                    >
                                      <label class="truncate">Grytlappar & underlägg (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2076"
                                    data-value="2076"
                                    class="facet-value third-level 2076"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Skålar-&-bunkar/c/2076"
                                    >
                                      <label class="truncate">Skålar & bunkar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1684"
                                    data-value="1684"
                                    class="facet-value third-level 1684"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Ugnsformar/c/1684">
                                      <label class="truncate">Ugnsformar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2505"
                                    data-value="2505"
                                    class="facet-value third-level 2505"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Stekspadar/c/2505">
                                      <label class="truncate">Stekspadar (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2507"
                                    data-value="2507"
                                    class="facet-value third-level 2507"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Smörknivar-&-osthyvlar/c/2507"
                                    >
                                      <label class="truncate">Smörknivar & osthyvlar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2509"
                                    data-value="2509"
                                    class="facet-value third-level 2509"
                                  >
                                    <a href="/se/Hem/Tillreda-&-matförvaring/Skalare/c/2509">
                                      <label class="truncate">Skalare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2504"
                                    data-value="2504"
                                    class="facet-value third-level 2504"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Slevar-&-skedar/c/2504"
                                    >
                                      <label class="truncate">Slevar & skedar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1977"
                                    data-value="1977"
                                    class="facet-value third-level 1977"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Vin-,-flask--&-konservöppnare/c/1977"
                                    >
                                      <label class="truncate">Vin-, flask- & konservöppnare (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1838"
                                    data-value="1838"
                                    class="facet-value third-level 1838"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Salta,-peppra-&-smaksätta/c/1838"
                                    >
                                      <label class="truncate">Salta, peppra & smaksätta (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2506"
                                    data-value="2506"
                                    class="facet-value third-level 2506"
                                  >
                                    <a
                                      href="/se/Hem/Tillreda-&-matförvaring/Hamburgerpressar/c/2506"
                                    >
                                      <label class="truncate">Hamburgerpressar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1949" class="facet-value second-level 1949">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1949"
                                  aria-expanded="false"
                                  href="#cat_1949"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Personvård-&-hälsa/c/1949"
                                      class="truncate"
                                    >Personvård & hälsa (290)</a>
                                  </label>
                                  <span class="product-count">(290)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1949">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1437"
                                    data-value="1437"
                                    class="facet-value third-level 1437"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Hårklippning/c/1437">
                                      <label class="truncate">Hårklippning (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1924"
                                    data-value="1924"
                                    class="facet-value third-level 1924"
                                  >
                                    <a
                                      href="/se/Hem/Personvård-&-hälsa/Rakapparater-&-skäggtrimrar/c/1924"
                                    >
                                      <label class="truncate">Rakapparater & skäggtrimrar (40)</label>
                                      <span class="product-count">(40)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1950"
                                    data-value="1950"
                                    class="facet-value third-level 1950"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Massage-&-värme/c/1950">
                                      <label class="truncate">Massage & värme (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1925"
                                    data-value="1925"
                                    class="facet-value third-level 1925"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Rakhyvlar/c/1925">
                                      <label class="truncate">Rakhyvlar (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1934"
                                    data-value="1934"
                                    class="facet-value third-level 1934"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Borsthuvuden/c/1934">
                                      <label class="truncate">Borsthuvuden (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1433"
                                    data-value="1433"
                                    class="facet-value third-level 1433"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Hygien/c/1433">
                                      <label class="truncate">Hygien (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1932"
                                    data-value="1932"
                                    class="facet-value third-level 1932"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Eltandborstar/c/1932">
                                      <label class="truncate">Eltandborstar (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1951"
                                    data-value="1951"
                                    class="facet-value third-level 1951"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Hand--&-fotvård/c/1951">
                                      <label class="truncate">Hand- & fotvård (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1926"
                                    data-value="1926"
                                    class="facet-value third-level 1926"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Rakblad/c/1926">
                                      <label class="truncate">Rakblad (20)</label>
                                      <span class="product-count">(20)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1572"
                                    data-value="1572"
                                    class="facet-value third-level 1572"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Sårvård/c/1572">
                                      <label class="truncate">Sårvård (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1442"
                                    data-value="1442"
                                    class="facet-value third-level 1442"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Personvågar/c/1442">
                                      <label class="truncate">Personvågar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2120"
                                    data-value="2120"
                                    class="facet-value third-level 2120"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Övrig-tandhygien/c/2120">
                                      <label class="truncate">Övrig tandhygien (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1927"
                                    data-value="1927"
                                    class="facet-value third-level 1927"
                                  >
                                    <a
                                      href="/se/Hem/Personvård-&-hälsa/Epilatorer-&-ladyshave/c/1927"
                                    >
                                      <label class="truncate">Epilatorer & ladyshave (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1930"
                                    data-value="1930"
                                    class="facet-value third-level 1930"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Nästrimrar/c/1930">
                                      <label class="truncate">Nästrimrar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1434"
                                    data-value="1434"
                                    class="facet-value third-level 1434"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Febertermometrar/c/1434">
                                      <label class="truncate">Febertermometrar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1944"
                                    data-value="1944"
                                    class="facet-value third-level 1944"
                                  >
                                    <a
                                      href="/se/Hem/Personvård-&-hälsa/Plattänger-&-locktänger/c/1944"
                                    >
                                      <label class="truncate">Plattänger & locktänger (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1954"
                                    data-value="1954"
                                    class="facet-value third-level 1954"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Blodtrycksmätare/c/1954">
                                      <label class="truncate">Blodtrycksmätare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2635"
                                    data-value="2635"
                                    class="facet-value third-level 2635"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Sömn/c/2635">
                                      <label class="truncate">Sömn (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1928"
                                    data-value="1928"
                                    class="facet-value third-level 1928"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Rakgel-&-rakskum/c/1928">
                                      <label class="truncate">Rakgel & rakskum (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1943"
                                    data-value="1943"
                                    class="facet-value third-level 1943"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Hårfönar/c/1943">
                                      <label class="truncate">Hårfönar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1937"
                                    data-value="1937"
                                    class="facet-value third-level 1937"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Tandborstar/c/1937">
                                      <label class="truncate">Tandborstar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2605"
                                    data-value="2605"
                                    class="facet-value third-level 2605"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/Ljusterapi/c/2605">
                                      <label class="truncate">Ljusterapi (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2607"
                                    data-value="2607"
                                    class="facet-value third-level 2607"
                                  >
                                    <a href="/se/Hem/Personvård-&-hälsa/IPL-hårborttagning/c/2607">
                                      <label class="truncate">IPL hårborttagning (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1844" class="facet-value second-level 1844">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1844"
                                  aria-expanded="false"
                                  href="#cat_1844"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Förvaring/c/1844"
                                      class="truncate"
                                    >Förvaring (106)</a>
                                  </label>
                                  <span class="product-count">(106)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1844">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2133"
                                    data-value="2133"
                                    class="facet-value third-level 2133"
                                  >
                                    <a href="/se/Hem/Förvaring/Förvaringslådor/c/2133">
                                      <label class="truncate">Förvaringslådor (34)</label>
                                      <span class="product-count">(34)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1845"
                                    data-value="1845"
                                    class="facet-value third-level 1845"
                                  >
                                    <a href="/se/Hem/Förvaring/Flyttlådor-&-emballage/c/1845">
                                      <label class="truncate">Flyttlådor & emballage (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1846"
                                    data-value="1846"
                                    class="facet-value third-level 1846"
                                  >
                                    <a href="/se/Hem/Förvaring/Förvaringskorgar/c/1846">
                                      <label class="truncate">Förvaringskorgar (24)</label>
                                      <span class="product-count">(24)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2491"
                                    data-value="2491"
                                    class="facet-value third-level 2491"
                                  >
                                    <a href="/se/Hem/Förvaring/Förvaringsväskor-&-påsar/c/2491">
                                      <label class="truncate">Förvaringsväskor & påsar (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1850"
                                    data-value="1850"
                                    class="facet-value third-level 1850"
                                  >
                                    <a href="/se/Hem/Förvaring/Klädförvaring/c/1850">
                                      <label class="truncate">Klädförvaring (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2487"
                                    data-value="2487"
                                    class="facet-value third-level 2487"
                                  >
                                    <a href="/se/Hem/Förvaring/Skoförvaring/c/2487">
                                      <label class="truncate">Skoförvaring (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2132"
                                    data-value="2132"
                                    class="facet-value third-level 2132"
                                  >
                                    <a href="/se/Hem/Förvaring/Övrig-förvaring/c/2132">
                                      <label class="truncate">Övrig förvaring (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2490"
                                    data-value="2490"
                                    class="facet-value third-level 2490"
                                  >
                                    <a href="/se/Hem/Förvaring/Vakuumpåsar/c/2490">
                                      <label class="truncate">Vakuumpåsar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1408" class="facet-value second-level 1408">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1408"
                                  aria-expanded="false"
                                  href="#cat_1408"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Köksmaskiner/c/1408"
                                      class="truncate"
                                    >Köksmaskiner (136)</a>
                                  </label>
                                  <span class="product-count">(136)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1408">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2037"
                                    data-value="2037"
                                    class="facet-value third-level 2037"
                                  >
                                    <a
                                      href="/se/Hem/Köksmaskiner/Kolsyremaskiner-&-tillbehör/c/2037"
                                    >
                                      <label class="truncate">Kolsyremaskiner & tillbehör (29)</label>
                                      <span class="product-count">(29)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1409"
                                    data-value="1409"
                                    class="facet-value third-level 1409"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Kaffebryggare/c/1409">
                                      <label class="truncate">Kaffebryggare (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1961"
                                    data-value="1961"
                                    class="facet-value third-level 1961"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Mixer-&-blender/c/1961">
                                      <label class="truncate">Mixer & blender (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1416"
                                    data-value="1416"
                                    class="facet-value third-level 1416"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Fritöser/c/1416">
                                      <label class="truncate">Fritöser (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1410"
                                    data-value="1410"
                                    class="facet-value third-level 1410"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Vattenkokare/c/1410">
                                      <label class="truncate">Vattenkokare (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1418"
                                    data-value="1418"
                                    class="facet-value third-level 1418"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Mikrovågsugnar/c/1418">
                                      <label class="truncate">Mikrovågsugnar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1411"
                                    data-value="1411"
                                    class="facet-value third-level 1411"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Brödrostar/c/1411">
                                      <label class="truncate">Brödrostar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2578"
                                    data-value="2578"
                                    class="facet-value third-level 2578"
                                  >
                                    <a
                                      href="/se/Hem/Köksmaskiner/Vakuummaskiner-&-tillbehör/c/2578"
                                    >
                                      <label class="truncate">Vakuummaskiner & tillbehör (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1423"
                                    data-value="1423"
                                    class="facet-value third-level 1423"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Elvispar/c/1423">
                                      <label class="truncate">Elvispar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1414"
                                    data-value="1414"
                                    class="facet-value third-level 1414"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Våffeljärn/c/1414">
                                      <label class="truncate">Våffeljärn (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2102"
                                    data-value="2102"
                                    class="facet-value third-level 2102"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Bords--&-smörgåsgrillar/c/2102">
                                      <label class="truncate">Bords- & smörgåsgrillar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2494"
                                    data-value="2494"
                                    class="facet-value third-level 2494"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Pastamaskiner/c/2494">
                                      <label class="truncate">Pastamaskiner (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1425"
                                    data-value="1425"
                                    class="facet-value third-level 1425"
                                  >
                                    <a
                                      href="/se/Hem/Köksmaskiner/Matberedare-&-köksassistenter/c/1425"
                                    >
                                      <label class="truncate">Matberedare & köksassistenter (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2498"
                                    data-value="2498"
                                    class="facet-value third-level 2498"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Frukt--&-svamptork/c/2498">
                                      <label class="truncate">Frukt- & svamptork (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1424"
                                    data-value="1424"
                                    class="facet-value third-level 1424"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Juicers/c/1424">
                                      <label class="truncate">Juicers (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2388"
                                    data-value="2388"
                                    class="facet-value third-level 2388"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Övriga-köksmaskiner/c/2388">
                                      <label class="truncate">Övriga köksmaskiner (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1413"
                                    data-value="1413"
                                    class="facet-value third-level 1413"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Äggkokare/c/1413">
                                      <label class="truncate">Äggkokare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1581"
                                    data-value="1581"
                                    class="facet-value third-level 1581"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Slow-cooker/c/1581">
                                      <label class="truncate">Slow cooker (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1419"
                                    data-value="1419"
                                    class="facet-value third-level 1419"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Kokplatta/c/1419">
                                      <label class="truncate">Kokplatta (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1417"
                                    data-value="1417"
                                    class="facet-value third-level 1417"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Riskokare/c/1417">
                                      <label class="truncate">Riskokare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1966"
                                    data-value="1966"
                                    class="facet-value third-level 1966"
                                  >
                                    <a href="/se/Hem/Köksmaskiner/Köksskärmaskiner/c/1966">
                                      <label class="truncate">Köksskärmaskiner (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1421"
                                    data-value="1421"
                                    class="facet-value third-level 1421"
                                  >
                                    <a
                                      href="/se/Hem/Köksmaskiner/Glassmaskiner-&-slushmaskiner/c/1421"
                                    >
                                      <label class="truncate">Glassmaskiner & slushmaskiner (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2497"
                                    data-value="2497"
                                    class="facet-value third-level 2497"
                                  >
                                    <a
                                      href="/se/Hem/Köksmaskiner/Popcorn--&-sockervaddsmaskiner/c/2497"
                                    >
                                      <label class="truncate">Popcorn- & sockervaddsmaskiner (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1911" class="facet-value second-level 1911">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1911"
                                  aria-expanded="false"
                                  href="#cat_1911"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Konstnär/c/1911"
                                      class="truncate"
                                    >Konstnär (102)</a>
                                  </label>
                                  <span class="product-count">(102)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1911">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1482"
                                    data-value="1482"
                                    class="facet-value third-level 1482"
                                  >
                                    <a href="/se/Hem/Konstnär/Akrylmålning/c/1482">
                                      <label class="truncate">Akrylmålning (23)</label>
                                      <span class="product-count">(23)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1912"
                                    data-value="1912"
                                    class="facet-value third-level 1912"
                                  >
                                    <a href="/se/Hem/Konstnär/Skissa-&-rita/c/1912">
                                      <label class="truncate">Skissa & rita (41)</label>
                                      <span class="product-count">(41)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1488"
                                    data-value="1488"
                                    class="facet-value third-level 1488"
                                  >
                                    <a href="/se/Hem/Konstnär/Spännramar-&-dukar/c/1488">
                                      <label class="truncate">Spännramar & dukar (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1480"
                                    data-value="1480"
                                    class="facet-value third-level 1480"
                                  >
                                    <a href="/se/Hem/Konstnär/Oljemålning/c/1480">
                                      <label class="truncate">Oljemålning (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1914"
                                    data-value="1914"
                                    class="facet-value third-level 1914"
                                  >
                                    <a href="/se/Hem/Konstnär/Konstnärspenslar/c/1914">
                                      <label class="truncate">Konstnärspenslar (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1481"
                                    data-value="1481"
                                    class="facet-value third-level 1481"
                                  >
                                    <a href="/se/Hem/Konstnär/Akvarellmålning/c/1481">
                                      <label class="truncate">Akvarellmålning (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1913"
                                    data-value="1913"
                                    class="facet-value third-level 1913"
                                  >
                                    <a href="/se/Hem/Konstnär/Konstnärsmaterial/c/1913">
                                      <label class="truncate">Konstnärsmaterial (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1485"
                                    data-value="1485"
                                    class="facet-value third-level 1485"
                                  >
                                    <a href="/se/Hem/Konstnär/Stafflier/c/1485">
                                      <label class="truncate">Stafflier (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1441" class="facet-value second-level 1441">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1441"
                                  aria-expanded="false"
                                  href="#cat_1441"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Badrum-&-bastu/c/1441"
                                      class="truncate"
                                    >Badrum & bastu (91)</a>
                                  </label>
                                  <span class="product-count">(91)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1441">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1921"
                                    data-value="1921"
                                    class="facet-value third-level 1921"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Badrumstillbehör/c/1921">
                                      <label class="truncate">Badrumstillbehör (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2273"
                                    data-value="2273"
                                    class="facet-value third-level 2273"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Bastutillbehör/c/2273">
                                      <label class="truncate">Bastutillbehör (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2112"
                                    data-value="2112"
                                    class="facet-value third-level 2112"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Duschtillbehör/c/2112">
                                      <label class="truncate">Duschtillbehör (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2482"
                                    data-value="2482"
                                    class="facet-value third-level 2482"
                                  >
                                    <a
                                      href="/se/Hem/Badrum-&-bastu/Duschdraperi-&-tillbehör/c/2482"
                                    >
                                      <label class="truncate">Duschdraperi & tillbehör (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1445"
                                    data-value="1445"
                                    class="facet-value third-level 1445"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Badrumsbeslag/c/1445">
                                      <label class="truncate">Badrumsbeslag (16)</label>
                                      <span class="product-count">(16)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2483"
                                    data-value="2483"
                                    class="facet-value third-level 2483"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Badlakan-&-handdukar/c/2483">
                                      <label class="truncate">Badlakan & handdukar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2484"
                                    data-value="2484"
                                    class="facet-value third-level 2484"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Toalettborstar/c/2484">
                                      <label class="truncate">Toalettborstar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2486"
                                    data-value="2486"
                                    class="facet-value third-level 2486"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Insynsskydd/c/2486">
                                      <label class="truncate">Insynsskydd (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1920"
                                    data-value="1920"
                                    class="facet-value third-level 1920"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Badrumsmattor/c/1920">
                                      <label class="truncate">Badrumsmattor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2485"
                                    data-value="2485"
                                    class="facet-value third-level 2485"
                                  >
                                    <a href="/se/Hem/Badrum-&-bastu/Schampoo--&-tvålpumpar/c/2485">
                                      <label class="truncate">Schampoo- & tvålpumpar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1447" class="facet-value second-level 1447">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1447"
                                  aria-expanded="false"
                                  href="#cat_1447"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Kläd--&-skovård/c/1447"
                                      class="truncate"
                                    >Kläd- & skovård (77)</a>
                                  </label>
                                  <span class="product-count">(77)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1447">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1999"
                                    data-value="1999"
                                    class="facet-value third-level 1999"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Tvätt-&-vädra/c/1999">
                                      <label class="truncate">Tvätt & vädra (39)</label>
                                      <span class="product-count">(39)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2001"
                                    data-value="2001"
                                    class="facet-value third-level 2001"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Galgar/c/2001">
                                      <label class="truncate">Galgar (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1998"
                                    data-value="1998"
                                    class="facet-value third-level 1998"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Kläd--&-skoskötsel/c/1998">
                                      <label class="truncate">Kläd- & skoskötsel (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2481"
                                    data-value="2481"
                                    class="facet-value third-level 2481"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Skotillbehör/c/2481">
                                      <label class="truncate">Skotillbehör (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1449"
                                    data-value="1449"
                                    class="facet-value third-level 1449"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Strykjärn/c/1449">
                                      <label class="truncate">Strykjärn (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2000"
                                    data-value="2000"
                                    class="facet-value third-level 2000"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Strykbrädor/c/2000">
                                      <label class="truncate">Strykbrädor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1453"
                                    data-value="1453"
                                    class="facet-value third-level 1453"
                                  >
                                    <a href="/se/Hem/Kläd--&-skovård/Skotorkar/c/1453">
                                      <label class="truncate">Skotorkar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1987" class="facet-value second-level 1987">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1987"
                                  aria-expanded="false"
                                  href="#cat_1987"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Duka-&-servera/c/1987"
                                      class="truncate"
                                    >Duka & servera (115)</a>
                                  </label>
                                  <span class="product-count">(115)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1987">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2036"
                                    data-value="2036"
                                    class="facet-value third-level 2036"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Utflykt-&-picknick/c/2036">
                                      <label class="truncate">Utflykt & picknick (53)</label>
                                      <span class="product-count">(53)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1401"
                                    data-value="1401"
                                    class="facet-value third-level 1401"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Engångsartiklar/c/1401">
                                      <label class="truncate">Engångsartiklar (21)</label>
                                      <span class="product-count">(21)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1988"
                                    data-value="1988"
                                    class="facet-value third-level 1988"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Porslin/c/1988">
                                      <label class="truncate">Porslin (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1989"
                                    data-value="1989"
                                    class="facet-value third-level 1989"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Glas-&-muggar/c/1989">
                                      <label class="truncate">Glas & muggar (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1992"
                                    data-value="1992"
                                    class="facet-value third-level 1992"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Servetter/c/1992">
                                      <label class="truncate">Servetter (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2598"
                                    data-value="2598"
                                    class="facet-value third-level 2598"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Serveringsbrickor/c/2598">
                                      <label class="truncate">Serveringsbrickor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1993"
                                    data-value="1993"
                                    class="facet-value third-level 1993"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Bordstabletter/c/1993">
                                      <label class="truncate">Bordstabletter (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2512"
                                    data-value="2512"
                                    class="facet-value third-level 2512"
                                  >
                                    <a
                                      href="/se/Hem/Duka-&-servera/Pumptermosar-&-termoskannor/c/2512"
                                    >
                                      <label class="truncate">Pumptermosar & termoskannor (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1991"
                                    data-value="1991"
                                    class="facet-value third-level 1991"
                                  >
                                    <a href="/se/Hem/Duka-&-servera/Bestick/c/1991">
                                      <label class="truncate">Bestick (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2042" class="facet-value second-level 2042">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2042"
                                  aria-expanded="false"
                                  href="#cat_2042"
                                >
                                  <label>
                                    <a href="/se/Hem/Säsong/c/2042" class="truncate">Säsong (171)</a>
                                  </label>
                                  <span class="product-count">(171)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2042">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1574"
                                    data-value="1574"
                                    class="facet-value third-level 1574"
                                  >
                                    <a href="/se/Hem/Säsong/Jul/c/1574">
                                      <label class="truncate">Jul (152)</label>
                                      <span class="product-count">(152)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2603"
                                    data-value="2603"
                                    class="facet-value third-level 2603"
                                  >
                                    <a href="/se/Hem/Säsong/Halloween/c/2603">
                                      <label class="truncate">Halloween (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1905" class="facet-value second-level 1905">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1905"
                                  aria-expanded="true"
                                  href="#cat_1905"
                                >
                                  <label>
                                    <a
                                      href="/se/Hem/Accessoarer/c/1905"
                                      class="truncate"
                                    >Accessoarer (91)</a>
                                  </label>
                                  <span class="product-count">(91)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse in" id="cat_1905">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1431"
                                    data-value="1431"
                                    class="facet-value third-level 1431"
                                  >
                                    <a href="/se/Hem/Accessoarer/Läsglasögon/c/1431">
                                      <label class="truncate">Läsglasögon (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2373"
                                    data-value="2373"
                                    class="facet-value third-level 2373"
                                  >
                                    <a href="/se/Hem/Accessoarer/Solglasögon/c/2373">
                                      <label class="truncate">Solglasögon (22)</label>
                                      <span class="product-count">(22)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1550"
                                    data-value="1550"
                                    class="facet-value third-level 1550"
                                  >
                                    <a href="/se/Hem/Accessoarer/Plånböcker/c/1550">
                                      <label class="truncate">Plånböcker (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1474"
                                    data-value="1474"
                                    class="facet-value third-level 1474"
                                  >
                                    <a href="/se/Hem/Accessoarer/Förstoringsglas/c/1474">
                                      <label class="truncate">Förstoringsglas (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1236"
                                    data-value="1236"
                                    class="facet-value third-level 1236"
                                  >
                                    <a href="/se/Hem/Accessoarer/Armbandsur/c/1236">
                                      <label class="truncate">Armbandsur (15)</label>
                                      <span class="product-count">(15)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2479"
                                    data-value="2479"
                                    class="facet-value third-level 2479"
                                  >
                                    <a href="/se/Hem/Accessoarer/Bandstift-&-verktyg/c/2479">
                                      <label class="truncate">Bandstift & verktyg (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2478"
                                    data-value="2478"
                                    class="facet-value third-level 2478"
                                  >
                                    <a href="/se/Hem/Accessoarer/Klockarmband/c/2478">
                                      <label class="truncate">Klockarmband (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li data-value="1034" class="facet-value first-level 1034">
                            <div class="cat-head">
                              <label
                                for="opt1034"
                                class="truncate collapsed"
                                data-toggle="collapse"
                                href="#cat_1034"
                                aria-controls="cat_1034"
                              >Multimedia (1499)</label>
                            </div>
                            <!-- Level 2 -->
                            <ul class="second-level collapse" id="cat_1034">
                              <li>
                                <span class="list-gradient"></span>
                              </li>
                              <li data-value="1365" class="facet-value second-level 1365">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1365"
                                  aria-expanded="false"
                                  href="#cat_1365"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/c/1365"
                                      class="truncate"
                                    >Mobiltelefoni & fast telefoni (403)</a>
                                  </label>
                                  <span class="product-count">(403)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1365">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1369"
                                    data-value="1369"
                                    class="facet-value third-level 1369"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Mobilfodral-&-mobilväskor/c/1369"
                                    >
                                      <label class="truncate">Mobilfodral & mobilväskor (107)</label>
                                      <span class="product-count">(107)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1766"
                                    data-value="1766"
                                    class="facet-value third-level 1766"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Mobilhållare/c/1766"
                                    >
                                      <label class="truncate">Mobilhållare (57)</label>
                                      <span class="product-count">(57)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2516"
                                    data-value="2516"
                                    class="facet-value third-level 2516"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Mobilskal/c/2516"
                                    >
                                      <label class="truncate">Mobilskal (88)</label>
                                      <span class="product-count">(88)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2521"
                                    data-value="2521"
                                    class="facet-value third-level 2521"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Anslutningskablar-&-adaptrar/c/2521"
                                    >
                                      <label class="truncate">Anslutningskablar & adaptrar (31)</label>
                                      <span class="product-count">(31)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2520"
                                    data-value="2520"
                                    class="facet-value third-level 2520"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Mobilladdare/c/2520"
                                    >
                                      <label class="truncate">Mobilladdare (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2034"
                                    data-value="2034"
                                    class="facet-value third-level 2034"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Övriga-tillbehör/c/2034"
                                    >
                                      <label class="truncate">Övriga tillbehör (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2517"
                                    data-value="2517"
                                    class="facet-value third-level 2517"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Displayskydd/c/2517"
                                    >
                                      <label class="truncate">Displayskydd (32)</label>
                                      <span class="product-count">(32)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1765"
                                    data-value="1765"
                                    class="facet-value third-level 1765"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Nödladdare-&-powerbank/c/1765"
                                    >
                                      <label class="truncate">Nödladdare & powerbank (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1363"
                                    data-value="1363"
                                    class="facet-value third-level 1363"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Fast-telefoni/c/1363"
                                    >
                                      <label class="truncate">Fast telefoni (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1759"
                                    data-value="1759"
                                    class="facet-value third-level 1759"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Mobiltelefoner/c/1759"
                                    >
                                      <label class="truncate">Mobiltelefoner (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2518"
                                    data-value="2518"
                                    class="facet-value third-level 2518"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Headsets-&-hörlurar/c/2518"
                                    >
                                      <label class="truncate">Headsets & hörlurar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1370"
                                    data-value="1370"
                                    class="facet-value third-level 1370"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Handsfree/c/1370"
                                    >
                                      <label class="truncate">Handsfree (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1575"
                                    data-value="1575"
                                    class="facet-value third-level 1575"
                                  >
                                    <a
                                      href="/se/Multimedia/Mobiltelefoni-&-fast-telefoni/Kontantkort-&-värdebevis/c/1575"
                                    >
                                      <label class="truncate">Kontantkort & värdebevis (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1337" class="facet-value second-level 1337">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1337"
                                  aria-expanded="false"
                                  href="#cat_1337"
                                >
                                  <label>
                                    <a href="/se/Multimedia/Ljud/c/1337" class="truncate">Ljud (224)</a>
                                  </label>
                                  <span class="product-count">(224)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1337">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1582"
                                    data-value="1582"
                                    class="facet-value third-level 1582"
                                  >
                                    <a href="/se/Multimedia/Ljud/Hörlurar-in-ear/c/1582">
                                      <label class="truncate">Hörlurar in-ear (78)</label>
                                      <span class="product-count">(78)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1638"
                                    data-value="1638"
                                    class="facet-value third-level 1638"
                                  >
                                    <a href="/se/Multimedia/Ljud/Högtalare/c/1638">
                                      <label class="truncate">Högtalare (47)</label>
                                      <span class="product-count">(47)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1652"
                                    data-value="1652"
                                    class="facet-value third-level 1652"
                                  >
                                    <a href="/se/Multimedia/Ljud/Ljudkablar-&-tillbehör/c/1652">
                                      <label class="truncate">Ljudkablar & tillbehör (41)</label>
                                      <span class="product-count">(41)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1583"
                                    data-value="1583"
                                    class="facet-value third-level 1583"
                                  >
                                    <a href="/se/Multimedia/Ljud/Hörlurar-med-båge/c/1583">
                                      <label class="truncate">Hörlurar med båge (39)</label>
                                      <span class="product-count">(39)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1646"
                                    data-value="1646"
                                    class="facet-value third-level 1646"
                                  >
                                    <a href="/se/Multimedia/Ljud/Radio/c/1646">
                                      <label class="truncate">Radio (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1642"
                                    data-value="1642"
                                    class="facet-value third-level 1642"
                                  >
                                    <a href="/se/Multimedia/Ljud/FM-sändare/c/1642">
                                      <label class="truncate">FM-sändare (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1339"
                                    data-value="1339"
                                    class="facet-value third-level 1339"
                                  >
                                    <a href="/se/Multimedia/Ljud/CD-spelare/c/1339">
                                      <label class="truncate">CD-spelare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2630"
                                    data-value="2630"
                                    class="facet-value third-level 2630"
                                  >
                                    <a href="/se/Multimedia/Ljud/Smarta-högtalare/c/2630">
                                      <label class="truncate">Smarta högtalare (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1651"
                                    data-value="1651"
                                    class="facet-value third-level 1651"
                                  >
                                    <a href="/se/Multimedia/Ljud/Skivspelare/c/1651">
                                      <label class="truncate">Skivspelare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1345"
                                    data-value="1345"
                                    class="facet-value third-level 1345"
                                  >
                                    <a href="/se/Multimedia/Ljud/Bilstereo-&-bilhögtalare/c/1345">
                                      <label class="truncate">Bilstereo & bilhögtalare (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1588"
                                    data-value="1588"
                                    class="facet-value third-level 1588"
                                  >
                                    <a href="/se/Multimedia/Ljud/Diktafoner/c/1588">
                                      <label class="truncate">Diktafoner (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1657"
                                    data-value="1657"
                                    class="facet-value third-level 1657"
                                  >
                                    <a href="/se/Multimedia/Ljud/Megafoner/c/1657">
                                      <label class="truncate">Megafoner (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1385" class="facet-value second-level 1385">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1385"
                                  aria-expanded="false"
                                  href="#cat_1385"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/c/1385"
                                      class="truncate"
                                    >Bläckpatroner & toner (137)</a>
                                  </label>
                                  <span class="product-count">(137)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1385">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1741"
                                    data-value="1741"
                                    class="facet-value third-level 1741"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/HP-bläckpatroner/c/1741"
                                    >
                                      <label class="truncate">HP bläckpatroner (42)</label>
                                      <span class="product-count">(42)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1740"
                                    data-value="1740"
                                    class="facet-value third-level 1740"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Canon-bläckpatroner/c/1740"
                                    >
                                      <label class="truncate">Canon bläckpatroner (29)</label>
                                      <span class="product-count">(29)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1743"
                                    data-value="1743"
                                    class="facet-value third-level 1743"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Epson-bläckpatroner/c/1743"
                                    >
                                      <label class="truncate">Epson bläckpatroner (17)</label>
                                      <span class="product-count">(17)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2135"
                                    data-value="2135"
                                    class="facet-value third-level 2135"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/HP-lasertoner/c/2135"
                                    >
                                      <label class="truncate">HP lasertoner (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2139"
                                    data-value="2139"
                                    class="facet-value third-level 2139"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Samsung-lasertoner/c/2139"
                                    >
                                      <label class="truncate">Samsung lasertoner (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2134"
                                    data-value="2134"
                                    class="facet-value third-level 2134"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Canon-lasertoner/c/2134"
                                    >
                                      <label class="truncate">Canon lasertoner (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2136"
                                    data-value="2136"
                                    class="facet-value third-level 2136"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Brother-lasertoner/c/2136"
                                    >
                                      <label class="truncate">Brother lasertoner (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2137"
                                    data-value="2137"
                                    class="facet-value third-level 2137"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Epson-lasertoner/c/2137"
                                    >
                                      <label class="truncate">Epson lasertoner (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1742"
                                    data-value="1742"
                                    class="facet-value third-level 1742"
                                  >
                                    <a
                                      href="/se/Multimedia/Bläckpatroner-&-toner/Brother-bläckpatroner/c/1742"
                                    >
                                      <label class="truncate">Brother bläckpatroner (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2633" class="facet-value second-level 2633">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2633"
                                  aria-expanded="false"
                                  href="#cat_2633"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Smarta-hem/c/2633"
                                      class="truncate"
                                    >Smarta hem (157)</a>
                                  </label>
                                  <span class="product-count">(157)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2633">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2624"
                                    data-value="2624"
                                    class="facet-value third-level 2624"
                                  >
                                    <a href="/se/Multimedia/Smarta-hem/Belysning-&-uttag/c/2624">
                                      <label class="truncate">Belysning & uttag (48)</label>
                                      <span class="product-count">(48)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2625"
                                    data-value="2625"
                                    class="facet-value third-level 2625"
                                  >
                                    <a
                                      href="/se/Multimedia/Smarta-hem/Röstassistenter-&-multimedia/c/2625"
                                    >
                                      <label class="truncate">Röstassistenter & multimedia (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2628"
                                    data-value="2628"
                                    class="facet-value third-level 2628"
                                  >
                                    <a
                                      href="/se/Multimedia/Smarta-hem/Värme-&-inomhusklimat/c/2628"
                                    >
                                      <label class="truncate">Värme & inomhusklimat (27)</label>
                                      <span class="product-count">(27)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2627"
                                    data-value="2627"
                                    class="facet-value third-level 2627"
                                  >
                                    <a href="/se/Multimedia/Smarta-hem/Larm-&-kameror/c/2627">
                                      <label class="truncate">Larm & kameror (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2629"
                                    data-value="2629"
                                    class="facet-value third-level 2629"
                                  >
                                    <a href="/se/Multimedia/Smarta-hem/Städning-&-trädgård/c/2629">
                                      <label class="truncate">Städning & trädgård (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2634"
                                    data-value="2634"
                                    class="facet-value third-level 2634"
                                  >
                                    <a href="/se/Multimedia/Smarta-hem/Philips-Hue/c/2634">
                                      <label class="truncate">Philips Hue (33)</label>
                                      <span class="product-count">(33)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2626"
                                    data-value="2626"
                                    class="facet-value third-level 2626"
                                  >
                                    <a href="/se/Multimedia/Smarta-hem/Nätverk-&-routrar/c/2626">
                                      <label class="truncate">Nätverk & routrar (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1386" class="facet-value second-level 1386">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1386"
                                  aria-expanded="false"
                                  href="#cat_1386"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Skrivar--&-fotopapper/c/1386"
                                      class="truncate"
                                    >Skrivar- & fotopapper (24)</a>
                                  </label>
                                  <span class="product-count">(24)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1386">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1793"
                                    data-value="1793"
                                    class="facet-value third-level 1793"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivar--&-fotopapper/Skrivarpapper/c/1793"
                                    >
                                      <label class="truncate">Skrivarpapper (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1794"
                                    data-value="1794"
                                    class="facet-value third-level 1794"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivar--&-fotopapper/Fotopapper/c/1794"
                                    >
                                      <label class="truncate">Fotopapper (18)</label>
                                      <span class="product-count">(18)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1795"
                                    data-value="1795"
                                    class="facet-value third-level 1795"
                                  >
                                    <a href="/se/Multimedia/Skrivar--&-fotopapper/Etiketter/c/1795">
                                      <label class="truncate">Etiketter (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1798"
                                    data-value="1798"
                                    class="facet-value third-level 1798"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivar--&-fotopapper/T-shirtpapper/c/1798"
                                    >
                                      <label class="truncate">T-shirtpapper (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1796"
                                    data-value="1796"
                                    class="facet-value third-level 1796"
                                  >
                                    <a href="/se/Multimedia/Skrivar--&-fotopapper/Visitkort/c/1796">
                                      <label class="truncate">Visitkort (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1355" class="facet-value second-level 1355">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1355"
                                  aria-expanded="false"
                                  href="#cat_1355"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Foto-&-video/c/1355"
                                      class="truncate"
                                    >Foto & video (63)</a>
                                  </label>
                                  <span class="product-count">(63)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1355">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1729"
                                    data-value="1729"
                                    class="facet-value third-level 1729"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Stativ/c/1729">
                                      <label class="truncate">Stativ (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1357"
                                    data-value="1357"
                                    class="facet-value third-level 1357"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Fotoalbum/c/1357">
                                      <label class="truncate">Fotoalbum (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1356"
                                    data-value="1356"
                                    class="facet-value third-level 1356"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Kameror/c/1356">
                                      <label class="truncate">Kameror (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1732"
                                    data-value="1732"
                                    class="facet-value third-level 1732"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Fototillbehör/c/1732">
                                      <label class="truncate">Fototillbehör (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2413"
                                    data-value="2413"
                                    class="facet-value third-level 2413"
                                  >
                                    <a
                                      href="/se/Multimedia/Foto-&-video/Actionkameratillbehör/c/2413"
                                    >
                                      <label class="truncate">Actionkameratillbehör (30)</label>
                                      <span class="product-count">(30)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2111"
                                    data-value="2111"
                                    class="facet-value third-level 2111"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Actionkameror/c/2111">
                                      <label class="truncate">Actionkameror (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1733"
                                    data-value="1733"
                                    class="facet-value third-level 1733"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Diabildsskannrar/c/1733">
                                      <label class="truncate">Diabildsskannrar (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1728"
                                    data-value="1728"
                                    class="facet-value third-level 1728"
                                  >
                                    <a href="/se/Multimedia/Foto-&-video/Kameraväskor/c/1728">
                                      <label class="truncate">Kameraväskor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1813" class="facet-value second-level 1813">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1813"
                                  aria-expanded="false"
                                  href="#cat_1813"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/c/1813"
                                      class="truncate"
                                    >Datorer & datortillbehör (118)</a>
                                  </label>
                                  <span class="product-count">(118)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1813">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1805"
                                    data-value="1805"
                                    class="facet-value third-level 1805"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Datorkablar-&-kontakter/c/1805"
                                    >
                                      <label class="truncate">Datorkablar & kontakter (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1383"
                                    data-value="1383"
                                    class="facet-value third-level 1383"
                                  >
                                    <a href="/se/Multimedia/Datorer-&-datortillbehör/Möss/c/1383">
                                      <label class="truncate">Möss (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1828"
                                    data-value="1828"
                                    class="facet-value third-level 1828"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Rengöring/c/1828"
                                    >
                                      <label class="truncate">Rengöring (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1815"
                                    data-value="1815"
                                    class="facet-value third-level 1815"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Musmattor/c/1815"
                                    >
                                      <label class="truncate">Musmattor (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1814"
                                    data-value="1814"
                                    class="facet-value third-level 1814"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Tangentbord/c/1814"
                                    >
                                      <label class="truncate">Tangentbord (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1374"
                                    data-value="1374"
                                    class="facet-value third-level 1374"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Headset/c/1374"
                                    >
                                      <label class="truncate">Headset (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1378"
                                    data-value="1378"
                                    class="facet-value third-level 1378"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Datorväskor-&-fodral/c/1378"
                                    >
                                      <label class="truncate">Datorväskor & fodral (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1380"
                                    data-value="1380"
                                    class="facet-value third-level 1380"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/USB-utrustning/c/1380"
                                    >
                                      <label class="truncate">USB-utrustning (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2005"
                                    data-value="2005"
                                    class="facet-value third-level 2005"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Laptopladdare/c/2005"
                                    >
                                      <label class="truncate">Laptopladdare (12)</label>
                                      <span class="product-count">(12)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1836"
                                    data-value="1836"
                                    class="facet-value third-level 1836"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Ergonomi/c/1836"
                                    >
                                      <label class="truncate">Ergonomi (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1375"
                                    data-value="1375"
                                    class="facet-value third-level 1375"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Datorhögtalare/c/1375"
                                    >
                                      <label class="truncate">Datorhögtalare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2419"
                                    data-value="2419"
                                    class="facet-value third-level 2419"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Minneskortsläsare/c/2419"
                                    >
                                      <label class="truncate">Minneskortsläsare (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2580"
                                    data-value="2580"
                                    class="facet-value third-level 2580"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Kylning-&-kylpasta/c/2580"
                                    >
                                      <label class="truncate">Kylning & kylpasta (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2422"
                                    data-value="2422"
                                    class="facet-value third-level 2422"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Optiska-enheter/c/2422"
                                    >
                                      <label class="truncate">Optiska enheter (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1817"
                                    data-value="1817"
                                    class="facet-value third-level 1817"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Webbkameror/c/1817"
                                    >
                                      <label class="truncate">Webbkameror (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1824"
                                    data-value="1824"
                                    class="facet-value third-level 1824"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Bildskärmar/c/1824"
                                    >
                                      <label class="truncate">Bildskärmar (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2420"
                                    data-value="2420"
                                    class="facet-value third-level 2420"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Programvaror-&-spel/c/2420"
                                    >
                                      <label class="truncate">Programvaror & spel (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2421"
                                    data-value="2421"
                                    class="facet-value third-level 2421"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Hårddisktillbehör/c/2421"
                                    >
                                      <label class="truncate">Hårddisktillbehör (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1818"
                                    data-value="1818"
                                    class="facet-value third-level 1818"
                                  >
                                    <a
                                      href="/se/Multimedia/Datorer-&-datortillbehör/Laptoptillbehör/c/1818"
                                    >
                                      <label class="truncate">Laptoptillbehör (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1384" class="facet-value second-level 1384">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1384"
                                  aria-expanded="false"
                                  href="#cat_1384"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Skrivare-&-skannrar/c/1384"
                                      class="truncate"
                                    >Skrivare & skannrar (37)</a>
                                  </label>
                                  <span class="product-count">(37)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1384">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2396"
                                    data-value="2396"
                                    class="facet-value third-level 2396"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivare-&-skannrar/3D-skrivare-&-tillbehör/c/2396"
                                    >
                                      <label class="truncate">3D-skrivare & tillbehör (21)</label>
                                      <span class="product-count">(21)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1734"
                                    data-value="1734"
                                    class="facet-value third-level 1734"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivare-&-skannrar/Bläckstråleskrivare/c/1734"
                                    >
                                      <label class="truncate">Bläckstråleskrivare (11)</label>
                                      <span class="product-count">(11)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1735"
                                    data-value="1735"
                                    class="facet-value third-level 1735"
                                  >
                                    <a
                                      href="/se/Multimedia/Skrivare-&-skannrar/Laserskrivare/c/1735"
                                    >
                                      <label class="truncate">Laserskrivare (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1737"
                                    data-value="1737"
                                    class="facet-value third-level 1737"
                                  >
                                    <a href="/se/Multimedia/Skrivare-&-skannrar/Skannrar/c/1737">
                                      <label class="truncate">Skannrar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1633" class="facet-value second-level 1633">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1633"
                                  aria-expanded="false"
                                  href="#cat_1633"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/c/1633"
                                      class="truncate"
                                    >TV-tillbehör & mediaspelare (89)</a>
                                  </label>
                                  <span class="product-count">(89)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1633">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1351"
                                    data-value="1351"
                                    class="facet-value third-level 1351"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Antennkablar-&-tillbehör/c/1351"
                                    >
                                      <label class="truncate">Antennkablar & tillbehör (21)</label>
                                      <span class="product-count">(21)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1352"
                                    data-value="1352"
                                    class="facet-value third-level 1352"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Bildkablar-&-tillbehör/c/1352"
                                    >
                                      <label class="truncate">Bildkablar & tillbehör (38)</label>
                                      <span class="product-count">(38)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2029"
                                    data-value="2029"
                                    class="facet-value third-level 2029"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Mediaspelare/c/2029"
                                    >
                                      <label class="truncate">Mediaspelare (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1349"
                                    data-value="1349"
                                    class="facet-value third-level 1349"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/TV-fästen/c/1349"
                                    >
                                      <label class="truncate">TV-fästen (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1350"
                                    data-value="1350"
                                    class="facet-value third-level 1350"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Fjärrkontroller/c/1350"
                                    >
                                      <label class="truncate">Fjärrkontroller (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1663"
                                    data-value="1663"
                                    class="facet-value third-level 1663"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Paraboler-&-tillbehör/c/1663"
                                    >
                                      <label class="truncate">Paraboler & tillbehör (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1665"
                                    data-value="1665"
                                    class="facet-value third-level 1665"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Antenner/c/1665"
                                    >
                                      <label class="truncate">Antenner (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1661"
                                    data-value="1661"
                                    class="facet-value third-level 1661"
                                  >
                                    <a
                                      href="/se/Multimedia/TV-tillbehör-&-mediaspelare/Blu-ray--&-DVD-spelare/c/1661"
                                    >
                                      <label class="truncate">Blu-ray- & DVD-spelare (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1382" class="facet-value second-level 1382">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1382"
                                  aria-expanded="false"
                                  href="#cat_1382"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Nätverk/c/1382"
                                      class="truncate"
                                    >Nätverk (90)</a>
                                  </label>
                                  <span class="product-count">(90)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1382">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1810"
                                    data-value="1810"
                                    class="facet-value third-level 1810"
                                  >
                                    <a
                                      href="/se/Multimedia/Nätverk/Nätverkskablar-&-tillbehör/c/1810"
                                    >
                                      <label class="truncate">Nätverkskablar & tillbehör (19)</label>
                                      <span class="product-count">(19)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2415"
                                    data-value="2415"
                                    class="facet-value third-level 2415"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Routrar/c/2415">
                                      <label class="truncate">Routrar (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2523"
                                    data-value="2523"
                                    class="facet-value third-level 2523"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Nätverkskameror/c/2523">
                                      <label class="truncate">Nätverkskameror (26)</label>
                                      <span class="product-count">(26)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2636"
                                    data-value="2636"
                                    class="facet-value third-level 2636"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Mesh-nätverk/c/2636">
                                      <label class="truncate">Mesh-nätverk (8)</label>
                                      <span class="product-count">(8)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2416"
                                    data-value="2416"
                                    class="facet-value third-level 2416"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Switchar/c/2416">
                                      <label class="truncate">Switchar (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2418"
                                    data-value="2418"
                                    class="facet-value third-level 2418"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Repeatrar/c/2418">
                                      <label class="truncate">Repeatrar (4)</label>
                                      <span class="product-count">(4)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1809"
                                    data-value="1809"
                                    class="facet-value third-level 1809"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Modem/c/1809">
                                      <label class="truncate">Modem (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2417"
                                    data-value="2417"
                                    class="facet-value third-level 2417"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Nätverkskort/c/2417">
                                      <label class="truncate">Nätverkskort (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2414"
                                    data-value="2414"
                                    class="facet-value third-level 2414"
                                  >
                                    <a href="/se/Multimedia/Nätverk/HomePlug/c/2414">
                                      <label class="truncate">HomePlug (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1808"
                                    data-value="1808"
                                    class="facet-value third-level 1808"
                                  >
                                    <a href="/se/Multimedia/Nätverk/Mobila-bredband/c/1808">
                                      <label class="truncate">Mobila bredband (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2425" class="facet-value second-level 2425">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2425"
                                  aria-expanded="false"
                                  href="#cat_2425"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Musikinstrument-&-studio/c/2425"
                                      class="truncate"
                                    >Musikinstrument & studio (74)</a>
                                  </label>
                                  <span class="product-count">(74)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2425">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2427"
                                    data-value="2427"
                                    class="facet-value third-level 2427"
                                  >
                                    <a
                                      href="/se/Multimedia/Musikinstrument-&-studio/Instrumenttillbehör/c/2427"
                                    >
                                      <label class="truncate">Instrumenttillbehör (45)</label>
                                      <span class="product-count">(45)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2426"
                                    data-value="2426"
                                    class="facet-value third-level 2426"
                                  >
                                    <a
                                      href="/se/Multimedia/Musikinstrument-&-studio/Instrument/c/2426"
                                    >
                                      <label class="truncate">Instrument (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2430"
                                    data-value="2430"
                                    class="facet-value third-level 2430"
                                  >
                                    <a href="/se/Multimedia/Musikinstrument-&-studio/Studio/c/2430">
                                      <label class="truncate">Studio (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2428"
                                    data-value="2428"
                                    class="facet-value third-level 2428"
                                  >
                                    <a
                                      href="/se/Multimedia/Musikinstrument-&-studio/Mikrofoner-&-tillbehör/c/2428"
                                    >
                                      <label class="truncate">Mikrofoner & tillbehör (6)</label>
                                      <span class="product-count">(6)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1381" class="facet-value second-level 1381">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1381"
                                  aria-expanded="false"
                                  href="#cat_1381"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Lagringsmedia/c/1381"
                                      class="truncate"
                                    >Lagringsmedia (47)</a>
                                  </label>
                                  <span class="product-count">(47)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1381">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1594"
                                    data-value="1594"
                                    class="facet-value third-level 1594"
                                  >
                                    <a href="/se/Multimedia/Lagringsmedia/USB-minnen/c/1594">
                                      <label class="truncate">USB-minnen (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1360"
                                    data-value="1360"
                                    class="facet-value third-level 1360"
                                  >
                                    <a href="/se/Multimedia/Lagringsmedia/Minneskort/c/1360">
                                      <label class="truncate">Minneskort (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1811"
                                    data-value="1811"
                                    class="facet-value third-level 1811"
                                  >
                                    <a href="/se/Multimedia/Lagringsmedia/Hårddiskar/c/1811">
                                      <label class="truncate">Hårddiskar (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1353"
                                    data-value="1353"
                                    class="facet-value third-level 1353"
                                  >
                                    <a
                                      href="/se/Multimedia/Lagringsmedia/CD-,-DVD--&-Blu-ray-skivor/c/1353"
                                    >
                                      <label class="truncate">CD-, DVD- & Blu-ray-skivor (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1832"
                                    data-value="1832"
                                    class="facet-value third-level 1832"
                                  >
                                    <a
                                      href="/se/Multimedia/Lagringsmedia/CD-,-DVD--&-Blu-ray-förvaring/c/1832"
                                    >
                                      <label class="truncate">CD-, DVD- & Blu-ray-förvaring (7)</label>
                                      <span class="product-count">(7)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1812"
                                    data-value="1812"
                                    class="facet-value third-level 1812"
                                  >
                                    <a
                                      href="/se/Multimedia/Lagringsmedia/Övrig-lagringsmedia/c/1812"
                                    >
                                      <label class="truncate">Övrig lagringsmedia (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2561" class="facet-value second-level 2561">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2561"
                                  aria-expanded="false"
                                  href="#cat_2561"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/c/2561"
                                      class="truncate"
                                    >Gaming & speltillbehör (79)</a>
                                  </label>
                                  <span class="product-count">(79)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2561">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_2567"
                                    data-value="2567"
                                    class="facet-value third-level 2567"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Spelkonsoller/c/2567"
                                    >
                                      <label class="truncate">Spelkonsoller (25)</label>
                                      <span class="product-count">(25)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2564"
                                    data-value="2564"
                                    class="facet-value third-level 2564"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Gaming-headsets/c/2564"
                                    >
                                      <label class="truncate">Gaming-headsets (14)</label>
                                      <span class="product-count">(14)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2565"
                                    data-value="2565"
                                    class="facet-value third-level 2565"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Gaming-musmattor/c/2565"
                                    >
                                      <label class="truncate">Gaming-musmattor (9)</label>
                                      <span class="product-count">(9)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2563"
                                    data-value="2563"
                                    class="facet-value third-level 2563"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Gaming-tangentbord/c/2563"
                                    >
                                      <label class="truncate">Gaming-tangentbord (13)</label>
                                      <span class="product-count">(13)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2562"
                                    data-value="2562"
                                    class="facet-value third-level 2562"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Gaming-möss/c/2562"
                                    >
                                      <label class="truncate">Gaming-möss (10)</label>
                                      <span class="product-count">(10)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2595"
                                    data-value="2595"
                                    class="facet-value third-level 2595"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Gamingstolar/c/2595"
                                    >
                                      <label class="truncate">Gamingstolar (5)</label>
                                      <span class="product-count">(5)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2566"
                                    data-value="2566"
                                    class="facet-value third-level 2566"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Spelkontroller/c/2566"
                                    >
                                      <label class="truncate">Spelkontroller (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2569"
                                    data-value="2569"
                                    class="facet-value third-level 2569"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/Mobil-gaming/c/2569"
                                    >
                                      <label class="truncate">Mobil-gaming (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2568"
                                    data-value="2568"
                                    class="facet-value third-level 2568"
                                  >
                                    <a
                                      href="/se/Multimedia/Gaming-&-speltillbehör/VR-glasögon/c/2568"
                                    >
                                      <label class="truncate">VR-glasögon (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="2098" class="facet-value second-level 2098">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt2098"
                                  aria-expanded="false"
                                  href="#cat_2098"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/c/2098"
                                      class="truncate"
                                    >Surfplattor & tillbehör (35)</a>
                                  </label>
                                  <span class="product-count">(35)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_2098">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1779"
                                    data-value="1779"
                                    class="facet-value third-level 1779"
                                  >
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/Tillbehör-för-iPad/c/1779"
                                    >
                                      <label class="truncate">Tillbehör för iPad (28)</label>
                                      <span class="product-count">(28)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2511"
                                    data-value="2511"
                                    class="facet-value third-level 2511"
                                  >
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/Styluspennor/c/2511"
                                    >
                                      <label class="truncate">Styluspennor (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2114"
                                    data-value="2114"
                                    class="facet-value third-level 2114"
                                  >
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/Tillbehör-för-Samsung/c/2114"
                                    >
                                      <label class="truncate">Tillbehör för Samsung (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_2113"
                                    data-value="2113"
                                    class="facet-value third-level 2113"
                                  >
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/Övriga-tillbehör/c/2113"
                                    >
                                      <label class="truncate">Övriga tillbehör (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1822"
                                    data-value="1822"
                                    class="facet-value third-level 1822"
                                  >
                                    <a
                                      href="/se/Multimedia/Surfplattor-&-tillbehör/Surfplattor/c/1822"
                                    >
                                      <label class="truncate">Surfplattor (1)</label>
                                      <span class="product-count">(1)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li data-value="1388" class="facet-value second-level 1388">
                                <div
                                  class="lbl2"
                                  data-toggle="collapse"
                                  for="opt1388"
                                  aria-expanded="false"
                                  href="#cat_1388"
                                >
                                  <label>
                                    <a
                                      href="/se/Multimedia/GPS-&-navigatorer/c/1388"
                                      class="truncate"
                                    >GPS & navigatorer (5)</a>
                                  </label>
                                  <span class="product-count">(5)</span>
                                </div>

                                <!-- step 3 -->

                                <ul class="third-level collapse" id="cat_1388">
                                  <li>
                                    <span class="list-gradient"></span>
                                  </li>
                                  <li
                                    id="cat_1749"
                                    data-value="1749"
                                    class="facet-value third-level 1749"
                                  >
                                    <a href="/se/Multimedia/GPS-&-navigatorer/Frilufts-GPS/c/1749">
                                      <label class="truncate">Frilufts-GPS (3)</label>
                                      <span class="product-count">(3)</span>
                                    </a>
                                  </li>
                                  <li
                                    id="cat_1748"
                                    data-value="1748"
                                    class="facet-value third-level 1748"
                                  >
                                    <a
                                      href="/se/Multimedia/GPS-&-navigatorer/Bilnavigatorer-&-tillbehör/c/1748"
                                    >
                                      <label class="truncate">Bilnavigatorer & tillbehör (2)</label>
                                      <span class="product-count">(2)</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <input type="hidden" id="isSearchPage" value />

                    <input type="hidden" id="isBrandPage" value />
                    <div class="facet js-facet">
                      <div
                        class="facet__name js-facet-name"
                        data-toggle="collapse"
                        href="#brand"
                        aria-expanded="false"
                      >
                        <span class="glyphicon facet__arrow"></span>
                        <span class="facettitle">Varumärke</span>
                      </div>
                      <div class="facet__value js-facet-value js-facet-form collapse in" id="brand">
                        <ul class="facet__list js-facet-list has-view-all">
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-NORENCO">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="NORENCO"
                                    name="brand"
                                    id="NORENCO"
                                  />
                                  NORENCO
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CLAS_OHLSON">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CLAS OHLSON"
                                    name="brand"
                                    id="CLAS_OHLSON"
                                  />
                                  CLAS OHLSON
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CANTONI">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CANTONI"
                                    name="brand"
                                    id="CANTONI"
                                  />
                                  CANTONI
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-SKIMSAFE">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="SKIMSAFE"
                                    name="brand"
                                    id="SKIMSAFE"
                                  />
                                  SKIMSAFE
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-SWIRL">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="SWIRL"
                                    name="brand"
                                    id="SWIRL"
                                  />
                                  SWIRL
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-NORTHLIGHT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="NORTHLIGHT"
                                    name="brand"
                                    id="NORTHLIGHT"
                                  />
                                  NORTHLIGHT
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CASIO">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CASIO"
                                    name="brand"
                                    id="CASIO"
                                  />
                                  CASIO
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-PROLOGUE">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="PROLOGUE"
                                    name="brand"
                                    id="PROLOGUE"
                                  />
                                  PROLOGUE
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-ASAKLITT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="ASAKLITT"
                                    name="brand"
                                    id="ASAKLITT"
                                  />
                                  ASAKLITT
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-LAUT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="LAUT"
                                    name="brand"
                                    id="LAUT"
                                  />
                                  LAUT
                                </label>
                              </a>
                            </span>
                          </li>
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CARLO_GAVAZZI">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CARLO GAVAZZI"
                                    name="brand"
                                    id="CARLO_GAVAZZI"
                                  />
                                  CARLO GAVAZZI
                                </label>
                              </a>
                            </span>
                          </li>
                        </ul>
                        <ul class="facet__list js-facet-list hide">
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-ASAKLITT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="ASAKLITT"
                                    name="brand"
                                    id="sm_ASAKLITT"
                                  />
                                  ASAKLITT
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CANTONI">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CANTONI"
                                    name="brand"
                                    id="sm_CANTONI"
                                  />
                                  CANTONI
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CARLO_GAVAZZI">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CARLO GAVAZZI"
                                    name="brand"
                                    id="sm_CARLO_GAVAZZI"
                                  />
                                  CARLO GAVAZZI
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CASIO">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CASIO"
                                    name="brand"
                                    id="sm_CASIO"
                                  />
                                  CASIO
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-CLAS_OHLSON">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="CLAS OHLSON"
                                    name="brand"
                                    id="sm_CLAS_OHLSON"
                                  />
                                  CLAS OHLSON
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-LAUT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="LAUT"
                                    name="brand"
                                    id="sm_LAUT"
                                  />
                                  LAUT
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-NORENCO">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="NORENCO"
                                    name="brand"
                                    id="sm_NORENCO"
                                  />
                                  NORENCO
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-NORTHLIGHT">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="NORTHLIGHT"
                                    name="brand"
                                    id="sm_NORTHLIGHT"
                                  />
                                  NORTHLIGHT
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-PROLOGUE">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="PROLOGUE"
                                    name="brand"
                                    id="sm_PROLOGUE"
                                  />
                                  PROLOGUE
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-SKIMSAFE">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="SKIMSAFE"
                                    name="brand"
                                    id="sm_SKIMSAFE"
                                  />
                                  SKIMSAFE
                                </label>
                              </a>
                            </span>
                          </li>
                          <!-- need to add proper class -->
                          <li class="facet-value-sorted list-show">
                            <span class="facet__text form-check">
                              <a>
                                <label class="form-check-label" for="nav-SWIRL">
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="SWIRL"
                                    name="brand"
                                    id="sm_SWIRL"
                                  />
                                  SWIRL
                                </label>
                              </a>
                            </span>
                          </li>
                        </ul>
                        <hr class="facet-line-break" />
                        <button
                          class="js-facet-all"
                          data-viewall="Visa mer"
                          data-viewless="Visa mindre"
                        >Visa mer</button>
                      </div>
                    </div>
                    <div class="facet js-facet">
                      <div
                        class="facet__name js-facet-name"
                        data-toggle="collapse"
                        href="#baseprice"
                        aria-expanded="false"
                      >
                        <span class="glyphicon facet__arrow"></span>
                        <span class="facettitle">Pris</span>
                      </div>
                      <div
                        class="facet__value js-facet-value js-facet-form collapse in"
                        id="baseprice"
                      >
                        <div class="price-range-block">
                          <div class="price-range-div">
                            <input
                              type="number"
                              min="19.9"
                              max="599.0"
                              id="min_price"
                              class="price-range-field"
                            />
                            <input
                              type="number"
                              min="19.9"
                              max="599.0"
                              id="max_price"
                              class="price-range-field"
                            />
                            <input type="hidden" id="min-price-range" value="19.9" />
                            <input type="hidden" id="max-price-range" value="599.0" />
                          </div>
                          <div
                            id="slider-range"
                            class="price-filter-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                            name="rangeInput"
                          >
                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                            <span
                              tabindex="0"
                              class="ui-slider-handle ui-corner-all ui-state-default"
                            ></span>
                            <span
                              tabindex="0"
                              class="ui-slider-handle ui-corner-all ui-state-default"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="facet js-facet">
                      <div
                        class="facet__name js-facet-name"
                        data-toggle="collapse"
                        href="#saleCampaignStatus"
                        aria-expanded="false"
                      >
                        <span class="glyphicon facet__arrow"></span>
                        <span class="facettitle">Prissänka produkter</span>
                      </div>
                      <div
                        class="facet__value js-facet-value js-facet-form collapse in"
                        id="saleCampaignStatus"
                      >
                        <ul class="facet__list js-facet-list">
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label
                                  class="form-check-label"
                                  for="nav-Visa_endast_prissänkta_produkter"
                                >
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="Visa endast prissänkta produkter"
                                    name="saleCampaignStatus"
                                    id="Visa_endast_prissänkta_produkter"
                                  />
                                  Visa endast prissänkta produkter
                                </label>
                              </a>
                            </span>
                          </li>
                        </ul>
                        <ul class="facet__list js-facet-list hide"></ul>
                      </div>
                    </div>
                    <div class="facet js-facet">
                      <div
                        class="facet__name js-facet-name"
                        data-toggle="collapse"
                        href="#stockStatus"
                        aria-expanded="false"
                      >
                        <span class="glyphicon facet__arrow"></span>
                        <span class="facettitle">Lagerstatus</span>
                      </div>
                      <div
                        class="facet__value js-facet-value js-facet-form collapse in"
                        id="stockStatus"
                      >
                        <ul class="facet__list js-facet-list">
                          <li class="facet-value">
                            <span class="facet__text form-check">
                              <a>
                                <label
                                  class="form-check-label"
                                  for="nav-Visa_endast_produkter_som_finns_i_lager"
                                >
                                  <input
                                    class="form-check-input common-checkbox fixed-facet"
                                    type="checkbox"
                                    value="Visa endast produkter som finns i lager"
                                    name="stockStatus"
                                    id="Visa_endast_produkter_som_finns_i_lager"
                                  />
                                  Visa endast produkter som finns i lager
                                </label>
                              </a>
                            </span>
                          </li>
                        </ul>
                        <ul class="facet__list js-facet-list hide"></ul>
                      </div>
                    </div>
                    <div
                      class="mobile-toggle-facet-list"
                      data-viewall="Visa mer"
                      data-viewless="Visa mindre"
                    >Visa mer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9 product-grid-list">
            <div class="yCmsContentSlot product-grid-right-result-slot">
              <div
                class="yCmsComponent product__list--wrapper yComponentWrapper product-grid-right-result-component"
              >
                <div class="product__list--wrapper">
                  <ul class="row tile-container">
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Förstoringslampa LED Northlight"
                        data-id="361116000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="NORTHLIGHT"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzYxMTE2MDAwX1NFOzM2LTExMTZfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="36-1116_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/F&amp;ouml;rstoringslampa-LED-Northlight/p/36-1116"
                            title="Förstoringslampa LED Northlight"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h28/ha2/9667658022942.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h39/h2b/9671446429726.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h39/h2b/9671446429726.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h39/h2b/9671446429726.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Förstoringslampa LED Northlight"
                                title="Förstoringslampa LED Northlight"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/F&amp;ouml;rstoringslampa-LED-Northlight/p/36-1116"
                            >Förstoringslampa LED Northlight</a>
                            <a
                              class="description"
                              href="/se/F&amp;ouml;rstoringslampa-LED-Northlight/p/36-1116"
                            >Stort och tydligt förstoringsglas med inbyggd LED-belysning. Bra arbetsbelysning....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings3-5"></a>
                                <strong>3.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>24</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <div class="product__energy">
                              <a
                                class="product__energyIcon js-energy-popup"
                                data-href="/se/p/energy_quickview?energyUrl=/product/PECI/36-1116_sv.jpg&energyClass=A%2B"
                                data-title="Energieffektivitetsklass&nbsp;A%2B"
                              >
                                <img
                                  data-src="/se/_ui/responsive/assets/images/energy/aphighest.svg"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                  class="lazyload"
                                />
                              </a>
                              <span>
                                <a
                                  href="/se/F&amp;ouml;rstoringslampa-LED-Northlight/p/36-1116#collapsible__product__specs"
                                  class="energy-icon"
                                >(Produktblad)</a>
                              </span>
                            </div>
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 361116000">
                              <div class="price">
                                <strong>599,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="36-1116" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzYxMTE2MDAwX1NFOzM2LTExMTZfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="36-1116_SE"
                              data-name="Förstoringslampa LED Northlight"
                              data-id="361116000"
                              data-productattr
                              data-brand="NORTHLIGHT"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Bank- och kreditkortsskydd SkimSafe"
                        data-id="319900000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="SKIMSAFE"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5OTAwMDAwX1NFOzMxLTk5MDBfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="31-9900_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Bank--och-kreditkortsskydd-SkimSafe/p/31-9900"
                            title="Bank- och kreditkortsskydd SkimSafe"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h18/h3b/9667112075294.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h7a/h9b/9670900482078.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h7a/h9b/9670900482078.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h7a/h9b/9670900482078.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Bank- och kreditkortsskydd SkimSafe"
                                title="Bank- och kreditkortsskydd SkimSafe"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Bank--och-kreditkortsskydd-SkimSafe/p/31-9900"
                            >Bank- och kreditkortsskydd SkimSafe</a>
                            <a
                              class="description"
                              href="/se/Bank--och-kreditkortsskydd-SkimSafe/p/31-9900"
                            >Skyddar dina bank- och kreditkort mot trådlös skimning. Supertunt och ser precis....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-0"></a>
                                <strong>4.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>47</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 319900000">
                              <div class="price">
                                <strong>249,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="31-9900" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5OTAwMDAwX1NFOzMxLTk5MDBfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="31-9900_SE"
                              data-name="Bank- och kreditkortsskydd SkimSafe"
                              data-id="319900000"
                              data-productattr
                              data-brand="SKIMSAFE"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Armbandsklocka"
                        data-id="442878000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyODc4MDAwX1NFOzQ0LTI4NzhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-2878_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Armbandsklocka/p/44-2878"
                            title="Armbandsklocka"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h74/hb0/9669460066334.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/he6/h63/9673248473118.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/he6/h63/9673248473118.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/he6/h63/9673248473118.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Armbandsklocka"
                                title="Armbandsklocka"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a class="name" href="/se/Armbandsklocka/p/44-2878">Armbandsklocka</a>
                            <a
                              class="description"
                              href="/se/Armbandsklocka/p/44-2878"
                            >Klocka med svart PU-armband. Sekundvisare och vit urtavla. Vattenskyddad 5 ATM, ....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-0"></a>
                                <strong>4.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>1</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recension
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 442878000">
                              <div class="price">
                                <strong>229,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-2878" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyODc4MDAwX1NFOzQ0LTI4NzhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-2878_SE"
                              data-name="Armbandsklocka"
                              data-id="442878000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Solglasögon OTG"
                        data-id="441177019"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQxMTc3MDE5X1NFOzQ0LTExNzctMTlfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-1177-19_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Solglas&amp;ouml;gon-OTG/p/44-1177-19"
                            title="Solglasögon OTG"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h4a/h83/9669189304350.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/he8/h22/9672977711134.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/he8/h22/9672977711134.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/he8/h22/9672977711134.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Solglasögon OTG"
                                title="Solglasögon OTG"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Solglas&amp;ouml;gon-OTG/p/44-1177-19"
                            >Solglasögon OTG</a>
                            <a
                              class="description"
                              href="/se/Solglas&amp;ouml;gon-OTG/p/44-1177-19"
                            >Fit over-modell som placeras över dina vanliga glasögon. Perfekta att ta fram i ....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-5"></a>
                                <strong>4.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>7</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 441177019">
                              <div class="price">
                                <strong>79,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-1177-19" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQxMTc3MDE5X1NFOzQ0LTExNzctMTlfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-1177-19_SE"
                              data-name="Solglasögon OTG"
                              data-id="441177019"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Glasögonrengöring Norenco, Brillerens 50 ml"
                        data-id="319854000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="NORENCO"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5ODU0MDAwX1NFOzMxLTk4NTRfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="31-9854_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Glas&amp;ouml;gonreng&amp;ouml;ring-Norenco,-Brillerens-50-ml/p/31-9854"
                            title="Glasögonrengöring Norenco, Brillerens 50 ml"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h8c/h02/9667104669726.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hda/hc9/9670893076510.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/hda/hc9/9670893076510.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/hda/hc9/9670893076510.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Glasögonrengöring Norenco, Brillerens 50 ml"
                                title="Glasögonrengöring Norenco, Brillerens 50 ml"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Glas&amp;ouml;gonreng&amp;ouml;ring-Norenco,-Brillerens-50-ml/p/31-9854"
                            >Glasögonrengöring Norenco, Brillerens 50 ml</a>
                            <a
                              class="description"
                              href="/se/Glas&amp;ouml;gonreng&amp;ouml;ring-Norenco,-Brillerens-50-ml/p/31-9854"
                            >Rengör dina glasögon skonsamt. Enkelt - spraya på och skölj av. Fungerar på alla....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-0"></a>
                                <strong>4.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>4</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 319854000">
                              <div class="price">
                                <strong>49,90</strong>
                                <span class="comparisonPrice">(998,00/l)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="31-9854" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5ODU0MDAwX1NFOzMxLTk4NTRfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="31-9854_SE"
                              data-name="Glasögonrengöring Norenco, Brillerens 50 ml"
                              data-id="319854000"
                              data-productattr
                              data-brand="NORENCO"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Läsglasögon metall, 3-pack"
                        data-id="441525250"
                        data-productattr="Styrka : +2,50"
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQxNTI1MTAwX1NFOzQ0LTE1MjUtMjUwX1NFO09CSkVDVElWRSQ7Tk9ORTpOT05FOzkxOw"
                        data-variantcode="44-1525-250_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/L&amp;auml;sglas&amp;ouml;gon-metall,-3-pack/p/44-1525-250"
                            title="Läsglasögon metall, 3-pack"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h4d/h6a/9669238915102.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h36/hf5/9673027321886.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h36/hf5/9673027321886.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h36/hf5/9673027321886.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Läsglasögon metall, 3-pack"
                                title="Läsglasögon metall, 3-pack"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-metall,-3-pack/p/44-1525-250"
                            >Läsglasögon metall, 3-pack</a>
                            <a
                              class="description"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-metall,-3-pack/p/44-1525-250"
                            >För dig som har svårt att läsa text på nära h....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings5-0"></a>
                                <strong>5.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>2</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 441525250">
                              <div class="price">
                                <strong>199,90</strong>
                                <span class="comparisonPrice">(66,63/st)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="show-more">
                            <a
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-metall,-3-pack/p/44-1525-250"
                              class="btn"
                            >
                              <span>Se fler</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Armbandsklocka digital"
                        data-id="364046001"
                        data-productattr="Utförande :||Svart/grå/orange"
                        data-productlist="category-page"
                        data-brand="PROLOGUE"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzY0MDQ2MDAwX1NFOzM2LTQwNDYtMV9TRTtPQkpFQ1RJVkUkO05PTkU6Tk9ORTs5MTs"
                        data-variantcode="36-4046-1_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Armbandsklocka-digital/p/36-4046-1"
                            title="Armbandsklocka digital"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h59/ha7/9667730505758.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hfb/h41/9671518912542.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/hfb/h41/9671518912542.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/hfb/h41/9671518912542.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Armbandsklocka digital"
                                title="Armbandsklocka digital"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Armbandsklocka-digital/p/36-4046-1"
                            >Armbandsklocka digital</a>
                            <a
                              class="description"
                              href="/se/Armbandsklocka-digital/p/36-4046-1"
                            >Alarm. Stoppur med m....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-0"></a>
                                <strong>4.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>36</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 364046001">
                              <div class="price">
                                <strong>199,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="show-more">
                            <a href="/se/Armbandsklocka-digital/p/36-4046-1" class="btn">
                              <span>Se fler</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Förstoringsglas med belysning"
                        data-id="347932000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTMyMDAwX1NFOzM0LTc5MzJfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="34-7932_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/F&amp;ouml;rstoringsglas-med-belysning/p/34-7932"
                            title="Förstoringsglas med belysning"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h21/hd0/9667454631966.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h92/ha2/9671243038750.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h92/ha2/9671243038750.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h92/ha2/9671243038750.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Förstoringsglas med belysning"
                                title="Förstoringsglas med belysning"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/F&amp;ouml;rstoringsglas-med-belysning/p/34-7932"
                            >Förstoringsglas med belysning</a>
                            <a
                              class="description"
                              href="/se/F&amp;ouml;rstoringsglas-med-belysning/p/34-7932"
                            >Förstoringsglas med belysning. Förstorar 3 gånger. Batterier ingår</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings3-5"></a>
                                <strong>3.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>2</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 347932000">
                              <div class="price">
                                <strong>149,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="34-7932" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTMyMDAwX1NFOzM0LTc5MzJfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="34-7932_SE"
                              data-name="Förstoringsglas med belysning"
                              data-id="347932000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Batteribytarset för armbandsur"
                        data-id="444038000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQ0MDM4MDAwX1NFOzQ0LTQwMzhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-4038_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Batteribytarset-f&amp;ouml;r-armbandsur/p/44-4038"
                            title="Batteribytarset för armbandsur"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h2b/hf3/9669618728990.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h19/h89/9673407135774.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h19/h89/9673407135774.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h19/h89/9673407135774.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Batteribytarset för armbandsur"
                                title="Batteribytarset för armbandsur"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Batteribytarset-f&amp;ouml;r-armbandsur/p/44-4038"
                            >Batteribytarset för armbandsur</a>
                            <a
                              class="description"
                              href="/se/Batteribytarset-f&amp;ouml;r-armbandsur/p/44-4038"
                            >Byt klockbatteriet själv och spara pengar. Set med två olika boettöppnare för sk....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings1-5"></a>
                                <strong>1.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>6</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 444038000">
                              <div class="price">
                                <strong>129,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-4038" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQ0MDM4MDAwX1NFOzQ0LTQwMzhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-4038_SE"
                              data-name="Batteribytarset för armbandsur"
                              data-id="444038000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Förstoringsglas med belysning, Handsfree"
                        data-id="347928000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTI4MDAwX1NFOzM0LTc5MjhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="34-7928_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/F&amp;ouml;rstoringsglas-med-belysning,-Handsfree/p/34-7928"
                            title="Förstoringsglas med belysning, Handsfree"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h7a/h04/9667454238750.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/ha4/h79/9671242645534.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/ha4/h79/9671242645534.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/ha4/h79/9671242645534.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Förstoringsglas med belysning, Handsfree"
                                title="Förstoringsglas med belysning, Handsfree"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/F&amp;ouml;rstoringsglas-med-belysning,-Handsfree/p/34-7928"
                            >Förstoringsglas med belysning, Handsfree</a>
                            <a
                              class="description"
                              href="/se/F&amp;ouml;rstoringsglas-med-belysning,-Handsfree/p/34-7928"
                            >Smart hjälpmedel för dig som handarbetar. Perfekt när du behöver ha händerna fri....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-5"></a>
                                <strong>4.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>2</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 347928000">
                              <div class="price">
                                <strong>159,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="34-7928" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTI4MDAwX1NFOzM0LTc5MjhfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="34-7928_SE"
                              data-name="Förstoringsglas med belysning, Handsfree"
                              data-id="347928000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Läsglasögon plast"
                        data-id="441521400"
                        data-productattr="Styrka : +4,00"
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQxNTIxMTAwX1NFOzQ0LTE1MjEtNDAwX1NFO09CSkVDVElWRSQ7Tk9ORTpOT05FOzkxOw"
                        data-variantcode="44-1521-400_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/L&amp;auml;sglas&amp;ouml;gon-plast/p/44-1521-400"
                            title="Läsglasögon plast"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hd5/h0b/9669236391966.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h14/h85/9673024798750.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h14/h85/9673024798750.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h14/h85/9673024798750.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Läsglasögon plast"
                                title="Läsglasögon plast"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-plast/p/44-1521-400"
                            >Läsglasögon plast</a>
                            <a
                              class="description"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-plast/p/44-1521-400"
                            >För dig som har svårt att läsa text på nära h....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings3-5"></a>
                                <strong>3.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>6</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 441521400">
                              <div class="price">
                                <strong>89,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="show-more">
                            <a
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-plast/p/44-1521-400"
                              class="btn"
                            >
                              <span>Se fler</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Förstoringsglas"
                        data-id="347931000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTMxMDAwX1NFOzM0LTc5MzFfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="34-7931_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/F&amp;ouml;rstoringsglas/p/34-7931"
                            title="Förstoringsglas"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hdc/hca/9667454468126.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hb8/h5e/9671242874910.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/hb8/h5e/9671242874910.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/hb8/h5e/9671242874910.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Förstoringsglas"
                                title="Förstoringsglas"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/F&amp;ouml;rstoringsglas/p/34-7931"
                            >Förstoringsglas</a>
                            <a
                              class="description"
                              href="/se/F&amp;ouml;rstoringsglas/p/34-7931"
                            >Extra litet förstoringsglas. Perfekt att ha i väskan för att t.ex. läsa innehåll....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings5-0"></a>
                                <strong>5.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>9</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 347931000">
                              <div class="price">
                                <strong>79,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="34-7931" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ3OTMxMDAwX1NFOzM0LTc5MzFfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="34-7931_SE"
                              data-name="Förstoringsglas"
                              data-id="347931000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Armbandsklocka"
                        data-id="442879000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyODc5MDAwX1NFOzQ0LTI4NzlfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-2879_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Armbandsklocka/p/44-2879"
                            title="Armbandsklocka"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h5e/h5a/9669460099102.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h83/hcc/9673248505886.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h83/hcc/9673248505886.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h83/hcc/9673248505886.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Armbandsklocka"
                                title="Armbandsklocka"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a class="name" href="/se/Armbandsklocka/p/44-2879">Armbandsklocka</a>
                            <a
                              class="description"
                              href="/se/Armbandsklocka/p/44-2879"
                            >Klocka med svart PU-armband. Sekundvisare och vit urtavla. Vattenskyddad 5 ATM, ....</a>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 442879000">
                              <div class="price">
                                <strong>229,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-2879" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyODc5MDAwX1NFOzQ0LTI4NzlfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-2879_SE"
                              data-name="Armbandsklocka"
                              data-id="442879000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Optikduk Smart Microfiber"
                        data-id="344534000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="CLAS OHLSON"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ0NTM0MDAwX1NFOzM0LTQ1MzRfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="34-4534_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Optikduk-Smart-Microfiber/p/34-4534"
                            title="Optikduk Smart Microfiber"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h46/hbc/9667389227038.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h24/h1a/9671177633822.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h24/h1a/9671177633822.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h24/h1a/9671177633822.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Optikduk Smart Microfiber"
                                title="Optikduk Smart Microfiber"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Optikduk-Smart-Microfiber/p/34-4534"
                            >Optikduk Smart Microfiber</a>
                            <a
                              class="description"
                              href="/se/Optikduk-Smart-Microfiber/p/34-4534"
                            >Smart mikrofiberduk för enkel polering och rengöring. Perfekt till glasögon, kam....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings5-0"></a>
                                <strong>5.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>7</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 344534000">
                              <div class="price">
                                <strong>29,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="34-4534" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzQ0NTM0MDAwX1NFOzM0LTQ1MzRfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="34-4534_SE"
                              data-name="Optikduk Smart Microfiber"
                              data-id="344534000"
                              data-productattr
                              data-brand="CLAS OHLSON"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Kortningsverktyg för metallarmband"
                        data-id="444036000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQ0MDM2MDAwX1NFOzQ0LTQwMzZfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-4036_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Kortningsverktyg-f&amp;ouml;r-metallarmband/p/44-4036"
                            title="Kortningsverktyg för metallarmband"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/he8/h74/9669618630686.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hcb/hfd/9673407037470.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/hcb/hfd/9673407037470.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/hcb/hfd/9673407037470.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Kortningsverktyg för metallarmband"
                                title="Kortningsverktyg för metallarmband"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Kortningsverktyg-f&amp;ouml;r-metallarmband/p/44-4036"
                            >Kortningsverktyg för metallarmband</a>
                            <a
                              class="description"
                              href="/se/Kortningsverktyg-f&amp;ouml;r-metallarmband/p/44-4036"
                            >Lättanvänt verktyg för att korta klockarmbandet hemma. Gör det enkelt att ta bor....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings4-0"></a>
                                <strong>4.0</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>2</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 444036000">
                              <div class="price">
                                <strong>49,90</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-4036" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQ0MDM2MDAwX1NFOzQ0LTQwMzZfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-4036_SE"
                              data-name="Kortningsverktyg för metallarmband"
                              data-id="444036000"
                              data-productattr
                              data-brand
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Rengöringsservetter för glasögon Swirl 30-pack"
                        data-id="442305000"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="SWIRL"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyMzA1MDAwX1NFOzQ0LTIzMDVfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                        data-variantcode="44-2305_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Reng&amp;ouml;ringsservetter-f&amp;ouml;r-glas&amp;ouml;gon-Swirl-30-pack/p/44-2305"
                            title="Rengöringsservetter för glasögon Swirl 30-pack"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/hb3/hbd/17534305992734.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h5a/hfc/17534308122654.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h5a/hfc/17534308122654.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h5a/hfc/17534308122654.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Rengöringsservetter för glasögon Swirl 30-pack"
                                title="Rengöringsservetter för glasögon Swirl 30-pack"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Reng&amp;ouml;ringsservetter-f&amp;ouml;r-glas&amp;ouml;gon-Swirl-30-pack/p/44-2305"
                            >Rengöringsservetter för glasögon Swirl 30-pack</a>
                            <a
                              class="description"
                              href="/se/Reng&amp;ouml;ringsservetter-f&amp;ouml;r-glas&amp;ouml;gon-Swirl-30-pack/p/44-2305"
                            >Praktisk glasögonputs om olyckan skulle vara framme. Rengör dina glasögon utan a....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings2-5"></a>
                                <strong>2.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>7</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 442305000">
                              <div class="price">
                                <strong>34,90</strong>
                                <span class="comparisonPrice">(1,16/st)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="44-2305" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQyMzA1MDAwX1NFOzQ0LTIzMDVfU0U7T0JKRUNUSVZFJDtOT05FOk5PTkU7OTE7"
                              data-variantcode="44-2305_SE"
                              data-name="Rengöringsservetter för glasögon Swirl 30-pack"
                              data-id="442305000"
                              data-productattr
                              data-brand="SWIRL"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Läsglasögon 3-pack"
                        data-id="441526400"
                        data-productattr="Styrka : +4,00"
                        data-productlist="category-page"
                        data-brand
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByNDQxNTI2MTAwX1NFOzQ0LTE1MjYtNDAwX1NFO09CSkVDVElWRSQ7Tk9ORTpOT05FOzkxOw"
                        data-variantcode="44-1526-400_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/L&amp;auml;sglas&amp;ouml;gon-3-pack/p/44-1526-400"
                            title="Läsglasögon 3-pack"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h7c/ha6/9669240258590.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h27/h45/9673028665374.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h27/h45/9673028665374.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h27/h45/9673028665374.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Läsglasögon 3-pack"
                                title="Läsglasögon 3-pack"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-3-pack/p/44-1526-400"
                            >Läsglasögon 3-pack</a>
                            <a
                              class="description"
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-3-pack/p/44-1526-400"
                            >För dig som har svårt att läsa text på nära h....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings1-5"></a>
                                <strong>1.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>4</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 441526400">
                              <div class="price">
                                <strong>199,90</strong>
                                <span class="comparisonPrice">(66,63/st)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="show-more">
                            <a
                              href="/se/L&amp;auml;sglas&amp;ouml;gon-3-pack/p/44-1526-400"
                              class="btn"
                            >
                              <span>Se fler</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6 col-lg-4 col-xs-12">
                      <div
                        class="product-card"
                        data-name="Plånbok med slejf RFID Secure"
                        data-id="319973001"
                        data-productattr
                        data-productlist="category-page"
                        data-brand="CARLO GAVAZZI"
                        data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5OTczMDAxX1NFOzMxLTk5NzMtMV9TRTtPQkpFQ1RJVkUkO05PTkU6Tk9ORTs5MTs"
                        data-variantcode="31-9973-1_SE"
                      >
                        <div class="product-card__top">
                          <div class="content"></div>
                          <!-- check if teaser and why needed -->
                          <!-- product image -->
                          <a
                            class="thumb"
                            href="/se/Pl&amp;aring;nbok-med-slejf-RFID-Secure/p/31-9973-1"
                            title="Plånbok med slejf RFID Secure"
                          >
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h31/h75/9667130916894.jpg"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcset="https://images.clasohlson.com/medias/sys_master/h48/h6e/9670919323678.jpg"
                              />
                              <img
                                data-src="https://images.clasohlson.com/medias/sys_master/h48/h6e/9670919323678.jpg"
                                data-mainimage="https://images.clasohlson.com/medias/sys_master/h48/h6e/9670919323678.jpg"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                                alt="Plånbok med slejf RFID Secure"
                                title="Plånbok med slejf RFID Secure"
                                class="lazyload"
                              />
                            </picture>
                          </a>
                          <!--
<span class="productImg" itemscope itemtype="http://schema.org/Product">
                          check how spare part showSpareParts is used-->
                        </div>
                        <div class="product-card__mid">
                          <div class="details" style="white-space: normal">
                            <a
                              class="name"
                              href="/se/Pl&amp;aring;nbok-med-slejf-RFID-Secure/p/31-9973-1"
                            >Plånbok med slejf RFID Secure</a>
                            <a
                              class="description"
                              href="/se/Pl&amp;aring;nbok-med-slejf-RFID-Secure/p/31-9973-1"
                            >Rymlig plånbok i äkta läder som ryms i bakfickan på dina jeans. Skyddar kortens ....</a>
                          </div>
                          <div class="rating-energy-section">
                            <div class="rating-energy">
                              <div class="gridViewRatings">
                                <a class="ratings3-5"></a>
                                <strong>3.5</strong>
                                <span>&nbsp;/&nbsp;</span>
                                <strong>3</strong>
                                <span class="review-text">
                                  &nbsp;
                                  recensioner
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="mid-bottom">
                            <!-- isCorporateUserLoggedIn &&  -->
                            <div class="prices 319973001">
                              <div class="price">
                                <strong>199,00</strong>
                                <span class="comparisonPrice"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-card__bottom">
                          <div class="addtocart">
                            <input type="hidden" name="loadingMsg" value="Lägger till" />
                            <input type="hidden" name="initialMsg" value="Lägg i varukorg" />
                            <input type="hidden" name="productCodePost" value="31-9973-1" />
                            <button
                              type="button"
                              class="btn btn-pd-cart btn-pdp-addtocart js-pdp-cart-btn"
                              data-ticket="Oy9jYXRlZ29yeS1wYWdlL3Byb2R1Y3QtbGlzdC13aXRoLWNvdW50L3Byb2R1Y3QtbGlzdDsjO3Byb2R1Y3Rfa2V5O1ByMzE5OTczMDAxX1NFOzMxLTk5NzMtMV9TRTtPQkpFQ1RJVkUkO05PTkU6Tk9ORTs5MTs"
                              data-variantcode="31-9973-1_SE"
                              data-name="Plånbok med slejf RFID Secure"
                              data-id="319973001"
                              data-productattr
                              data-brand="CARLO GAVAZZI"
                            >Lägg i varukorg</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="box col-sm-12 col-md-9 col-xs-3">
                  <ul id="co-pagination" class="co-pagination"></ul>

                  <span style="position: absolute; top: -9999px;left: -9999px;">
                    <a href="?page=1">1</a>
                    <a href="?page=2">2</a>
                    <a href="?page=3">3</a>
                    <a href="?page=4">4</a>
                    <a href="?page=5">5</a>
                  </span>
                </div>

                <script type="text/javascript">
  window.onload = function() {
    $.urlParam = function(name) {
      var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
        window.location.href
      );
      if (results == null) {
        return null;
      } else {
        return decodeURI(results[1]) || 0;
      }
    };
    $(window).on("resize", function() {
      loadPagination();
    });
    function loadPagination() {
      var curPage = $.urlParam("page") ? $.urlParam("page") : 1,
        desktopPageSize = curPage <= 4 ? 3 : 2;
      $("#co-pagination").pagination({
        total: 91 /* total number of items */,
        current: parseInt(
          curPage
        ) /* current page number/ selected page/ clicked page */,
        length: 18 /* total number of items per page */,
        size:
          $(this).width() <= "767"
            ? 1
            : desktopPageSize /* number of pages on both side of selected page */
      });
    }
    loadPagination();
  };
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pickupTitle" class="display-none">
      <div class="pickup-header">
        <button
          class="btn btn-primary back__to__storelist js-back-to-storelist hidden-xs hidden-sm hidden-md hidden-lg"
        >Tillbaka</button>
        <span class="headline-inner">Produkttillgänglighet efter butik</span>
      </div>
    </div>

    <div id="popup_store_pickup_form" class="display-none">
      <div id="pickupModal">
        <div class="pickup-component js-pickup-component">
          <div class="find-store-display js-find-store-display">
            <div class="store-navigation">
              <div class="pickup-search-product">
                <div class="pickup-search-bar">
                  <form
                    id="command"
                    name="pickupInStoreForm"
                    class="searchPOSForm clearfix"
                    action="/se/Hem/Accessoarer/c/1905"
                    method="post"
                  >
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name="locationQuery"
                        data-id="locationForSearch"
                        placeholder="Ange postort eller postnummer:"
                      />
                      <span class="input-group-btn">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-id="pickupstore_location_search_button"
                        >
                          <span class="glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                    </div>
                    <input type="hidden" name="cartPage" data-id="atCartPage" value />
                    <input type="hidden" name="entryNumber" value data-id="entryNumber" />
                    <div>
                      <input
                        type="hidden"
                        name="CSRFToken"
                        value="5e1dd2fd-8aa5-4dd3-8f84-dc9d9ec2db14"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <ul class="pickup-store-list js-pickup-store-list">
                <li class="loading">
                  <span class="glyphicon glyphicon-repeat"></span>
                </li>
                <li class="loading">
                  <span class="glyphicon glyphicon-repeat"></span>
                </li>
                <li class="loading">
                  <span class="glyphicon glyphicon-repeat"></span>
                </li>
                <li class="loading">
                  <span class="glyphicon glyphicon-repeat"></span>
                </li>
                <li class="loading">
                  <span class="glyphicon glyphicon-repeat"></span>
                </li>
              </ul>
              <div class="store-navigation-pager">
                <a class="prev js-pickup-store-pager-prev" href="#">
                  <span class="glyphicon glyphicon-chevron-left"></span> Föregående
                </a>
                <a class="next js-pickup-store-pager-next" href="#">
                  Nästa
                  <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
                <div class="position">
                  <span class="js-pickup-store-pager-item-from"></span>-
                  <span class="js-pickup-store-pager-item-to"></span>
                  från&nbsp;
                  <span class="js-pickup-store-pager-item-all"></span>
                  &nbsp;butiker hittades
                </div>
              </div>
            </div>

            <div class="display-details">
              <div class="store-tabs js-pickup-tabs">
                <div class="tabhead" aria-label="storeDetails.title">
                  <span class="glyphicon glyphicon-info-sign"></span>
                </div>
                <div class="tabbody">
                  <div class="store-image">
                    <div class="js-store-image"></div>
                    <div class="distance js-store-formattedDistance"></div>
                  </div>
                  <div class="store-info">
                    <div class="name js-store-displayName"></div>
                    <div class="address">
                      <div class="js-store-line1"></div>
                      <div class="js-store-line2"></div>
                      <div class="js-store-town"></div>
                    </div>
                  </div>
                </div>

                <div class="tabhead js-pickup-map-tab" aria-label="storeDetails.map.link">
                  <span class="glyphicon glyphicon-map-marker"></span>
                </div>
                <div class="tabbody">
                  <div class="pickup-map js-map-canvas"></div>
                </div>

                <div class="tabhead" aria-label="storeDetails.table.opening">
                  <span class="glyphicon glyphicon-time"></span>
                </div>
                <div class="tabbody">
                  <div class="store-openings">
                    <div class="title">storeDetails.table.opening</div>
                    <dl class="dl-horizontal js-store-openings"></dl>
                  </div>
                </div>
              </div>

              <div class="pickup-product">
                <div class="variants js-pickup-product-variants"></div>
                <div class="thumb"></div>
                <div class="pickup-product-info">
                  <div class="name js-pickup-product-info"></div>
                  <div class="price">
                    <div class="js-pickup-product-price"></div>
                    <div class="stock js-store-stockPickup"></div>
                  </div>
                </div>
                <div class="action">
                  <form
                    id="command"
                    data-class="add_to_cart_storepickup_form"
                    data-id="add_to_cart_storepickup_form"
                    action="/se/store-pickup/cart/add"
                    method="post"
                  >
                    <input type="hidden" class="js-store-id" />
                    <input type="hidden" class="js-store-productcode" name="productCodePost" value />

                    <div class="qty-selector js-qty-selector">
                      <div class="input-group">
                        <span class="input-group-btn">
                          <button class="btn btn-primary js-qty-selector-minus" type="button">
                            <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                          </button>
                        </span>
                        <input
                          type="text"
                          class="form-control js-qty-selector-input"
                          value="1"
                          name="hiddenPickupQty"
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-primary js-qty-selector-plus" type="button">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <button
                      class="btn btn-primary js-add-to-cart-for-pickup-popup"
                      type="submit"
                    >text.addToCart</button>
                    <div>
                      <input
                        type="hidden"
                        name="CSRFToken"
                        value="5e1dd2fd-8aa5-4dd3-8f84-dc9d9ec2db14"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </cont>
</template>