////////////////////////////////////////////////////////////////////////////
//                                                                        //
//  This file is generated with pipeline/gen/gen-pipeline-helpers.js  //
//                                                                        //
//  Public API - Account functions                                        //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"companies.list": {
			"0": "/companies/"
		},
		"companies.retrieve": {
			"1": "/companies/:id"
		},
		"accountNotifications.list": {
			"0": "/account_notifications"
		},
		"accountNotifications.retrieve": {
			"1": "/account_notifications/:id"
		},
		"notes.list": {
			"0": "/notes"
		},
		"notes.retrieve": {
			"1": "/notes/:id"
		},
		"calendarEntries.list": {
			"0": "/calendar_entries"
		},
		"calendarEntries.retrieve": {
			"1": "calendar_entries/:id"
		},
		"comments.list": {
			"1": "/notes/:noteId/comments"
		},
		"comments.retrieve": {
			"2": "/notes/:noteId/comments/:id"
		},
		"deals.list": {
			"0": "/deals"
		},
		"deals.retrieve": {
			"1": "/deals/:id"
		},
		"files.list": {
			"0": "/documents"
		},
		"files.retrieve": {
			"1": "/documents/:id"
		},
		"people.list": {
			"0": "/people"
		},
		"people.retrieve": {
			"1": "/people/:id"
		},
		"profile.retrieve": {
			"0": "/profile"
		},
		"searches.list": {
			"0": "/searches"
		},
		"searches.retrieve": {
			"1": "/searches/:id"
		},
		"companyCustomFieldGroups.list": {
			"0": "/admin/company_custom_field_groups"
		},
		"companyCustomFieldGroups.retrieve": {
			"1": "/admin/company_custom_field_groups/:id"
		},
		"companyCustomFieldLabels.list": {
			"0": "/admin/company_custom_field_labels"
		},
		"companyCustomFieldLabels.retrieve": {
			"1": "/admin/company_custom_field_labels/:id"
		},
		"customFieldLabelDropdownEntries.list": {
			"0": "/admin/custom_field_label_dropdown_entries"
		},
		"customFieldLabelDropdownEntries.retrieve": {
			"1": "/admin/custom_field_label_dropdown_entries/:id"
		},
		"dealCustomFieldGroups.list": {
			"0": "/admin/deal_custom_field_groups"
		},
		"dealCustomFieldGroups.retrieve": {
			"1": "/admin/deal_custom_field_groups/:id"
		},
		"dealCustomFieldLabels.list": {
			"0": "/admin/deal_custom_field_labels"
		},
		"dealCustomFieldLabels.retrieve": {
			"1": "/admin/deal_custom_field_labels/:id"
		},
		"dealLossReasons.list": {
			"0": "/admin/deal_loss_reasons"
		},
		"dealLossReasons.retrieve": {
			"1": "/admin/deal_loss_reasons/:id"
		},
		"dealStages.list": {
			"0": "/admin/deal_stages"
		},
		"dealStages.retrieve": {
			"1": "/admin/deal_stages/:id"
		},
		"documentTags.list": {
			"0": "/admin/document_tags"
		},
		"documentTags.retrieve": {
			"1": "/admin/document_tags/:id"
		},
		"eventCategories.list": {
			"0": "/admin/event_categories"
		},
		"eventCategories.retrieve": {
			"1": "/admin/event_categories/:id"
		},
		"leadSources.list": {
			"0": "/admin/lead_sources"
		},
		"leadSources.retrieve": {
			"1": "/admin/lead_sources/:id"
		},
		"leadStatuses.list": {
			"0": "/admin/lead_statuses"
		},
		"leadStatuses.retrieve": {
			"1": "/admin/lead_statuses/:id"
		},
		"noteCategories.list": {
			"0": "/admin/note_categories"
		},
		"noteCategories.retrieve": {
			"1": "/admin/note_categories/:id"
		},
		"personCustomFieldGroups.list": {
			"0": "/admin/person_custom_field_groups"
		},
		"personCustomFieldGroups.retrieve": {
			"1": "/admin/person_custom_field_groups/:id"
		},
		"personCustomFieldLabels.list": {
			"0": "/admin/person_custom_field_labels"
		},
		"personCustomFieldLabels.retrieve": {
			"1": "/admin/person_custom_field_labels/:id"
		},
		"predefinedContactsTags.list": {
			"0": "/admin/predefined_contacts_tags"
		},
		"predefinedContactsTags.retrieve": {
			"1": "/admin/predefined_contacts_tags/:id"
		},
		"performanceLane.list": {
			"0": "/admin/product_lines"
		},
		"performanceLane.retrieve": {
			"1": "/admin/product_lines/:id"
		},
		"revenueTypes.list": {
			"0": "/admin/revenue_types"
		},
		"revenueTypes.retrieve": {
			"1": "/admin/revenue_types/:id"
		},
		"teams.list": {
			"0": "/admin/teams"
		},
		"teams.retrieve": {
			"1": "/admin/teams/:id"
		},
		"todoTemplates.list": {
			"0": "/admin/todo_templates"
		},
		"todoTemplates.retrieve": {
			"1": "/admin/todo_templates/:id"
		},
		"todoTemplateItems.list": {
			"0": "/admin/todo_template_items"
		},
		"todoTemplateItems.retrieve": {
			"1": "/admin/todo_template_items/:id"
		},
		"users.list": {
			"0": "/admin/users"
		},
		"users.retrieve": {
			"1": "/admin/users/:id"
		}
	},
	"post": {
		"companies.create": {
			"0": "/companies"
		},
		"companies.update": {
			"1": "/companies/:id"
		},
		"accountNotifications.create": {
			"0": "/account_notifications"
		},
		"notes.create": {
			"0": "/notes"
		},
		"calendarEntries.create": {
			"0": "calendar_entries"
		},
		"comments.create": {
			"1": "/notes/:noteId/comments"
		},
		"customers.create": {
			"0": "/customers"
		},
		"deals.create": {
			"0": "/deals"
		},
		"files.create": {
			"0": "/documents"
		},
		"people.create": {
			"0": "/people"
		},
		"searches.create": {
			"0": "/searches"
		},
		"companyCustomFieldGroups.create": {
			"0": "/admin/company_custom_field_groups"
		},
		"companyCustomFieldLabels.create": {
			"0": "/admin/company_custom_field_labels"
		},
		"customFieldLabelDropdownEntries.create": {
			"0": "/admin/custom_field_label_dropdown_entries"
		},
		"dealCustomFieldGroups.create": {
			"0": "/admin/deal_custom_field_groups"
		},
		"dealCustomFieldLabels.create": {
			"0": "/admin/deal_custom_field_labels"
		},
		"dealLossReasons.create": {
			"0": "/admin/deal_loss_reasons"
		},
		"dealStages.create": {
			"0": "/admin/deal_stages"
		},
		"documentTags.create": {
			"0": "/admin/document_tags"
		},
		"eventCategories.create": {
			"0": "/admin/event_categories"
		},
		"leadSources.create": {
			"0": "/admin/lead_sources"
		},
		"leadStatuses.create": {
			"0": "/admin/lead_statuses"
		},
		"noteCategories.create": {
			"0": "/admin/note_categories"
		},
		"personCustomFieldGroups.create": {
			"0": "/admin/person_custom_field_groups"
		},
		"personCustomFieldLabels.create": {
			"0": "/admin/person_custom_field_labels"
		},
		"predefinedContactsTags.create": {
			"0": "/admin/predefined_contacts_tags"
		},
		"performanceLane.create": {
			"0": "/admin/product_lines"
		},
		"revenueTypes.create": {
			"0": "/admin/revenue_types"
		},
		"teams.create": {
			"0": "/admin/teams"
		},
		"todoTemplates.create": {
			"0": "/admin/todo_templates"
		},
		"todoTemplateItems.create": {
			"0": "/admin/todo_template_items"
		},
		"users.create": {
			"0": "/admin/users"
		}
	},
	"delete": {
		"companies.delete": {
			"1": "/companies/:id"
		},
		"accountNotifications.delete": {
			"1": "/account_notifications/:id"
		},
		"notes.delete": {
			"1": "/notes/:id"
		},
		"calendarEntries.delete": {
			"1": "calendar_entries/:id"
		},
		"comments.delete": {
			"2": "/notes/:noteId/comments/:id"
		},
		"customers.delete": {
			"1": "/customers/:id"
		},
		"deals.delete": {
			"1": "/deals/:id"
		},
		"files.delete": {
			"1": "/documents/:id"
		},
		"people.delete": {
			"1": "/people/:id"
		},
		"searches.delete": {
			"1": "/searches/:id"
		},
		"companyCustomFieldGroups.delete": {
			"1": "/admin/company_custom_field_groups/:id"
		},
		"companyCustomFieldLabels.delete": {
			"1": "/admin/company_custom_field_labels/:id"
		},
		"customFieldLabelDropdownEntries.delete": {
			"1": "/admin/custom_field_label_dropdown_entries/:id"
		},
		"dealCustomFieldGroups.delete": {
			"1": "/admin/deal_custom_field_groups/:id"
		},
		"dealCustomFieldLabels.delete": {
			"1": "/admin/deal_custom_field_labels/:id"
		},
		"dealLossReasons.delete": {
			"1": "/admin/deal_loss_reasons/:id"
		},
		"dealStages.delete": {
			"1": "/admin/deal_stages/:id"
		},
		"documentTags.delete": {
			"1": "/admin/document_tags/:id"
		},
		"eventCategories.delete": {
			"1": "/admin/event_categories/:id"
		},
		"leadSources.delete": {
			"1": "/admin/lead_sources/:id"
		},
		"leadStatuses.delete": {
			"1": "/admin/lead_statuses/:id"
		},
		"noteCategories.delete": {
			"1": "/admin/note_categories/:id"
		},
		"personCustomFieldGroups.delete": {
			"1": "/admin/person_custom_field_groups/:id"
		},
		"personCustomFieldLabels.delete": {
			"1": "/admin/person_custom_field_labels/:id"
		},
		"predefinedContactsTags.delete": {
			"1": "/admin/predefined_contacts_tags/:id"
		},
		"performanceLane.delete": {
			"1": "/admin/product_lines/:id"
		},
		"revenueTypes.delete": {
			"1": "/admin/revenue_types/:id"
		},
		"teams.delete": {
			"1": "/admin/teams/:id"
		},
		"todoTemplates.delete": {
			"1": "/admin/todo_templates/:id"
		},
		"todoTemplateItems.delete": {
			"1": "/admin/todo_template_items/:id"
		},
		"users.delete": {
			"1": "/admin/users/:id"
		}
	},
	"put": {
		"accountNotifications.update": {
			"1": "/account_notifications/:id"
		},
		"notes.update": {
			"1": "/notes/:id"
		},
		"calendarEntries.update": {
			"1": "calendar_entries/:id"
		},
		"comments.update": {
			"2": "/notes/:noteId/comments/:id"
		},
		"customers.update": {
			"1": "/customers/:id"
		},
		"deals.update": {
			"1": "/deals/:id"
		},
		"files.update": {
			"1": "/documents/:id"
		},
		"people.update": {
			"1": "/people/:id"
		},
		"searches.update": {
			"1": "/searches/:id"
		},
		"companyCustomFieldGroups.update": {
			"1": "/admin/company_custom_field_groups/:id"
		},
		"companyCustomFieldLabels.update": {
			"1": "/admin/company_custom_field_labels/:id"
		},
		"customFieldLabelDropdownEntries.update": {
			"1": "/admin/custom_field_label_dropdown_entries/:id"
		},
		"dealCustomFieldGroups.update": {
			"1": "/admin/deal_custom_field_groups/:id"
		},
		"dealCustomFieldLabels.update": {
			"1": "/admin/deal_custom_field_labels/:id"
		},
		"dealLossReasons.update": {
			"1": "/admin/deal_loss_reasons/:id"
		},
		"dealStages.update": {
			"1": "/admin/deal_stages/:id"
		},
		"documentTags.update": {
			"1": "/admin/document_tags/:id"
		},
		"eventCategories.update": {
			"1": "/admin/event_categories/:id"
		},
		"leadSources.update": {
			"1": "/admin/lead_sources/:id"
		},
		"leadStatuses.update": {
			"1": "/admin/lead_statuses/:id"
		},
		"noteCategories.update": {
			"1": "/admin/note_categories/:id"
		},
		"personCustomFieldGroups.update": {
			"1": "/admin/person_custom_field_groups/:id"
		},
		"personCustomFieldLabels.update": {
			"1": "/admin/person_custom_field_labels/:id"
		},
		"predefinedContactsTags.update": {
			"1": "/admin/predefined_contacts_tags/:id"
		},
		"performanceLane.update": {
			"1": "/admin/product_lines/:id"
		},
		"revenueTypes.update": {
			"1": "/admin/revenue_types/:id"
		},
		"teams.update": {
			"1": "/admin/teams/:id"
		},
		"todoTemplates.update": {
			"1": "/admin/todo_templates/:id"
		},
		"todoTemplateItems.update": {
			"1": "/admin/todo_template_items/:id"
		},
		"users.update": {
			"1": "/admin/users/:id"
		}
	}
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

