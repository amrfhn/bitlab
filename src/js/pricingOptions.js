import { options } from "dropzone";

$(function () {

  var data = {
    projectBased: [
      {
        'title': 'Website',
        'bodyText': 'Integrate the latest technologies with an innovative platform that’s always.',
        'icon': 'web',
        'key': 'web'
      },
      {
        'title': 'App',
        'bodyText': 'Integrate the latest technologies with an innovative platform that’s always.',
        'icon': 'app',
        'key': 'app'
      },
      {
        'title': 'E-Commerce',
        'bodyText': 'Integrate the latest technologies with an innovative platform that’s always.',
        'icon': 'cart',
        'key': 'e-commerce'
      },
      {
        'title': 'Custom Development',
        'bodyText': 'Integrate the latest technologies with an innovative platform that’s always.',
        'icon': 'customize',
        'key': 'custom'
      }
    ],
    projectComplexity: {
      'Low': 'low',
      'Mid': 'mid',
      'High': 'high',
    },
    projectSize: {
      'Small': 'small',
      'Medium': 'medium',
      'Big': 'big',
    },
    projectSpeed: {
      '<2 Months': '1',
      '2-5 Months': '2',
      '>6 Months': '3',
    },
    inputProjectComplexity: 'low',
    inputProjectSize: 'small',
    inputProjectSpeed: '1',
    isActive: false,
    inputSelectedBased: 'custom',
  }

  var app2 = new Vue({
    el:'#startPricing',
  })

  var app = new Vue({
    el: '#pricingOptions',
    data: data,

    methods: {
      selectProjectBased: function (e) {
        this.isActive = false;
        this.inputSelectedBased = e;
        this.isActive = !this.isActive;

        this.inputProjectComplexity = 'low';
        this.inputProjectSize = 'small';
        this.inputProjectSpeed = '1';

        console.log(this.inputSelectedBased)
      }
    },

    mounted: function () {
    },

    computed: function () {

    }
  })
});