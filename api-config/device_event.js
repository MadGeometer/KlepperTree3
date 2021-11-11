let deviceEventJson =
    {
        name: "Device Events",
        description: "",
        children:
            [
                {
                    name: "Create",
                    description: "",
                    children:
                        [
                            {
                                name: "Create Device Event",
                                description: "Create a device event",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "time": "2018-07-04T00:00:00.000Z",
                                                "event_name": "display_on",
                                                "platform": "android",
                                                "os_version": "[ 8, 1, 27, 32 ]",
                                                "app_name": "child",
                                                "app_version": "1234",
                                                "details": {"info": "goes here"}
                                            }
                                    }
                            },
                            {
                                name: "Create Block Event ",
                                description: "Create a device event",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "time": "2018-07-04T00:00:00.000Z",
                                                "event_name": "block",
                                                "platform": "android",
                                                "os_version": "[ 8, 1, 27, 32 ]",
                                                "app_name": "child",
                                                "app_version": "1234",
                                                "details":
                                                    {
                                                        "url": "https://www.xvideos.com/",
                                                        "category_ids": ["1000","1001","1002"]
                                                    }
                                            }
                                    }
                            }
                        ]
                },
                {
                    name: "Retrieve",
                    description: "",
                    children:
                        [
                            {
                                name: "Retrieve by Device ID",
                                description: "",
                                children:
                                    [
                                        {
                                            name: "Example 1",
                                            description: "Retrieve by device ID",
                                            message:
                                                {
                                                    "action": "***",
                                                    "device_id": "***"
                                                }
                                        },
                                        {
                                            name: "Example 2",
                                            description: "Retrieve by device ID and event name",
                                            message:
                                                {
                                                    "action": "***",
                                                    "device_id": "***",
                                                    "event_names": ["block", "warn", "search", "display_on", "display_off"]
                                                }
                                        },
                                        {
                                            name: "Example 3",
                                            description: "Retrieve by device ID in date range",
                                            message:
                                                {
                                                    "action": "***",
                                                    "device_id": "***",
                                                    "body":
                                                        {
                                                            "min_date": "2018-07-03T00:00:00Z",
                                                            "max_date": "2018-07-18T23:59:59.999Z"
                                                        }
                                                }
                                        },
                                        {
                                            name: "Example 4",
                                            description: "Retrieve by device ID and event name in date range",
                                            message:
                                                {
                                                    "action": "***",
                                                    "device_id": "***",
                                                    "event_names": ["block", "warn", "search", "display_on", "display_off"],
                                                    "body":
                                                        {
                                                            "min_date": "2018-07-03T00:00:00Z",
                                                            "max_date": "2018-07-18T23:59:59.999Z"
                                                        }
                                                }
                                        }
                                    ]
                            },
                            {
                                name: "Retrieve by User ID",
                                description: "",
                                children:
                                    [
                                        {
                                            name: "Example 1",
                                            description: "Retrieve by user ID",
                                            message:
                                                {
                                                    "action": "***",
                                                    "user_id": "***"
                                                }
                                        },
                                        {
                                            name: "Example 2",
                                            description: "Retrieve by user ID and event name",
                                            message:
                                                {
                                                    "action": "***",
                                                    "user_id": "***",
                                                    "event_names": ["block", "warn", "search", "display_on", "display_off"]
                                                }
                                        },
                                        {
                                            name: "Example 3",
                                            description: "Retrieve by user ID in date range",
                                            message:
                                                {
                                                    "action": "***",
                                                    "user_id": "***",
                                                    "body":
                                                        {
                                                            "min_date": "2018-07-03T00:00:00Z",
                                                            "max_date": "2018-07-18T23:59:59.999Z"
                                                        }
                                                }
                                        },
                                        {
                                            name: "Example 4",
                                            description: "Retrieve by user ID and event name in date range",
                                            message:
                                                {
                                                    "action": "***",
                                                    "user_id": "***",
                                                    "event_names": ["block", "warn", "search", "display_on", "display_off"],
                                                    "body":
                                                        {
                                                            "min_date": "2018-07-03T00:00:00Z",
                                                            "max_date": "2018-07-18T23:59:59.999Z"
                                                        }
                                                }
                                        }
                                    ]
                            }
                        ]
                }
            ]
    };