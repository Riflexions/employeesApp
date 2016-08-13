import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var departments;
        return this.get('store').findAll('department',{reload:true}).then(function(d){
            departments=d;
            return Ember.RSVP.all(departments.map(function(d){
                return Ember.RSVP.all(d.get('employees').getEach('firstname'));
            }));
        }).then(function(){
            return departments;
        });
    }
});


/*
var departments = [
    {
        "_id": "57aef0a2a634b706474e53ec",
        "name": "Technical",
        "employees": [
            "57aeeec4b01de17517fb77a0",
            "57aeeec43de20f503ea45ec5"
        ]
  },
    {
        "_id": "57aef0a2966db8002f4e028e",
        "name": "Management",
        "employees": [
            "57aeeec412bbbc1ae733a443",
            "57aeeec4cc0dad333bd634df",
            "57aeeec423e6e3bc577b5fbe"
        ]
  },
    {
        "_id": "57aef0a2c2f49581c7d1b431",
        "name": "Accounts",
        "employees": [
            "57aeeec470b0e166857d7478",
            "57aeeec415967a8cda112aed"
        ]
  }
];
*/
