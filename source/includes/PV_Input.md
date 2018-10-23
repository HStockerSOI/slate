

<h1 id="ProView-Document-Api-ProView-Document-ApiGETintro"> - Document Retrieval [GET]</h1>

<h2 id="ProView-Document-Api-suppdocsGET-getting-started">Getting Started</h2>

```python
from requests import get

url = "https://proview.caqh.org/DocumentAPI/api/suppdocs"
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
string url = "https://proview.caqh.org/DocumentAPI/api/suppdocs?";
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
String url = "https://proview.caqh.org/DocumentAPI/api/suppdocs?";
```
The Provider Supporting Document Retrieval (PSDR) API is a RESTful web service that allows a participating organization (PO) access to a provider’s document in near real-time.  This allows seamless integration with PO-based systems that utilize documents for internal processing.  
The intent of this feature is for a participating organization to utilize this web service in order to call for a provider’s supporting document(s), in lieu of receiving the supporting documents in a standard or custom extract.

| Method | URL |
|---|---|
|GET | https://proview.caqh.org/DocumentAPI/api/suppdocs |

<h2 id="ProView-Document-Api-suppdocsGET-staging-data">Staging The Data</h2>

> Create parameters object

  If you are storing this data in a database and are unsure about how best to retrieve and parse it, please refer to the [data loading and parsing](#loading-and-parsing-data) section.

```python
organizationID = 'string'
docType = 'string'

params = {
  "organizationID": organizationID,
  "docType": docType
}
```

```csharp

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["organizationID"] = "stringqueryString["docType"] = "string";
//add parameters to base url
url += queryString.ToString();

```

```java

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("organizationID", "string"));params.add(new BasicNameValuePair("docType", "string"));
url += URLEncodedUtils.format(params, "UTF-8");

```
<h3 id="ProView-Document-Api-suppdocsGET-staging-data-parameter">Parameters</h3>

  The data should be passed in to the [parameters](#query-parameters) of the request.

<h2 id="ProView-Document-Api-suppdocsGET-api-definition"> GET /suppdocs</h2>

The web service allows a participating organization to call and retrieve a provider’s supporting document using the following parameters:

*	Single CAQH Provider ID (one provider per real-time request - required)
*	Single Supporting Document Type (one document type per API request – required, refer to Section 2.3)
*	Security  Authorization requires:
	*	PO ID (required)
	* Username (individual or system) (required)
	*	Password (individual or system) (required)

Web Service will return to the calling system:

*	Single Most Recently Approved Document (PDF in raw binary format)
*	HTTP Response Code 

The supporting documents will be returned only if the following are true: 
 
* The requesting user’s associated PO ID matches with the incoming PO ID, or if the incoming is the child of the user’s associated PO ID. 
* The provider is on the participating organization’s roster. 
* The provider has given authorization to the participating organization. 
* The provider’s CAQH ProView data profile is in a complete status, e.g. Initial Profile Complete or Re-attestation. 
 
If these criteria are not satisfied then the supporting document for that CAQH Provider ID will not be returned and the appropriate response code will be supplied.

A participating organization can pass any of the following combinations for credentials:

*	Parent PO username/password  &  parent PO ID
*	Parent PO username/password & child PO ID
*	PO username / password & PO ID

<h2 id="ProView-Document-Api-suppdocsGET-making-request">Making The Request</h2>

> Full API Request

```python
from requests import get

headers = {
  "Accept": '*/*'
}

params = {
  "organizationID": 'string',
  "docType": 'string'
}

username = "yourUsername"
password = "yourPassword"

response = get("https://proview.caqh.org/DocumentAPI/api/suppdocs", params = params, headers = headers, auth = (username, password))

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

String url = "https://proview.caqh.org/DocumentAPI/api/suppdocs?";

List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("organizationID", "string"));params.add(new BasicNameValuePair("docType", "string"));
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
string url = "https://proview.caqh.org/DocumentAPI/api/suppdocs?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["organizationID"] = "string";queryString["docType"] = "string";
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

`GET /suppdocs`

<h3 id="suppdocs-parameters">Parameters</h3>

|Parameter|Type|Required|Description|
|---|---|---|---|
|caqhProviderID|query|string|false|none|
|organizationID|query|string|true|none|
|docType|query|string|true|none|

<h2 id="ProView-Document-Api-suppdocsGET-responses">Responses</h2>

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response containing the requested PDF in raw binary format.|[PdfResponse](#schemapdfresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h2 id="ProView-Document-Api-suppdocsGET-next-step">Next Steps</h2>

> Parsing the response

```python

content = ""

if(response.status_Code == 200):
	content = response.json()["content"]
	

```

```csharp

string content = "";

if ((int)result.StatusCode == 200)
{
	content = responseObj.content;
	
}

```
```java

String content = "";

if (response.getStatusLine().getStatusCode() == 200)
{
	content = responseJson.getString("content");
	
}

```

# Schemas

<h2 id="tocSpdfresponse">PdfResponse</h2>

<a id="schemapdfresponse"></a>

```json
{
  "content": "string"
}

```

*Successful response to Proview Document API*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|content|string|false|none|

