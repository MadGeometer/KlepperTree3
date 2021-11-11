let avatarJson =
    {
        name: "Avatars",
        description: "",
        children:
            [
                {
                    name: "Generate Upload URL",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "user_id": "***"
                            }
                        }
                },
                {
                    name: "Get User's Avatar Download URL",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "user_id": "***",
                                "avatar_id": "***"
                            }
                        }
                },
                {
                    name: "Validate Avatar URL (Not for Parent App)",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body": {
                                "uploadKey": "***"
                            }
                        }
                },
                {
                    name: "Confirm Avatar Upload (Not for Parent App)",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "uploadKey": "***"
                                }
                        }
                }

            ]
    };