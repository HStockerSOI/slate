---
title: CAQH API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - python: Python
  - java: Java
  - csharp: C#
includes:
  - swagger_status_get
  - swagger_roster_post
  - PV_Title
  - PV_Input
  - DA_Title
  - DA_Input
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
<div id="myimgModel" class="imgModel" style="display:noned">
  <span class="close">&times;</span>
  <img class="imgModel-content" id="img01">
</div>

# Requirements

Make sure you have downloaded the most up-to-date SDK (Software Development Kit) and an IDE (Integrated Development Environment) for your language of choice.  You should be familiar with the syntax and have a basic knowledge of your language and how software normally communicates with APIs (Application Programming Interface).  If you have no experience with any of the languages, we suggest you familiarize yourself with the basics and then return to this documentation.

This document is intended for business and technical teams (data stewards, developers, operational and technical staff etc.) at the Participating Organizations involved in the exchange of data between CAQH DirectAssure and their internal systems.

# Constructing JSON

```json
{
	"property": "value",
	"array": [1,2,3],
	"object":
	{
		"property": "value",
		"property2": 2
	}
}
```

```python
#In Python, JSON is defined as a dictionary.
roster = {}
roster["tax_id"] = row["tax_id"]
roster["practice_name"] = row["practice_name"]
roster["practice_location_address1"] = row["practice_location_address1"]
roster["practice_location_address2"] = row["practice_location_address2"]

```

```csharp
Using Newtonsoft.Json

JObject body = new JObject(
new JProperty("provider", new JObject(
    new JProperty("first_name", ""),
    new JProperty("middle_name", ""),
    new JProperty("last_name", ""),
    new JProperty("license_number", ""))),
new JProperty("caqh_provider_id", ""),
new JProperty("region_id", ""));
```

```java
JsonArray body = Json.createArrayBuilder()
  .add(Json.createObjectBuilder()
  .add("provider", Json.createObjectBuilder()
      .add("first_name", "")
      .add("middle_name", "")
      .add("license_number", ""))
  .add("caqh_provider_id", "")
  .add("region_id", ""))
  .build();
```

JSON (JavaScript Object Notation) is a common standard for formatting and transfering data objects.  Your language will be able to represent JSON as either a string dictionary or a custom JSON-specific object.  

| Data Type | Representation | Description |
|-----|-----|-----|
| String | "parameter": "value" | A string is a basic data type representing a series of characters |
| Integer | "parameter": 0 | An integer is any number without decimals |
| Decimal | "parameter": 1.5 | A decimal is any number with digits following a decimal |
| Array | "parameter": [] | An array contains any number of objects or data types without a parameter |
| Object | "parameter": {} | An object contains any number of parameters.  All JSON should be in at least one object |

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

```java
//set up HTTP authentication header
CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);
//use the credential provider when creating your HttpClient
HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();
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
```java
//base url for api call
 String url = "https://proview-demo.caqh.org/api/endpoint?";
 List<NameValuePair> params = new ArrayList<NameValuePair>();
 params.add(new BasicNameValuePair("param1", "value1"));
 params.add(new BasicNameValuePair("param2", "value2"));
 ...
 //add params to base url
 url += URLEncodedUtils.format(params, "UTF-8");
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
//You may need to use NuGet to install the Newtonsoft.JSON package
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

//example of setting up a nested JSON body object
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

//Many API calls require an array of JSON, even if it's only one object being sent
JArray bodyArray = new JArray(body);
var content = new StringContent(bodyArray.ToString(), Encoding.UTF8, "application/json");
content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
```
```java
//you may need to install this json package
import javax.json.*;
//create JSON object array (some API calls require the json body as an array even with one element)
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

//add body to request
HttpPost request = new HttpPost(url);
StringEntity bodyParams = new StringEntity(body.toString());
request.addHeader("content-type", "application/json");
request.setEntity(bodyParams);
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
HttpClient client = new HttpClient();

//set up HTTP auth
var byteArray = Encoding.ASCII.GetBytes("username:password");
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

//setup url parameters
var queryString = HttpUtility.ParseQueryString(string.Empty);
queryString["param1"] = "value1";
queryString["param1"] = "value2";
...
url += queryString.ToString();