endpoint.companies = {};
endpoint.companies.list = {};
endpoint.companies.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companies.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companies.retrieve = {};
endpoint.companies.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companies.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.accountNotifications = {};
endpoint.accountNotifications.list = {};
endpoint.accountNotifications.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['accountNotifications.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.accountNotifications.retrieve = {};
endpoint.accountNotifications.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['accountNotifications.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.notes = {};
endpoint.notes.list = {};
endpoint.notes.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['notes.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.notes.retrieve = {};
endpoint.notes.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['notes.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.calendarEntries = {};
endpoint.calendarEntries.list = {};
endpoint.calendarEntries.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['calendarEntries.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.calendarEntries.retrieve = {};
endpoint.calendarEntries.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['calendarEntries.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.comments = {};
endpoint.comments.list = {};
endpoint.comments.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['comments.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.comments.retrieve = {};
endpoint.comments.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['comments.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.deals = {};
endpoint.deals.list = {};
endpoint.deals.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['deals.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.deals.retrieve = {};
endpoint.deals.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['deals.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.files = {};
endpoint.files.list = {};
endpoint.files.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['files.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.files.retrieve = {};
endpoint.files.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['files.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.people = {};
endpoint.people.list = {};
endpoint.people.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['people.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.people.retrieve = {};
endpoint.people.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['people.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.profile = {};
endpoint.profile.retrieve = {};
endpoint.profile.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['profile.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.searches = {};
endpoint.searches.list = {};
endpoint.searches.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['searches.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.searches.retrieve = {};
endpoint.searches.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['searches.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyCustomFieldGroups = {};
endpoint.companyCustomFieldGroups.list = {};
endpoint.companyCustomFieldGroups.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyCustomFieldGroups.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyCustomFieldGroups.retrieve = {};
endpoint.companyCustomFieldGroups.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyCustomFieldGroups.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyCustomFieldLabels = {};
endpoint.companyCustomFieldLabels.list = {};
endpoint.companyCustomFieldLabels.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyCustomFieldLabels.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companyCustomFieldLabels.retrieve = {};
endpoint.companyCustomFieldLabels.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['companyCustomFieldLabels.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.customFieldLabelDropdownEntries = {};
endpoint.customFieldLabelDropdownEntries.list = {};
endpoint.customFieldLabelDropdownEntries.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['customFieldLabelDropdownEntries.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.customFieldLabelDropdownEntries.retrieve = {};
endpoint.customFieldLabelDropdownEntries.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['customFieldLabelDropdownEntries.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealCustomFieldGroups = {};
endpoint.dealCustomFieldGroups.list = {};
endpoint.dealCustomFieldGroups.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealCustomFieldGroups.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealCustomFieldGroups.retrieve = {};
endpoint.dealCustomFieldGroups.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealCustomFieldGroups.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealCustomFieldLabels = {};
endpoint.dealCustomFieldLabels.list = {};
endpoint.dealCustomFieldLabels.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealCustomFieldLabels.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealCustomFieldLabels.retrieve = {};
endpoint.dealCustomFieldLabels.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealCustomFieldLabels.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealLossReasons = {};
endpoint.dealLossReasons.list = {};
endpoint.dealLossReasons.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealLossReasons.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealLossReasons.retrieve = {};
endpoint.dealLossReasons.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealLossReasons.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealStages = {};
endpoint.dealStages.list = {};
endpoint.dealStages.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealStages.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.dealStages.retrieve = {};
endpoint.dealStages.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['dealStages.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.documentTags = {};
endpoint.documentTags.list = {};
endpoint.documentTags.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['documentTags.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.documentTags.retrieve = {};
endpoint.documentTags.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['documentTags.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.eventCategories = {};
endpoint.eventCategories.list = {};
endpoint.eventCategories.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['eventCategories.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.eventCategories.retrieve = {};
endpoint.eventCategories.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['eventCategories.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.leadSources = {};
endpoint.leadSources.list = {};
endpoint.leadSources.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['leadSources.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.leadSources.retrieve = {};
endpoint.leadSources.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['leadSources.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.leadStatuses = {};
endpoint.leadStatuses.list = {};
endpoint.leadStatuses.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['leadStatuses.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.leadStatuses.retrieve = {};
endpoint.leadStatuses.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['leadStatuses.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.noteCategories = {};
endpoint.noteCategories.list = {};
endpoint.noteCategories.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['noteCategories.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.noteCategories.retrieve = {};
endpoint.noteCategories.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['noteCategories.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.personCustomFieldGroups = {};
endpoint.personCustomFieldGroups.list = {};
endpoint.personCustomFieldGroups.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['personCustomFieldGroups.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.personCustomFieldGroups.retrieve = {};
endpoint.personCustomFieldGroups.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['personCustomFieldGroups.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.personCustomFieldLabels = {};
endpoint.personCustomFieldLabels.list = {};
endpoint.personCustomFieldLabels.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['personCustomFieldLabels.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.personCustomFieldLabels.retrieve = {};
endpoint.personCustomFieldLabels.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['personCustomFieldLabels.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.predefinedContactsTags = {};
endpoint.predefinedContactsTags.list = {};
endpoint.predefinedContactsTags.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['predefinedContactsTags.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.predefinedContactsTags.retrieve = {};
endpoint.predefinedContactsTags.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['predefinedContactsTags.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.performanceLane = {};
endpoint.performanceLane.list = {};
endpoint.performanceLane.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['performanceLane.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.performanceLane.retrieve = {};
endpoint.performanceLane.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['performanceLane.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.revenueTypes = {};
endpoint.revenueTypes.list = {};
endpoint.revenueTypes.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['revenueTypes.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.revenueTypes.retrieve = {};
endpoint.revenueTypes.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['revenueTypes.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.teams = {};
endpoint.teams.list = {};
endpoint.teams.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['teams.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.teams.retrieve = {};
endpoint.teams.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['teams.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.todoTemplates = {};
endpoint.todoTemplates.list = {};
endpoint.todoTemplates.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['todoTemplates.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.todoTemplates.retrieve = {};
endpoint.todoTemplates.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['todoTemplates.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.todoTemplateItems = {};
endpoint.todoTemplateItems.list = {};
endpoint.todoTemplateItems.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['todoTemplateItems.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.todoTemplateItems.retrieve = {};
endpoint.todoTemplateItems.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['todoTemplateItems.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.users = {};
endpoint.users.list = {};
endpoint.users.list = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['users.list'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.users.retrieve = {};
endpoint.users.retrieve = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var url = parse(urlsData['get']['users.retrieve'][size], Array.prototype.slice.call(arguments, 0, size));
	sys.logs.debug('[Pipeline] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.companies.create = {};
endpoint.companies.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for companies.create.post');
	}
	var url = parse(urlsData['post']['companies.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.companies.update = {};
endpoint.companies.update = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for companies.update.post');
	}
	var url = parse(urlsData['post']['companies.update'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.accountNotifications.create = {};
endpoint.accountNotifications.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for accountNotifications.create.post');
	}
	var url = parse(urlsData['post']['accountNotifications.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.notes.create = {};
endpoint.notes.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for notes.create.post');
	}
	var url = parse(urlsData['post']['notes.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.calendarEntries.create = {};
endpoint.calendarEntries.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for calendarEntries.create.post');
	}
	var url = parse(urlsData['post']['calendarEntries.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.comments.create = {};
endpoint.comments.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for comments.create.post');
	}
	var url = parse(urlsData['post']['comments.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.customers = {};
endpoint.customers.create = {};
endpoint.customers.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for customers.create.post');
	}
	var url = parse(urlsData['post']['customers.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.deals.create = {};
endpoint.deals.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deals.create.post');
	}
	var url = parse(urlsData['post']['deals.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.files.create = {};
endpoint.files.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for files.create.post');
	}
	var url = parse(urlsData['post']['files.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.people.create = {};
endpoint.people.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for people.create.post');
	}
	var url = parse(urlsData['post']['people.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.searches.create = {};
endpoint.searches.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for searches.create.post');
	}
	var url = parse(urlsData['post']['searches.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.companyCustomFieldGroups.create = {};
endpoint.companyCustomFieldGroups.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for companyCustomFieldGroups.create.post');
	}
	var url = parse(urlsData['post']['companyCustomFieldGroups.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.companyCustomFieldLabels.create = {};
endpoint.companyCustomFieldLabels.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for companyCustomFieldLabels.create.post');
	}
	var url = parse(urlsData['post']['companyCustomFieldLabels.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.customFieldLabelDropdownEntries.create = {};
endpoint.customFieldLabelDropdownEntries.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for customFieldLabelDropdownEntries.create.post');
	}
	var url = parse(urlsData['post']['customFieldLabelDropdownEntries.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.dealCustomFieldGroups.create = {};
endpoint.dealCustomFieldGroups.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for dealCustomFieldGroups.create.post');
	}
	var url = parse(urlsData['post']['dealCustomFieldGroups.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.dealCustomFieldLabels.create = {};
endpoint.dealCustomFieldLabels.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for dealCustomFieldLabels.create.post');
	}
	var url = parse(urlsData['post']['dealCustomFieldLabels.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.dealLossReasons.create = {};
endpoint.dealLossReasons.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for dealLossReasons.create.post');
	}
	var url = parse(urlsData['post']['dealLossReasons.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.dealStages.create = {};
endpoint.dealStages.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for dealStages.create.post');
	}
	var url = parse(urlsData['post']['dealStages.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.documentTags.create = {};
endpoint.documentTags.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for documentTags.create.post');
	}
	var url = parse(urlsData['post']['documentTags.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.eventCategories.create = {};
endpoint.eventCategories.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for eventCategories.create.post');
	}
	var url = parse(urlsData['post']['eventCategories.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.leadSources.create = {};
endpoint.leadSources.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for leadSources.create.post');
	}
	var url = parse(urlsData['post']['leadSources.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.leadStatuses.create = {};
endpoint.leadStatuses.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for leadStatuses.create.post');
	}
	var url = parse(urlsData['post']['leadStatuses.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.noteCategories.create = {};
endpoint.noteCategories.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for noteCategories.create.post');
	}
	var url = parse(urlsData['post']['noteCategories.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.personCustomFieldGroups.create = {};
endpoint.personCustomFieldGroups.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for personCustomFieldGroups.create.post');
	}
	var url = parse(urlsData['post']['personCustomFieldGroups.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.personCustomFieldLabels.create = {};
endpoint.personCustomFieldLabels.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for personCustomFieldLabels.create.post');
	}
	var url = parse(urlsData['post']['personCustomFieldLabels.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.predefinedContactsTags.create = {};
endpoint.predefinedContactsTags.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for predefinedContactsTags.create.post');
	}
	var url = parse(urlsData['post']['predefinedContactsTags.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.performanceLane.create = {};
endpoint.performanceLane.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for performanceLane.create.post');
	}
	var url = parse(urlsData['post']['performanceLane.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.revenueTypes.create = {};
endpoint.revenueTypes.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for revenueTypes.create.post');
	}
	var url = parse(urlsData['post']['revenueTypes.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.teams.create = {};
endpoint.teams.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for teams.create.post');
	}
	var url = parse(urlsData['post']['teams.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.todoTemplates.create = {};
endpoint.todoTemplates.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for todoTemplates.create.post');
	}
	var url = parse(urlsData['post']['todoTemplates.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.todoTemplateItems.create = {};
endpoint.todoTemplateItems.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for todoTemplateItems.create.post');
	}
	var url = parse(urlsData['post']['todoTemplateItems.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.users.create = {};
endpoint.users.create = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for users.create.post');
	}
	var url = parse(urlsData['post']['users.create'][size - 1], Array.prototype.slice.call(arguments, 0, size-1));
	sys.logs.debug('[Pipeline] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - 1]);
};

endpoint.companies.delete = {};
endpoint.accountNotifications.delete = {};
endpoint.notes.delete = {};
endpoint.calendarEntries.delete = {};
endpoint.comments.delete = {};
endpoint.customers.delete = {};
endpoint.deals.delete = {};
endpoint.files.delete = {};
endpoint.people.delete = {};
endpoint.searches.delete = {};
endpoint.companyCustomFieldGroups.delete = {};
endpoint.companyCustomFieldLabels.delete = {};
endpoint.customFieldLabelDropdownEntries.delete = {};
endpoint.dealCustomFieldGroups.delete = {};
endpoint.dealCustomFieldLabels.delete = {};
endpoint.dealLossReasons.delete = {};
endpoint.dealStages.delete = {};
endpoint.documentTags.delete = {};
endpoint.eventCategories.delete = {};
endpoint.leadSources.delete = {};
endpoint.leadStatuses.delete = {};
endpoint.noteCategories.delete = {};
endpoint.personCustomFieldGroups.delete = {};
endpoint.personCustomFieldLabels.delete = {};
endpoint.predefinedContactsTags.delete = {};
endpoint.performanceLane.delete = {};
endpoint.revenueTypes.delete = {};
endpoint.teams.delete = {};
endpoint.todoTemplates.delete = {};
endpoint.todoTemplateItems.delete = {};
endpoint.users.delete = {};
endpoint.accountNotifications.update = {};
endpoint.notes.update = {};
endpoint.calendarEntries.update = {};
endpoint.comments.update = {};
endpoint.customers.update = {};
endpoint.deals.update = {};
endpoint.files.update = {};
endpoint.people.update = {};
endpoint.searches.update = {};
endpoint.companyCustomFieldGroups.update = {};
endpoint.companyCustomFieldLabels.update = {};
endpoint.customFieldLabelDropdownEntries.update = {};
endpoint.dealCustomFieldGroups.update = {};
endpoint.dealCustomFieldLabels.update = {};
endpoint.dealLossReasons.update = {};
endpoint.dealStages.update = {};
endpoint.documentTags.update = {};
endpoint.eventCategories.update = {};
endpoint.leadSources.update = {};
endpoint.leadStatuses.update = {};
endpoint.noteCategories.update = {};
endpoint.personCustomFieldGroups.update = {};
endpoint.personCustomFieldLabels.update = {};
endpoint.predefinedContactsTags.update = {};
endpoint.performanceLane.update = {};
endpoint.revenueTypes.update = {};
endpoint.teams.update = {};
endpoint.todoTemplates.update = {};
endpoint.todoTemplateItems.update = {};
endpoint.users.update = {};

///////////////////////////////////
// Public API - Generic Functions
//////////////////////////////////

endpoint.get = function(url, options) {
    var options = checkHttpOptions(url, options);
    return endpoint._get(options);
};

endpoint.post = function(url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._post(options);
};

/////////////////////////////
//  Private helpers
/////////////////////////////

var checkHttpOptions = function (url, options) {
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (options && (!!options.path || !!options.params || !!options.body)) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options || {};
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);
