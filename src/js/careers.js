import careerListing from "../data/careers.json";

$(function () {

  var data = {
    params: new URL(location.href).searchParams.get('role'),
    listings: [],
  }

  var app = new Vue({
    el: '#careerDetails',
    data: data,
    beforeCreate() {

    },
    mounted: function () {
      var keyparams = data.params;
      this.listings = careerListing;
      if (keyparams == null && window.location.href.indexOf("career-details.html") > -1) {
        window.location.href = "/careers.html"
      } else {
        this.listings = this.listings[keyparams]
      }
    }
  })
});