

<h1 id="Direct-Assure-Direct-AssurePOSTintro"> - Practice Location Upload [POST]</h1>

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-getting-started">Getting Started</h2>

```python
from requests import post
from json import dumps

url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake"
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
string url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";
```
```java
//imports (you will need javax.json and org.apache.httpcomponents)
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.*;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import javax.json.*;
import java.io.StringReader;
import java.util.List;
import java.util.ArrayList;

//base url
String url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";
```
Participating Organizations are required to submit all their providers practice location data in the JSON format, every time.  The schema for the JSON format is listed below. JSON is a lightweight and simple way to represent machine-readable data. If there is not associated JSON data for a field, then it must be represented correctly based on the data type. Absence of an entire array should be represented by an empty array ‘[]’.  Data elements that are marked Required (R) or Conditional (C) in the object tables are marked as such for the data processing logic to be successful.  If you choose not to include some of these data elements it will result in exceptions being generated and in some cases, will bypass processing the entire record.

| Method | URL |
|---|---|
|POST | https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake |

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
batchid = 'string'
eof = 'true'

params = {
  "batchid": batchid,
  "eof": eof
}
```

```csharp

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["batchid"] = "stringqueryString["eof"] = "true";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batchid", "string"));params.add(new BasicNameValuePair("eof", "true"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data-parameter">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data-body">Body</h3>

    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-api-definition"> POST /POPracticeLocation/Intake</h2>

Participating Organizations can submit their DirectAssure 2.0 Practice Location files to CAQH through an API.  The data submitted to the API must be in JSON format in the layout that is described in the section below. Participating organizations can submit multiple practice locations and its corresponding providers in one file. 

The layout of the file is TIN-centric. <b>The input file service can be up to 2GB in size.</b> If an input file is larger than 2 GB, then the request can be split into many API calls, but with the same Batch ID. The end-of-file parameter identifies if a file is split into many parts. The BatchID should be the same for all calls to the API for a multi-part file. CAQH will merge the multi-part file once all the parts are received and begin processing the file. The API call will send an HTTP response of 200 when the submission is successful. The input file will be processed as soon as it is received. The status of the file can be checked using the status API by passing the batch ID of the submission. The status will return ‘Queued’, ‘In Process’ or ‘Complete’. 

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-making-request">Making The Request</h2>

> Full API Request

```python
from requests import post
from json import dumps

headers = {
  "Content-Type": 'application/json',
  "Accept": '*/*'
}

params = {
  "batchid": 'string',
  "eof": 'true'
}

data = {
  "organization_id": "string",
  "practice_location": [
    {
      "tax_id": "string",
      "practice_name": "string",
      "practice_location_address1": "string",
      "practice_location_address2": "string",
      "practice_location_city": "string",
      "practice_location_state": "string",
      "practice_location_zipcode": "string",
      "practice_location_province": "string",
      "practice_location_country": "string",
      "npi_type_2": "string",
      "po_location_id": "string",
      "location_type": "string",
      "providers": [
        {
          "caqh_provider_id": "string",
          "po_provider_id": "string",
          "provider_type": "string",
          "provider_primary_practice_state": "string",
          "provider_first_name": "string",
          "provider_middle_name": "string",
          "provider_last_name": "string",
          "npi_type_1": "string",
          "po_provider_location_id": "string",
          "provider_dea": [
            {
              "dea_number": "string",
              "dea_state": "string"
            }
          ],
          "provider_license": [
            [
              {
                "license_number": "string",
                "license_state": "string",
                "license_expiration_date": "string"
              }
            ]
          ],
          "provider_practice_specialty": [
            {
              "specialty_name": "string",
              "specialty_taxonomy_code": "string",
              "specialty_type": "string"
            }
          ]
        }
      ]
    }
  ]
}

username = "yourUsername"
password = "yourPassword"

response = post("https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake", params = params, data = dumps(data), headers = headers, auth = (username, password))

print(response.json())

```

```java
//imports (you will need javax.json and org.apache.httpcomponents)
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.*;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import javax.json.*;
import java.io.StringReader;
import java.util.List;
import java.util.ArrayList;

String url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batchid", "string"));params.add(new BasicNameValuePair("eof", "true"));
url += URLEncodedUtils.format(params, "UTF-8");

//setup HTTP Auth
CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

/* Body JSON Schema
{
  "organization_id": "string",
  "practice_location": [
    {
      "tax_id": "string",
      "practice_name": "string",
      "practice_location_address1": "string",
      "practice_location_address2": "string",
      "practice_location_city": "string",
      "practice_location_state": "string",
      "practice_location_zipcode": "string",
      "practice_location_province": "string",
      "practice_location_country": "string",
      "npi_type_2": "string",
      "po_location_id": "string",
      "location_type": "string",
      "providers": [
        {
          "caqh_provider_id": "string",
          "po_provider_id": "string",
          "provider_type": "string",
          "provider_primary_practice_state": "string",
          "provider_first_name": "string",
          "provider_middle_name": "string",
          "provider_last_name": "string",
          "npi_type_1": "string",
          "po_provider_location_id": "string",
          "provider_dea": [
            {
              "dea_number": "string",
              "dea_state": "string"
            }
          ],
          "provider_license": [
            [
              {
                "license_number": "string",
                "license_state": "string",
                "license_expiration_date": "string"
              }
            ]
          ],
          "provider_practice_specialty": [
            {
              "specialty_name": "string",
              "specialty_taxonomy_code": "string",
              "specialty_type": "string"
            }
          ]
        }
      ]
    }
  ]
}
*/
//build JSON body (match schema above)
//Refer to Anatomy of a REST Call/Request Body to see code on composing a specific JSON structure in Java.
JsonArray body = Json.createArrayBuilder()
	.add(Json.createObjectBuilder()
	.add("property_1", Json.createObjectBuilder()
	    .add("subproperty_1", "")
	    ...
	    .add("subproperty_n", ""))
	.add("property_2", "")
	...
	.add("property_n", ""))
	.build();

try
{
    HttpPost request = new HttpPost(url);
    StringEntity bodyParams = new StringEntity(body.toString());
    request.addHeader("content-type", "application/json");
    request.setEntity(bodyParams);
    HttpResponse response = client.execute(request);

    HttpEntity entity = response.getEntity();
    String responseString = EntityUtils.toString(entity);
    JsonReader jsonReader = Json.createReader(new StringReader(responseString));
    JsonObject responseJson = jsonReader.readObject();
    jsonReader.close();

} catch (Exception ex)
{
    //handle errors here
}

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
string url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["batchid"] = "string";queryString["eof"] = "true";
//add parameters to base url
url += queryString.ToString();

//set up HTTP auth (replace username/password with yours)
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

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

`POST /POPracticeLocation/Intake`

<h3 id="post__popracticelocation_intake-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|batchid|query|string|true|none|
|eof|query|boolean|true|none|

<h3 id="post__popracticelocation_intake-body">Body</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
| body | [Practice_Location_Request](#schemapractice_location_request) | true | none |

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-responses">Responses</h2>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Intake File has been successfully submitted. Submission_Batch_ID = <SubmissionBatchID>|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|{"error":"Authentication failed."}|[ErrorResponse](#schemaerrorresponse)|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|{"error":"File too big to process. Please try again with a smaller file size."}|[ErrorResponse](#schemaerrorresponse)|
|420|Unknown|Invalid BatchID format. 
Format is POID_YYYYMMDD_HHMMSS  (POID is the 3 digit organization ID assigned to the participating organization by CAQH)|[ErrorResponse](#schemaerrorresponse)|
|421|[Misdirected request](https://tools.ietf.org/html/rfc7540#section-9.1.2)|The encoded username and password does not match the Organization ID credentials.|[ErrorResponse](#schemaerrorresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|An ‘End of File’ indicator was already received (eof=true) for the submitted BatchID. Please submit a new file using a new BatchID.|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|{"error":"Internal error occurred.  Please try again later."}|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-next-step">Next Steps</h2>

> Parsing the response

```python

message = ""

if(response.status_Code == 200):
	message = response.json()["message"]
	

error = ""

if(response.status_Code == 400):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 401):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 402):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 420):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 421):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 422):
	error = response.json()["error"]
	

