import angular from 'angular';
import textInputComponent from './text-input.component';
import Services from './../../services/services';

let textInputModule = angular.module('textInput', [
  Services
])
  .component('textInput', textInputComponent)
  .name;

export default textInputModule;
