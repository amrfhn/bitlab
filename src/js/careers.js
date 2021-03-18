import careerListing from "../data/careers.json";
Vue.config.devtools = true;

$(function () {

  var data = {
    message: 'Hello Vue!',
    params: new URL(location.href).searchParams.get('role'),
    listings: [],
  }

  var app = new Vue({
    el: '#careerDetails',
    data: data,
    beforeCreate() {
      var keyparams = data.params;
      this.listings = careerListing;
      this.listings = this.listings[keyparams]
      console.log(data.message)
    },
  })

})