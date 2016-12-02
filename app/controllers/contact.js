import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    inputComment: '',

    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isCommentValid: Ember.computed.gte('inputComment.length', 5),    

    isValid: Ember.computed.and('isEmailValid', 'isCommentValid'),
    
    actions: {

        sendComment() {            
            this.set('responseMessage', `Thank you for your comment!`);
            this.set('emailAddress', '');
            this.set('inputComment', '');
        }
        
    }
});
