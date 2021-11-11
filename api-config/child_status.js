let childStatusApiJson =
    {
        name: "Child Status",
        description: "API calls for determining child status",
        children:
            [
                /*
                // Leave until requirements are solidified
                {
                    name: "Child Status from Primary Device",
                    description: "Gets up-to-date status of child",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                },
                */

                /*
                // Leave until requirements are solidified
                {
                    name: "Child Status from All Devices",
                    description: "Get child's status based on all of his devices",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                },
                */

                {
                    name: "Single Child Status",
                    description: "Get child's status based on primary and non-primary devices",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                },
                {
                    name: "Status of All Children in Group",
                    description: "Get status for all children in the group",
                    message:
                        {
                            "action": "***",
                            "group_id": "***"
                        }
                }
            ]
    };