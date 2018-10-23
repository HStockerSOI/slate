

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPIGETintro"> - Get Roster Result [GET]</h1>

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-getting-started">Getting Started</h2>

```python
from requests import get

url = "https://proview-demo.caqh.org/RosterAPI/API/Roster"
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
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
String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
```
A PO can request the status and results of a previous Add to Roster, Update on Roster, or Delete from Roster request by submitting the system-generated Batch ID in the following URL.

| Method | URL |
|---|---|
|GET | https://proview-demo.caqh.org/RosterAPI/API/Roster |

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-staging-data">Staging The Data</h2>

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
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batch_id", "string"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-staging-data-parameter">Parameters</h3>

  The batch id from a previous create, update or delete request.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-api-definition"> GET /RosterAPI/API/Roster</h2>

The Roster Operation Result will take a `batch_id` in its parameters.  This batch id will have been returned to you by a successful `POST`, `PUT` or `DELETE`.  A `GET` call cannot have a request body.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-making-request">Making The Request</h2>

> Full API Request

```python
from requests import get

headers = {
  "Accept": '*/*'
}

params = {
  "batch_id": 'string'
}

username = "yourUsername"
password = "yourPassword"

response = get("https://proview-demo.caqh.org/RosterAPI/API/Roster", params = params, headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("batch_id", "string"));
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

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

`GET /RosterAPI/API/Roster`

<h3 id="get__rosterapi_api_roster-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|batch_id|query|string|true|The batch id from a previous create, update or delete request.|

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-responses">Responses</h2>

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

### Update Response

### Add Response

### Delete Response

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response will return a provider object.|[ResultResponse](#schemaresultresponse)|

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterGET-next-step">Next Steps</h2>

> Parsing the response

```python

batch_status = ""
batch_time = ""
roster_result = ""

if(response.status_code == 200):
	batch_status = loads(response.json())["batch_status"]
	batch_time = loads(response.json())["batch_time"]
	roster_result = loads(response.json())["roster_result"]
	

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
```java

String batch_status = "";
String batch_time = "";
String roster_result = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	batch_status = responseJson.getString("batch_status");
	batch_time = responseJson.getString("batch_time");
	roster_result = responseJson.getString("roster_result");
	
}

```

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPIPUTintro"> - Update Roster Request [PUT]</h1>

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-getting-started">Getting Started</h2>

```python
from requests import put
from json import dumps, loads

url = "https://proview-demo.caqh.org/RosterAPI/API/Roster"
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
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
String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
```
A PO can update one or more providers on the roster by submitting a call to the following URL. At least one of the fields with an asterisk (*) is required to process an Update. See 2.1.2 for the immediate system response.

| Method | URL |
|---|---|
|PUT | https://proview-demo.caqh.org/RosterAPI/API/Roster |

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
product = 'string'

