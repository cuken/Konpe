import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    
    actions: {
        saveEmail() {
            //Logic for saving the email to db.
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');            
        }
    }

});
