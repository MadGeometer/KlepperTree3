let namedLocationJson =
    {
        name: "Named Locations",
        description: "",
        children:
            [
                {
                    name: "Create",
                    description: "Create a named location",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    name: "Home",
                                    group_id: "***",
                                    latitude: 40.062911,
                                    longitude: -75.467508,
                                    accuracy: 100,
                                    action: "alert"
                                }
                        }
                },
                {
                    name: "Retrieve",
                    description: "Retrieve by the ID",
                    message:
                        {
                            "action": "***",
                            "named_location_id": 1,
                            "group_id": "***"
                        }
                },

                {
                    name: "Retrieve by Group ID",
                    description: "Retrieve named location(s) by group ID",
                    message:
                        {
                            "action": "***",
                            "group_id": "***"
                        }
                },

                {
                    name: "Update",
                    description: "Update a named location",
                    message:
                        {
                            "action": "***",
                            "named_location_id": 1,
                            "group_id": "***",
                            "body":
                                {
                                    name: "Mom's House",
                                    latitude: 40.063,
                                    longitude: -75.46500,
                                    accuracy: 150,
                                    action: "nothing"
                                }
                        }
                },

                {
                    name: "Delete",
                    description: "Delete by the ID",
                    message:
                        {
                            "action": "***",
                            "named_location_id": 1,
                            "group_id": "***"
                        }
                }
            ]
    };