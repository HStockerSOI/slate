# Schemas

# - Rostering Schemas

<h2 id="tocSrosterprovider">Rostering Provider</h2>

<a id="schemaprovider"></a>

```json
{
  "first_name": "Required",
  "middle_name": "Optional",
  "last_name": "Required",
  "name_suffix": "Optional",
  "gender": "Required (M/F)",
  "address1": "Required",
  "address2": "Optional",
  "city": "Required",
  "state": "Required",
  "zip": "Required",
  "zip_extn": "Optional",
  "phone": "Optional",
  "fax": "Optional",
  "email": "Optional",
  "practice_state": "Required",
  "birthdate": "Required (YYYYMMDD)",
  "ssn": "One required*",
  "short_ssn": "Optional",
  "dea": "One required*",
  "upin": "One required*",
  "type": "Required",
  "tax_id": "Optional",
  "npi": "One required*",
  "license_state": "Required if license_number",
  "license_number": "One required*"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|first_name|string|true|A text field that contains the First Name of the Provider|
|middle_name|string|false|A text field that contains the Middle Name or Initial of the Provider|
|last_name|string|true|A text field that contains the Last Name of the Provider.|
|name_suffix|string|false|A text field that contains the suffix associated with a Provider’s Name Note: The value must be from the list of standard suffix values. See Appendix below.|
|gender|string|false|A code that denotes the gender of the Provider.|
|address1|string|true|This field should contain the first line of the address at which the provider can be reached by ProView for correspondence.|
|address2|string|false|A field that contains provider’s correspondence address Line 2|
|city|string|true|A field that denotes the provider’s correspondence address city|
|state|string|true|The two-character ANSI state code that corresponds to the provider’s correspondence address state|
|zip|string|true|A numeric field that denotes a provider’s correspondence address zip code|
|zip_extn|string|false|An integer field that denotes a provider’s correspondence address zip extension|
|phone|string|false|A field that denotes a provider’s primary phone number.|
|fax|string|false|A field that denotes a provider’s fax number for correspondence.|
|email|string|false|The primary email address used for correspondence with the provider and for provider outreach.|
|practice_state|string|true|The two-character ANSI state code that corresponds to the provider’s primary practice state. Note: This helps ProView identify state mandated requirements (if any) for the provider.|
|birthdate|string|true|This field denotes the provider’s date of birth. (Format:  YYYYMMDD)|
|ssn|string|false|This field denotes the provider’s Social Security Number (Must be 9 digits).|
|short_ssn|string|false|This field denotes last two Characters of the provider’s SSN. This is required for Illinois providers if all of the following are true: -	Primary Practice State = ‘IL’ -	Provider_SSN is null  Application_Type=’2’ for re-credentialing.|
|dea|string|false|This field denotes the provider’s Drug Enforcement Administration (DEA) Number (Format must be ‘AA9999999’)|
|upin|string|false|This field denotes the provider’s Unique Physician Identification Number (UPIN) (Format must be ‘A99999’)|
|type|string|true|This field denotes the provider type code based on a list of Standard or Allied provider type codes from ProView. Note: The value must be from the list of standard ProView Provider Type codes. See Appendix below for a list of valid values.|
|tax_id|string|false|This field denotes the Federal Tax ID number of the provider.|
|npi|string|true|The field denotes the provider’s Type 1 (Individual) NPI number.  (Format: 9 numeric digits followed by one numeric check digit; must be 10 digits)|
|license_state|string|false|The two-Character ANSI state code that corresponds to the provider’s license state This field is required if Provider License Number is populated.|
|license_number|integer(int32)|false|This field denotes the provider’s State License Number. The field is required if Provider License State is populated.|

<h2 id="tocSproviderrequest">Provider Request</h2>

<a id="schemaproviderrequest"></a>

```json
[
  {
    "provider": {
      "first_name": "Required",
      "middle_name": "Optional",
      "last_name": "Required",
      "name_suffix": "Optional",
      "gender": "Required (M/F)",
      "address1": "Required",
      "address2": "Optional",
      "city": "Required",
      "state": "Required",
      "zip": "Required",
      "zip_extn": "Optional",
      "phone": "Optional",
      "fax": "Optional",
      "email": "Optional",
      "practice_state": "Required",
      "birthdate": "Required (YYYYMMDD)",
      "ssn": "One required*",
      "short_ssn": "Optional",
      "dea": "One required*",
      "upin": "One required*",
      "type": "Required",
      "tax_id": "Optional",
      "npi": "One required*",
      "license_state": "Required if license_number",
      "license_number": "One required*"
    },
    "caqh_provider_id": "Required",
    "po_provider_id": "Optional",
    "last_recredential_date": "Optional (YYYYMMDD)",
    "next_recredential_date": "Optional (YYYYMMDD)",
    "delegation_flag": "Optional",
    "application_type": "Conditional - see description",
    "affiliation_flag": "Optional",
    "organization_id": "Required",
    "region_id": "Optional",
    "anniversary_date": "string",
    "exception_description": "string"
  }
]

