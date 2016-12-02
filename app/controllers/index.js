import Ember from 'ember';

export default Ember.Controller.extend({

    headerMessage: 'Coming Soon',
    emailAddress: '',
    
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    
    actions: {
        saveEmail() {
            const email = this.get('emailAddress');

            const subscription = this.store.createRecord('subscription', { email: email });

            subscription.save().then((response) => {
                this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} ID: ${response.get('id')}`);
                this.set('emailAddress', '');
            }); 
        }
    }
});
