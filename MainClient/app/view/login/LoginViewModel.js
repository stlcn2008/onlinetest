/**
 * Created by tony on 2015/9/21.
 */
Ext.define('MainClient.view.login.LoginViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',

    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'Login',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
        username: '',
        email:'',
        password: '',
        confirmedpassword:'',
        organization:''

    }
});