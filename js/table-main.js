"use strict";
!(function (i) {
  var n, e, o;
    i("#coronaTopCountries").length &&
    ((e = i("#coronaTopCountries").data("countries")),
      (o = e = e.split(",").reverse().join()),
      i.ajax({
        url: "https://corona.lmao.ninja/v2/countries/".concat(o),
        cache: !1,
        crossDomain: !0,
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        beforeSend: function (t) {
          t.withCredentials = !0;
        },
        success: function (t) {
          i(t).each(function (t, a) {
            var n = '\n          <div class="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mb-30">\n          <div class="single-country d-xl-flex justify-content-center">\n            <div class="flag-wrapper m-auto">\n              <div class="flag-icon w-100 h-100">\n                <img src="'
              .concat(a.countryInfo.flag, '" alt="')
              .concat(
                a.country,
                '">\n              </div>\n              <span class="country-name">'
              )
              .concat(
                a.country,
                '</span>\n            </div>\n\n            <ul class="country-info text-center list-unstyled mt-30 mt-xl-0">\n                <li class="cuScTotal bg-warning">\n                  Total Cases <br/>\n                  '
              )
              .concat(
                a.cases,
                '\n                </li>\n                <li class="cuScDeaths bg-denger">\n                Total Deaths <br/>\n                  '
              )
              .concat(
                a.deaths,
                '\n                </li>\n                <li class="cuScrecovered bg-success">\n                Recovered <br/>\n                  '
              )
              .concat(
                a.recovered,
                "\n                </li>\n            </ul>\n          </div>\n          </div>"
              );
            i(n).prependTo("#coronaTopCountries");
            var e = i(".country-info");
            i(e).each(function () {
              1199 < i(window).width() &&
                i(this).offset().left + i(this).width() > i(window).width() &&
                i(this).css({ left: "auto", right: "0", transform: "none" });
            });
          });
        },
      })),
    i("#coronaDataTable").length &&
    i.ajax({
      url: "https://corona.lmao.ninja/v2/countries/",
      cache: !1,
      crossDomain: !0,
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      beforeSend: function (t) {
        t.withCredentials = !0;
      },
      success: function (t) {
        var n;
        i(t).each(function (t, a) {
          n += '\n          <tr>\n            <td>\n              <div class="flag-img"><img src="'
            .concat(a.countryInfo.flag, '" alt="')
            .concat(
              a.country,
              '"></div>\n            </td>\n            <td>'
            )
            .concat(a.country, "</td>\n            <td>")
            .concat(a.cases, "</td>\n            <td>")
            .concat(a.deaths, "</td>\n            <td>")
            .concat(a.recovered, "</td>\n            <td>")
            .concat(a.critical, "</td>\n          </tr>");
        }),
          i("#coronaDataTable tbody").prepend(n),
          i("#coronaDataTable").DataTable({ responsive: !0 });
      },
    });
})(jQuery);
