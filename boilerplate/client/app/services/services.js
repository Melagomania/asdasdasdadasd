import angular from 'angular';

import httpUtils from './http-utils.service';

export default angular
  .module('app.services', [])
  .service({
    httpUtils
  })
  .name;
