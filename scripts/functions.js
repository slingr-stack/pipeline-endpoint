/////////////////////
// Public API
/////////////////////

endpoint.listCompanies = function(params) {
    return endpoint._get({path: '/companies/'})
};

endpoint.listAccountNotifications = function(params) {
    return endpoint._get({path: '/account_notifications/'})
};

endpoint.listCalendarEntries = function(params) {
    return endpoint._get({path: '/calendar_entries/'})
};

endpoint.listDeals = function(params) {
    return endpoint._get({path: '/deals/'})
};

endpoint.listNotes = function(params) {
    return endpoint._get({path: '/notes/'})
};

endpoint.listComments = function(params) {
    return endpoint._get({path: '/notes/{note_id}/comments'})
};

endpoint.listDocuments = function(params) {
    return endpoint._get({path: '/documents'})
};

endpoint.listPeople = function(params) {
    return endpoint._get({path: '/people'})
};

endpoint.listProfile = function(params) {
    return endpoint._get({path: '/profile'})
};

endpoint.listSearch = function(params) {
    return endpoint._get({path: '/searches'})
};
///////////////////////////////////
// Public API - Generic Functions
//////////////////////////////////

endpoint.get = function(url, options) {
    var options = checkHttpOptions(url, options);
    return endpoint.get(options);
};

endpoint.post = function(url, options) {
    options = checkHttpOptions(url, options);
    return endpoint.post(options);
};