error = ""

if(response.status_Code == 500):
	error = response.json()["error"]
	

```

```csharp

string message = "";

if ((int)result.StatusCode == 200)
{
	message = responseObj.message;
	
}

string error = "";

if ((int)result.StatusCode == 400)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 401)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 402)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 420)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 421)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 422)
{
	error = responseObj.error;
	
}

string error = "";

if ((int)result.StatusCode == 500)
{
	error = responseObj.error;
	
}

```
```java

String message = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	message = responseJson.getString("message");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 400)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 401)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 402)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 420)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 421)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 422)
{
	error = responseJson.getString("error");
	
}

String error = "";

if (response.getStatusLine().getStatusCode() == 500)
{
	error = responseJson.getString("error");
	
}

```
 

<h1 id="Direct-Assure-Direct-AssureGETintro"> - Upload Status Check [GET]</h1>

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-getting-started">Getting Started</h2>

```python
from requests import get

url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID"
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
string url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID?";
```
```java
//imports (you will need javax.json and org.apache.httpcomponents)
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.*;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import javax.json.*;
import java.io.StringReader;
import java.util.List;
import java.util.ArrayList;

//base url
String url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID?";
```
Participating Organizations can use this service to view the status of Practice Location Submission file processing.

| Method | URL |
|---|---|
|GET | https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID |

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python

params = {
}
```

