let applicationJson =
    {
        name: "Applications",
        description: "Application info stored in DB",
        children:
            [
                {
                    name: "Retrieve Application",
                    description: "Retrieve app info by application_id from the DB",
                    message:
                        {
                            "action": "***",
                            "application_id": "1"
                        }
                },
                {
                    name: "Retrieve Blockable Applications",
                    description: "Retrieve apps that we can block",
                    message:
                        {
                            "action": "***",
                            "platform": "android",
                            "user_id": "***"
                        }
                }
            ]
    };