

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPI">- Get Roster Result [GET]</h1>

<h2 id="CAQH-ProView-RosterAPI-Roster-getting-started">Getting Started</h2>

```python
from requests import get
from json import dumps

url = "https://proview-demo.caqh.org/RosterAPI/api/Roster"
```

``` csharp
//includes
using System;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/Roster?";
```
A PO can request the status and results of a previous Add to Roster, Update on Roster, or Delete from Roster request by submitting the system-generated Batch ID in the following URL.

| Method | URL |
|---|---|
|GET | https://proview-demo.caqh.org/RosterAPI/api/Roster |

<h2 id="CAQH-ProView-RosterAPI-Roster-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
batch_id = 'string'

params = {
  "batch_id": batch_id
}
```

```csharp
//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["batch_id"] = "string";
url += queryString.ToString();
```
<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-parameter">Parameters</h3>

  The batch id from a previous create, update or delete request.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-body">Body</h3>

    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="CAQH-ProView-RosterAPI-Roster-api-definition"> GET /Roster</h2>

The Roster Operation Result will take a `batch_id` in its parameters.  This batch id will have been returned to you by a successful `POST`, `PUT` or `DELETE`.  A `GET` call cannot have a request body.

<h2 id="CAQH-ProView-RosterAPI-Roster-making-request">Making The Request</h2>

> Full API Request

```python
from requests import get
from json import dumps

headers = {
  "Accept": '*/*'
}

params = {
  "batch_id": 'string'
}

username = "yourUsername"
password = "yourPassword"

response = get("https://proview-demo.caqh.org/RosterAPI/api/Roster", params = params, headers = headers, auth = (username, password))

print(response.json())

