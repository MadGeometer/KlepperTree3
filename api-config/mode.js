let modeJson =
    {
        name: "Modes",
        description: "",
        children:
            [
                {
                    name: "Create a Mode",
                    description: "Create a mode",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    name: "Sleep",
                                    user_id: "***"
                                }
                        }
                },

                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve mode by the ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                },

                {
                    name: "Retrieve by User ID",
                    description: "Retrieve mode(s) by user ID",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                }
            ]
    };