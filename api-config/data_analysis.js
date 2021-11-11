let dataAnalysisJson =
    {
        name: "Data Analysis (Admin Only)",
        description: "",
        children:
            [
                {
                    name: "Descriptive Stats",
                    description: "",
                    children:
                    [
                        {
                            name: "Group",
                            description: "Get descriptive stats for group",
                            message:
                                {
                                    "action": "***"
                                }
                        },
                        {
                            name: "Children",
                            description: "Get descriptive stats for children",
                            message:
                                {
                                    "action": "***"
                                }
                        },
                        {
                            name: "Device",
                            description: "Get descriptive stats for devices",
                            message:
                                {
                                    "action": "***"
                                }
                        },
                        {
                            name: "Platform Versions",
                            description: "Get counts for the different versions of a platform",
                            message:
                                {
                                    "action": "***",
                                    "platform": "ios"
                                }
                        },
                        {
                            name: "Carrier Counts",
                            description: "Get counts for the different carriers",
                            message:
                                {
                                    "action": "***"
                                }
                        },
                        {
                            name: "Age Histogram",
                            description: "Get child ages, grouped by age",
                            message:
                                {
                                    "action": "***"
                                }
                        }

                    ]
                }
            ]
    };