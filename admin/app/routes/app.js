import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('attrs.app', model);
  },

  actions: {
    deleteApp: function() {
      var _this = this;

      return this.get('controller.attrs.app').destroyRecord().then(function() {
        return _this.transitionTo('index');

      }, function(reason) {

        console.error("deleteApp didn't work");
        console.log(reason);
      });
    }
  }

});
