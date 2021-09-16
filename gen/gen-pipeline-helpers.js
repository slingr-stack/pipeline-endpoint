var fs = require('fs');

var FILE_NAME = "pipeline-fn-helpers.js";
var CODE = '';
var cache = {};
var COMPANY_URL_PREFIX = '/company/:companyId/';

// endpoint.test1 = function(str1) {
//     return endpoint._test1({param: str1})
// };

var apiURLs = {
    'Companies': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/companies'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/companies'
        },
        {
            'name': 'Update',
            'operation': 'POST',
            'url': '/companies/:id'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/companies/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/companies/:id'
        }
    ],
    'Account Notifications': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/account_notifications'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/account_notifications'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/account_notifications/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/account_notifications/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/account_notifications/:id'
        }
    ],
    'Notes': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/notes'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/notes'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/notes/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/notes/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/notes/:id'
        }
    ],
    'Calendar Entries': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/calendar_entries'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': 'calendar_entries'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': 'calendar_entries/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': 'calendar_entries/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': 'calendar_entries/:id'
        }
    ],
    'Comments': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/notes/:noteId/comments'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/notes/:noteId/comments'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/notes/:noteId/comments/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/notes/:noteId/comments/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/notes/:noteId/comments/:id'
        }
    ],
    'Customers': [
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/customers'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/customers/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/customers/:id'
        }
    ],
    'Deals': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/deals'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/deals'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/deals/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/deals/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/deals/:id'
        }
    ],
    'Files': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/documents'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/documents'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/documents/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/documents/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/documents/:id'
        }
    ],
    'People': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/people'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/people'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/people/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/people/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/people/:id'
        }
    ],
    'Profile': [
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/profile'
        }
    ],
    'Searches': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/searches'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/searches'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/searches/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/searches/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/searches/:id'
        }
    ],
    'Company custom field groups': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/company_custom_field_groups'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/company_custom_field_groups'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/company_custom_field_groups/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/company_custom_field_groups/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/company_custom_field_groups/:id'
        }
    ],
    'Company custom field labels': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/company_custom_field_labels'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/company_custom_field_labels'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/company_custom_field_labels/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/company_custom_field_labels/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/company_custom_field_labels/:id'
        }
    ],
    'Custom field label dropdown entries': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/custom_field_label_dropdown_entries'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/custom_field_label_dropdown_entries'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/custom_field_label_dropdown_entries/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/custom_field_label_dropdown_entries/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/custom_field_label_dropdown_entries/:id'
        }
    ],
    'Deal custom field groups': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/deal_custom_field_groups'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/deal_custom_field_groups'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/deal_custom_field_groups/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/deal_custom_field_groups/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/deal_custom_field_groups/:id'
        }
    ],
    'Deal custom field labels': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/deal_custom_field_labels'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/deal_custom_field_labels'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/deal_custom_field_labels/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/deal_custom_field_labels/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/deal_custom_field_labels/:id'
        }
    ],
    'Deal loss reasons': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/deal_loss_reasons'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/deal_loss_reasons'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/deal_loss_reasons/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/deal_loss_reasons/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/deal_loss_reasons/:id'
        }
    ],
    'Deal stages': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/deal_stages'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/deal_stages'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/deal_stages/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/deal_stages/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/deal_stages/:id'
        }
    ],
    'Document tags': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/document_tags'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/document_tags'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/document_tags/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/document_tags/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/document_tags/:id'
        }
    ],
    'Event categories': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/event_categories'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/event_categories'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/event_categories/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/event_categories/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/event_categories/:id'
        }
    ],
    'Lead sources': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/lead_sources'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/lead_sources'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/lead_sources/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/lead_sources/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/lead_sources/:id'
        }
    ],
    'Lead statuses': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/lead_statuses'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/lead_statuses'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/lead_statuses/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/lead_statuses/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/lead_statuses/:id'
        }
    ],
    'Note categories': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/note_categories'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/note_categories'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/note_categories/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/note_categories/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/note_categories/:id'
        }
    ],
    'Person custom field groups': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/person_custom_field_groups'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/person_custom_field_groups'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/person_custom_field_groups/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/person_custom_field_groups/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/person_custom_field_groups/:id'
        }
    ],
    'Person custom field labels': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/person_custom_field_labels'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/person_custom_field_labels'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/person_custom_field_labels/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/person_custom_field_labels/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/person_custom_field_labels/:id'
        }
    ],
    'Predefined contacts tags': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/predefined_contacts_tags'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/predefined_contacts_tags'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/predefined_contacts_tags/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/predefined_contacts_tags/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/predefined_contacts_tags/:id'
        }
    ],
    'Performance lane': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/product_lines'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/product_lines'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/product_lines/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/product_lines/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/product_lines/:id'
        }
    ],
    'Revenue types': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/revenue_types'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/revenue_types'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/revenue_types/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/revenue_types/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/revenue_types/:id'
        }
    ],
    'Teams': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/teams'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/teams'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/teams/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/teams/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/teams/:id'
        }
    ],
    'Todo templates': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/todo_templates'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/todo_templates'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/todo_templates/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/todo_templates/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/todo_templates/:id'
        }
    ],
    'Todo template items': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/todo_template_items'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/todo_template_items'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/todo_template_items/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/todo_template_items/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/todo_template_items/:id'
        }
    ],
    'Users': [
        {
            'name': 'List',
            'operation': 'GET',
            'url': '/admin/users'
        },
        {
            'name': 'Create',
            'operation': 'POST',
            'url': '/admin/users'
        },
        {
            'name': 'Retrieve',
            'operation': 'GET',
            'url': '/admin/users/:id'
        },
        {
            'name': 'Update',
            'operation': 'PUT',
            'url': '/admin/users/:id'
        },
        {
            'name': 'Delete',
            'operation': 'DELETE',
            'url': '/admin/users/:id'
        }
    ]
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;
            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid.';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};