```csharp

//This request does not require URL parameters

```

```java

//This request does not require URL Parameters

```
<h3 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-staging-data-parameter">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-api-definition"> GET /POPracticeLocation/SubmissionBatchID</h2>

 

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-making-request">Making The Request</h2>

> Full API Request

```python
from requests import get

headers = {
  "Accept": '*/*'
}

params = {
}

username = "yourUsername"
password = "yourPassword"

response = get("https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID", params = params, headers = headers, auth = (username, password))

print(response.json())

```

```java
//imports (you will need javax.json and org.apache.httpcomponents)
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.*;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import javax.json.*;
import java.io.StringReader;
import java.util.List;
import java.util.ArrayList;

String url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID?";

//setup HTTP Auth
CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

try
{
	    HttpGet request = new HttpGet(url);
	    HttpResponse response = client.execute(request);

	    HttpEntity entity = response.getEntity();
    	String responseString = EntityUtils.toString(entity);
    	JsonReader jsonReader = Json.createReader(new StringReader(responseString));
    	JsonObject responseJson = jsonReader.readObject();
    	jsonReader.close();

} catch (Exception ex)
{
	    //handle errors here
}

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
string url = "https://directassure.caqh.org/DirectAssure/api/POPracticeLocation/SubmissionBatchID?";

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

`GET /POPracticeLocation/SubmissionBatchID`

<h3 id="get__popracticelocation_SubmissionBatchID-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-responses">Responses</h2>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|"Queued" 
 (Processing has not begun for the batch)|[SuccessResponse](#schemasuccessresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|"In_Process" 
(Batch is still in process)|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchIDGET-next-step">Next Steps</h2>

> Parsing the response

```python

message = ""

if(response.status_Code == 200):
	message = response.json()["message"]
	

message = ""

if(response.status_Code == 201):
	message = response.json()["message"]
	

```

```csharp

string message = "";

if ((int)result.StatusCode == 200)
{
	message = responseObj.message;
	
}

string message = "";

if ((int)result.StatusCode == 201)
{
	message = responseObj.message;
	
}

```
```java

String message = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	message = responseJson.getString("message");
	
}

String message = "";

if (response.getStatusLine().getStatusCode() == 201)
{
	message = responseJson.getString("message");
	
}

