---
title: CAQH API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - python: Python
  - java: Java
  - csharp: C#
includes:
  - swagger_status_get
  - swagger_roster_post
toc_footers: []
search: true
headingLevel: 2
---

# CAQH ProView® and DirectAssure® API Introduction (v. 2.1)
>You will see syntax highlighted code snippets as you read through the documentation.

>Please switch to the language you're most comfortable with in the tabs above.

Welcome to the <b>ProView® and DirectAssure® Roster and Status Check API Specifications for Participating Organizations</b>.  This specification document outlines the instructions for Participating Organizations (PO) to access the API service offered in the CAQH ProView profile. This document also serves as reference for the service request parameters, service responses and other information pertinent to the dissemination of provider information through the API. While there are similar parameters and commands to add, update, and delete providers from a ProView or DirectAssure roster, the API URL is different for each roster action.

## CAQH API Process Flow

Interacting with the CAQH API will often require several REST calls to be made in sequence.  You will receive a `batch-id` in the response to any request to add, update or delete data.  This allows you to continue performing other operations and check in later if the CAQH process is taking a long time.  Each section in this documentation will have a `Next Steps` section that will link you to the calls you may want to make next.  Please consult the following diagram to get an idea of what calls are commonly linked together:

<img id="myImg" src="images/HealthPlan workflow with CAQH APIs.png" style="width:100%;max-width:300px">

<!-- The Modal -->
<div id="myimgModel" class="imgModel">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="imgModel-content" id="img01">
</div>

# Requirements

Make sure you have downloaded the most up-to-date SDK (Software Development Kit) and an IDE (Integrated Development Environment) for your language of choice.  You should be familiar with the syntax and have a basic knowledge of your language and how software normally communicates with APIs (Application Programming Interface).  If you have no experience with any of the languages, we suggest you familiarize yourself with the basics and then return to this documentation.

# Loading and Parsing Data

```python
import pyodbc 

#pass your connection string into the "connect" function
cnxn = pyodbc.connect("Driver={SQL Server Native Client 11.0};"
                      "Server=server_name;"
                      "Database=db_name;"
                      "Trusted_Connection=yes;")


cursor = cnxn.cursor()
cursor.execute('SELECT * FROM DirectoryRosterFile')

data = []

for row in cursor:
    roster = {}
	
	roster["provider"] = row.provider
	roster["organization_id"] = row.organization_id
	roster["application_type"] = row.application_type
	#continue for all other applicable fields
	
	#add the roster object to the data array
	data.append(roster)
```

In this code snippet we are querying data from a database and composing an object from the data rows.  Your own database implementation may vary, so be sure to research into your specific technology for how to connect to and query from a database or data store.  For this example we will be assuming you are using SQL Server (or MSSQL, Microsoft SQL).  If you are using a different technology, hopefully it can provide enough of a starting point to research the relevant solutions.

You may choose to separate your data into multiple tables in your database, so update your query to reflect the necessary joins to retrieve all the relevant data.  In this case we have simplified the example so all the data is stored in a single table.  The SQL language we are using here is specific to SQL Server (Transact-SQL), so make sure you're aware of what SQL language your database uses and update it accordingly.

This data will be passed into your REST calls in the form of URL parameters or the request body.  See the section below for more information on how to form a REST request in your language of choice.

<aside>Use the command <code>pip install pyodbc</code> to install the <code>pyodbc</code> library necessary for this snippet.</aside>

# Anatomy of a REST Call

### What Are RESTful Web Services?

RESTful web services are built to work best on the Web. Representational State Transfer (REST) is an architectural style that specifies constraints, such as the uniform interface, that if applied to a web service induce desirable properties, such as performance, scalability, and modifiability, that enable services to work best on the Web. In the REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs), typically links on the Web. 

The resources are acted upon by using a set of simple, well-defined operations. The REST architectural style constrains an architecture to a client/server architecture and is designed to use a stateless communication protocol, typically HTTPS. In the REST architecture style, clients and servers exchange representations of resources by using a standardized interface and protocol.


### Headers

>Creating Headers Object

```python
#Set up your header object as a simple python 
#dictionary to be passed into the request call
headers = {
  "Content-Type": 'application/json'
}

#In python we pass our authorization credentials 
#directly into the request, so for now they can
#be set up as string variables
username = "yourUsername"
password = "yourPassword"
```
```csharp
//set up HTTP authentication header
HttpClient client = new HttpClient();
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
```
A REST call will need to include headers to communicate meta-information about the call itself.  In the headers to the CAQH API, you will be passing in the content type of the message body (JSON) and your authorization.  See in the sidebar for how to best set up your headers in your language.

CAQH uses a standard form of authorization where your credentials are sent in the form of

`Basic username:password` 

base 64 encoded.

### Query Parameters

There are two ways to pass in endpoint-specific data to an API.  The first way is passing parameters attached to the URL itself.  This is in the form of appending parameters onto the end of the URL, for example if you were trying to call the following endpoint 

>Creating Query Parameter Object

```python
#Set up your query parameters object as a simple 
#python dictionary to be passed into the request call
params = {
  "parameter1": "value",
  "parameter2": 0
}
```

