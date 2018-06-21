import template from './book-item.html';
import controller from './book-item.controller';
import './book-item.scss';

let bookItemComponent = {
  bindings: {
    book: '<',
    onBookAdd: '&'
  },
  template,
  controller
};

export default bookItemComponent;
