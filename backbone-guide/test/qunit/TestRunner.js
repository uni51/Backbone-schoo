require.config({
  baseUrl: '../../assets/js',
  paths: {
    'jquery'                : 'vendor/jquery-1.8.3',
    'jquery.mobile'         : 'vendor/jquery.mobile-1.3.0',
    'underscore'            : 'vendor/underscore-1.4.4',
    'backbone'              : 'vendor/backbone-1.0.0',
    'backbone.localStorage' : 'vendor/backbone.localStorage-1.1.0',
    'md5'                   : 'vendor/md5',
    'test'                  : '../../test/qunit/test/'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    'jst/pc': {
      exports: 'JST'
    },
    'jst/mobile': {
      exports: 'JST'
    }
  }
});

require(['jquery'], function ($) {

  'use strict';

  var tests = [
    'test/models/ContactTest',
    'test/collections/ContactListTest',
    'test/views/pc/ItemViewTest',
    'test/views/pc/ListViewTest',
    'test/views/pc/EditViewTest',
    'test/views/pc/NewViewTest'
  ];

  $(function () {
    require(tests, function () {
      QUnit.start();
    });
  });
});
