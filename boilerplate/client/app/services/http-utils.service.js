export default class HttpUtils {

  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  get(url) {
    return this.$http.get(url)
      .then(this._handleResponse.bind(this))
      .catch(this._handlerError.bind(this));
  }

  _handleResponse(res) {
    console.log('[Http Utils]', res);

    return res.data;
  }

  _handlerError(err) {
    console.log('[Http Utils]', err);

    return err;
  }

}
