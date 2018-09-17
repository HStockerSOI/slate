

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPI">- Add Roster Request [POST]</h1>

<h2 id="CAQH-ProView-RosterAPI-Roster-getting-started">Getting Started</h2>

```python
from requests import post
from json import dumps

url = "https://proview-demo.caqh.org/RosterAPI/api/Roster"
```

A PO can add one or more providers to the roster by submitting a call to the following URL. Similar to the Add Roster File process, there are different required and optional fields for the Quick Add verses the Initial Add, and at least one of the fields with an asterisk (*) is required to process an Initial Add.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/RosterAPI/api/Roster |

<h2 id="CAQH-ProView-RosterAPI-Roster-staging-data">Staging The Data</h2>
```python
product = 'PV'

params = {
  "product": product
}
```
<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-parameter">Parameters</h3>

  The status endpoint will take the Product of `PV`.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-body">Body</h3>

  The ProView roster add endpoint takes in a specific object as its json body.  You can find this object and how to compose it in the [schemas section](#tocSaddrequest).    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="CAQH-ProView-RosterAPI-Roster-api-definition"> POST /Roster</h2>

The body of the Roster Add endpoint can take one or more [provider add](#tocSaddrequest) objects.  If you only have one object, the body must still be passed in as an array.  All body fields are passed in as strings, however many of them have a specific format.  Please see the example object for the format that is required.

<h2 id="CAQH-ProView-RosterAPI-Roster-making-request">Making The Request</h2>

> Code samples

```python
from requests import post
from json import dumps

headers = {
  "Content-Type": 'application/json',
  "Accept": '*/*'
}

params = {
  "product": 'PV'
}

data = [
  {
    "provider": {
      "first_name": "string",
      "middle_name": "string",
      "last_name": "string",
      "name_suffix": "string",
      "gender": "string",
      "address1": "string",
      "address2": "string",
      "city": "string",
      "state": "string",
      "zip": "string",
      "zip_extn": "string",
      "phone": "string",
      "fax": "string",
      "email": "string",
      "practice_state": "string",
      "birthdate": "2018-09-17",
      "ssn": "string",
      "short_ssn": "string",
      "dea": "string",
      "upin": "string",
      "type": "string",
      "tax_id": 0,
      "npi": 0,
      "license_state": "string",
      "license_number": 0
    },
    "caqh_provider_id": "string",
    "po_provider_id": "string",
    "last_recredential_date": "string",
    "next_recredential_date": "string",
    "delegation_flag": "string",
    "application_type": "string",
    "affiliation_flag": "string",
    "organization_id": "string",
    "region_id": null
  }
]

username = "yourUsername"
password = "yourPassword"

response = post("https://proview-demo.caqh.org/RosterAPI/api/Roster", params = params, data = dumps(data), headers = headers, auth = (username, password))

print(response.json())

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

<h3 id="roster-post-add-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|product|query|string|true|The status endpoint will take the Product of `PV`.|

<h3 id="roster-post-add-body">Body</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
| body | [AddRequest](#schemaaddrequest) | true | The ProView roster add endpoint takes in a specific object as its json body.  You can find this object and how to compose it in the [schemas section](#tocSaddrequest). |

#### Enumerated Values

|Parameter|Value|
|---|---|
|product|PV|

> Example responses

> 200 Response

<h3 id="roster-post-add-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The Add to Roster Web Service immediately returns a Response JSON that includes a system-generated unique Batch ID for the request.|[AddResponse](#schemaaddresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h2 id="CAQH-ProView-RosterAPI-Roster-next-step">Next Steps</h2>

```python
product = response[product]

```

You will receive a [batch id](#tocSaddresponse) which should be passed in to the [roster operation result](#todo) periodically to check if the operation has been processed.  

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

# Schemas

<h2 id="tocSprovider">Provider</h2>

<a id="schemaprovider"></a>

```json
{
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "name_suffix": "string",
  "gender": "string",
  "address1": "string",
  "address2": "string",
  "city": "string",
  "state": "string",
  "zip": "string",
  "zip_extn": "string",
  "phone": "string",
  "fax": "string",
  "email": "string",
  "practice_state": "string",
  "birthdate": "2018-09-17",
  "ssn": "string",
  "short_ssn": "string",
  "dea": "string",
  "upin": "string",
  "type": "string",
  "tax_id": 0,
  "npi": 0,
  "license_state": "string",
  "license_number": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|first_name|string|true|A text field that contains the First Name of the Provider|
|middle_name|string|false|A text field that contains the Middle Name or Initial of the Provider|
|last_name|string|true|A text field that contains the Last Name of the Provider.|
|name_suffix|string|false|A text field that contains the suffix associated with a Provider’s Name Note: The value must be from the list of standard suffix values. See Appendix below.|
|gender|string|false|A code that denotes the gender of the Provider.|
|address1|string|true|This field should contain the first line of the address at which the provider can be reached by ProView for correspondence.|
|address2|string|false|A field that contains provider’s correspondence address Line 2|
|city|string|true|A field that denotes the provider’s correspondence address city|
|state|string|true|The two-character ANSI state code that corresponds to the provider’s correspondence address state|
|zip|string|true|A numeric field that denotes a provider’s correspondence address zip code|
|zip_extn|string|false|An integer field that denotes a provider’s correspondence address zip extension|
|phone|string|false|A field that denotes a provider’s primary phone number.|
|fax|string|false|A field that denotes a provider’s fax number for correspondence.|
|email|string|false|The primary email address used for correspondence with the provider and for provider outreach.|
|practice_state|string|true|The two-character ANSI state code that corresponds to the provider’s primary practice state. Note: This helps ProView identify state mandated requirements (if any) for the provider.|
|birthdate|string(date)|true|This field denotes the provider’s date of birth. (Format:  YYYYMMDD)|
|ssn|string|false|This field denotes the provider’s Social Security Number (Must be 9 digits).|
|short_ssn|string|false|This field denotes last two Characters of the provider’s SSN. This is required for Illinois providers if all of the following are true: -	Primary Practice State = ‘IL’ -	Provider_SSN is null  Application_Type=’2’ for re-credentialing.|
|dea|string|false|This field denotes the provider’s Drug Enforcement Administration (DEA) Number (Format must be ‘AA9999999’)|
|upin|string|false|This field denotes the provider’s Unique Physician Identification Number (UPIN) (Format must be ‘A99999’)|
|type|string|true|This field denotes the provider type code based on a list of Standard or Allied provider type codes from ProView. Note: The value must be from the list of standard ProView Provider Type codes. See Appendix below for a list of valid values.|
|tax_id|integer(int32)|false|This field denotes the Federal Tax ID number of the provider.|
|npi|integer(int32)|true|The field denotes the provider’s Type 1 (Individual) NPI number.  (Format: 9 numeric digits followed by one numeric check digit; must be 10 digits)|
|license_state|string|false|The two-Character ANSI state code that corresponds to the provider’s license state This field is required if Provider License Number is populated.|
|license_number|integer(int32)|false|This field denotes the provider’s State License Number. The field is required if Provider License State is populated.|

<h2 id="tocSaddrequest">AddRequest</h2>

<a id="schemaaddrequest"></a>

```json
[
  {
    "provider": {
      "first_name": "string",
      "middle_name": "string",
      "last_name": "string",
      "name_suffix": "string",
      "gender": "string",
      "address1": "string",
      "address2": "string",
      "city": "string",
      "state": "string",
      "zip": "string",
      "zip_extn": "string",
      "phone": "string",
      "fax": "string",
      "email": "string",
      "practice_state": "string",
      "birthdate": "2018-09-17",
      "ssn": "string",
      "short_ssn": "string",
      "dea": "string",
      "upin": "string",
      "type": "string",
      "tax_id": 0,
      "npi": 0,
      "license_state": "string",
      "license_number": 0
    },
    "caqh_provider_id": "string",
    "po_provider_id": "string",
    "last_recredential_date": "string",
    "next_recredential_date": "string",
    "delegation_flag": "string",
    "application_type": "string",
    "affiliation_flag": "string",
    "organization_id": "string",
    "region_id": null
  }
]

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|provider|[Provider](#schemaprovider)|false|none|
|caqh_provider_id|string|false|none|
|po_provider_id|string|false|none|
|last_recredential_date|string|false|none|
|next_recredential_date|string|false|none|
|delegation_flag|string|false|none|
|application_type|string|false|none|
|affiliation_flag|string|false|none|
|organization_id|string|false|none|
|region_id|any|false|none|

<h2 id="tocSaddresponse">AddResponse</h2>

<a id="schemaaddresponse"></a>

```json
{
  "batch_id": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|batch_id|string|false|none|

