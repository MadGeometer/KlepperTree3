let deviceApplicationJson =
    {
        name: "Device Applications",
        description: "Applications installed on the device",
        children:
            [
                {
                    name: "Create Device Application",
                    description: "Add app to device",
                    message:
                        {
                            "action": "/device_application/add",
                            "device_id": "***",
                            "body":
                                [
                                    {
                                        "package_or_bundle_id": "com.facebook.katana",
                                        "platform": "android",
                                        "label": "Facebook",
                                        "description": "social media app",
                                        "image": "***",
                                        "locale_data": {"data": "some_data"},
                                        "installed": "2018-05-18T22:55:50.506Z",
                                        "installed_version": "3.4.1",
                                        "vendor": "facebook inc.",
                                        "store_url": "googleplaystore.com/facebook",
                                        "blockable": "true"
                                    }
                                ]
                        }
                },
                {
                    name: "Create All Device Applications",
                    description: "Add all apps to device",
                    message:
                        {
                            "action": "***",
                            "device_id": "***",
                            "body":
                                [
                                    {
                                        "package_or_bundle_id": "com.facebook.katana",
                                        "platform": "android",
                                        "label": "Facebook",
                                        "description":"social media app",
                                        "image": "***",
                                        "locale_data":{"data":"some_data"},
                                        "installed" : "2018-05-18T22:55:50.506Z",
                                        "installed_version" : "3.4.1",
                                        "vendor": "facebook inc.",
                                        "store_url": "googleplaystore.com/facebook",
                                        "blockable": "true"
                                    }
                                ]
                        }
                },
                {
                    name: "Retrieve Apps on Device",
                    description: "Retrieve apps on device by device ID",
                    message:
                        {
                            "action": "***",
                            "device_id": "***"
                        }
                },
                {
                    name: "Delete Device Application",
                    description: "Mark for Delete app from device",
                    message:
                        {
                            "action": "***",
                            "device_id": "***",
                            "body":
                                [
                                    {
                                        "package_or_bundle_id": "com.facebook.katana",
                                        "platform": "android"
                                    }
                                ]
                        }
                }

            ]
    };