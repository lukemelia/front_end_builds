import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  baseURL: window.RAILS_ENV.baseURL
});

Router.map(function() {
  this.resource('app', {path: '/:app_id'});
});

export default Router;
