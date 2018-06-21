import template from './text-input.html';
import controller from './text-input.controller';
import './text-input.scss';

let textInputComponent = {
  bindings: {
    placeholder: '@',
    onInputSubmit: '&'
  },
  template,
  controller
};

export default textInputComponent;
