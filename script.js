$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load' , function(){
        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');
    });
})

$(document).ready(function() {
    // Data for each popup
    const popupData = {
        "experience": "Detailed information about your experience.",
        "projects": "Detailed information about your projects.",
        "certifications": "Detailed information about your licenses and certifications.",
        "skills": "Detailed information about your web development skills.",
        "intern": "Detailed information about your remote internships.",
        "video-editing": "Detailed information about your video editing experience."
    };

    // Event listener for show more buttons
    $(".box .btn").on("click", function() {
        const buttonId = $(this).attr("id");
        $("#popup-data").html(popupData[buttonId]);
        $("#popup-overlay").fadeIn();
    });

    // Close popup
    $(".close-btn, #popup-overlay").on("click", function() {
        $("#popup-overlay").fadeOut();
    });

    // Prevent closing popup when clicking inside the content area
    $(".popup-content").on("click", function(e) {
        e.stopPropagation();
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const project = document.querySelector('input[name="project"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nProject: ${project}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/919609887167?text=${encodeURIComponent(whatsappMessage)}`;

    const whatsappAnchor = document.getElementById('whatsapp-link');
    whatsappAnchor.href = whatsappLink;
    whatsappAnchor.style.display = 'block';
    whatsappAnchor.click();
});
