import angular from 'angular';
import bookItemComponent from './book-item.component';

let bookItemModule = angular.module('bookItem', [])
  .component('bookItem', bookItemComponent)
  .name;

export default bookItemModule;
