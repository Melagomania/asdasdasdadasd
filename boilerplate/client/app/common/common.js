import angular from 'angular';
import Navbar from './navbar/navbar';
import BookItem from './book-item/book-item';
import TextInput from './text-input/text-input';

let commonModule = angular.module('app.common', [
  Navbar,
  BookItem,
  TextInput
])
.name;

export default commonModule;
