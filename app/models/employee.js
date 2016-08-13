import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    fullname: Ember.computed('firstname', 'lastname', () => `${this.get('firstname')} ${this.get('lastname')}`),
    gender: DS.attr('string'),
    dob: DS.attr('date'),
    department: DS.belongsTo('department', {inverse: 'employees', async:true, autosave:true})
});
