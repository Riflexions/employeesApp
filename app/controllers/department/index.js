import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        create: function(name) {
            var record = this.get('store').createRecord('department', {name: name});
            record.save().then((data) => {alert("Department created: " + name)}).catch((data) => {alert("Department creation failed")});
        }
    }
});
