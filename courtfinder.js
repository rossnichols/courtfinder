var url = "https://anc.apm.activecommunities.com/seattle/rest/reservation/resource";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 /*DONE*/)
    {
        console.log(xhr.status);

        if (xhr.status == 200)
        {
            console.log(JSON.parse(xhr.responseText));
        }
    }};

var data = `{
    "name": "",
    "start_index": 0,
    "order_by_field": "distance",
    "order_direction": "asc",
    "facility_type_ids": [39, 115],
    "date_times": [
        {
            "from_date_time": "2021-08-04 07:00:00",
            "to_date_time": "2021-08-04 08:00:00"
        }
    ],
    "client_coordinate": "47.664465410348654, -122.34827102799937"
}`;

xhr.send(data);
