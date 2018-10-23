# Direct Assure

# - Input File From Database

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

data = {}
data["organization_id"] = "orgID"
data["practice_location"] = []

for row in cursor:
    practiceLocation = {}

    practiceLocation["tax_id"] = row["tax_id"]
    practiceLocation["practice_name"] = row["practice_name"]
    practiceLocation["practice_location_address1"] = row["practice_location_address1"]
    practiceLocation["practice_location_address2"] = row["practice_location_address2"]
    practiceLocation["practice_location_city"] = row["practice_location_city"]
    practiceLocation["practice_location_state"] = row["practice_location_state"]
    practiceLocation["practice_location_zipcode"] = row["practice_location_zipcode"]
    practiceLocation["practice_location_province"] = row["practice_location_province"]
    practiceLocation["practice_location_country"] = row["practice_location_country"]
    practiceLocation["npi_type_2"] = row["npi_type_2"]
    practiceLocation["po_location_id"] = row["po_location_id"]
    practiceLocation["location_type"] = row["location_type"]

    practiceLocation["providers"] = []
    provider = {}
    provider["caqh_provider_id"] = row["caqh_provider_id"]
    provider["po_provider_id"] = row["po_provider_id"]
    provider["provider_type"] = row["provider_type"]
    provider["provider_primary_practice_state"] = row["provider_primary_practice_state"]
    provider["provider_first_name"] = row["provider_first_name"]
    provider["provider_middle_name"] = row["provider_middle_name"]
    provider["provider_last_name"] = row["provider_last_name"]
    provider["npi_type_1"] = row["npi_type_1"]
    provider["po_provider_location_id"] = row["po_provider_location_id"]

    provider["provider_dea"] = []
    dea = {}
    dea["dea_number"] = row["dea_number"]
    dea["dea_state"] = row["dea_state"]
    provider["provider_dea"].append(dea)

    provider["provider_license"] = []
    providerLicense = {}
    providerLicense["license_number"] = row["license_number"]
    providerLicense["license_state"] = row["license_state"]
    providerLicense["license_expiration_date"] = row["license_expiration_date"]
    provider["provider_license"].append(providerLicense)

    provider["provider_practice_specialty"] = []
    specialty = {}
    specialty["specialty_name"] = row["specialty_name"]
    specialty["specialty_taxonomy_code"] = row["specialty_taxonomy_code"]
    specialty["specialty_type"] = row["specialty_type"]
    provider["provider_practice_specialty"].append(specialty)
    
    practiceLocation["providers"].append(provider)

    #add the roster object to the data array
    data["practice_location"].append(practiceLocation)
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
                int numCols = rs.getMetaData().getColumnCount();
                for (int i = 1; i <= numCols; i++)
                {
                    System.out.print(rs.getObject(i));
                    System.out.print(" ");
                }
                System.out.print("\n");
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

```csharp
//You may need to use NuGet to install the MS SQL package
using System.Data.SqlClient;

string connectionString = "Driver={SQL Server Native Client 11.0};Server=server_name;Database=db_name;Trusted_Connection=yes;";
string queryString = "SELECT * FROM DirectoryRosterFile";

using (SqlConnection connection = new SqlConnection(connectionString))
{
    SqlCommand command = new SqlCommand(queryString, connection);
    connection.Open();
    SqlDataReader reader = command.ExecuteReader();
    try
    {
        while(reader.Read())
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
    } finally
    {
        reader.Close();
    }
}

```

```java
/*
Function to execute some SQL statement.
Please also read https://docs.oracle.com/javase/tutorial/jdbc/basics/processingsqlstatements.html
and https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html.
You may also need to install a JDBC driver, info on that can be found at
https://docs.oracle.com/cd/E11882_01/appdev.112/e13995/oracle/jdbc/OracleDriver.html
*/
public void sql() throws SQLException
{
    Connection conn = null;
    Properties connectionProps = new Properties();
    connectionProps.put("user", "username");
    connectionProps.put("password", "password");
    Statement stmt = null;
    String query = "SELECT * FROM DirectoryRosterFile";
    try
    {
        //refer to https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html
        //to see how to setup the DriverManager connection string
        conn = DriverManager.getConnection(
                "jdbc:" + "mysql" + "://" +
                        "serverName" +
                        ":" + "portNumber" + "/",
                connectionProps);
        stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(query);
        //this will loop through each result, pull your data here
        while (rs.next())
        {
            String provider = rs.getString("provider");
            String organization_id = rs.getString("organization_id");
            String application_type = rs.getString("application_type");
            //do something with your data
        }

    } catch (Exception ex)
    {
        System.out.println(ex.getMessage());
    } finally {
        if (stmt != null)
            stmt.close();
    }
}
```
In this code snippet we are querying data from a database and composing an object from the data rows.  Your own database implementation may vary, so be sure to research into your specific technology for how to connect to and query from a database or data store.  For this example we will be assuming you are using SQL Server (or MSSQL, Microsoft SQL).  If you are using a different technology, hopefully it can provide enough of a starting point to research the relevant solutions.

You may choose to separate your data into multiple tables in your database, so update your query to reflect the necessary joins to retrieve all the relevant data.  In this case we have simplified the example so all the data is stored in a single table.  The SQL language we are using here is specific to SQL Server (Transact-SQL), so make sure you're aware of what SQL language your database uses and update it accordingly.

This data will be passed into your REST calls to the Roster API in the form of URL parameters or the request body.  See the section below for more information on how to form a REST request in your language of choice.

| Data Object | Description |
| ----------- | --- |
| [Input File](#tocSpractice_location) | DirectAssure 2.0 allows providers to confirm their practice locations to the plan-specific practice location information. This requires information from the health plan on the practice locations for each provider. |

