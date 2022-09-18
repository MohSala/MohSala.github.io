$(function () {
    $("#send").click(updateUserDetails);
});

const userapi = "https://jsonplaceholder.typicode.com/users/"
const api = "https://jsonplaceholder.typicode.com/posts?userId="
let userName = "";
let email = ""
let userId = $("#userId").val();
const updateUserDetails = () => {
    console.log("Log user data");
    $('#userDetails').empty();
    userId = $("#userId").val();
    userName = "";
    email = ""

    $.ajax({
        url: userapi + userId,
        type: "GET",
        dataType: "json",
        success: userData
    })
    $.ajax({
        url: api + userId,
        type: "GET",
        dataType: "json",
        success: showUser
    })
}

const userData = (data) => {
    userName = data.username;
    email = data.email;
}

const showUser = (data) => {
    console.log("DATA", data)
    $('#userDetails').append(
        "<li>Name: " + userName + "</li>",
        "<li>Email: " + email + "</li>",
    )
    for (var i in data) {
        if (userId == data[i]["userId"]) {
            $('#userDetails').append("<h5>Title: " + data[i]["title"] + "</h5>")
            $('#userDetails').append("<p>Description: " + data[i]["body"] + "</p>")

        }
    }
}