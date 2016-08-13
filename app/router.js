import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employee', function() {
    this.route('id',{path:'/:emp_id'});
  });
  this.route('department', function() {
    this.route('id');
  });
});

export default Router;
