document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var body = "Name: " + name + "\n";
        body += "Email: " + email + "\n";
        body += "Message: " + message;

        
        var mailtoLink = "mailto:fiona2411@hotmail.com?subject=Message%20from%20Website&body=" + encodeURIComponent(body);

        
        window.location.href = mailtoLink;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.querySelector(".read-more");
    var readMoreContent = document.querySelector(".read-more-content");

    // Hide the additional content initially
    readMoreContent.style.display = "none";

    // Add event listener to the "Read More" button
    readMoreButton.addEventListener("click", function() {
        // Toggle the visibility of the additional content
        if (readMoreContent.style.display === "none") {
            readMoreContent.style.display = "block";
            readMoreButton.textContent = "Read Less"; // Change button text
        } else {
            readMoreContent.style.display = "none";
            readMoreButton.textContent = "Read More"; // Change button text
        }
    });
});
