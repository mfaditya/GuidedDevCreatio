define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2b54280a-01aa-4db2-a49e-5a078ccf76ac",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "VisitRecordsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(VisitRecordsButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitButton",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyID"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_xu8l04i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_xu8l04i_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu",
					"clicked": {}
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RunAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_xu8l04i",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest",
						"params": {
							"showSuccessMessage": true
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "Button_xu8l04i",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RunMinPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMinPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceMinimumPrice",
						"params": {
							"showSuccessMessage": true
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "Button_xu8l04i",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "checkmark-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_np0if01",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_np0if01"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_lqsvoiy",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_lqsvoiy"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_39tx9w4",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_39tx9w4",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_gulsb1v",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_gulsb1v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_fvz8qg0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fvz8qg0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "RealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_di8hr2x",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_di8hr2x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_01yixkv",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_01yixkv",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_2kjpwdm",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_2kjpwdm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_mzhht1a",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_mzhht1a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_4qq8emp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_4qq8emp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_q3g17m0",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_q3g17m0",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_r1p9yog",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_r1p9yog",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_oje2xl3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_oje2xl3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9c5qtfn",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_oje2xl3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hn8b9e9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_9c5qtfn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_4y33d6x",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_4y33d6x_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_hn8b9e9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bzoxptv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bzoxptv_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_65526enDS"
						}
					}
				},
				"parentName": "FlexContainer_hn8b9e9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_q15atwx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_q15atwx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_hn8b9e9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_4ih95st",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_4ih95st_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_q15atwx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_4wo6osq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_4wo6osq_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_q15atwx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mufvrk4",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mufvrk4_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_mufvrk4_GridDetail_65526en",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_65526en"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_mufvrk4_SearchValue",
							"GridDetailSearchFilter_mufvrk4_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_hn8b9e9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_58pyrjh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_oje2xl3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_65526en",
					"activeRow": "$GridDetail_65526en_ActiveRow",
					"selectionState": "$GridDetail_65526en_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_65526en_SelectionState"
					},
					"primaryColumnName": "GridDetail_65526enDS_Id",
					"columns": [
						{
							"id": "01e7dc48-0028-f58e-8d91-7ecab110e588",
							"code": "GridDetail_65526enDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_65526enDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "02e1682a-014a-a19b-0c11-6c0a1b286b3c",
							"code": "GridDetail_65526enDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_65526enDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "75a5759e-8722-b400-b54c-0545ca50090d",
							"code": "GridDetail_65526enDS_UsrComments",
							"caption": "#ResourceString(GridDetail_65526enDS_UsrComments)#",
							"dataValueType": 28,
							"width": 160
						},
						{
							"id": "0435a78f-03b1-b82d-938c-bfdbabc4e6b2",
							"code": "GridDetail_65526enDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_65526enDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 185
						},
						{
							"id": "11b6d9a6-f3a9-c040-22bd-666db00ecb4d",
							"code": "GridDetail_65526enDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_65526enDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_58pyrjh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_65526en_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_65526enDS",
							"filters": "$GridDetail_65526en | crt.ToCollectionFilters : 'GridDetail_65526en' : $GridDetail_65526en_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_65526en_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_65526en_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_65526enDS",
							"filters": "$GridDetail_65526en | crt.ToCollectionFilters : 'GridDetail_65526en' : $GridDetail_65526en_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_65526en_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_65526en_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_65526en_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_65526en | crt.ToCollectionFilters : 'GridDetail_65526en' : $GridDetail_65526en_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_65526en_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_65526en_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_65526enDS",
							"filters": "$GridDetail_65526en | crt.ToCollectionFilters : 'GridDetail_65526en' : $GridDetail_65526en_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_65526en_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_np0if01": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_lqsvoiy": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_01yixkv": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrOfferType_di8hr2x": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrManager_2kjpwdm": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_q3g17m0": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrType_gulsb1v": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrCountry_mzhht1a": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_4qq8emp": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_39tx9w4": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_r1p9yog": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_r1p9yog"
						}
					},
					"GridDetail_65526en": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_65526enDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_mufvrk4_GridDetail_65526en",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_65526enDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.UsrVisitDateTime"
									}
								},
								"GridDetail_65526enDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_65526enDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.UsrComments"
									}
								},
								"GridDetail_65526enDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.CreatedOn"
									}
								},
								"GridDetail_65526enDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.UsrParentRealty"
									}
								},
								"GridDetail_65526enDS_Id": {
									"modelConfig": {
										"path": "GridDetail_65526enDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_65526enDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_r1p9yog": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_65526enDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_np0if01;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_lqsvoiy = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_np0if01' || 				             // if price changed
					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_r1p9yog' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPrice_np0if01;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_r1p9yog;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_39tx9w4 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},

			{		
				request: "usr.MinPriceToRequireRealtyComment",
		        /* The custom implementation of the base request handler. */
		        handler: async (request, next) => {
		            /* Check the request status. */
		            if (request.attributeName === 'PDS_UsrPrice_np0if01') {
						/* Create an instance of the system setting service from "@creatio-devkit/common." */
			            var sysSettingsService = new sdk.SysSettingsService();
						
			            /* Retrieve the value of the "MinPriceToRequireRealtyComment" system setting. */
		                var minPriceToRequireRealtyComment = (await sysSettingsService.getByCode('MinPriceToRequireRealtyComment')).value;	
						
						var currentPrice = await request.$context.PDS_UsrPrice_np0if01;
		                var isPassMinPrice = currentPrice > minPriceToRequireRealtyComment;
						
						/* Check the request description. */
		                if (isPassMinPrice) {
		                    request.$context.enableAttributeValidator('PDS_UsrComment_01yixkv', 'required');
		                } else {
		                    request.$context.disableAttributeValidator('PDS_UsrComment_01yixkv', 'required');
		                }
		            }
		            
					/* Call the next handler if it exists and return its result. */
		            return next?.handle(request);
			        }
			},

			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run Max web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_gulsb1v;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_di8hr2x;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

					//const endpoint = "http://localhost/D_Dev/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},

			{
				request: "usr.RunWebServiceMinimumPrice",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run Min web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_gulsb1v;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_di8hr2x;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMinPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

					//const endpoint = "http://localhost/D_Dev/0/rest/RealtyService/GetMinPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response min price = " + response.body.GetMinPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});