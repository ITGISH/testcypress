const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
const readXlsx = require('./plugins/read-xlsx');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{'readXlsx':readXlsx.read})
    },
    reporter:"mochawesome",
    reporterOptions:{
        charts:true,
        overwrite:true,
        html:true,
        json: true,
        reportDir:"./"
    }
  },
};
