
$("#signupButton").click(function(){
    let signup_name = $("#recipientName").val();
    let signup_email = $("#recipientMail").val();
    let signup_pass = $("#recipientPassword").val();
    let signup_contact = $("#recipientContact").val();
  
    $("#recipientName").val("");
    $("#recipientMail").val("");
    $("#recipientPassword").val("");
    $("#recipientContact").val("");

    localStorage.setItem("recipientName", signup_name);
    localStorage.setItem("recipientMail", signup_email);
    localStorage.setItem("recipientPassword", signup_pass);
    localStorage.setItem("recipientContact", signup_contact);

    alert("You Have Successfully Registered 🤗")

});

$("#signinButton").click(function(){
    let signin_email = $("#recipientMailSignin").val();
    let signin_pass = $("#recipientPasswordSignin").val();
  
    $("#recipientMailSignin").val("");
    $("#recipientPasswordSignin").val("");

    let email_data = localStorage.getItem("recipientMail");
    let pass_data = localStorage.getItem("recipientPassword");

    if(signin_email===email_data && signin_pass===pass_data){
        alert("Successfully Sign In 😇");
    }
    else{
        alert("You Entered Wrong Credentials! Enter Again 😞");
    }

});

var tour_name;
var tour_price;

$("#BookingBox1").click(function(){
    tour_name = $("#tourName1").text();
    tour_price = 6000; 
});

$("#BookingBox2").click(function(){
    tour_name = $("#tourName2").text();
    tour_price = 7000;
});

$("#BookingBox3").click(function(){
    tour_name = $("#tourName3").text();
    tour_price = 5000;
});

$("#BookingBox4").click(function(){
    tour_name = $("#tourName4").text();
    tour_price = 9000;
});

$("#BookingBox5").click(function(){
    tour_name = $("#tourName5").text();
    tour_price = 19000;
});

$("#BookingBox6").click(function(){
    tour_name = $("#tourName6").text();
    tour_price = 5000;
});


$("#BookingButton").click(function(){
    let name = $("#Name").val();
    let phone = $("#Contact").val();
    let date = $("#Date").val();
    let persons = $("#Quantity").val();
    let total_price = persons*tour_price;

    $("#Name").val("");
    $("#Contact").val("");
    $("#Date").val("");
    $("#Quantity").val("");


    localStorage.setItem("TravelersName",name);
    localStorage.setItem("TravelersContact",phone);
    localStorage.setItem("TourDate",date);
    localStorage.setItem("TourType",tour_name);
    localStorage.setItem("TotalPrice",total_price);

    alert(name+" you have successfully booked "+tour_name);
});



