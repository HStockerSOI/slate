# Schemas


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

<h2 id="tocSsuccessresponse">Success Response</h2>

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

<h2 id="tocSerrorresponse">Error Response</h2>

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

<h2 id="tocSextractapi">Extract Api</h2>

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

<h2 id="tocSpdfresponse">Pdf Response</h2>

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


# Appendix

## Document Types

| Document Type | Code |
|---|---|
| Application | 100000058 || Application Release | 100000059 || Application Report Csv | 100000064 || Application Report Txt | 100000063 || Board Certification | 100000026 || CDS | 100000012 || Certificate for Conducting Xray and/or Laboratory Services | 100000039 || Certificate of Advanced Nurse Practitioners | 100000040 || Certificate of Insurance | 100000060 || Certificate or Letter Certifying Formal Post-Graduate Training | 100000038 || Certificates of Completion (Med School, Internship etc.) | 100000036 || CLIA Certification | 100000031 || Correspondence | 100000053 || DD214, Record of Military Service | 100000033 || DEA | 100000013 || DEA Waiver | 100000043 || Diploma | 100000034 || Diplomate of National Board of Medical Examiners Certificate | 100000037 || Disclosure | 100000014 || Disclosure of Ownership | 100000062 || DPS | 100000015 || ECFMG | 100000025 || Exam Certification | 100000048 || Form A - Adverse And Other Actions | 100000000 || Form B - Professional Liability Actions | 100000016 || Form C - Liability Insurance | 100000017 || Form D - Criminal Actions | 100000018 || Form E - Medical Condition | 100000019 || Form F - Chemical Substances or Alcohol Abuse | 100000020 || Hospital Letter, Verification of Hospital Credentialing, or Alternative Pathways | 100000046 || Invoice | 100000055 || Letter of Self Insurance | 100000061 || Malpractice Explanation | 100000041 || Maryland State License Certificate | 100000030 || National Provider Identification Certificate | 100000042 || Opt Out | 100000049 || Other | 100000011 || Other Certificate | 100000028 || Photo | 100000035 || Problem Resolution System Letter | 100000029 || Professional Liability Insurance | 100000001 || Professional Liability Insurance 2 | 100000023 || Professional Liability Insurance 3 | 100000024 || Professional Liability Verification | 100000051 || Purchase Order | 100000054 || Radiology Certification | 100000032 || Reference Letter | 100000044 || Resume | 100000003 || Schedule AP1 | 290530000 || Schedule B - Professional Liability Claims Information Form | 100000004 || Schedule C - Regulation Acknowledgement | 100000005 || Scholar Visa IAP-66 | 100000045 || Section D - Attestation Questions | 100000006 || Signed Malpractice | 100000007 || State Application Addendum | 100000050 || State Authorization | 100000008 || State License | 100000009 || State License-MD | 290530001 || State Release | 100000002 || Statement of Account | 100000056 || Tax Exemption Certificate | 100000052 || TB Skin Test | 100000047 || Termination | 100000057 || Therapeutic/Diagnostic Pharmaceutical Agents License | 100000027 || VISA | 100000010 || W-9 | 100000021 || Workers Compensation Certificate of Coverage | 100000022 |


## Provider Types

Provider Type | Description | Standard/Allied |
|---|---|---|| APN | Advanced Practice Nurse | Allied || AA | Anesthesia Assistant | Allied || ABA | Applied Behavioral Analyst | Allied || AT | Athletic Trainers | Allied || GC | Genetic Counselor | Allied || SA | Surgical Assistant | Allied || ACU | Acupuncturist | Allied || ADC | Alcohol/Drug Counselor | Allied || AUD | Audiologist | Allied || BT | Biofeedback Technician | Allied || CRNA | Certified Registered Nurse Anesthetist | Allied || CSP | Christian Science Practitioner | Allied || CNS | Clinical Nurse Specialist | Allied || CP | Clinical Psychologist | Allied || CSW | Clinical Social Worker | Allied || DT | Dietician | Allied || LPN | Licensed Practical Nurse | Allied || MFT | Marriage/Family Therapist | Allied || MT | Massage Therapist | Allied || ND | Naturopath | Allied || NEU | Neuropsychologist | Allied || MW | Midwife | Allied || NMW | Nurse Midwife | Allied || NP | Nurse Practitioner | Allied || LN | Nutritionist | Allied || OT | Occupational Therapist | Allied || OPT | Optician | Allied || OD | Optometrist | Allied || PHA | Pharmacist | Allied || PT | Physical Therapist | Allied || PA | Physician Assistant | Allied || PC | Professional Counselor | Allied || RN | Registered Nurse | Allied || RNFA | Registered Nurse First Assistant | Allied || RT | Respiratory Therapist | Allied || SLP | Speech Pathologist | Allied || HOS | Hospitalist | Standard || MD | Medical Doctor | Standard || DDS | Doctor of Dental Surgery | Standard || DMD | Doctor of Dental Medicine | Standard || DPM | Doctor of Podiatric Medicine | Standard || DC | Doctor of Chiropractic | Standard || DO | Osteopathic Doctor | Standard


