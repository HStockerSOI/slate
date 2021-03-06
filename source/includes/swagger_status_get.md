<h1 id="CAQH-ProView-StatusGet-CAQH-ProView-StatusGet"> - Status Check Request [GET]</h1>

<h2 id="CAQH-ProView-StatusGet-getting-started">Getting Started</h2>

The ProView Status Check API web service can be used by Participating Organizations to view the status of providers in CAQH ProView. Before requesting ProView Status Check API access, POs should have a business case and an existing application with which to consume and use the web service. The ProView Status Check API accepts one provider at a time.
To sign-up for the ProView Status Check API service and get authorization, please contact CAQH ProView Support.

Method | Values
--------- | ------- 
GET | https://proview-demo.caqh.org/RosterAPI/api/providerstatus

```csharp
//includes
using System;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/providerstatus?";
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
String url = "https://proview-demo.caqh.org/RosterAPI/api/providerstatus?";
```
## Staging The Data

>Create parameters object

```python

caqh_provider_id = 12345678
organization_id = 1234
product = 'PV'

params = { 'Product': product,  'Caqh_Provider_Id': caqh_provider_id,  'Organization_id': organization_id }

```
```csharp
//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["Product"] = "string";
queryString["Caqh_Provider_Id"] = "Integer";
queryString["Organization_ID"] = "Integer";
//add parameters to base url
url += queryString.ToString();
```

