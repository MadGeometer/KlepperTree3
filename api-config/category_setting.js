let categorySettingJson =
    {
        name: "Category Settings",
        description: "",
        children:
            [
                {
                    name: "Set Category Setting",
                    description: "Create a category setting",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "mode_id": "***",
                                    "category_id": 1000,
                                    "action": "block",
                                    "log": true,
                                    "mask": true
                                }
                        }
                },

                {
                    name: "Retrieve Category Setting",
                    description: "Retrieve category setting by setting ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "category_setting_id": 2
                        }
                },

                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve category setting by mode ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                }
            ]
    };