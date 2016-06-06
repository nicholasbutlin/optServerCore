import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './routes.js';

Bert.defaults = {
  hideDelay: 2500,
  style: 'growl-top-right',
  type: 'default',
};
