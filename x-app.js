'use strict';

import Polymer from 'polymer';
import HelloPolymer from 'hello-polymer';

var myElement = Polymer({
  is: 'x-app',
  extends: 'input',
  removeElement: function() {
    this.$.el.remove();
  },
  listeners: {
    'htmlid.tap': 'toggle',
    'click': 'removeElement'
  },
  toggle: function() {
    this.pressed = !this.pressed;
  },
  properties: {
    foo: {
      type: String,
    },
    pressed: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    }
  }
});