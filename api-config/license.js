let licenseJson =
    {
        name: "Licenses",
        description: "",
        children:
            [
                {
                    name: "Get License by Group ID",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "group_id": "***"
                        }
                },
                {
                    name: "Update License",
                    description: "Update a license",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "seat_count": 5,
                                    "end_date": "2020-05-18T22:55:50.506Z"
                                },
                            "license_id": "***"
                        }
                },
                {
                    name: "Renew License",
                    description: "Renew a license",
                    message:
                        {
                            "action": "***",
                            "license_id":"***",
                            "body":{
                                "license_type": "premium_monthly",
                                "expiration_days":30,
                                "payment": {
                                    "provider_id": "***",
                                    "data": {
                                        "receipt": "XYZ"
                                    }
                                }
                            }
                        }
                },
                {
                    name: "Expire License",
                    description: "Expire a license by setting end_date to current time",
                    message:
                        {
                            "action": "***",
                            "license_id": "***"
                        }
                }
            ]
    };