```
 

# Schemas

<h2 id="tocSspecialty">Specialty</h2>

<a id="schemaspecialty"></a>

```json
{
  "specialty_name": "string",
  "specialty_taxonomy_code": "string",
  "specialty_type": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|specialty_name|string|false|none|
|specialty_taxonomy_code|string|false|none|
|specialty_type|string|false|none|

<h2 id="tocSlicense">License</h2>

<a id="schemalicense"></a>

```json
{
  "license_number": "string",
  "license_state": "string",
  "license_expiration_date": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|license_number|string|false|none|
|license_state|string|false|none|
|license_expiration_date|string|false|none|

<h2 id="tocSdea">DEA</h2>

<a id="schemadea"></a>

```json
{
  "dea_number": "string",
  "dea_state": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|dea_number|string|false|none|
|dea_state|string|false|none|

<h2 id="tocSprovider">Provider</h2>

<a id="schemaprovider"></a>

```json
{
  "caqh_provider_id": "string",
  "po_provider_id": "string",
  "provider_type": "string",
  "provider_primary_practice_state": "string",
  "provider_first_name": "string",
  "provider_middle_name": "string",
  "provider_last_name": "string",
  "npi_type_1": "string",
  "po_provider_location_id": "string",
  "provider_dea": [
    {
      "dea_number": "string",
      "dea_state": "string"
    }
  ],
  "provider_license": [
    [
      {
        "license_number": "string",
        "license_state": "string",
        "license_expiration_date": "string"
      }
    ]
  ],
  "provider_practice_specialty": [
    {
      "specialty_name": "string",
      "specialty_taxonomy_code": "string",
      "specialty_type": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|caqh_provider_id|string|false|none|
|po_provider_id|string|false|none|
|provider_type|string|false|none|
|provider_primary_practice_state|string|false|none|
|provider_first_name|string|false|none|
|provider_middle_name|string|false|none|
|provider_last_name|string|false|none|
|npi_type_1|string|false|none|
|po_provider_location_id|string|false|none|
|provider_dea|[[DEA](#schemadea)]|false|none|
|provider_license|[array]|false|none|
|provider_practice_specialty|[[Specialty](#schemaspecialty)]|false|none|

<h2 id="tocSsuccessresponse">SuccessResponse</h2>

<a id="schemasuccessresponse"></a>

```json
{
  "message": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|message|string|false|none|

<h2 id="tocSerrorresponse">ErrorResponse</h2>

<a id="schemaerrorresponse"></a>

```json
{
  "error": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|error|string|false|none|

<h2 id="tocSpractice_location">Practice_Location</h2>

<a id="schemapractice_location"></a>

```json
{
  "tax_id": "string",
  "practice_name": "string",
  "practice_location_address1": "string",
  "practice_location_address2": "string",
  "practice_location_city": "string",
  "practice_location_state": "string",
  "practice_location_zipcode": "string",
  "practice_location_province": "string",
  "practice_location_country": "string",
  "npi_type_2": "string",
  "po_location_id": "string",
  "location_type": "string",
  "providers": [
    {
      "caqh_provider_id": "string",
      "po_provider_id": "string",
      "provider_type": "string",
      "provider_primary_practice_state": "string",
      "provider_first_name": "string",
      "provider_middle_name": "string",
      "provider_last_name": "string",
      "npi_type_1": "string",
      "po_provider_location_id": "string",
      "provider_dea": [
        {
          "dea_number": "string",
          "dea_state": "string"
        }
      ],
      "provider_license": [
        [
          {
            "license_number": "string",
            "license_state": "string",
            "license_expiration_date": "string"
          }
        ]
      ],
      "provider_practice_specialty": [
        {
          "specialty_name": "string",
          "specialty_taxonomy_code": "string",
          "specialty_type": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|tax_id|string|false|none|
|practice_name|string|false|none|
|practice_location_address1|string|false|none|
|practice_location_address2|string|false|none|
|practice_location_city|string|false|none|
|practice_location_state|string|false|none|
|practice_location_zipcode|string|false|none|
|practice_location_province|string|false|none|
|practice_location_country|string|false|none|
|npi_type_2|string|false|none|
|po_location_id|string|false|none|
|location_type|string|false|none|
|providers|[[Provider](#schemaprovider)]|false|none|

<h2 id="tocSpractice_location_request">Practice_Location_Request</h2>

<a id="schemapractice_location_request"></a>

```json
{
  "organization_id": "string",
  "practice_location": [
    {
      "tax_id": "string",
      "practice_name": "string",
      "practice_location_address1": "string",
      "practice_location_address2": "string",
      "practice_location_city": "string",
      "practice_location_state": "string",
      "practice_location_zipcode": "string",
      "practice_location_province": "string",
      "practice_location_country": "string",
      "npi_type_2": "string",
      "po_location_id": "string",
      "location_type": "string",
      "providers": [
        {
          "caqh_provider_id": "string",
          "po_provider_id": "string",
          "provider_type": "string",
          "provider_primary_practice_state": "string",
          "provider_first_name": "string",
          "provider_middle_name": "string",
          "provider_last_name": "string",
          "npi_type_1": "string",
          "po_provider_location_id": "string",
          "provider_dea": [
            {
              "dea_number": "string",
              "dea_state": "string"
            }
          ],
          "provider_license": [
            [
              {
                "license_number": "string",
                "license_state": "string",
                "license_expiration_date": "string"
              }
            ]
          ],
          "provider_practice_specialty": [
            {
              "specialty_name": "string",
              "specialty_taxonomy_code": "string",
              "specialty_type": "string"
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|organization_id|string|false|none|
|practice_location|[[Practice_Location](#schemapractice_location)]|false|none|

