let authenticateJson =
    {
        name: "Authentication",
        description: "",
        children:
            [
                {
                    name: "Authenticate as Parent",
                    description: "Authenticate as a parent",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "email": "marge@thesimpsons.com",
                                    "password": "Oh Homie",
                                    "brand_id": 1
                                }
                        }
                },
                {
                    name: "Authenticate as Child",
                    description: "Authenticate as a child",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "user_id": "***",
                                    "group_id": "***",
                                    "device_id": "***"
                                }
                        }
                },
                {
                    name: "Authenticate as Admin",
                    description: "Authenticate as an administrator",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "client_id": "***",
                                    "client_secret": "***"
                                }
                        }
                }
            ]
    };