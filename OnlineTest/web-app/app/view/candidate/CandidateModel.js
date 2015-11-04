/**
 * Created by tony on 2015/10/29.
 */
Ext.define('OnlineTestClient.view.candidate.CandidateModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.candidate',

    requires: [
        'OnlineTestClient.model.EducationExperience',
        'OnlineTestClient.model.WorkExperience'
    ],

    stores: {

        workExperience: {
            model: 'OnlineTestClient.model.WorkExperience',
            autoLoad: false
        },

        educationExperience :{
            model: 'OnlineTestClient.model.EducationExperience',
            autoLoad: false
        },

        degrees: {
            fields: ['value', 'title'],
            data: [
                {"value": "doctor", "title": onlinetest.personal.Doctor},
                {"value": "master", "title": onlinetest.personal.Master},
                {"value": "undergraduate", "title": onlinetest.personal.UnderGraduate},
                {"value": "college", "title": onlinetest.personal.College},
                {"value": "other", "title": onlinetest.personal.Other}
            ]
        },

        workingYears: {
            fields: ['value', 'title'],
            data: [
                {"value": "0", "title": onlinetest.personal.ZeroYear},
                {"value": "1", "title": onlinetest.personal.OneYear},
                {"value": "2", "title": onlinetest.personal.TwoYear},
                {"value": "3", "title": onlinetest.personal.ThreeYear},
                {"value": "4", "title": onlinetest.personal.FourYear},
                {"value": "5", "title": onlinetest.personal.FiveYear},
                {"value": "6", "title": onlinetest.personal.SixYear},
                {"value": "7", "title": onlinetest.personal.SevenYear},
                {"value": "8", "title": onlinetest.personal.EightYear},
                {"value": "9", "title": onlinetest.personal.NineYear},
                {"value": "10", "title": onlinetest.personal.TenYear},
                {"value": "11", "title": onlinetest.personal.MoreThanTenYear}
            ]
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});