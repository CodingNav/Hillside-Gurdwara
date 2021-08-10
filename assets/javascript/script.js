$(document).foundation();

$.ajax({
    method: "POST",
    url: "https://www.sikhcoalition.org/wp-json/facetwp/v1/refresh",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "x-requested-with"
    },
    data: JSON.stringify({
        "action": "facetwp_refresh",
        "data": {
            "facets": {
                "resource_types": [
                    "community-resources"
                ],
                "keyword": "",
                "document_type": [],
                "topic": [],
                "issue_area": [],
                "audience": [],
                "language": [],
                "geography": [],
                "date_range": []
            },
            "frozen_facets": {},
            "http_params": {
                "get": {
                    "fwp_resource_types": "community-resources"
                },
                "uri": "resources",
                "url_vars": {
                    "resource_types": [
                        "community-resources"
                    ]
                }
            },
            "template": "resources",
            "extras": {
                "pager": true,
                "sort": "default"
            },
            "soft_refresh": 0,
            "is_bfcache": 1,
            "first_load": 0,
            "paged": 1
        }
    })
}).then(function(response) {
    console.log(response);
})