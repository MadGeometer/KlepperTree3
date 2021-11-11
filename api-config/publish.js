let publishJson =
    {
        name: "Publish",
        description: "",
        children:
            [
                {
                    name: "Publish to Group",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "group_id": "***",
                                    "message":
                                        {
                                            "a": 1,
                                            "b": "two"
                                        }
                                }
                        }
                },
                {
                    name: "Publish Connected Status",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "group_id": "***",
                                    "device_id": "***"
                                }
                        }
                }
            ]
    };