//small sample JSON object
JObject body = new JObject(
new JProperty("provider", new JObject(
    new JProperty("first_name", ""),
    new JProperty("middle_name", ""),
    new JProperty("license_number", ""))),
new JProperty("caqh_provider_id", ""),
new JProperty("po_provider_id", ""),
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
```java
//ensure you have both org.apache.http and javax.json libraries
String url = "https://proview-demo.caqh.org/api/endpoint?";
List<NameValuePair> params = new ArrayList<NameValuePair>();
params.add(new BasicNameValuePair("param1", "value1"));
params.add(new BasicNameValuePair("param2", "value2"));
url += URLEncodedUtils.format(params, "UTF-8");

//create JSON object array (some API calls require the json body as an array even with one element)
JsonArray body = Json.createArrayBuilder()
  .add(Json.createObjectBuilder()
  .add("provider", Json.createObjectBuilder()
      .add("first_name", "")
      .add("middle_name", "")
      .add("license_number", ""))
  .add("caqh_provider_id", "")
  .add("po_provider_id", "")
  .add("region_id", ""))
  .build();

CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("username", "password");
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create().setDefaultCredentialsProvider(provider).build();

try
{
    HttpPost request = new HttpPost(url);
    StringEntity bodyParams = new StringEntity(body.toString());
    request.addHeader("content-type", "application/json");
    request.setEntity(bodyParams);
    HttpResponse response = client.execute(request);

    HttpEntity entity = response.getEntity();
    String responseString = EntityUtils.toString(entity);
    System.out.println(responseString);

} catch (Exception ex)
{
    //handle errors here
}
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

# Proview and DirectAssure

Many of the calls you will make to the APIs will take in a `product` parameter.  This product can be either ProView or DirectAssure. Be sure to know which product line you are using and input the proper value into the product parameter. 

The base URL will always be `https://proview.caqh.org`.

| Product | Code |
|---|---|
| ProView | `PV` |
| DirectAssure | `DA` |

# Generating a Batch ID

Sometimes, an endpoint will require you to create your own unique `batch id` for your request, instead of returning one to you. The format of these batch ids differ from ones returned by the system, the format is POID_YYYYMMDD_HHMMSS  (POID is the 3 digit organization ID assigned to the participating organization by CAQH). You should fill the POID field out with your id, then append a date stamp and time stamp. Make sure to use the same generated batch id across your request if you need it multiple times (there are some requests that let you break up files you send into multiple calls). 

#Python Converter Tool



# Rostering

# - Roster File From Database

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

```csharp

using System;
using System.Data.SqlClient;
using System.Linq;

namespace SQLQueryRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            //You may need to use NuGet to install System.Data.SqlClient
            //replace with your connection string and query
            string connectionString = "Server=(LocalDB)\\Instance;Database=testdb;Trusted_Connection=True;";
            string queryString = "SELECT * FROM DirectoryRosterFile";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                try
                {
                    while (reader.Read())
                    {
                        //populate new JSON
                        body = new JObject(
                            new JProperty("tax_id", reader.GetString("tax_id")),
                            new JProperty("practice_name", reader.GetString("practice_name")),
                            new JProperty("practice_location_address1", reader.GetString("practice_location_address1")),
                            new JProperty("practice_location_address2", reader.GetString("practice_location_address2")),
                            new JProperty("practice_location_city", reader.GetString("practice_location_city")),
                            new JProperty("practice_location_state", reader.GetString("practice_location_state")),
                            new JProperty("practice_location_zipcode", reader.GetString("practice_location_zipcode")),
                            new JProperty("practice_location_province", reader.GetString("practice_location_province")),
                            new JProperty("practice_location_country", reader.GetString("practice_location_country")),
                            new JProperty("npi_type_2", reader.GetString("npi_type_2")),
                            new JProperty("po_location_id", reader.GetString("po_location_id")),
                            new JProperty("location_type", reader.GetString("location_type")),
                            new JProperty("providers", new JArray(
                                new JObject(
                                    new JProperty("caqh_provider_id", reader.GetString("caqh_provider_id")),
                                    new JProperty("po_provider_id", reader.GetString("po_provider_id")),
                                    new JProperty("provider_type", reader.GetString("provider_type")),
                                    new JProperty("provider_primary_practice_state", reader.GetString("provider_primary_practice_state")),
                                    new JProperty("provider_first_name", reader.GetString("provider_first_name")),
                                    new JProperty("provider_middle_name", reader.GetString("provider_middle_name")),
                                    new JProperty("provider_last_name", reader.GetString("provider_last_name")),
                                    new JProperty("npi_type_1", reader.GetString("npi_type_1")),
                                    new JProperty("po_provider_location_id", reader.GetString("po_provider_location_id")),
                                    new JProperty("provider_dea", new JArray(
                                        new JObject(
                                        new JProperty("dea_number", reader.GetString("dea_number")),
                                        new JProperty("dea_state", reader.GetString("dea_state"))
                                    ))),
                                    new JProperty("provider_license", new JArray(
                                        new JObject(
                                        new JProperty("license_number", reader.GetString("license_number")),
                                        new JProperty("license_state", reader.GetString("license_state")),
                                        new JProperty("license_expiration_date", reader.GetString("license_expiration_date"))
                                    ))),
                                    new JProperty("provider_practice_specialty", new JArray(
                                        new JObject(
                                        new JProperty("specialty_name", reader.GetString("specialty_name")),
                                        new JProperty("specialty_taxonomy_code", reader.GetString("specialty_taxonomy_code")),
                                        new JProperty("specialty_type", reader.GetString("specialty_type")))))
                                )))
                        );

                    }
                }
                finally
                {
                    reader.Close();
                }
            }
        }
    }
}

```

```java

import java.sql.*;
import java.util.Properties;

public class SQLDBConnect {

    /*
     Runner for sample MySQL connection and query. You will need to add mysql-connector-java-8.0.12.jar to the project
     from: https://dev.mysql.com/downloads/connector/j/5.1.html (Your version of the JAR can be different).
     This example connects to the sample database world in MySQL.
     */
    public static void main(String[] args) {
        String query = "SELECT * FROM DirectoryRosterFile";
        try
        {
            sql(query);
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }

    /*
    Function to execute some SQL statement.
    Please also read https://docs.oracle.com/javase/tutorial/jdbc/basics/processingsqlstatements.html
    and https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html.
    */
    public static void sql(String query) throws SQLException {

        try {
            //create connection and statement objects
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = null;
            Statement stmt = null;

            //refer to https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html
            //to see how to setup the DriverManager connection string
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/world", "user", "password");
            stmt = conn.createStatement();

            ResultSet rs = stmt.executeQuery(query);
            //this will loop through each result, pull your data here
            while (rs.next()) {
                //walk through each column
                JsonObject body = Json.createObjectBuilder()
                   .add("tax_id", "")
                   .add("practice_name", "")
                   .add("practice_location_address1", "")
                   .add("practice_location_address2", "")
                   .add("practice_location_city", "")
                   .add("practice_location_state", "")
                   .add("practice_location_zipcode", "")
                   .add("practice_location_province", "")
                   .add("practice_location_country", "")
                   .add("npi_type_2", "")
                   .add("po_location_id", "")
                   .add("location_type", "")
                   .add("providers", Json.createArrayBuilder()
                        .add(Json.createObjectBuilder()
                            .add("caqh_provider_id", "")
                            .add("po_provider_id", "")
                            .add("provider_type", "")
                            .add("provider_primary_practice_state", "")
                            .add("provider_first_name", "")
                            .add("provider_middle_name", "")
                            .add("provider_last_name", "")
                            .add("npi_type_1", "")
                            .add("po_provider_location_id", "")
                            .add("provider_dea", Json.createArrayBuilder()
                                .add(Json.createObjectBuilder()
                                    .add("dea_number", "")
                                    .add("dea_state", "")
                                )
                            )
                            .add("provider_license", Json.createArrayBuilder()
                                .add(Json.createObjectBuilder()
                                    .add("license_number", "")
                                    .add("license_state", "")
                                    .add("license_expiration_date", "")
                                )
                            )
                            .add("provider_practice_specialty", Json.createArrayBuilder()
                                .add(Json.createObjectBuilder()
                                    .add("specialty_name", "")
                                    .add("specialty_taxonomy_code", "")
                                    .add("specialty_type", "")
                                )
                            )
                        )
                   )

                   .build();

            }
            //always close when finished
            stmt.close();
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        } catch (ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
    }
}


```

In this code snippet we are querying data from a database and composing a Roster object from the data rows.  You may choose to use an ORM, Object Relational Mapper (such as Entity Framework), in which case you will want to research into their recommended implementation.  This data will be passed into your REST calls to the Roster API in the form of URL parameters or the request body.  See the section below for more information on how to form a REST request in your language of choice.

Please see the [Rostering](#rostering) section for how to insert, update and delete roster objects.

| Data Object | Description |
| ----------- | --- |
| [Roster File](#tocSpractice_location) | The ProView Roster API accepts one or more providers at a time to roster, update, or delete the provider from the Participating Organization Roster. |
