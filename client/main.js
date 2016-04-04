import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0

  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function(){
    filepicker.setKey('<PUT YOUR FILEPICKER KEY HERE>')
});
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked


    console.log("here 1")
      filepicker.pickMultiple(
        {
          mimetype: '*/*',
          services: ['COMPUTER', 'FACEBOOK','INSTAGRAM', 'GOOGLE_DRIVE','DROPBOX','FLICKR','PICASA','URL','WEBCAM','CONVERT'],
          container: 'modal',
          conversions: ['crop', 'rotate', 'filter']
        },

        function(Blobs){
            console.log("here 1.1")
          console.log("Success:", Blobs);


        },
        function(error){
            console.log("here 1.2")
         console.log(error)
        });
      console.log("here 2")

  },
});
