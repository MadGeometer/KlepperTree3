let administrativeJson =
    {
        name: "Administrative Functions",
        description: "",
        children:
            [
                {
                    name: "Search",
                    description: "",
                    children:
                        [
                            {
                                name: "Search by Email",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "email": "simpsons.com",
                                        "search_type": "ends_with"
                                    }
                            },
                            {
                                name: "Search by User Name",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "name": "impso",
                                        "search_type": "contains"
                                    }
                            },
                            {
                                name: "Search Groups by Name",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "name": "The",
                                        "search_type": "starts_with"
                                    }
                            },
                            {
                                name: "Get Account by Group ID",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            },
                            {
                                name: "Get Group by License ID",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "license_id": "***"
                                    }
                            }
                        ]
                },

                {
                    name: "Password",
                    description: "",
                    children:
                        [
                            {
                                name: "Update Password",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "email": "marge@thesimpsons.com",
                                                "password": "Large Marge"
                                            }
                                    }
                            },
                            {
                                name: "Request Password Reset",
                                description: "Request Password Reset",
                                message:
                                    {
                                        "action": "***",
                                        "email": "marge@thesimpsons.com",
                                    }
                            },
                            {
                                name: "Validate Password Reset Request",
                                description: "Validate Request Password Reset",
                                message:
                                    {
                                        "action": "***",
                                        "password_reset_token": "hfdkhfdshfjhdsjkhfdshfhsjkd",
                                    }
                            },
                            {
                                name: "Reset Password",
                                description: "Reset Password",
                                message:
                                    {
                                        "action": "***",
                                        "password_reset_token": "hfdkhfdshfjhdsjkhfdshfhsjkd",
                                        "password": "Large Marge"
                                    }
                            },

                            {
                                name: "Validate User Credentials",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body": {
                                            "email": "marge@thesimpsons.com",
                                            "password": "Oh Homie",
                                            "brand_id": 1

                                        }
                                    }
                            }
                        ]
                },

                {
                    name: "Miscellaneous",
                    description: "",
                    children:
                        [
                            {
                                name: "Refresh Blockable Apps Cache",
                                description: "Refresh blockable apps cache",
                                message:
                                    {
                                        "action": "***"
                                    }
                            },
                            {
                                name: "Get Auth Token",
                                description: "Get OAuth token, for use by REST API",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "client_id": "***",
                                                "client_secret": "***"
                                            }
                                    }
                            },
                            {
                                name: "Clean-Up Old Data",
                                description: "Clean-Up Old Data",
                                message:
                                    {
                                        "action": "***"
                                    }
                            }
                        ]
                }

            ]
    };