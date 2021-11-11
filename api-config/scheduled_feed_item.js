let scheduledFeedItemJson =
    {
        name: "Scheduled Feed Items (Admin Only)",
        description: "",
        children:
            [
                {
                    name: "Create - Basic Example",
                    description: "Create a scheduled feed item without an audience",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "item_type": "advice",
                                    "publish_on": "2018-11-13",
                                    "ttl_in_days": 3,
                                    "details":
                                        {
                                            "icon_url": "***",
                                            "click_thru_url": "***",
                                            "title": " ",
                                            "link_text": "Welcome!!"
                                        }
                                }
                        }
                },
                {
                    name: "Create - Advanced Example for Future Use",
                    description: "Create a scheduled feed item",
                    message:
                        {
                            "action": "***",
                            "body":
                                {
                                    "item_type": "advice",
                                    "publish_on": "2018-11-13",
                                    "ttl_in_days": 3,
                                    "details":
                                        {
                                            "icon_url": "***",
                                            "click_thru_url": "***",
                                            "title": " ",
                                            "link_text": "Welcome!!"
                                        },
                                    "audience":
                                        {
                                            "min_age": 10,
                                            "max_age": 12,
                                            "sex": "M",
                                            "language": "en",
                                            "license_type_ids": ["free"]
                                        }
                                }
                        }
                },
                {
                    name: "Retrieve",
                    description: "Retrieve scheduled feed items by ID",
                    message:
                        {
                            "action": "***",
                            "scheduled_feed_item_id": 2,
                            "include_marked_for_delete": false
                        }
                },
                {
                    name: "Retrieve by Publish Date",
                    description: "Retrieve scheduled feed items by publish date",
                    message:
                        {
                            "action": "***",
                            "start_date": "2018-11-01",
                            "end_date": "2018-11-31",
                            "include_marked_for_delete": false
                        }
                },
                {
                    name: "Update",
                    description: "Update scheduled feed item",
                    message:
                        {
                            "action": "***",
                            "scheduled_feed_item_id": 17,
                            "body":
                                {
                                    "publish_on": "2018-11-20",
                                    "ttl_in_days": 1,
                                    "details":
                                        {
                                            "icon_url": "***",
                                            "click_thru_url": "***",
                                            "title": " ",
                                            "link_text": "Welcome!!!"
                                        },
                                    "audience":
                                        {

                                        }
                                }
                        }
                },
                {
                    name: "Mark for Delete",
                    description: "Mark scheduled feed item for delete",
                    message:
                        {
                            "action": "***",
                            "scheduled_feed_item_id": 1
                        }
                },
                {
                    name: "Delete",
                    description: "Delete scheduled feed item",
                    message:
                        {
                            "action": "***",
                            "scheduled_feed_item_id": 1
                        }
                },
                {
                    name: "Publish Today's Items",
                    description: "Publish scheduled feed items",
                    message:
                        {
                            "action": "***"
                        }
                }
            ]
    };