```

```java
URL obj = new URL("https://proview-demo.caqh.org/RosterAPI/api/Roster?batch_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
//includes
using System;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//HTTPClient should be instantiated once and re-used in your application
HttpClient client = new HttpClient();

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/Roster?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["batch_id"] = "string";
//add parameters to base url
url += queryString.ToString();

//set up HTTP auth (replace username/password with yours)
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

//Send the GET Request
var result = client.GetAsync(url).Result;

//get the response message and parse it
string resultTxt = result.Content.ReadAsStringAsync().Result;
dynamic responseObj = JsonConvert.DeserializeObject<dynamic>(resultTxt);
Console.WriteLine(responseObj.ToString());
```

`GET /Roster`

<h3 id="get__roster-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|batch_id|query|string|true|The batch id from a previous create, update or delete request.|

<h3 id="get__roster-body">Body</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|

<h2 id="CAQH-ProView-RosterAPI-Roster-responses">Responses</h2>

> Example responses

>200 Response

```json
{
	'batch_id':'string'
}
```

>400 and 401 Response

```json
{
	'Message':'error'
}
```

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response will return a provider object.|[ResultResponse](#schemaresultresponse)|

<h2 id="CAQH-ProView-RosterAPI-Roster-next-step">Next Steps</h2>

> Parsing the response

```python

batch_status = ""
batch_time = ""
roster_result = ""

if(response.status_Code == 200):
	batch_status = response.json()["batch_status"]
	batch_time = response.json()["batch_time"]
	roster_result = response.json()["roster_result"]
	

```

```csharp

string batch_status = "";
string batch_time = "";
string roster_result = "";

if ((int)result.StatusCode == 200)
{
	batch_status = responseObj.batch_status;
	batch_time = responseObj.batch_time;
	roster_result = responseObj.roster_result;
	
}

```

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPI">- Add Roster Request [POST]</h1>

<h2 id="CAQH-ProView-RosterAPI-Roster-getting-started">Getting Started</h2>

```python
from requests import post
from json import dumps

url = "https://proview-demo.caqh.org/RosterAPI/api/Roster"
```

``` csharp
//includes
using System;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/Roster?";
```

A PO can add one or more providers to the roster by submitting a call to the following URL. Similar to the Add Roster File process, there are different required and optional fields for the Quick Add verses the Initial Add, and at least one of the fields with an asterisk (*) is required to process an Initial Add.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/RosterAPI/api/Roster |

<h2 id="CAQH-ProView-RosterAPI-Roster-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
product = 'PV'

params = {
  "product": product
}
```

```csharp
//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "PV";
url += queryString.ToString();
```
<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-parameter">Parameters</h3>

  The status endpoint will take the Product of `PV`.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="CAQH-ProView-RosterAPI-Roster-staging-data-body">Body</h3>

  The ProView roster add endpoint takes in a specific object as its json body.  You can find this object and how to compose it in the [schemas section](#tocSaddrequest).    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="CAQH-ProView-RosterAPI-Roster-api-definition"> POST /Roster</h2>

The body of the Roster Add endpoint can take one or more [provider add](#tocSaddrequest) objects.  If you only have one object, the body must still be passed in as an array.  All body fields are passed in as strings, however many of them have a specific format.  Please see the example object for the format that is required.

<h2 id="CAQH-ProView-RosterAPI-Roster-making-request">Making The Request</h2>

> Full API Request

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
      "first_name": "Required",
      "middle_name": "Optional",
      "last_name": "Required",
      "name_suffix": "Optional",
      "gender": "Required (M/F)",
      "address1": "Required",
      "address2": "Optional",
      "city": "Required",
      "state": "Required",
      "zip": "Required",
      "zip_extn": "Optional",
      "phone": "Optional",
      "fax": "Optional",
      "email": "Optional",
      "practice_state": "Required",
      "birthdate": "Required (YYYYMMDD)",
      "ssn": "One required*",
      "short_ssn": "Optional",
      "dea": "One required*",
      "upin": "One required*",
      "type": "Required",
      "tax_id": "Optional",
      "npi": "One required*",
      "license_state": "Required if license_number",
      "license_number": "One required*"
    },
    "caqh_provider_id": "Required",
    "po_provider_id": "Optional",
    "last_recredential_date": "Optional (YYYYMMDD)",
    "next_recredential_date": "Optional (YYYYMMDD)",
    "delegation_flag": "Optional",
    "application_type": "Conditional - see description",
    "affiliation_flag": "Optional",
    "organization_id": "Required",
    "region_id": "Optional",
    "anniversary_date": "string",
    "exception_description": "string"
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
//includes
using System;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//HTTPClient should be instantiated once and re-used in your application
HttpClient client = new HttpClient();

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/Roster?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "PV";
//add parameters to base url
url += queryString.ToString();

//set up HTTP auth (replace username/password with yours)
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

//Build POST body (you can also load in external json files as a string, this is to build one on the fly)
JObject body = new JObject(
new JProperty("provider", new JObject(
    new JProperty("first_name", ""),
    new JProperty("middle_name", ""),
    new JProperty("last_name", ""),
    new JProperty("name_suffix", ""),
    new JProperty("gender", ""),
    new JProperty("address1", ""),
    new JProperty("address2", ""),
    new JProperty("city", ""),
    new JProperty("state", ""),
    new JProperty("zip", ""),
    new JProperty("zip_extn", ""),
    new JProperty("phone", ""),
    new JProperty("fax", ""),
    new JProperty("email", ""),
    new JProperty("practice_state", ""),
    new JProperty("birthdate", ""),
    new JProperty("ssn", ""),
    new JProperty("short_ssn", ""),
    new JProperty("dea", ""),
    new JProperty("upin", ""),
    new JProperty("type", ""),
    new JProperty("tax_id", ""),
    new JProperty("npi", ""),
    new JProperty("license_state", ""),
    new JProperty("license_number", ""))),
new JProperty("caqh_provider_id", ""),
new JProperty("po_provider_id", ""),
new JProperty("last_recredential_date", ""),
new JProperty("next_recredential_date", ""),
new JProperty("delegation_flag", ""),
new JProperty("application_type", ""),
new JProperty("affiliation_flag", ""),
new JProperty("organization_id", ""),
new JProperty("region_id", ""));
//Body is taken as an array, even with only one element
JArray bodyArray = new JArray(body);
var content = new StringContent(bodyArray.ToString(), Encoding.UTF8, "application/json");
content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

//Send the POST Request
var result = client.PostAsync(url, content).Result;

//get the response message and parse it
string resultTxt = result.Content.ReadAsStringAsync().Result;
dynamic responseObj = JsonConvert.DeserializeObject<dynamic>(resultTxt);
Console.WriteLine(responseObj.ToString());

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

<h2 id="CAQH-ProView-RosterAPI-Roster-responses">Responses</h2>

> Example responses

>200 Response

```json
{
	'batch_id':'string'
}
```

>400 and 401 Response

```json
{
	'Message':'error'
}
```

If your request has been formatted correctly, it will return a batch id and a 200 response code.  If not, the response object will have a "Message" field that will contain the error.  Once you get a 200 response, you will want to save the batch id for use in the [roster operation result](#todo) call.

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The Add to Roster Web Service immediately returns a Response JSON that includes a system-generated unique Batch ID for the request.|[AddResponse](#schemaaddresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If there was an error with the request, a 400 status code will be returned with an object that contains the field "Message" with the error.  Please check to make sure your JSON request body is properly formatted.|[AddErrorResponse](#schemaadderrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If your credentials are incorrect or not authorized to access this endpoint, it will return a 401 status code representing an unauthorized response.  Please double check your credentials and the URL to make sure you're calling the correct environment.|[AddErrorResponse](#schemaadderrorresponse)|

<h2 id="CAQH-ProView-RosterAPI-Roster-next-step">Next Steps</h2>

> Parsing the response

```python

batch_id = ""

if(response.status_Code == 200):
	batch_id = response.json()["batch_id"]
	

Message = ""

if(response.status_Code == 400):
	Message = response.json()["Message"]
	

Message = ""

if(response.status_Code == 401):
	Message = response.json()["Message"]
```

```csharp

string batch_id = "";

if ((int)result.StatusCode == 200)
{
	batch_id = responseObj.batch_id;
	
}

string Message = "";

if ((int)result.StatusCode == 400)
{
	Message = responseObj.Message;
	
}

string Message = "";

if ((int)result.StatusCode == 401)
{
	Message = responseObj.Message;
	
}
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
  "first_name": "Required",
  "middle_name": "Optional",
  "last_name": "Required",
  "name_suffix": "Optional",
  "gender": "Required (M/F)",
  "address1": "Required",
  "address2": "Optional",
  "city": "Required",
  "state": "Required",
  "zip": "Required",
  "zip_extn": "Optional",
  "phone": "Optional",
  "fax": "Optional",
  "email": "Optional",
  "practice_state": "Required",
  "birthdate": "Required (YYYYMMDD)",
  "ssn": "One required*",
  "short_ssn": "Optional",
  "dea": "One required*",
  "upin": "One required*",
  "type": "Required",
  "tax_id": "Optional",
  "npi": "One required*",
  "license_state": "Required if license_number",
  "license_number": "One required*"
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
|birthdate|string|true|This field denotes the provider’s date of birth. (Format:  YYYYMMDD)|
|ssn|string|false|This field denotes the provider’s Social Security Number (Must be 9 digits).|
|short_ssn|string|false|This field denotes last two Characters of the provider’s SSN. This is required for Illinois providers if all of the following are true: -	Primary Practice State = ‘IL’ -	Provider_SSN is null  Application_Type=’2’ for re-credentialing.|
|dea|string|false|This field denotes the provider’s Drug Enforcement Administration (DEA) Number (Format must be ‘AA9999999’)|
|upin|string|false|This field denotes the provider’s Unique Physician Identification Number (UPIN) (Format must be ‘A99999’)|
|type|string|true|This field denotes the provider type code based on a list of Standard or Allied provider type codes from ProView. Note: The value must be from the list of standard ProView Provider Type codes. See Appendix below for a list of valid values.|
|tax_id|string|false|This field denotes the Federal Tax ID number of the provider.|
|npi|string|true|The field denotes the provider’s Type 1 (Individual) NPI number.  (Format: 9 numeric digits followed by one numeric check digit; must be 10 digits)|
|license_state|string|false|The two-Character ANSI state code that corresponds to the provider’s license state This field is required if Provider License Number is populated.|
|license_number|integer(int32)|false|This field denotes the provider’s State License Number. The field is required if Provider License State is populated.|

<h2 id="tocSaddrequest">AddRequest</h2>

<a id="schemaaddrequest"></a>

```json
[
  {
    "provider": {
      "first_name": "Required",
      "middle_name": "Optional",
      "last_name": "Required",
      "name_suffix": "Optional",
      "gender": "Required (M/F)",
      "address1": "Required",
      "address2": "Optional",
      "city": "Required",
      "state": "Required",
      "zip": "Required",
      "zip_extn": "Optional",
      "phone": "Optional",
      "fax": "Optional",
      "email": "Optional",
      "practice_state": "Required",
      "birthdate": "Required (YYYYMMDD)",
      "ssn": "One required*",
      "short_ssn": "Optional",
      "dea": "One required*",
      "upin": "One required*",
      "type": "Required",
      "tax_id": "Optional",
      "npi": "One required*",
      "license_state": "Required if license_number",
      "license_number": "One required*"
    },
    "caqh_provider_id": "Required",
    "po_provider_id": "Optional",
    "last_recredential_date": "Optional (YYYYMMDD)",
    "next_recredential_date": "Optional (YYYYMMDD)",
    "delegation_flag": "Optional",
    "application_type": "Conditional - see description",
    "affiliation_flag": "Optional",
    "organization_id": "Required",
    "region_id": "Optional",
    "anniversary_date": "string",
    "exception_description": "string"
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
|region_id|string|false|none|
|anniversary_date|string|false|none|
|exception_description|string|false|none|

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

<h2 id="tocSadderrorresponse">AddErrorResponse</h2>

<a id="schemaadderrorresponse"></a>

```json
{
  "Message": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|Message|string|false|none|

<h2 id="tocSresultresponse">ResultResponse</h2>

<a id="schemaresultresponse"></a>

```json
{
  "batch_status": "string",
  "batch_time": "string",
  "roster_result": [
    {
      "provider": {
        "first_name": "Required",
        "middle_name": "Optional",
        "last_name": "Required",
        "name_suffix": "Optional",
        "gender": "Required (M/F)",
        "address1": "Required",
        "address2": "Optional",
        "city": "Required",
        "state": "Required",
        "zip": "Required",
        "zip_extn": "Optional",
        "phone": "Optional",
        "fax": "Optional",
        "email": "Optional",
        "practice_state": "Required",
        "birthdate": "Required (YYYYMMDD)",
        "ssn": "One required*",
        "short_ssn": "Optional",
        "dea": "One required*",
        "upin": "One required*",
        "type": "Required",
        "tax_id": "Optional",
        "npi": "One required*",
        "license_state": "Required if license_number",
        "license_number": "One required*"
      },
      "caqh_provider_id": "Required",
      "po_provider_id": "Optional",
      "last_recredential_date": "Optional (YYYYMMDD)",
      "next_recredential_date": "Optional (YYYYMMDD)",
      "delegation_flag": "Optional",
      "application_type": "Conditional - see description",
      "affiliation_flag": "Optional",
      "organization_id": "Required",
      "region_id": "Optional",
      "anniversary_date": "string",
      "exception_description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|batch_status|string|false|none|
|batch_time|string|false|none|
|roster_result|[AddRequest](#schemaaddrequest)|false|none|