```

*Roster Insert Request*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|Roster Insert Request|[object]|false|none|
|provider|[Provider](#schemaprovider)|false|none|
|caqh_provider_id|string|false|none|
|po_provider_id|string|false|none|
|last_recredential_date|string|false|none|
|next_recredential_date|string|false|none|
|delegation_flag|string|false|none|
|application_type|string|false|none|
|affiliation_flag|string|false|none|
|organization_id|string|false|none|
|region_id|string|false|none|
|anniversary_date|string|false|none|
|exception_description|string|false|none|

<h2 id="tocSrosterresponse">Roster Response</h2>

<a id="schemarosterresponse"></a>

```json
{
  "batch_Id": "string"
}

```

*Roster OperationResponse*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|batch_Id|string|false|none|

<h2 id="tocSrostererrorreponse">Roster Error Response</h2>

<a id="schemarostererrorreponse"></a>

```json
{
  "Message": "string"
}

```

*Roster Error Reponse*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|Message|string|false|none|

<h2 id="tocSresultresponse">Result Response</h2>

<a id="schemaresultresponse"></a>

```json
{
  "batch_status": "string",
  "batch_time": "string",
  "roster_result": null
}

```

*Roster Result Response*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|batch_status|string|false|none|
|batch_time|string|false|none|
|roster_result|[AddRequest](#schemaaddrequest)|false|none|

<h2 id="tocSrosterupdate">Roster Update</h2>

<a id="schemarosterupdate"></a>

```json
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

```

*Update Roster Request*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|organization_id|string|false|none|
|caqh_provider_id|string|false|none|
|po_provider_id|string|false|none|
|last_recredential_date|string|false|none|
|next_recredential_date|string|false|none|
|delegation_flag|string|false|none|
|application_type|string|false|none|
|affiliation_flag|string|false|none|

<h2 id="tocSrosterupdaterequest">Roster Update Request</h2>

<a id="schemarosterupdaterequest"></a>

```json
[
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

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|*anonymous*|[[RosterUpdate](#schemarosterupdate)]|false|none|

<h2 id="tocSrosterdelete">Roster Delete</h2>

<a id="schemarosterdelete"></a>

```json
{
  "organization_id": "string",
  "caqh_provider_id": "string"
}

```

*Delete Request*

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|organization_id|string|false|none|
|caqh_provider_id|string|false|none|

<h2 id="tocSrosterdeleterequest">Roster Delete Request</h2>

<a id="schemarosterdeleterequest"></a>

```json
[
  {
    "organization_id": "string",
    "caqh_provider_id": "string"
  }
]

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|*anonymous*|[[RosterDelete](#schemarosterdelete)]|false|none|

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

<h2 id="tocSsuccessresponse3">Rostering Success Response</h2>

<a id="schemasuccessresponse3"></a>

```json
{
  "message": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|message|string|false|none|

<h2 id="tocSerrorresponse3">Rostering Error Response</h2>

<a id="schemaerrorresponse3"></a>

```json
{
  "error": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|--|--|-----|
|error|string|false|none|

<h2 id="tocSpractice_location">Practice Location</h2>

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

<h2 id="tocSpractice_location_request">Practice Location Request</h2>

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