```java
List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("Product", "string"));
params.add(new BasicNameValuePair("Caqh_Provider_Id", "Integer"));
params.add(new BasicNameValuePair("Organization_ID", "Integer"));
url += URLEncodedUtils.format(params, "UTF-8");

```
The status endpoint will take your [product](#proview-and-directassure), CAQH Provider Id and the Organization Id that can both be found in the CAQH portal.  For this sample we have assumed you are using the ProView `PV` product.  These should be passed in to the [parameters](#query-parameters) of the request.  The Status endpoint only accepts `GET` requests which will not contain a request body.

## GET /ProviderStatus

A PO can request the status of a provider by submitting a call to the following URL. 

Parameter | Format | Max Size | Values | Status Check
--------- | ------- | ---- | -------------------------- | -------
Product | String | 2 | This field is your product.  It should be set to `PV` or `DA`. | Required
Caqh_Provider_Id | Integer | 10 | The field denotes the CAQH assigned provider Identifier. | Required
Organization_ID | Integer | 5 | This field denotes Participating Organization Identifier. | Required

<aside class="notice">
If you do not have the requests library, run the command <code>pip install requests</code> in your command prompt console
or you can find it at the following URL: <br/>http://docs.python-requests.org/en/master/.
</aside>

## Making The Request

<a id="opIdget-providerstatus"></a>

> Full API Request Sample

```python
from requests import get

caqh_provider_id = 12345678
organization_id = 1234
product = 'PV'

params = { 'Product': product,  'Caqh_Provider_Id': caqh_provider_id,  'Organization_id': organization_id }

username = 'username'
password = 'password'
requestURL = 'https://proview-demo.caqh.org/RosterAPI/api/providerstatus'

response = get(requestURL, params = params, auth = (username, password))

#success response
if(response.status_code == 200):
    print(response.json())
#failure response
else:
    print(response.text) 

```

```java
String url = "https://proview-demo.caqh.org/RosterAPI/api/providerstatus?";
List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("Product", "string"));
params.add(new BasicNameValuePair("Caqh_Provider_Id", "Integer"));
params.add(new BasicNameValuePair("Organization_ID", "Integer"));
url += URLEncodedUtils.format(params, "UTF-8");

//setup http auth
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
    System.out.println(responseJson.toString());

} catch (Exception ex)
{
    //handle errors here
    System.out.println(ex.getMessage());
}

```

```csharp
//HTTPClient should be instantiated once and re-used in your application
HttpClient client = new HttpClient();

//base url
string url = "https://proview-demo.caqh.org/RosterAPI/api/providerstatus?";

//setup query parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["Product"] = "string";
queryString["Caqh_Provider_Id"] = "Integer";
queryString["Organization_ID"] = "Integer";
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

`GET /ProviderStatus`

the `get` call is doing a lot for us here, so let's break it down.  The first parameter `requestURL` is the <b>Base URL</b> of the API you are trying to hit.  The next parameter: `params = params` is setting the parameters of the API call itself.  For this example it will format the URL to be `https://proview-demo.caqh.org/RosterAPI/api/providerstatus?Product=PV&Caqh_Provider_Id=12345678&Organization_id=1234`.  There should be no parameters already set in the base URL.  Finally the `auth` parameter takes in the tuple `(username, password)`.  The requests get function supports basic base 64 encoding by default, which is what is used by CAQH and will automatically be set in the header.  If you have properly filled in your credentials and IDs, you should receive a response as follows:

<h2 id="get-providerstatus-responses">Responses</h2>

> Example responses

> 200 Response

> Example Response Body:

```json
{
	'organization_id': '1234',
	'caqh_provider_id': '12345678',
	'roster_status': 'NOT ON ROSTER',
	'provider_status': 'Initial Outreach',
	'provider_status_date': '20180909',
	'provider_practice_state': 'CO',
	'provider_found_flag': 'Y'
}
```

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The system will immediately respond with the status of a provider, or indicate that a provider could not be found with Provider_Found_Flag equal to 'N'.|Inline|

<h3 id="get-providerstatus-responseschema">Response Schema</h3>

Status Code **200**

*StatusCheckResponse*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
| Organization_ID|integer(int32)|false|none|Participating Organization's Identifier|
| CAQH_Provider_ID|integer(int32)|false|none|The field denotes the CAQH assigned provider Identifier.|
| PO_Provider_ID|string|false|none|Provider's Identifier internal to the Participating Organization|
| Roster_Status|string|false|none|Status of the provider on the Plan's current roster. Valid Values: 'ACTIVE'|
| Authorization_Flag|string|false|none|A flag that denotes if the provider has authorized the health plan to view data. Valid values are 'Y' and 'N'|
| Provider_Status|string|false|none|The status of the provider in ProView.|
| Provider_Status_Date|string(date)|false|none|Date provider reached the CAQH Provider Status (Format: YYYYMMDD)|
| Provider_Practice_State|string|false|none|This is the primary practice state of the provider.|
| Provider_Found_Flag|string|false|none|A flag that denotes if the provider is found in the system. Valid values are 'Y' and 'N'|

## Next Steps

> Parsing the response

```csharp

string organization_id = "";
string caqh_provider_id = "";
string roster_status = "";
string provider_status = "";
string provider_status_date = "";
string provider_practice_state = "";
string provider_found_flag = "";

if ((int)result.StatusCode == 200)
{
    organization_id = responseObj.organization_id;
    caqh_provider_id = responseObj.caqh_provider_id;
    provider_status = responseObj.provider_status;
    provider_status_date = responseObj.provider_status_date;
    provider_practice_state = responseObj.provider_practice_state;
    provider_found_flag = responseObj.provider_found_flag;
    
}

```
```java

String organization_id = "";
String caqh_provider_id = "";
String roster_status = "";
String provider_status = "";
String provider_status_date = "";
String provider_practice_state = "";
String provider_found_flag = "";

if (response.getStatusLine().getStatusCode() == 200)
{
    organization_id = responseJson.getString(organization_id);
    caqh_provider_id = responseJson.getString(caqh_provider_id);
    provider_status = responseJson.getString(provider_status);
    provider_status_date = responseJson.getString(provider_status_date);
    provider_practice_state = responseJson.getString(provider_practice_state);
    provider_found_flag = responseJson.getString(provider_found_flag);
    
}
```

Once you have retrieved the status of your rostering, you will want to move on to either Add Roster, in the case that the provider was not found, or another API using the IDs returned here to make those calls.