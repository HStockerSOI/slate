

<h1 id="Direct-Assure-Direct-AssurePOSTintro1"> - Practice Location Upload [POST]</h1>

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-getting-started2">Getting Started</h2>

```python
from requests import post
from json import dumps, loads

url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake"
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
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";
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
String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";
```
Participating Organizations are required to submit all their providers practice location data in the JSON format, every time.  The schema for the JSON format is listed below. JSON is a lightweight and simple way to represent machine-readable data. If there is not associated JSON data for a field, then it must be represented correctly based on the data type. Absence of an entire array should be represented by an empty array ‘[]’.  Data elements that are marked Required (R) or Conditional (C) in the object tables are marked as such for the data processing logic to be successful.  If you choose not to include some of these data elements it will result in exceptions being generated and in some cases, will bypass processing the entire record.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake |

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

You will want to refer to the [Generating a Batch Id](#generating-a-batch-id) section for information on how the `batchid` parameter is formed.

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
queryString["batchid"] = "string";
queryString["eof"] = "true";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batchid", "string"));
params.add(new BasicNameValuePair("eof", "true"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data-parameter3">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="Direct-Assure-POPracticeLocation-IntakePOST-staging-data-body4">Body</h3>

    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-api-definition5"> POST /POPracticeLocation/Intake</h2>

Participating Organizations can submit their DirectAssure 2.0 Practice Location files to CAQH through an API.  The data submitted to the API must be in JSON format in the layout that is described in the section below. Participating organizations can submit multiple practice locations and its corresponding providers in one file. 

The layout of the file is TIN-centric. <b>The input file service can be up to 2GB in size.</b> If an input file is larger than 2 GB, then the request can be split into many API calls, but with the same Batch ID. The end-of-file parameter identifies if a file is split into many parts. The BatchID should be the same for all calls to the API for a multi-part file. CAQH will merge the multi-part file once all the parts are received and begin processing the file. The API call will send an HTTP response of 200 when the submission is successful. The input file will be processed as soon as it is received. The status of the file can be checked using the status API by passing the batch ID of the submission. The status will return ‘Queued’, ‘In Process’ or ‘Complete’. 

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-making-request6">Making The Request</h2>

> Full API Request

```python
from requests import post
from json import dumps, loads

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

response = post("https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake", params = params, data = dumps(data), headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batchid", "string"));
params.add(new BasicNameValuePair("eof", "true"));
url += URLEncodedUtils.format(params, "UTF-8");

//setup HTTP Auth
CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

JsonArray body = Json.createArrayBuilder()
    .add(Json.createObjectBuilder()
        .add("provider", Json.createObjectBuilder()
            .add("first_name", "")
            .add("middle_name", "")
            .add("last_name", "")
            .add("name_suffix", "")
            .add("gender", "")
            .add("address1", "")
            .add("address2", "")
            .add("city", "")
            .add("state", "")
            .add("zip", "")
            .add("zip_extn", "")
            .add("phone", "")
            .add("fax", "")
            .add("email", "")
            .add("practice_state", "")
            .add("birthdate", "")
            .add("ssn", "")
            .add("short_ssn", "")
            .add("dea", "")
            .add("upin", "")
            .add("type", "")
            .add("tax_id", "")
            .add("npi", "")
            .add("license_state", "")
            .add("license_number", ""))
        .add("caqh_provider_id", "")
        .add("po_provider_id", "")
        .add("last_recredential_date", "")
        .add("next_recredential_date", "")
        .add("delegation_flag", "")
        .add("application_type", "")
        .add("affiliation_flag", "")
        .add("organization_id", "")
        .add("region_id", ""))
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
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/Intake?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["batchid"] = "string";
queryString["eof"] = "true";
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

You will want to refer to the [Generating a Batch Id](#generating-a-batch-id) section for information on how the initial `batchid` parameter is formed.  Be sure that you are entering the proper batch id for all subsequent calls.

<h3 id="post__popracticelocation_intake-parameters7">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|batchid|query|string|true|none|
|eof|query|boolean|true|none|

<h3 id="post__popracticelocation_intake-body8">Body</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
| body | [Practice_Location_Request](#schemapractice_location_request) | true | none |

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-responses9">Responses</h2>

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
|420|Unknown|Invalid BatchID format. Format is POID_YYYYMMDD_HHMMSS  (POID is the 3 digit organization ID assigned to the participating organization by CAQH)|[ErrorResponse](#schemaerrorresponse)|
|421|[Misdirected request](https://tools.ietf.org/html/rfc7540#section-9.1.2)|The encoded username and password does not match the Organization ID credentials.|[ErrorResponse](#schemaerrorresponse)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|An ‘End of File’ indicator was already received (eof=true) for the submitted BatchID. Please submit a new file using a new BatchID.|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|{"error":"Internal error occurred.  Please try again later."}|[ErrorResponse](#schemaerrorresponse)|

<h2 id="Direct-Assure-POPracticeLocation-IntakePOST-next-step10">Next Steps</h2>

> Parsing the response

```python

message = ""
error = ""

if(response.status_code == 200):
	message = loads(response.json())["message"]
elif(response.status_code == 400):
	error = loads(response.json())["error"]
elif(response.status_code == 401):
	error = loads(response.json())["error"]
elif(response.status_code == 402):
	error = loads(response.json())["error"]
elif(response.status_code == 420):
	error = loads(response.json())["error"]
elif(response.status_code == 421):
	error = loads(response.json())["error"]
elif(response.status_code == 422):
	error = loads(response.json())["error"]
elif(response.status_code == 500):
	error = loads(response.json())["error"]
	

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
After you've submitted your whole input file, you will want to call the [Status Check](#todo) endpoint to see get the status of your operation or the [Exception Report](#todo) endpoint to see what went wrong.

<h1 id="Direct-Assure-Direct-AssureGETintro11"> - Upload Status Check [GET]</h1>

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-getting-started12">Getting Started</h2>

```python
from requests import get

url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/{SubmissionBatchID}"
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
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/{SubmissionBatchID}?";
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
String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/{SubmissionBatchID}?";
```
Participating Organizations can use this service to view the status of Practice Location Submission file processing.

| Method | URL |
|---|---|
|GET | https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/{SubmissionBatchID} |

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-staging-data">Staging The Data</h2>

You will need a `Batch ID` from a previous Practice Location POST call.  This batch ID will be coded into the URL by replacing `{SubmissionBatchID}`.  There are no parameters and no request body.

<h3 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-staging-data-parameter13">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-api-definition14"> GET /POPracticeLocation/{SubmissionBatchID}</h2>

 

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-making-request15">Making The Request</h2>

> Full API Request

```python
from requests import get

username = "yourUsername"
password = "yourPassword"

BatchID = ""

response = get("https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/" + BatchID, auth = (username, password))

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

String BatchID = "string";
String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/" + BatchID;

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

String BatchID = "string";
//base url
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/" + BatchID;

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

`GET /POPracticeLocation/{SubmissionBatchID}`

<h3 id="get__popracticelocation_{submissionbatchid}-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-responses16">Responses</h2>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|"Queued"  (Processing has not begun for the batch)|[SuccessResponse](#schemasuccessresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|"In_Process" (Batch is still in process)|[SuccessResponse](#schemasuccessresponse)|

<h2 id="Direct-Assure-POPracticeLocation-SubmissionBatchID-GET-next-step17">Next Steps</h2>

> Parsing the response

```python

message = ""

if(response.status_code == 200):
	message = loads(response.json())["message"]
elif(response.status_code == 201):
	message = loads(response.json())["message"]
	

```

```csharp

string message = "";

if ((int)result.StatusCode == 200)
{
	message = responseObj.message;
	
}

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

if (response.getStatusLine().getStatusCode() == 201)
{
	message = responseJson.getString("message");
	
}

```
Once the processing has been finished, you may want to use the [Exception Report](#Direct-Assure-Direct-AssureGETintro19) endpoint to check what went wrong if an exception occurred.

<h1 id="Direct-Assure-Direct-AssureGETintro19"> - Input Exception Report Service [GET]</h1>

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-getting-started20">Getting Started</h2>

```python
from requests import get

url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/{SubmissionBatchID}"
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
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/{SubmissionBatchID}";
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
String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/{SubmissionBatchID}";
```

Participating Organizations can use the Exception Report service to view the results of the submission file process and identify any exceptions. 

| Method | URL |
|---|---|
|GET | https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/{SubmissionBatchID} |

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-staging-data20">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

  This endpoint does not contain query parameters or a request body, however you will have to use the `Batch ID` from your Input File Request in the URL.  Replace `{SubmissionBatchID}` with the `Batch ID` return from your Input File Request POST.  If you do not have a `Batch ID`, submit an Input File Request first.
  
<h3 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-staging-data-parameter">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-api-definition21"> GET /POPracticeLocation/MatchReport/{SubmissionBatchID}</h2>

 

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-making-request22">Making The Request</h2>

> Full API Request

```python
from requests import get

username = "yourUsername"
password = "yourPassword"

batchId = "string"

response = get("https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/" + batchId, auth = (username, password))

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

String BatchID = "string";
String url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/" + BatchID;

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

string BatchID = "string";
//base url
string url = "https://proview-demo.caqh.org/DirectAssure/api/POPracticeLocation/MatchReport/" + BatchID;

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

`GET /POPracticeLocation/MatchReport/{SubmissionBatchID}`

Make sure you have a Batch ID prepared from a previous Input File Request call.

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-responses24">Responses</h2>

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

A 200 response returns the exception report in JSON format 

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the exception report in JSON format|[SuccessResponse](#schemasuccessresponse)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|"Batch ID In Process" (Batch is still in queue or in process)|[SuccessResponse](#schemasuccessresponse)|

<h2 id="Direct-Assure-POPracticeLocation-MatchReport-SubmissionBatchID-GET-next-step25">Next Steps</h2>

> Parsing the response

```python

message = ""

if(response.status_code == 200):
	message = loads(response.json())["message"]
elif(response.status_code == 201):
	message = loads(response.json())["message"]
	

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
  
  Once you have read and understood your exception, you will want to revisit the Input File Submission endpoint with the appropriate changes needed to successfully submit an input file.  If you continue to have trouble, please reach out to CAQH technical support for assistance.

<h1 id="Direct-Assure-Direct-AssureGETintro26"> - Direct Assure Extract [GET]</h1>

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-getting-started27">Getting Started</h2>

```python
from requests import get

url = "https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities"
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
string url = "https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities?";
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
String url = "https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities?";
```
DirectAssure 2.0 Extract service can be used by Participating Organizations to access provider practice location data from CAQH ProView. The DirectAssure 2.0 API is designed to accept a range of attestation dates and return relevant Provider Directory data elements for all providers who attested within that date range. The extract can be requested for a date range that spans seven days or less. If the date range exceeds seven days, an error code will be returned. If there are multiple attestations for a provider within a date range, only the latest attestation data within the date range will be returned. The service will return data only for providers who have attested after DirectAssure 2.0 go-live date.

| Method | URL |
|---|---|
|GET | https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities |

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-staging-data27">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
organizationId = 'string'
fromDate = 'mm/dd/yyyy'
toDate = 'mm/dd/yyyy'

params = {
  "organizationId": organizationId,
  "fromDate": "mm/dd/yyyy",
  "toDate": "mm/dd/yyyy"
}
```

```csharp

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["organizationId"] = "string";
queryString["fromDate"] = "mm/dd/yyyy";
queryString["toDate"] = "mm/dd/yyyy";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("organizationId", "string"));params.add(new BasicNameValuePair("fromDate", "mm/dd/yyyy"));params.add(new BasicNameValuePair("toDate", "mm/dd/yyyy"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-staging-data-parameter">Parameters</h3>

  Three-digit numeric Organization ID number assigned by CAQH to a Participating organization  Begin date range of the Provider attestations – format: "mm/dd/yyyy".  End date of the Provider attestations – format: "mm/dd/yyyy".   The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-api-definition28"> GET /directassureextractapi/api/v5/entities</h2>

The extract will include the version of the address submitted by the plan in their input file “plan_submitted_practice_locations” (if applicable), the standardized version of the address “standardized_practice_location” (if applicable), and the address the provider attested to “display_practice_location”. The display address will contain the provider’s response.

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-making-request29">Making The Request</h2>

> Full API Request

```python
from requests import get

headers = {
  "Accept": '*/*'
}

params = {
  "organizationId": 'string',
  "fromDate": 'mm/dd/yyyy',
  "toDate": 'mm/dd/yyyy'
}

username = "yourUsername"
password = "yourPassword"

response = get("https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities", params = params, headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("organizationId", "string"));
params.add(new BasicNameValuePair("fromDate", "mm/dd/yyyy"));
params.add(new BasicNameValuePair("toDate", "mm/dd/yyyy"));
url += URLEncodedUtils.format(params, "UTF-8");

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
string url = "https://proview-demo.caqh.org/DirectAssure/api/directassureextractapi/api/v5/entities?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["organizationId"] = "string";
queryString["fromDate"] = "mm/dd/yyyy";
queryString["toDate"] = "mm/dd/yyyy";
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

`GET /directassureextractapi/api/v5/entities`

<h3 id="daextractget-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|organizationId|query|string|true|Three-digit numeric Organization ID number assigned by CAQH to a Participating organization|
|fromDate|query|string|true|Begin date range of the Provider attestations – format: mm/dd/yyyy|
|toDate|query|string|true|End date of the Provider attestations – format: mm/dd/yyyy |

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-responses30">Responses</h2>

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

A 200 response returns the exception report in JSON format 

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Extract request has been successfully created. Provider data will be returned in JSON format.  Refer to the JSON schema in the appendix below for its data elements and structure.|[ExtractApi](#schemaextractapi)|
|294|Unknown|Provider has no attestation data|[SuccessResponse](#schemasuccessresponse)|

<h2 id="Direct-Assure-directassureextractapi-api-v5-entitiesGET-next-step31">Next Steps</h2>

> Parsing the response

```python

message = ""

extract_request_end_date = ""
extract_request_start_date = ""
extract_timestamp = ""
extract_version = ""
organization_id = ""
providers = {}

if(response.status_code == 200):
	extract_request_end_date = loads(response.json())["extract_request_end_date"]
	extract_request_start_date = loads(response.json())["extract_request_start_date"]
	extract_timestamp = loads(response.json())["extract_timestamp"]
	extract_version = loads(response.json())["extract_version"]
	organization_id = loads(response.json())["organization_id"]
	providers = loads(response.json())["providers"]
elif(response.status_code == 294):
	message = loads(response.json())["message"]
	

```

```csharp

string extract_request_end_date = "";
string extract_request_start_date = "";
string extract_timestamp = "";
string extract_version = "";
string organization_id = "";
string providers = "";

if ((int)result.StatusCode == 200)
{
	extract_request_end_date = responseObj.extract_request_end_date;
	extract_request_start_date = responseObj.extract_request_start_date;
	extract_timestamp = responseObj.extract_timestamp;
	extract_version = responseObj.extract_version;
	organization_id = responseObj.organization_id;
	providers = responseObj.providers;
	
}

string message = "";

if ((int)result.StatusCode == 294)
{
	message = responseObj.message;
	
}

```
```java

String extract_request_end_date = "";
String extract_request_start_date = "";
String extract_timestamp = "";
String extract_version = "";
String organization_id = "";
String providers = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	extract_request_end_date = responseJson.getString("extract_request_end_date");
	extract_request_start_date = responseJson.getString("extract_request_start_date");
	extract_timestamp = responseJson.getString("extract_timestamp");
	extract_version = responseJson.getString("extract_version");
	organization_id = responseJson.getString("organization_id");
	providers = responseJson.getString("providers");
	
}

String message = "";

if (response.getStatusLine().getStatusCode() == 294)
{
	message = responseJson.getString("message");
}

```
  
If you're still having issues running the code, take a look at the <a href="../pages/CAQH DirectAssure.htm">CAQH Technical Specifications</a> or reach out to CAQH for technical assistance.
