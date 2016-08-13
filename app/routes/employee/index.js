import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').findAll('employee');
    }
});

/*
var employees = [
    {
        "_id": "57aeeec4b01de17517fb77a0",
        "firstname": "Williams",
        "lastname": "Miller",
        "fullname": "Williams Miller",
        "gender": "male",
        "dob": "1993-07-25T12:41:42 -06:-30",
        "department": "57aef0a2a634b706474e53ec"
  },
    {
        "_id": "57aeeec43de20f503ea45ec5",
        "firstname": "Esmeralda",
        "lastname": "Skinner",
        "fullname": "Esmeralda Skinner",
        "gender": "female",
        "dob": "2000-02-10T12:40:53 -06:-30",
        "department": "57aef0a2a634b706474e53ec"
  },
    {
        "_id": "57aeeec412bbbc1ae733a443",
        "firstname": "Lesas",
        "lastname": "Petersen",
        "fullname": "Lesas Petersen",
        "gender": "male",
        "dob": "2013-08-10T02:33:19 -06:-30",
        "department": "57aef0a2966db8002f4e028e"
  },
    {
        "_id": "57aeeec4cc0dad333bd634df",
        "firstname": "Misty",
        "lastname": "Ayers",
        "fullname": "Misty Ayers",
        "gender": "female",
        "dob": "1998-04-29T07:43:13 -06:-30",
        "department": "57aef0a2966db8002f4e028e"
  },
    {
        "_id": "57aeeec423e6e3bc577b5fbe",
        "firstname": "Sawyer",
        "lastname": "Soto",
        "fullname": "Sawyer Soto",
        "gender": "female",
        "dob": "1999-06-22T10:46:29 -06:-30",
        "department": "57aef0a2966db8002f4e028e"
  },
    {
        "_id": "57aeeec470b0e166857d7478",
        "firstname": "Snow",
        "lastname": "Massey",
        "fullname": "Snow Massey",
        "gender": "female",
        "dob": "2010-10-01T04:48:33 -06:-30",
        "department": "57aef0a2c2f49581c7d1b431"
  },
    {
        "_id": "57aeeec415967a8cda112aed",
        "firstname": "Lillie",
        "lastname": "Williamson",
        "fullname": "Lillie Williamson",
        "gender": "female",
        "dob": "1992-09-26T03:01:43 -06:-30",
        "department": "57aef0a2c2f49581c7d1b431"
  }
];
*/
