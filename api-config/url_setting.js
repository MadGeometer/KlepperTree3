let urlSettingJson =
    {
        name: "URL Settings",
        description: "",
        children:
            [
                {
                    name: "Create URL Setting",
                    description: "Create a URL setting",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "mode_id": "***",
                                    "top_level_domain": "www.pornhub.com",
                                    "action": "block",
                                    "log": true,
                                    "mask": true,
                                    "is_customizable": false
                                }
                        }
                },

                {
                    name: "Retrieve URL Setting",
                    description: "Retrieve URL setting by setting ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "url_setting_id": 2
                        }
                },
                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve URL setting by mode ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                },
                {
                    name: "Update URL Setting",
                    description: "Update a URL setting",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "url_setting_id": 2,
                            "body":
                                {
                                    "top_level_domain": "www.pornhub.com",
                                    "action": "block",
                                    "log": true,
                                    "mask": true,
                                    "is_customizable": false
                                }
                        }
                },
                {
                    name: "Delete URL Setting",
                    description: "Mark URL setting for delete",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***",
                            "url_setting_id": 13
                        }
                }
            ]
    };