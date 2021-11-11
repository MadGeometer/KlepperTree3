let parentalModeJson =
    {
        name: "Parental Mode",
        description: "",
        children:
            [
                {
                    name: "Set Parental Mode",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    user_id: "***",
                                    mode_id: "***",
                                    duration_in_minutes: 45
                                }
                        }
                },
                {
                    name: "Get Parental Mode for User",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                },
                {
                    name: "Get Parental Mode for All Users in Group",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "group_id": "***"
                        }
                },
                {
                    name: "Delete Parental Mode",
                    description: "Mark for Delete Parental Mode",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                }
            ]
    };