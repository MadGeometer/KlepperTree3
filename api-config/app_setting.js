let appSettingJson =
    {
        name: "App Settings",
        description: "",
        children:
            [
                {
                    name: "Set App Setting",
                    description: "Set app settings for a mode",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "mode_id": "***",
                                    "application_id": 2,
                                    "action": "block"
                                }
                        }
                },

                {
                    name: "Retrieve App Setting",
                    description: "Retrieve app setting by setting ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "app_setting_id": 5
                        }
                },

                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve app setting by mode ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                }
            ]
    };