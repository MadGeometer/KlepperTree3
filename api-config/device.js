let deviceJson =
    {
        name: "Device",
        description: "",
        children:
            [
                {
                    name: "Device Management",
                    description: "",
                    children:
                        [
                            {
                                name: "Get Device",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***"
                                    }
                            },
                            {
                                name: "Get All Devices in Group",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            },
                            {
                                name: "Get Children's Devices in Group",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            },
                            {
                                name: "Update Device",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "name": "Marge's New Android Phone",

                                                "os_version": "[ 8, 2, 17, 5 ]",
                                                "carrier": "AT&T",

                                                "registration_step": "MDM enroll complete",
                                                "device_state": "active",
                                                "registration_token": ""
                                            }
                                    }
                            },
                            {
                                name: "Update Current Mode (Child Only)",
                                description: "Called by child app to inform Goatee about the current mode it switched to",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "user_id": "***",
                                        "body":
                                            {
                                                "current_mode_id": "***",
                                                "reason":"parental_override",
                                                "next_transition_time": "2018-07-11T23:59:59.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Delete Device",
                                description: "Mark Device for Deletion",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***"
                                    }
                            },
                            {
                                name: "Handle Uninstall",
                                description: "Mark Device for Deletion and Notify parent",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***"
                                    }
                            }
                        ]
                },
                {
                    name: "Location",
                    description: "",
                    children:
                        [
                            {
                                name: "Get Location",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-05-18T21:00:00Z",
                                                "max_date": "2018-05-31T21:44:50.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Get Aggregated Location",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-08-05T00:00:00Z",
                                                "max_date": "2018-08-10T23:59:59Z"
                                            }
                                    }
                            },
                            {
                                name: "Add Location",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "device_id": "***",
                                                "user_id": "***",
                                                "track_date": "2018-05-18T22:55:50.506Z",
                                                "latitude": 40.062911,
                                                "longitude": -75.467508,
                                                "speed" : 10.5,
                                                "accuracy": 20.5,
                                                "action": "leave",
                                                "last_known_timezone":"EDT",
                                                "last_known_offset": -240
                                            }
                                    }
                            },
                            {
                                name: "Add geofence event",
                                description: "Add geofence event",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "track_date": "2018-06-22T14:15:20.506Z",
                                                "named_location_id": 3,
                                                "action": "enter"
                                            }
                                    }
                            },
                            {
                                name: "Get Locations of Children's Primary Devices",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            }
                        ]
                },
                {
                    name: "Screen Time",
                    description: "",
                    children:
                        [
                            {
                                name: "Add Usage Intervals",
                                description: "Added to support multiple devices",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "last_known_timezone": "EDT",
                                                "last_known_offset": -240,
                                                "daily_sum_in_seconds": 21600,
                                                "usage_date": "2018-09-17",
                                                "usage_intervals":
                                                    [
                                                        {
                                                            "start": "2018-09-17T13:00:00.000Z",
                                                            "end": "2018-09-17T16:00:00.000Z"
                                                        },
                                                        {
                                                            "start": "2018-09-17T17:00:00.000Z",
                                                            "end": "2018-09-17T18:00:00.000Z"
                                                        },
                                                        {
                                                            "start": "2018-09-17T19:00:00.000Z",
                                                            "end": "2018-09-17T21:00:00.000Z"
                                                        }
                                                    ]
                                            }

                                    }
                            },
                            {
                                name: "Add Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "begin_time": "2018-05-18T22:55:50.506Z",
                                                "seconds": 400,
                                                "last_known_timezone":"EDT",
                                                "last_known_offset": -240,
                                                "daily_sum_in_seconds": 1300
                                            }
                                    }
                            },
                            {
                                name: "Get Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-05-18T21:00:00Z",
                                                "max_date": "2018-05-18T22:55:50.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Add Accumulated Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "date": "2018-07-11T23:59:59.506Z",
                                                "sum_in_seconds": 1300
                                            }
                                    }
                            },
                            {
                                name: "Get Accumulated Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-07-01T21:00:00Z",
                                                "max_date": "2018-07-17T21:44:50.506Z"
                                            }
                                    }
                            }
                        ]
                }
            ]
    };