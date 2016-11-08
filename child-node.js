'use strict';

import Polymer from 'polymer';

Polymer({
    is: "child-node",
    properties: {
        parent: {
            type: Object
        }
    },
    ready: function () {
        this.addEventListener('parentSaysHello', this.greetParent);
    },
    greetParent: function () {
        //
    }
});