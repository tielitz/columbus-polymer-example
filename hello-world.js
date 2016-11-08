'use strict';

import Polymer from 'polymer';
import ChildNode from 'child-node';

Polymer({
  is: "hello-world",

  sayHello: function () {
    return 'Hello';
  },
  onSelect: function(e, detail) {
    //
  },
  created: function() {
    //
  },
  ready: function () {
    this.addEventListener('myCustomEvent', this.sayHello);
  },
  nameChangedValue: function(newValue, oldValue) {
    console.log('Variable name changed value');
  },
  properties: {
    name: {
      type: String,
      value: "Dummy",
      observer: 'nameChangedValue'
    },
    narrow: {
      type: Boolean,
      value: false
    },
    obj: {
      type: Object,
      value: function () { return {}; }
    }
  }
});