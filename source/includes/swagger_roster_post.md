

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPI">Add Roster Request [POST]</h1>

<h2 id="CAQH-ProView-RosterAPI-Roster-getting-started">Getting Started</h2>

A PO can add one or more providers to the roster by submitting a call to the following URL. Similar to the Add Roster File process, there are different required and optional fields for the Quick Add verses the Initial Add, and at least one of the fields with an asterisk (*) is required to process an Initial Add.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/RosterAPI/api/Roster |

<h2 id="CAQH-ProView-RosterAPI-Roster-api-definition"> POST /Roster</h2>

<h2 id="CAQH-ProView-RosterAPI-Roster-making-request">Making The Request</h2>

> Code samples

```python
from requests import post

headers = {
  "Content-Type": 'application/json',
  "Accept": '*/*'
}

params = {
  "product": 'PV'
}

data = {
 "Provider_First_Name": "string",
 "Provider_Last_Name": "string",
 "Provider_Address1": "string",
 "Provider_Address_City": "string",
 "Provider_Address_State": "string",
 "Provider_Address_Zip": "0",
 "Provider_Practice_State": "string",
 "Provider_Birthdate": "2018-09-11",
 "Provider_Type": "string",
 "Provider_NPI*": "0",
 "Organization_ID": "0"
}

username = "yourUsername"
password = "yourPassword"

r = post("https://proview-demo.caqh.org/RosterAPI/api/Roster", params = params, data = data, headers = headers, auth = (username, password))

print(r.json())

```

