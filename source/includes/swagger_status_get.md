<h1 id="CAQH-ProView-StatusGet-CAQH-ProView-StatusGet"> - Status Check Request [GET]</h1>

<h2 id="CAQH-ProView-StatusGet-getting-started">Getting Started</h2>

The ProView Status Check API web service can be used by Participating Organizations to view the status of providers in CAQH ProView. Before requesting ProView Status Check API access, POs should have a business case and an existing application with which to consume and use the web service. The ProView Status Check API accepts one provider at a time.
To sign-up for the ProView Status Check API service and get authorization, please contact CAQH ProView Support.

Method | Values
--------- | ------- 
GET | https://proview.caqh.org/RosterAPI/api/providerstatus

## Staging The Data

>Create parameters object

```python

caqh_provider_id = 12345678
organization_id = 1234
product = 'PV'

params = { 'Product': product,  'Caqh_Provider_Id': caqh_provider_id,  'Organization_id': organization_id }

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
URL obj = new URL("https://proview.caqh.org/RosterAPI/api/ProviderStatus?Product=PV&Caqh_Provider_Id=string&Organization_id=string");
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