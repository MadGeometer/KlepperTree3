let accountsJson =
    {
        name: "Accounts",
        description: "",
        children:
            [
                {
                    name: "Create Free Account",
                    description: "One step account creation!",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "brand_id": 1,
                                "group": {
                                    "name": "The Simpsons",
                                    "language": "en"
                                },
                                "user": {
                                    "name": "Marge Simpson",
                                    "email": "marge@thesimpsons.com",
                                    "password": "Oh Homie",
                                },
                                "license": {
                                    "license_type": "free"
                                }
                            }
                        }
                },
                {
                    name: "Create Paid Account",
                    description: "One step account creation!",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "brand_id": 1,
                                "group": {
                                    "name": "The Simpsons",
                                    "language": "en"
                                },
                                "user": {
                                    "name": "Marge Simpson",
                                    "email": "p7@p.com",
                                    "password": "Oh Homie",
                                },
                                "license": {
                                    "license_type": "premium_monthly",
                                    "payment": {
                                        "provider_id": "***",
                                        "data": {
                                            "receipt": "XYZ"
                                        }
                                    }
                                }
                            }
                        }
                },
                {
                    name: "Upgrade Account",
                    description: "Upgrade free account to premium",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "group_id": "***",
                                "license": {
                                    "license_type": "premium_monthly",
                                    "payment": {
                                        "provider_id": "***",
                                        "data": {
                                            "receipt": "XYZ"
                                        }
                                    }
                                }
                            }
                        }
                },
                {
                    name: "Downgrade Account",
                    description: "Downgrade premium account to free",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "group_id": "***",
                                "license": {
                                    "license_type": "free"
                                }
                            }
                        }
                },
                {
                    name: "License Check",
                    description: "Either renew license or downgrade it",
                    message:
                        {
                            "action": "***",
                            "license_id": "***"
                        }
                }
            ]
    };