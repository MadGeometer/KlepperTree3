let timeBlockJson =
    {
        name: "Time Blocks",
        description: "",
        children:
            [
                {
                    name: "Create a Time Block",
                    description: "Create a time block",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "name": "Play",
                                    "days": "0111110",
                                    "start_time": "22:00:05",
                                    "duration_in_minutes": 480,
                                    "is_default": false,
                                    "is_repeating": true,
                                    "user_id": "***",
                                    "mode_id": "***"
                                }
                        }
                },
                {
                    name: "Retrieve by Time Block ID",
                    description: "Retrieve a time block",
                    message:
                        {
                            "action": "***",
                            "time_block_id": 22
                        }
                },
                {
                    name: "Retrieve by User ID",
                    description: "Retrieve by user ID",
                    message:
                        {
                            "action": "***",
                            "user_id": "***"
                        }
                },
                {
                    name: "Retrieve by Mode ID",
                    description: "Retrieve by mode ID",
                    message:
                        {
                            "action": "***",
                            "mode_id": "***"
                        }
                },
                {
                    name: "Update",
                    description: "Update",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "name": "Nap",
                                    "days": "1111111",
                                    "start_time": "18:30:00",
                                    "duration_in_minutes": 30,
                                    "is_default": false,
                                    "is_repeating": true
                                },
                            "time_block_id": 22
                        }
                },
                {
                    name: "Delete",
                    description: "Delete",
                    message:
                        {
                            "action": "***",
                            "time_block_id": 23
                        }
                }
            ]
    };