```java
URL obj = new URL("https://proview-demo.caqh.org/RosterAPI/api/Roster?product=PV");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```csharp
using(HttpClient client = new HttpClient())
{
	// Add an Accept header for JSON format.
	client.DefaultRequestHeaders.Accept.Add(
	new MediaTypeWithQualityHeaderValue("application/json"));
	
	Dictionary<string, string> parameters = new Dictionary<string,string>()
	{
	    {"product", "PV"}
	}
	var encodedContent = new FormUrlEncodedContent(parameters);

	// List data response.
	HttpResponseMessage response = client.PostAsync("https://proview-demo.caqh.org/RosterAPI/api/Roster", encodedContent).Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.
	if (response.IsSuccessStatusCode)
	{
		// Parse the response body.
		var dataObjects = response.Content.ReadAsAsync<IEnumerable<DataObject>>().Result;  //Make sure to add a reference to System.Net.Http.Formatting.dll
		foreach (var d in dataObjects)
		{
			Console.WriteLine("{0}", d.Name);
		}
	}
	else
	{
		Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
	}

	//Make any other calls using HttpClient here.

	//HttpClient will automatically be disposed of at the conclusion of the using block
}
```

`POST /Roster`

> Body parameter

```json
{
  "Provider_First_Name": "string",
  "Provider_Middle_Name": "string",
  "Provider_Last_Name": "string",
  "Provider_Name_Suffix": "string",
  "Provider_Gender": "string",
  "Provider_Address1": "string",
  "Provider_Address2": "string",
  "Provider_Address_City": "string",
  "Provider_Address_State": "string",
  "Provider_Address_Zip": 0,
  "Provider_Address_Zip_Extn": 0,
  "Provider_Phone": 0,
  "Provider_Fax": "string",
  "Provider_Email": "string",
  "Provider_Practice_State": "string",
  "Provider_Birthdate": "2018-09-11",
  "Provider_SSN*": "string",
  "Provider_Short_SSN": "string",
  "Provider_DEA*": "string",
  "Provider_UPIN*": "string",
  "Provider_Type": "string",
  "Provider_Tax_ID": 0,
  "Provider_NPI*": 0,
  "Provider_License_State": "string",
  "Provider_License_Number": 0,
  "PO_Provider_ID": 0,
  "Last_Recredential_Date": "2018-09-11",
  "Next_Recredential_Date": "2018-09-11",
  "Delegation_Flag": "string",
  "Application_Type": "string",
  "Affiliation_Flag": "string",
  "Region_ID": 0,
  "Organization_ID": 0
}
```

<h3 id="post__roster-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|product|query|string|true|none|
|body|body|[Roster](#schemaroster)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product|PV|

> Example responses

> 200 Response

<h3 id="post__roster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The Add to Roster Web Service immediately returns a Response JSON that includes a system-generated unique Batch ID for the request.|Inline|

<h3 id="post__roster-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Roster_Batch_ID|string|false|none|System-generated Batch unique identifier|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocSroster">Roster</h2>

<a id="schemaroster"></a>

```json
{
  "Provider_First_Name": "string",
  "Provider_Middle_Name": "string",
  "Provider_Last_Name": "string",
  "Provider_Name_Suffix": "string",
  "Provider_Gender": "string",
  "Provider_Address1": "string",
  "Provider_Address2": "string",
  "Provider_Address_City": "string",
  "Provider_Address_State": "string",
  "Provider_Address_Zip": 0,
  "Provider_Address_Zip_Extn": 0,
  "Provider_Phone": 0,
  "Provider_Fax": "string",
  "Provider_Email": "string",
  "Provider_Practice_State": "string",
  "Provider_Birthdate": "2018-09-11",
  "Provider_SSN*": "string",
  "Provider_Short_SSN": "string",
  "Provider_DEA*": "string",
  "Provider_UPIN*": "string",
  "Provider_Type": "string",
  "Provider_Tax_ID": 0,
  "Provider_NPI*": 0,
  "Provider_License_State": "string",
  "Provider_License_Number": 0,
  "PO_Provider_ID": 0,
  "Last_Recredential_Date": "2018-09-11",
  "Next_Recredential_Date": "2018-09-11",
  "Delegation_Flag": "string",
  "Application_Type": "string",
  "Affiliation_Flag": "string",
  "Region_ID": 0,
  "Organization_ID": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|Provider_First_Name|string|true|A text field that contains the First Name of the Provider|
|Provider_Middle_Name|string|false|A text field that contains the Middle Name or Initial of the Provider|
|Provider_Last_Name|string|true|A text field that contains the Last Name of the Provider.|
|Provider_Name_Suffix|string|false|A text field that contains the suffix associated with a Provider’s Name Note: The value must be from the list of standard suffix values. See Appendix below.|
|Provider_Gender|string|false|A code that denotes the gender of the Provider.|
|Provider_Address1|string|true|This field should contain the first line of the address at which the provider can be reached by ProView for correspondence.|
|Provider_Address2|string|false|A field that contains provider’s correspondence address Line 2|
|Provider_Address_City|string|true|A field that denotes the provider’s correspondence address city|
|Provider_Address_State|string|true|The two-character ANSI state code that corresponds to the provider’s correspondence address state|
|Provider_Address_Zip|integer|true|A numeric field that denotes a provider’s correspondence address zip code|
|Provider_Address_Zip_Extn|integer|false|An integer field that denotes a provider’s correspondence address zip extension|
|Provider_Phone|integer|false|A field that denotes a provider’s primary phone number.|
|Provider_Fax|string|false|A field that denotes a provider’s fax number for correspondence.|
|Provider_Email|string|false|The primary email address used for correspondence with the provider and for provider outreach.|
|Provider_Practice_State|string|true|The two-character ANSI state code that corresponds to the provider’s primary practice state. Note: This helps ProView identify state mandated requirements (if any) for the provider.|
|Provider_Birthdate|string(date)|true|This field denotes the provider’s date of birth. (Format:  YYYYMMDD)|
|Provider_SSN*|string|false|This field denotes the provider’s Social Security Number (Must be 9 digits).|
|Provider_Short_SSN|string|false|This field denotes last two Characters of the provider’s SSN. This is required for Illinois providers if all of the following are true: -	Primary Practice State = ‘IL’ -	Provider_SSN is null  Application_Type=’2’ for re-credentialing.|
|Provider_DEA*|string|false|This field denotes the provider’s Drug Enforcement Administration (DEA) Number (Format must be ‘AA9999999’)|
|Provider_UPIN*|string|false|This field denotes the provider’s Unique Physician Identification Number (UPIN) (Format must be ‘A99999’)|
|Provider_Type|string|true|This field denotes the provider type code based on a list of Standard or Allied provider type codes from ProView. Note: The value must be from the list of standard ProView Provider Type codes. See Appendix below for a list of valid values.|
|Provider_Tax_ID|integer|false|This field denotes the Federal Tax ID number of the provider.|
|Provider_NPI*|integer|true|The field denotes the provider’s Type 1 (Individual) NPI number.  (Format: 9 numeric digits followed by one numeric check digit; must be 10 digits)|
|Provider_License_State|string|false|The two-Character ANSI state code that corresponds to the provider’s license state This field is required if Provider License Number is populated.|
|Provider_License_Number|integer|false|This field denotes the provider’s State License Number. The field is required if Provider License State is populated.|
|PO_Provider_ID|integer|false|This field denotes the Participating Organization’s internal identifier for the provider.|
|Last_Recredential_Date|string(date)|false|This field denotes the date the provider was last recredentialed by the Participating Organization  (Format: YYYYMMDD)|
|Next_Recredential_Date|string(date)|false|This field denotes the date the provider will be recredentialed again by the Participating organization (Format: YYYYMMDD)|
|Delegation_Flag|string|false|A flag that identifies if a provider is delegated or not for credentialing purposes.   Delegated Providers are providers who furnish health care services through partnerships, associations or other legal entities including but not limited to individual practice associations (IPAs) and physician hospital organizations (PHOs). Valid values are ‘Y’ – Delegated  or ‘N’ – Not Delegated|
|Application_Type|string|false|Identifies if a provider requires an initial application or a recred application (applicable only for Illinois providers). •	Valid values are 1 or 2: 1 = “Initial Credentialing”, 2 = “Re-credentialing”  Required if Primary Practice State = ‘IL’|
|Affiliation_Flag|string|false|The field denotes if the provider has entered into an agreement with the Participating Organization or currently on their network. Valid values are ‘A’ – Participating (par)  or ‘NA’ – Non-participating (non-par)|
|Region_ID|integer|false|This field denotes a Participating organization’s region identifier. Region ID is an identifier assigned by ProView to assist large organizations in decentralizing ProView usage based on regional demographics.|
|Organization_ID|integer(int32)|true|This field denotes Participating Organization Identifier. This is a CAQH assigned identifier for each Participating Organization at the time of contracting.|

