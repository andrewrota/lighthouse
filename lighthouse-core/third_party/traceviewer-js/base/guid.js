"use strict";require("./base.js");'use strict';global.tr.exportTo('tr.b',function(){var nextGUID=1;var UUID4_PATTERN='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';var GUID={allocateSimple:function(){return nextGUID++;},getLastSimpleGuid:function(){return nextGUID-1;},allocateUUID4:function(){return UUID4_PATTERN.replace(/[xy]/g,function(c){var r=parseInt(Math.random()*16);if(c==='y')r=(r&3)+8;return r.toString(16);});}};return{GUID:GUID};});