let userJson =
    {
        name: "Users",
        description: "",
        children:
            [
                {
                    name: "User Management",
                    description: "",
                    children:
                        [
                            {
                                name: "Create User",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "name": "Bart",
                                                "email": "Bart@TheSimpsons.com",
                                                "password": "Cowabunga",
                                                "sex": "M",
                                                "age": "12",
                                                "user_type": "Child",
                                                "brand_id": 1,
                                                "avatar_id": "avatar_boy_1",
                                                "group_id": "***",
                                                "screen_time_limit_in_minutes": [120, 120, 120, 120, 120, 120, 180],
                                                "screen_time_warnings_in_seconds": [900, 300, 60],
                                                "force_safe_search": false,
                                                "allow_requests_from_child": false,
                                                "track_location": false,
                                                "removal_protection": false
                                            }
                                    }
                            },
                            {
                                name: "Get User",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***"
                                    }
                            },
                            {
                                name: "Get User's Device Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***"
                                    }
                            },
                            {
                                name: "Get Users in Group",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            },
                            {
                                name: "Get Parents in Group",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"
                                    }
                            },
                            {
                                name: "Get Children in Group",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "group_id": "***"/*,
                                "include_marked_for_delete": true*/
                                    }
                            },

                            {
                                name: "Get User's Devices",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***"
                                    }
                            },
                            {
                                name: "Update User",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "name": "Bart",
                                                "email": "bart@TheSimpsons.com",
                                                "sex": "M",
                                                "age": "11",
                                                /*"user_type": "Child",*/
                                                "avatar_id": "avatar_boy_3",
                                                "screen_time_limit_in_minutes": [0, 45, 60, 60, 60, 120, 180],
                                                "screen_time_warnings_in_seconds": [900, 300, 60, 15],
                                                "screen_time_exhausted_mode_id": "***",
                                                "force_safe_search": false,
                                                "allow_requests_from_child": false,
                                                "track_location": false,
                                                "***removal_protection": false,
                                                "screen_time_override_in_minutes": 120,
                                                "screen_time_override_date": "2018-10-16"
                                            },
                                        "user_id": "***"
                                    }
                            },

							{
								name: "Update Password",
								description: "",
								message:
									{
										"action": "***",
										"body":
											{
											    "user_id": "***",
											    "current_password": "Oh Homie",
											    "password": "Large Marge"
											}
									}
							},

                            {
                                name: "Delete User",
                                description: "Mark User for Deletion",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***"
                                    }
                            }
                        ]
                },
                {
                    name: "Pause & Resume",
                    description: "",
                    children:
                        [
                            {
                                name: "Pause User's Devices",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***",
                                        "resume_time": "2018-07-12T20:21:22.484Z",
                                        "reason": "Ran out of screentime"
                                    }
                            },
                            {
                                name: "Resume User's Devices",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***"
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
                                name: "Get User's Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-05-18T21:00:00Z",
                                                "max_date": "2018-05-18T22:55:50.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Get User's Accumulated Screen Time",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-07-01T21:00:00Z",
                                                "max_date": "2018-07-17T21:44:50.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Set User's Screen Time Limit Override",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "user_id": "***",
                                        "body":
                                            {
                                                "screen_time_override_in_minutes": 120,
                                                "screen_time_override_date": "2018-10-18"
                                            }
                                    }
                            }
                        ]
                }
            ]
    };