var camelCase = function (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return "";
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

var setInitializers = function (fnName) {
    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {
        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }
        if (!cache[path]) {
            tmpCode += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + path + ' = {};\n';
            cache[path] = path;
        }
    }
    return tmpCode;
};

var urlsData = {};
var endpoint = {};
var ENDPOINT_NAMESPACE = 'endpoint';
var NAMESPACE_CONCAT_SYMBOL = '.';

var makeEndpointsHelpers = function () {
    for (var domain in apiURLs) {
        if (apiURLs.hasOwnProperty(domain)) {
            var domainAction = apiURLs[domain];
            for (var key in domainAction) {
                if (domainAction.hasOwnProperty(key)) {
                    var action = domainAction[key];
                    var domainActionURL = action.url;
                    var functionName = camelCase(domain) + NAMESPACE_CONCAT_SYMBOL + camelCase(action.name);
                    var method = action['operation'].toLowerCase();
                    if (domainActionURL.startsWith(COMPANY_URL_PREFIX)) {
                        domainActionURL = domainActionURL.replace(COMPANY_URL_PREFIX, '');// /company/:companyId/account/:entityId -> account/:entityId
                    }

                    var numVars = (domainActionURL.match(/:/g) || []).length;//counting parameters
                    urlsData[method] = urlsData[method] || {};
                    urlsData[method][functionName] = urlsData[method][functionName] || {};
                    urlsData[method][functionName][numVars] = domainActionURL;
                }
            }
        }
    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            CODE += setInitializers(fn);
            if (method == 'get') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Pipeline] ' +
                    method.toUpperCase() + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method + '(url);\n};\n\n';
            } else if (method == 'post') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';
                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));';
                CODE += ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + fn + ' = function() {\n\t' +
                    sizeStr + '\n\tvar url = ' + parseStr + '\n\tsys.logs.debug(\'[Pipeline] ' + method.toUpperCase()
                    + ' from: \' + url);\n\treturn ' + ENDPOINT_NAMESPACE + NAMESPACE_CONCAT_SYMBOL + method
                    + '(url, arguments[arguments.length - 1]);\n};\n\n';
            }
        }
    }

    var MESSAGE = '';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  This file is generated with pipeline/gen/gen-pipeline-helpers.js  //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '//  Public API - Account functions                                        //\n';
    MESSAGE += '//                                                                        //\n';
    MESSAGE += '////////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});