

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
params.add(new BasicNameValuePair("batchid", "string"));params.add(new BasicNameValuePair("eof", "true"));
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
params.add(new BasicNameValuePair("batchid", "string"));params.add(new BasicNameValuePair("eof", "true"));
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
params.add(new BasicNameValuePair("organizationId", "string"));params.add(new BasicNameValuePair("fromDate", "mm/dd/yyyy"));params.add(new BasicNameValuePair("toDate", "mm/dd/yyyy"));
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

<h1 id="schemas2">Schemas</h1>

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

<h2 id="tocSextractapi">ExtractApi</h2>

<a id="schemaextractapi"></a>

```json
{
  "extract_request_end_date": "string",
  "extract_request_start_date": "string",
  "extract_timestamp": "string",
  "extract_version": "string",
  "organization_id": "string",
  "providers": [
    {
      "attest_id": "string",
      "attestation_date": "string",
      "birth_date": "string",
      "caqh_provider_id": 0,
      "education": [
        {
          "address1": "string",
          "address2": "string",
          "city": "string",
          "completion_date": "string",
          "completion_flag": null,
          "country": "string",
          "county": "string",
          "degree": "string",
          "end_date": "string",
          "graduate_type": "string",
          "incomplete_reason": "string",
          "institution_name": "string",
          "professional_school_flag": true,
          "province": "string",
          "start_date": "string",
          "state": "string",
          "zip_code": "string"
        }
      ],
      "ethnicity": "string",
      "first_name": "string",
      "gender": "string",
      "hospital_affilations": {
        "admitting_arrangement": [
          {
            "address1": "string",
            "address2": "string",
            "arrangement_status": "string",
            "city": "string",
            "country": "string",
            "end_date": "string",
            "hospital_name": "string",
            "start_date": "string",
            "state": "string",
            "zip_code": "string"
          }
        ],
        "admitting_arrangement_flag": true,
        "admitting_privilege": [
          {
            "address1": "string",
            "address2": "string",
            "admitting_privilege_status": "string",
            "ambulatory_surgery_center_flag": null,
            "city": "string",
            "country": "string",
            "end_date": "string",
            "hospital_name": "string",
            "privilege_type": "string",
            "start_date": "string",
            "state": "string",
            "zip_code": "string"
          }
        ],
        "admitting_privileges_flag": true,
        "non_admitting_affiliation": [
          {
            "address1": "string",
            "address2": "string",
            "city": "string",
            "country": "string",
            "end_date": "string",
            "hospital_name": "string",
            "non_admitting_description": "string",
            "non_admitting_status": "string",
            "start_date": "string",
            "state": "string",
            "zip_code": "string"
          }
        ],
        "non_admitting_affiliation_flag": true
      },
      "language": [
        "string"
      ],
      "last_name": "string",
      "medicaid": [
        {
          "medicaid_number": "string",
          "medicaid_state": "string"
        }
      ],
      "medicaid_provider_flag": true,
      "medicare": [
        {
          "medicare_number": "string",
          "medicare_state": "string"
        }
      ],
      "medicare_provider_flag": true,
      "meet_medicare_participating_conditions_flag": true,
      "middle_name": "string",
      "npi_type_1": "string",
      "npi_type_1_validated_flag": true,
      "other_practice_states": [
        null
      ],
      "personal_email": "string",
      "photo_flag": true,
      "photo_last_upload_date": "string",
      "pmoc_cc_email1": "string",
      "pmoc_cc_email2": "string",
      "po_provider_id": "string",
      "practice_location": [
        {
          "displayed_practice_location": {
            "24x7_coverage_flag": true,
            "accessibility": {
              "ada_flag": true,
              "asl_access_flag": true,
              "building_access_flag": true,
              "bus_access_flag": true,
              "child_care_flag": true,
              "handicapped_access_flag": true,
              "impairment_services_flag": true,
              "other_access": "string",
              "other_disability_services": "string",
              "other_disability_services_flag": true,
              "other_handicap_access": "string",
              "parking_access_flag": true,
              "public_transportation_access_flag": true,
              "restroom_access_flag": true,
              "safety_requirements_flag": true,
              "subway_access_flag": true,
              "tdd_hearing_flag": true,
              "train_access_flag": true,
              "tty_access_flag": true,
              "wheelchair_access_flag": true
            },
            "address_standardized_flag": true,
            "caqh_location_id": "string",
            "correspondence_sent_flag": null,
            "currently_practicing_flag": true,
            "directory_listing_pcp_flag": true,
            "directory_listing_pcp_panel_status_flag": true,
            "directory_listing_pcp_specialist_flag": true,
            "directory_listing_specialist_flag": true,
            "directory_listing_specialty": "string",
            "email_address": "string",
            "end_date": "string",
            "fax_number": "string",
            "language_services": [
              {
                "employee_type_interpreter": "string",
                "employee_type_spoken": "string",
                "interpreter_flag": true,
                "interpreter_languages": [
                  null
                ],
                "languages_spoken": [
                  null
                ]
              }
            ],
            "npi_type_2": "string",
            "npi_type_2_validated_flag": true,
            "office_hours": {
              "friday_hours_end": "string",
              "friday_hours_start": "string",
              "monday_hours_end": "string",
              "monday_hours_start": "string",
              "saturday_hours_end": "string",
              "saturday_hours_start": "string",
              "sunday_hours_end": "string",
              "sunday_hours_start": "string",
              "thursday_hours_end": "string",
              "thursday_hours_start": "string",
              "tuesday_hours_end": "string",
              "tuesday_hours_start": "string",
              "wednesday_hours_end": "string",
              "wednesday_hours_start": "string"
            },
            "office_manager_email_address": "string",
            "office_manager_fax_number": "string",
            "office_manager_first_name": "string",
            "office_manager_last_name": "string",
            "office_manager_phone_number": "string",
            "office_phone_number": "string",
            "office_phone_number_extn": "string",
            "office_type": "string",
            "over_50_pct_primary_care_flag": true,
            "plan_participation": [
              {
                "plan_accepting_new_patients_status": "string",
                "plan_participation_status": "string"
              }
            ],
            "practice_address1": "string",
            "practice_address2": "string",
            "practice_affiliation_status": "string",
            "practice_affiliation_status_other": "string",
            "practice_city": "string",
            "practice_country": "string",
            "practice_county": "string",
            "practice_limitation": {
              "age_limitations_flag": true,
              "age_maximum": "string",
              "age_minimum": "string",
              "gender_limitation_flag": true,
              "gender_limitation_type": "string",
              "other_limitations": "string",
              "practice_limitation_flag": true
            },
            "practice_name": "string",
            "practice_province": "string",
            "practice_service_type": "string",
            "practice_services": {
              "accrediting_certifying_program": "string",
              "age_appropriate_immunizations_flag": true,
              "allergy_injections_flag": true,
              "allergy_skin_testing_flag": true,
              "anesthesia_administered_flag": true,
              "anesthesia_category_used": "string",
              "anesthesiologist_first_name": "string",
              "anesthesiologist_last_name": "string",
              "asthma_treatment_flag": true,
              "cardiac_stress_test_flag": true,
              "care_minor_lacerations_flag": true,
              "certification_type": "string",
              "clia_certificate_flag": true,
              "clia_certificate_number": "string",
              "clia_expiration_date": "string",
              "clia_waiver": "string",
              "clia_waiver_number": "string",
              "deliveries_flag": true,
              "diagnostic_ultra_sound_flag": true,
              "drawing_blood_flag": true,
              "ekg_services_flag": true,
              "endoscopy_flag": true,
              "flexible_sigmoidoscopy_flag": true,
              "iv_hydration_treatment_flag": true,
              "lab_onsite_flag": true,
              "laboratory_services_flag": true,
              "laboratory_tax_id": "string",
              "laboratory_type": "string",
              "ob_in_practice_flag": true,
              "office_gynecology_flag": true,
              "osteopathic_manipulation_flag": true,
              "other_cardiac": "string",
              "other_cardiac_testing": "string",
              "other_services": "string",
              "pcb_ob_flag": true,
              "physical_therapy_flag": true,
              "pulmonary_function_testing_flag": true,
              "radiology_service_flag": true,
              "reference_lab_flag": true,
              "reference_lab_name": "string",
              "reference_lab_other": "string",
              "special_skills_provider": "string",
              "special_skills_staff": "string",
              "surgery_description": "string",
              "surgical_procedures_flag": true,
              "treadmill_flag": true,
              "tympanometry_audiometry_flag": true,
              "xray_certification_type": "string",
              "xray_flag": true
            },
            "practice_specialty": [
              "string"
            ],
            "practice_state": "string",
            "practice_sub_specialty": [
              "string"
            ],
            "practice_type": "string",
            "practice_type_other": "string",
            "practice_website": "string",
            "practice_zip_code": "string",
            "primary_practice_flag": true,
            "provider_address_reason_code": "string",
            "provider_address_response_code": "string",
            "staffing_services": {
              "covering_flag": true,
              "end_date": "string",
              "hospitalist_flag": true,
              "locum_tenens_flag": true,
              "moonlighting_flag": true,
              "start_date": "string",
              "urgent_care_flag": true
            },
            "start_date": "string",
            "tax": [
              {
                "group_name": "string",
                "tax_id": "string",
                "tax_id_type": "string",
                "tax_id_validated_flag": true
              }
            ]
          },
          "plan_submitted_practice_locations": [
            {
              "address1": "string",
              "address2": "string",
              "city": "string",
              "country": "string",
              "npi_type_2": "string",
              "po_location_id": "string",
              "po_provider_location_id": "string",
              "practice_name": "string",
              "province": "string",
              "state": "string",
              "tax_id": "string",
              "zip_code": "string"
            }
          ],
          "standardized_practice_location": {
            "address1": "string",
            "address2": "string",
            "city": "string",
            "country": "string",
            "province": "string",
            "state": "string",
            "zip_code": "string"
          }
        }
      ],
      "practice_setting": "string",
      "primary_email": "string",
      "primary_practice_state": "string",
      "provider_type": "string",
      "specialty": [
        {
          "board_certified_flag": true,
          "certificate_expiration_date": "string",
          "initial_certification_date": "string",
          "specialty_board_name": "string",
          "specialty_name": "string",
          "specialty_type": "string"
        }
      ],
      "state_license": [
        {
          "currently_practice_in_state_flag": true,
          "expiration_date": "string",
          "issue_date": "string",
          "license_number": "string",
          "license_state": "string",
          "license_status": "string",
          "license_type": "string"
        }
      ],
      "suffix": "string",
      "training": [
        {
          "address1": "string",
          "address2": "string",
          "affiliated_university": "string",
          "city": "string",
          "completion_date": "string",
          "completion_flag": null,
          "country": "string",
          "county": "string",
          "end_date": "string",
          "incomplete_reason": "string",
          "institution_name": "string",
          "province": "string",
          "start_date": "string",
          "state": "string",
          "training_type": "string",
          "zip_code": "string"
        }
      ],
      "voluntary_medicare_opt_out_flag": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|extract_request_end_date|string|false|none|
|extract_request_start_date|string|false|none|
|extract_timestamp|string|false|none|
|extract_version|string|false|none|
|organization_id|string|false|none|
|providers|[object]|false|none|
|attest_id|string|false|none|
|attestation_date|string|false|none|
|birth_date|string|false|none|
|caqh_provider_id|integer|false|none|
|education|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|city|string|false|none|
|completion_date|string|false|none|
|completion_flag|any|false|none|
|country|string|false|none|
|county|string|false|none|
|degree|string|false|none|
|end_date|string|false|none|
|graduate_type|string|false|none|
|incomplete_reason|string|false|none|
|institution_name|string|false|none|
|professional_school_flag|boolean|false|none|
|province|string|false|none|
|start_date|string|false|none|
|state|string|false|none|
|zip_code|string|false|none|
|ethnicity|string|false|none|
|first_name|string|false|none|
|gender|string|false|none|
|hospital_affilations|object|false|none|
|admitting_arrangement|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|arrangement_status|string|false|none|
|city|string|false|none|
|country|string|false|none|
|end_date|string|false|none|
|hospital_name|string|false|none|
|start_date|string|false|none|
|state|string|false|none|
|zip_code|string|false|none|
|admitting_arrangement_flag|boolean|false|none|
|admitting_privilege|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|admitting_privilege_status|string|false|none|
|ambulatory_surgery_center_flag|any|false|none|
|city|string|false|none|
|country|string|false|none|
|end_date|string|false|none|
|hospital_name|string|false|none|
|privilege_type|string|false|none|
|start_date|string|false|none|
|state|string|false|none|
|zip_code|string|false|none|
|admitting_privileges_flag|boolean|false|none|
|non_admitting_affiliation|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|city|string|false|none|
|country|string|false|none|
|end_date|string|false|none|
|hospital_name|string|false|none|
|non_admitting_description|string|false|none|
|non_admitting_status|string|false|none|
|start_date|string|false|none|
|state|string|false|none|
|zip_code|string|false|none|
|non_admitting_affiliation_flag|boolean|false|none|
|language|[string]|false|none|
|last_name|string|false|none|
|medicaid|[object]|false|none|
|medicaid_number|string|false|none|
|medicaid_state|string|false|none|
|medicaid_provider_flag|boolean|false|none|
|medicare|[object]|false|none|
|medicare_number|string|false|none|
|medicare_state|string|false|none|
|medicare_provider_flag|boolean|false|none|
|meet_medicare_participating_conditions_flag|boolean|false|none|
|middle_name|string|false|none|
|npi_type_1|string|false|none|
|npi_type_1_validated_flag|boolean|false|none|
|other_practice_states|[any]|false|none|
|Empty Object|any|false|This accepts anything, as long as it's valid JSON.|
|personal_email|string|false|none|
|photo_flag|boolean|false|none|
|photo_last_upload_date|string|false|none|
|pmoc_cc_email1|string|false|none|
|pmoc_cc_email2|string|false|none|
|po_provider_id|string|false|none|
|practice_location|[object]|false|none|
|displayed_practice_location|object|false|none|
|24x7_coverage_flag|boolean|false|none|
|accessibility|object|false|none|
|ada_flag|boolean|false|none|
|asl_access_flag|boolean|false|none|
|building_access_flag|boolean|false|none|
|bus_access_flag|boolean|false|none|
|child_care_flag|boolean|false|none|
|handicapped_access_flag|boolean|false|none|
|impairment_services_flag|boolean|false|none|
|other_access|string|false|none|
|other_disability_services|string|false|none|
|other_disability_services_flag|boolean|false|none|
|other_handicap_access|string|false|none|
|parking_access_flag|boolean|false|none|
|public_transportation_access_flag|boolean|false|none|
|restroom_access_flag|boolean|false|none|
|safety_requirements_flag|boolean|false|none|
|subway_access_flag|boolean|false|none|
|tdd_hearing_flag|boolean|false|none|
|train_access_flag|boolean|false|none|
|tty_access_flag|boolean|false|none|
|wheelchair_access_flag|boolean|false|none|
|address_standardized_flag|boolean|false|none|
|caqh_location_id|string|false|none|
|correspondence_sent_flag|any|false|none|
|currently_practicing_flag|boolean|false|none|
|directory_listing_pcp_flag|boolean|false|none|
|directory_listing_pcp_panel_status_flag|boolean|false|none|
|directory_listing_pcp_specialist_flag|boolean|false|none|
|directory_listing_specialist_flag|boolean|false|none|
|directory_listing_specialty|string|false|none|
|email_address|string|false|none|
|end_date|string|false|none|
|fax_number|string|false|none|
|language_services|[object]|false|none|
|employee_type_interpreter|string|false|none|
|employee_type_spoken|string|false|none|
|interpreter_flag|boolean|false|none|
|interpreter_languages|[any]|false|none|
|Empty Object|any|false|This accepts anything, as long as it's valid JSON.|
|languages_spoken|[any]|false|none|
|Empty Object|any|false|This accepts anything, as long as it's valid JSON.|
|npi_type_2|string|false|none|
|npi_type_2_validated_flag|boolean|false|none|
|office_hours|object|false|none|
|friday_hours_end|string|false|none|
|friday_hours_start|string|false|none|
|monday_hours_end|string|false|none|
|monday_hours_start|string|false|none|
|saturday_hours_end|string|false|none|
|saturday_hours_start|string|false|none|
|sunday_hours_end|string|false|none|
|sunday_hours_start|string|false|none|
|thursday_hours_end|string|false|none|
|thursday_hours_start|string|false|none|
|tuesday_hours_end|string|false|none|
|tuesday_hours_start|string|false|none|
|wednesday_hours_end|string|false|none|
|wednesday_hours_start|string|false|none|
|office_manager_email_address|string|false|none|
|office_manager_fax_number|string|false|none|
|office_manager_first_name|string|false|none|
|office_manager_last_name|string|false|none|
|office_manager_phone_number|string|false|none|
|office_phone_number|string|false|none|
|office_phone_number_extn|string|false|none|
|office_type|string|false|none|
|over_50_pct_primary_care_flag|boolean|false|none|
|plan_participation|[object]|false|none|
|plan_accepting_new_patients_status|string|false|none|
|plan_participation_status|string|false|none|
|practice_address1|string|false|none|
|practice_address2|string|false|none|
|practice_affiliation_status|string|false|none|
|practice_affiliation_status_other|string|false|none|
|practice_city|string|false|none|
|practice_country|string|false|none|
|practice_county|string|false|none|
|practice_limitation|object|false|none|
|age_limitations_flag|boolean|false|none|
|age_maximum|string|false|none|
|age_minimum|string|false|none|
|gender_limitation_flag|boolean|false|none|
|gender_limitation_type|string|false|none|
|other_limitations|string|false|none|
|practice_limitation_flag|boolean|false|none|
|practice_name|string|false|none|
|practice_province|string|false|none|
|practice_service_type|string|false|none|
|practice_services|object|false|none|
|accrediting_certifying_program|string|false|none|
|age_appropriate_immunizations_flag|boolean|false|none|
|allergy_injections_flag|boolean|false|none|
|allergy_skin_testing_flag|boolean|false|none|
|anesthesia_administered_flag|boolean|false|none|
|anesthesia_category_used|string|false|none|
|anesthesiologist_first_name|string|false|none|
|anesthesiologist_last_name|string|false|none|
|asthma_treatment_flag|boolean|false|none|
|cardiac_stress_test_flag|boolean|false|none|
|care_minor_lacerations_flag|boolean|false|none|
|certification_type|string|false|none|
|clia_certificate_flag|boolean|false|none|
|clia_certificate_number|string|false|none|
|clia_expiration_date|string|false|none|
|clia_waiver|string|false|none|
|clia_waiver_number|string|false|none|
|deliveries_flag|boolean|false|none|
|diagnostic_ultra_sound_flag|boolean|false|none|
|drawing_blood_flag|boolean|false|none|
|ekg_services_flag|boolean|false|none|
|endoscopy_flag|boolean|false|none|
|flexible_sigmoidoscopy_flag|boolean|false|none|
|iv_hydration_treatment_flag|boolean|false|none|
|lab_onsite_flag|boolean|false|none|
|laboratory_services_flag|boolean|false|none|
|laboratory_tax_id|string|false|none|
|laboratory_type|string|false|none|
|ob_in_practice_flag|boolean|false|none|
|office_gynecology_flag|boolean|false|none|
|osteopathic_manipulation_flag|boolean|false|none|
|other_cardiac|string|false|none|
|other_cardiac_testing|string|false|none|
|other_services|string|false|none|
|pcb_ob_flag|boolean|false|none|
|physical_therapy_flag|boolean|false|none|
|pulmonary_function_testing_flag|boolean|false|none|
|radiology_service_flag|boolean|false|none|
|reference_lab_flag|boolean|false|none|
|reference_lab_name|string|false|none|
|reference_lab_other|string|false|none|
|special_skills_provider|string|false|none|
|special_skills_staff|string|false|none|
|surgery_description|string|false|none|
|surgical_procedures_flag|boolean|false|none|
|treadmill_flag|boolean|false|none|
|tympanometry_audiometry_flag|boolean|false|none|
|xray_certification_type|string|false|none|
|xray_flag|boolean|false|none|
|practice_specialty|[string]|false|none|
|practice_state|string|false|none|
|practice_sub_specialty|[string]|false|none|
|practice_type|string|false|none|
|practice_type_other|string|false|none|
|practice_website|string|false|none|
|practice_zip_code|string|false|none|
|primary_practice_flag|boolean|false|none|
|provider_address_reason_code|string|false|none|
|provider_address_response_code|string|false|none|
|staffing_services|object|false|none|
|covering_flag|boolean|false|none|
|end_date|string|false|none|
|hospitalist_flag|boolean|false|none|
|locum_tenens_flag|boolean|false|none|
|moonlighting_flag|boolean|false|none|
|start_date|string|false|none|
|urgent_care_flag|boolean|false|none|
|start_date|string|false|none|
|tax|[object]|false|none|
|group_name|string|false|none|
|tax_id|string|false|none|
|tax_id_type|string|false|none|
|tax_id_validated_flag|boolean|false|none|
|plan_submitted_practice_locations|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|city|string|false|none|
|country|string|false|none|
|npi_type_2|string|false|none|
|po_location_id|string|false|none|
|po_provider_location_id|string|false|none|
|practice_name|string|false|none|
|province|string|false|none|
|state|string|false|none|
|tax_id|string|false|none|
|zip_code|string|false|none|
|standardized_practice_location|object|false|none|
|address1|string|false|none|
|address2|string|false|none|
|city|string|false|none|
|country|string|false|none|
|province|string|false|none|
|state|string|false|none|
|zip_code|string|false|none|
|practice_setting|string|false|none|
|primary_email|string|false|none|
|primary_practice_state|string|false|none|
|provider_type|string|false|none|
|specialty|[object]|false|none|
|board_certified_flag|boolean|false|none|
|certificate_expiration_date|string|false|none|
|initial_certification_date|string|false|none|
|specialty_board_name|string|false|none|
|specialty_name|string|false|none|
|specialty_type|string|false|none|
|state_license|[object]|false|none|
|currently_practice_in_state_flag|boolean|false|none|
|expiration_date|string|false|none|
|issue_date|string|false|none|
|license_number|string|false|none|
|license_state|string|false|none|
|license_status|string|false|none|
|license_type|string|false|none|
|suffix|string|false|none|
|training|[object]|false|none|
|address1|string|false|none|
|address2|string|false|none|
|affiliated_university|string|false|none|
|city|string|false|none|
|completion_date|string|false|none|
|completion_flag|any|false|none|
|country|string|false|none|
|county|string|false|none|
|end_date|string|false|none|
|incomplete_reason|string|false|none|
|institution_name|string|false|none|
|province|string|false|none|
|start_date|string|false|none|
|state|string|false|none|
|training_type|string|false|none|
|zip_code|string|false|none|
|voluntary_medicare_opt_out_flag|boolean|false|none|

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

