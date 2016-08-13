import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save: function () {
            var name=this.get('name');
            this.get('onCreate')(name);
        }
    }
});
