let mdmInfoJson =
    {
        name: "MDM Info",
        description: "",
        children:
            [
                {
                    name: "Retrieve MDM Record by Device ID (Child Only)",
                    description: "Retrieve MDM record by device ID",
                    message:
                        {
                            "action": "***",
                            "device_id": "***"
                        }
                },
                {
                    name: "Remove Old Devices (Admin Only)",
                    description: "When onboarding, remove lingering previous devices",
                    message:
                        {
                            "action": "***",
                            "apple_udid": "***"
                        }
                },
                {
                    name: "Handle MDM Profile Removal (Admin Only)",
                    description: "Notify Parent when MDM Profile is removed",
                    message:
                        {
                            "action": "***",
                            "device_id": "***"
                        }
                },
                {
                    name: "Have MDM Get App Inventory (Admin Only)",
                    description: "Have MDM get list of installed apps on a device",
                    message:
                        {
                            "action": "***",
                            "device_id": "***"
                        }
                },
                {
                    name: "Install VPN (Parent or Child)",
                    description: "Install VPN",
                    message:
                        {
                            "action": "***",
                            "device_id": "***"
                        }
                },
                {
                    name: "Generate MITM Certificate (Parent or Child)",
                    description: "Generate Certificate",
                    message: {
                        "action": "***",
                        "device_id": "***"
                    }
                },
                {
                    name: "Get MITM Certificate (Admin Only)",
                    description: "Get MITM Certificate",
                    message: {
                        "action": "***",
                        "device_id": "***",
                        "token": "***"
                    }
                }
            ]
    };