params = {
  "product": product
}
```

```csharp

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "string";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "string"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-staging-data-parameter">Parameters</h3>

  Product should be either PV or DA for ProView or DirectAssure.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h3 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-staging-data-body">Body</h3>

    The data should be passed in to the [request body](#request-body) of the request.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-api-definition"> PUT /RosterAPI/API/Roster</h2>

The Update Roster Request takes in an Update Roster object containing a subset of the Roster fields which can be updated.  Keep in mind that this update endpoint takes an array and will reject a request sending a single update object.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-making-request">Making The Request</h2>

> Full API Request

```python
from requests import put
from json import dumps, loads

headers = {
  "Content-Type": 'application/json',
  "Accept": '*/*'
}

params = {
  "product": 'string'
}

data = [
  {
    "organization_id": "string",
    "caqh_provider_id": "string",
    "po_provider_id": "string",
    "last_recredential_date": "string",
    "next_recredential_date": "string",
    "delegation_flag": "string",
    "application_type": "string",
    "affiliation_flag": "string"
  }
]

username = "yourUsername"
password = "yourPassword"

response = put("https://proview-demo.caqh.org/RosterAPI/API/Roster", params = params, data = dumps(data), headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "string"));
url += URLEncodedUtils.format(params, "UTF-8");

//setup HTTP Auth
CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

JsonArray body = Json.createArrayBuilder()
    .add(Json.createObjectBuilder()
        .add("organization_id", "")
        .add("caqh_provider_id", "")
        .add("po_provider_id", "")
        .add("last_recredential_date", "")
        .add("next_recredential_date", "")
        .add("delegation_flag", "")
        .add("application_type", "")
        .add("affiliation_flag", ""))
    .build();

try
{
    HttpPut request = new HttpPut(url);
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "string";
//add parameters to base url
url += queryString.ToString();

//set up HTTP auth (replace username/password with yours)
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

JObject body = new JObject(
    new JProperty("organization_id", ""),
    new JProperty("caqh_provider_id", ""),
    new JProperty("po_provider_id", ""),
    new JProperty("last_recredential_date", ""),
    new JProperty("next_recredential_date", ""),
    new JProperty("delegation_flag", ""),
    new JProperty("application_type", ""),
    new JProperty("affiliation_flag", ""));

//Body is taken as an array, even with only one element
JArray bodyArray = new JArray(body);
var content = new StringContent(bodyArray.ToString(), Encoding.UTF8, "application/json");
content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

//Send the PUT Request
var result = client.PutAsync(url, content).Result;

//get the response message and parse it
string resultTxt = result.Content.ReadAsStringAsync().Result;
dynamic responseObj = JsonConvert.DeserializeObject<dynamic>(resultTxt);
Console.WriteLine(responseObj.ToString());

```

`PUT /RosterAPI/API/Roster`

<h3 id="put__rosterapi_api_roster-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|product|query|string|true|Product should be either PV or DA for ProView or DirectAssure.|

<h3 id="put__rosterapi_api_roster-body">Body</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
| body | [RosterUpdateRequest](#schemarosterupdaterequest) | true | none |

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-responses">Responses</h2>

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

If your request has been formatted correctly, it will return a batch id and a 200 response code.  If not, the response object will have a "Message" field that will contain the error.  

* 200 Success
* 401 Unauthorized
* 400 Bad Request

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[RosterResponse](#schemarosterresponse)|

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPUT-next-step">Next Steps</h2>

> Parsing the response

```python

batch_Id = ""

if(response.status_code == 200):
	batch_Id = loads(response.json())["batch_Id"]
	

```

```csharp

string batch_Id = "";

if ((int)result.StatusCode == 200)
{
	batch_Id = responseObj.batch_Id;
	
}

```
```java

String batch_Id = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	batch_Id = responseJson.getString("batch_Id");
	
}

```

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-RosterAPIPOSTintro"> - Add Roster Request [POST]</h1>

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-getting-started">Getting Started</h2>

```python
from requests import post

url = "https://proview-demo.caqh.org/RosterAPI/API/Roster"
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
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
String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";
```
A PO can add one or more providers to the roster by submitting a call to the following URL. Similar to the Add Roster File process, there are different required and optional fields for the Quick Add verses the Initial Add, and at least one of the fields with an asterisk (*) is required to process an Initial Add.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/RosterAPI/API/Roster |

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-staging-data">Staging The Data</h2>

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
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "PV"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-staging-data-parameter">Parameters</h3>

  The status endpoint will take the Product of `PV` or `DA`, depending on if you are on ProView or DirectAssure.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-api-definition"> POST /RosterAPI/API/Roster</h2>

The body of the Roster Add endpoint can take one or more [provider add](#tocSaddrequest) objects.  If you only have one object, the body must still be passed in as an array.  All body fields are passed in as strings, however many of them have a specific format.  Please see the example object for the format that is required.

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-making-request">Making The Request</h2>

> Full API Request

```python
from requests import post

headers = {
  "Content-Type": 'application/json',
  "Accept": '*/*'
}

params = {
  "product": 'PV'
}

username = "yourUsername"
password = "yourPassword"

response = post("https://proview-demo.caqh.org/RosterAPI/API/Roster", params = params, headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "PV"));
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
string url = "https://proview-demo.caqh.org/RosterAPI/API/Roster?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "PV";
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

`POST /RosterAPI/API/Roster`

<h3 id="roster-post-add-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|product|query|string|true|The status endpoint will take the Product of `PV` or `DA`, depending on if you are on ProView or DirectAssure.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product|PV|

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-responses">Responses</h2>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The Add to Roster Web Service immediately returns a Response JSON that includes a system-generated unique Batch ID for the request.|[RosterResponse](#schemarosterresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If there was an error with the request, a 400 status code will be returned with an object that contains the field "Message" with the error.  Please check to make sure your JSON request body is properly formatted.|[RosterErrorReponse](#schemarostererrorreponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If your credentials are incorrect or not authorized to access this endpoint, it will return a 401 status code representing an unauthorized response.  Please double check your credentials and the URL to make sure you're calling the correct environment.|[RosterErrorReponse](#schemarostererrorreponse)|

<h2 id="CAQH-ProView-RosterAPI-RosterAPI-API-RosterPOST-next-step">Next Steps</h2>

> Parsing the response

```python

batch_Id = ""
error = ""

if(response.status_code == 200):
	batch_Id = loads(response.json())["batch_Id"]
elif(response.status_code == 400):
	error = loads(response.json())["error"]
elif(response.status_code == 401):
	error = loads(response.json())["error"]
	

```

```csharp

string batch_Id = "";

if ((int)result.StatusCode == 200)
{
	batch_Id = responseObj.batch_Id;
	
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
```java

String batch_Id = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	batch_Id = responseJson.getString("batch_Id");
	
}

String Message = "";

if (response.getStatusLine().getStatusCode() == 400)
{
	Message = responseJson.getString("Message");
	
}

String Message = "";

if (response.getStatusLine().getStatusCode() == 401)
{
	Message = responseJson.getString("Message");
	
}

```
You will receive a [batch id](#tocSaddresponse) which should be passed in to the [roster operation result](#todo) periodically to check if the operation has been processed.  

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

<h1 id="CAQH-ProView-RosterAPI-CAQH-ProView-deRosterAPIPOSTintro"> - Roster Delete Request [PUT]</h1>

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-getting-started">Getting Started</h2>

```python
from requests import post

url = "https://proview-demo.caqh.org/ProviewAPI/API/Deroster"
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
string url = "https://proview-demo.caqh.org/ProviewAPI/API/Deroster?";
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
String url = "https://proview-demo.caqh.org/ProviewAPI/API/Deroster?";
```
A PO can delete one or more providers from the roster by submitting a call to the following URL.

| Method | URL |
|---|---|
|POST | https://proview-demo.caqh.org/ProviewAPI/API/Deroster |

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
product = 'string'

params = {
  "product": product
}
```

```csharp

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "string";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "string"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="CAQH-ProView-RosterAPI-DerosterPOST-staging-data-parameter">Parameters</h3>

  The status endpoint will take the Product of `PV` or `DA`, depending on if you are on ProView or DirectAssure.  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-api-definition"> PUT /Deroster</h2>

The deroster endpoint will take in an array of objects containing the Organization ID and the CAQH Provider ID.  You will be returned a Batch Id which should be passed into the Roster Result endpoint.

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-making-request">Making The Request</h2>

> Full API Request

```python
from requests import put

headers = {
  "Accept": '*/*'
}

params = {
  "product": 'string'
}

username = "yourUsername"
password = "yourPassword"

response = put("https://proview-demo.caqh.org/ProviewAPI/API/Deroster", params = params, headers = headers, auth = (username, password))

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

String url = "https://proview-demo.caqh.org/ProviewAPI/API/Deroster?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("product", "string"));
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
    HttpPut request = new HttpPut(url);
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
string url = "https://proview-demo.caqh.org/ProviewAPI/API/Deroster?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["product"] = "string";
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
var result = client.PutAsync(url, content).Result;

//get the response message and parse it
string resultTxt = result.Content.ReadAsStringAsync().Result;
dynamic responseObj = JsonConvert.DeserializeObject<dynamic>(resultTxt);
Console.WriteLine(responseObj.ToString());

```

`POST /Deroster`

<h3 id="delreq-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|product|query|string|true|The status endpoint will take the Product of `PV` or `DA`, depending on if you are on ProView or DirectAssure.|

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-responses">Responses</h2>

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

If your request has been formatted correctly, it will return a batch id and a 200 response code.  If not, the response object will have a "Message" field that will contain the error.

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 Response returns a batch ID.|[RosterResponse](#schemarosterresponse)|

<h2 id="CAQH-ProView-RosterAPI-DerosterPOST-next-step">Next Steps</h2>

> Parsing the response

```python

batch_Id = ""

if(response.status_code == 200):
	batch_Id = loads(response.json())["batch_Id"]
	

```

```csharp

string batch_Id = "";

if ((int)result.StatusCode == 200)
{
	batch_Id = responseObj.batch_Id;
	
}

```
```java

String batch_Id = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	batch_Id = responseJson.getString("batch_Id");
	
}

```

### See also:

* [Update Roster](#todo)
* [Delete Roster](#todo)
* [Roster Quick Add](#todo)