```csharp
//base url for api call
string url = "https://proview-demo.caqh.org/api/endpoint?";
//url parameters to add
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["param1"] = "value1";
queryString["param2"] = "value2";
...
//add params onto end of url
url += queryString.ToString();
//new url: https://proview-demo.caqh.org/api/endpoint?param1=value1&param2=value2
```

`https://URL.url/api/endpoint` 

with the query parameters `parameter1` and `parameter2`, you would format the URL as follows:

`https://URL.url/api/endpoint?Parameter=value&parameter2=0`

Notice how the query parameters begin after `/endpoint` with a `?` and are separated by an `&`.  You will likely not have to format the URL yourself as your language will have a way to pass in a parameter object and automatically format the URL with them.  See the code samples on the right for how this is best accomplished in your language of choice.

### Request Body

>Creating Request Body Object

```python
#Set up your request body object as a simple 
#python dictionary to be passed into the request call
data = {
	"field1": "string",
	"field2": 0
}
```

```csharp
//example of setting up a nested JSON body object
JObject body = new JObject(
new JProperty("provider", new JObject(
    new JProperty("first_name", ""),
    new JProperty("middle_name", ""),
    ...
    new JProperty("license_number", ""))),
new JProperty("caqh_provider_id", ""),
new JProperty("po_provider_id", ""),
...
new JProperty("region_id", ""));

//Many API calls require an array of JSON, even if it's only one object being sent
JArray bodyArray = new JArray(body);
var content = new StringContent(bodyArray.ToString(), Encoding.UTF8, "application/json");
content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
```

The second way that information can be sent across is in the form of a body object attached to a `POST` call or `PUT` call.  The CAQH API will accept JSON objects in the body of POST calls.  You will be able to find the proper object in the documentation for the endpoint.  Not all fields on the body object will be required, so pay attention to the minimum required fields and their format.  The request body will always be JSON, however you may receive XML responses from the API, so pay attention to the documentation and what format the response is in.  

In the code snippet we've put together a body object with the following fields:

| Field Name | Type | Value|
|---|---|---|
| field1 | string | "string" |
| field2 | integer | 0 |

### Sending the request

>Sending the Full Request

```python
#The requests library contains very easy to use
#HTTP methods.  Use the command "pip install requests"
#in your command prompt to install the requests library.
from requests import get, post, put, delete

headers = {
  "Content-Type": 'application/json'
}

params = {
  "parameter": "value",
  "parameter2": 0
}

data = {
	"field1": "string",
	"field2": 0
}

#A single URL can be set up to accept all HTTP methods
URL = "https://URL.url/api/endpoint"
username = "username"
password = "password"

responseGet = get(URL, params = params, auth = (username, password))
responsePost = post(URL, params = params, data = data, auth = (username, password))
responsePut = put(URL, params = params, data = data, auth = (username, password))
responseDelete = delete(URL, params = params, auth = (username, password))
```

```csharp

string url = "https://proview-demo.caqh.org/api/endpoint";

//set up HTTP auth
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

//setup url parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["param1"] = "value1";
queryString["param1"] = "value2";
...
url += queryString.ToString();

//example of setting up a nested JSON body object
JObject body = new JObject(
new JProperty("provider", new JObject(
    new JProperty("first_name", ""),
    new JProperty("middle_name", ""),
    ...
    new JProperty("license_number", ""))),
new JProperty("caqh_provider_id", ""),
new JProperty("po_provider_id", ""),
...
new JProperty("region_id", ""));

//Many API calls require an array of JSON, even if it's only one object being sent
JArray bodyArray = new JArray(body);
var content = new StringContent(bodyArray.ToString(), Encoding.UTF8, "application/json");
content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

//GET (no body)
var result = client.GetAsync(url).Result;
//POST
var result = client.PostAsync(url, content).Result;
//retrieve HTTP Response message
string resultTxt = result.Content.ReadAsStringAsync().Result;
dynamic obj = JsonConvert.DeserializeObject<dynamic>(resultTxt);
Console.WriteLine(obj.ToString());
```
An HTTP REST call sent to an API should use one of the following HTTP methods:

| Method | Usage |
|----|----|
| GET | This method is used for read-only operations.  A `GET` method may pass in query parameters, but will not have a request body.  No data will be inserted, updated or deleted as a result of a get call |
| POST | This method is used to send new information to the API.  A `POST` call will contain a body which is meant to be inserted into the API's data store.  |
| PUT | This method is used to update information in the API.  A `PUT` call will send information to the API that should be used to alter or update an existing record. |
| DELETE | This method is used to delete a record in the API.  A `DELETE` call will send a unique identifier for a record which is to be deleted. |

Each of these methods can be used to invoke a different functionality on the same endpoint.  A REST endpoint will normally represent an object that can be queried, inserted, updated or deleted.  In many cases in the CAQH API you will receive a batchId in response as the processes take longer than a single REST call will normally allow.  You will have to use these batchId's in other endpoints using a GET to retrieve the status of your request.

<aside> REST is <code>stateless</code> meaning that <b>nothing</b> is maintained from call to call.  The relevant data and authorization must be explicitly input into every call.</aside>

#ProView®