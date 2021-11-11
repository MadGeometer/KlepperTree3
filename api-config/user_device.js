let userDeviceJson =
    {
        name: "User-Devices",
        description: "",
        children:
            [
                {
                    name: "Create Device for User",
                    description: "Create device for existing user",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    user_id: "***",
                                    device:
                                        {
                                            "name": "Bart's iPhone",
                                            "platform": "ios",
                                            "os_version": "10.3.3",
                                            "carrier": "T-Mobile",
                                            "metadata":
                                                {
                                                    "manufacturer": "Apple",
                                                    "model": "iPhone X",
                                                    "memory": 3000000000,
                                                    "display_width": 1125,
                                                    "display_height": 2436,
                                                    "display_dpi": 458
                                                },
                                            "device_state": "active"
                                        }
                                }
                        }
                },
                {
                    name: "Set Primary Device",
                    description: "",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    user_id: "***",
                                    device_id: "***"
                                }
                        }
                }
            ]
    };