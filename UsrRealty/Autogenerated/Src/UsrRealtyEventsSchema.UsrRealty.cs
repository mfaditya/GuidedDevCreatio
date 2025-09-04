namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a4ce2432-6ec8-45a9-a773-bdfd73403361");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7baf174e-d04e-4fbc-9010-afd5588808f0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,23,244,31,6,209,131,4,102,73,174,117,27,168,141,91,2,161,45,177,210,75,233,97,189,26,43,91,246,67,236,172,156,186,197,255,189,251,97,39,150,146,210,206,73,154,125,243,230,189,225,25,174,145,122,46,16,26,116,142,147,221,122,182,180,102,43,187,193,113,47,173,41,126,23,16,106,32,105,58,88,239,201,163,158,159,117,206,167,180,182,230,111,111,14,217,202,120,233,37,210,127,64,216,106,135,198,31,145,223,82,119,159,90,55,50,8,48,232,170,181,184,71,205,63,5,245,240,14,202,59,114,183,200,149,223,151,245,247,52,211,15,27,37,5,8,197,137,32,63,189,192,2,111,96,193,9,95,120,73,36,217,249,25,157,221,5,185,178,69,216,89,217,194,103,179,230,187,96,162,178,155,31,40,60,16,154,22,221,12,50,221,2,183,193,81,34,125,239,58,2,172,31,217,158,120,99,109,130,2,246,200,117,34,193,122,62,66,101,82,112,201,74,176,92,229,70,157,241,99,108,139,66,106,174,160,119,82,196,243,228,33,246,17,125,179,239,177,93,90,53,104,243,149,171,1,223,30,161,87,85,60,225,151,136,47,39,139,229,22,170,76,116,5,151,23,167,170,71,152,177,161,88,200,174,105,201,141,64,133,109,80,224,221,128,243,226,25,138,188,139,33,8,9,36,222,97,131,186,87,220,71,197,6,31,224,198,10,174,228,47,190,81,184,78,184,234,232,227,142,208,133,136,154,112,243,144,79,118,139,100,7,39,2,200,186,192,50,43,94,77,215,196,122,138,72,142,86,57,131,242,217,6,98,233,42,215,212,88,187,144,93,254,43,107,214,216,163,130,250,159,38,130,248,220,96,31,172,211,220,87,19,115,97,237,37,187,88,188,158,158,57,150,191,119,246,33,121,95,253,20,216,71,119,167,241,9,250,80,140,191,14,197,225,15,156,113,11,203,201,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("bf119d8d-6d41-4dc6-ad35-07519ecd7a9b"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("7baf174e-d04e-4fbc-9010-afd5588808f0"),
				CreatedInSchemaUId = new Guid("a4ce2432-6ec8-45a9-a773-bdfd73403361"),
				ModifiedInSchemaUId = new Guid("a4ce2432-6ec8-45a9-a773-bdfd73403361")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a4ce2432-6ec8-45a9-a773-bdfd73403361"));
		}

		#endregion

	}

	#endregion

}

