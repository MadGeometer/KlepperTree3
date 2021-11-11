let generalSettingJson =
    {
        name: "General Settings",
        description: "",
        children:
            [
                {
                    name: "Retrieve General Setting",
                    description: "Retrieve general setting by setting ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "general_setting_id": 2
                        }
                },
                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve general setting by mode ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                },
                {
                    name: "Update General Setting",
                    description: "Update general setting",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "general_setting_id": 2,
                            "body":
                                {
                                    "internet_on": true,
                                    "block_new_apps": false,
                                    "block_settings_app": true,
                                    "is_customizable": false
                                }
                        }
                }
            ]
    };