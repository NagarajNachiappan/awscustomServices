// @ts-check

'use strict';

const config = require('./config');
const Handler = require('./lib/handler');

var startTime = Date();
const service = Handler.create(config);
service.cloneS3Bucket()
  .then(() => {   var endTime = Date();
                            console.log("Start Time " + startTime  + " \n End Time : " + endTime )
                            var totalTime  = endTime.getTime() - startTime.getTime();
                            console.log("\n Total Time  : " + totalTime)
  }).catch(error => error);
