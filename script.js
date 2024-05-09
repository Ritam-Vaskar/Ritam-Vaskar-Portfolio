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



let showLoginButton = document.getElementById('showLogin' , 'edu');
        const overlay = document.getElementById('overlay');
        const loginContainer = document.getElementById('loginContainer');
        const closeLoginButton = document.getElementById('closeLogin');

        showLoginButton.addEventListener('click', () => {
            overlay.style.display = 'flex';
            loginContainer.style.display = 'block';
            loginContainer.shop.display = 'block';
        });

        closeLoginButton.addEventListener('click', () => {
            overlay.style.display = 'none';
            loginContainer.style.display = 'none';
            loginContainer.shop.display = 'block';
        });



        document.addEventListener("DOMContentLoaded", function() {
            const skills = ["HTML", "CSS", "JavaScript", "Python", "React", "Node.js"];
            const skillList = document.getElementById("skill-list");
      
            skills.forEach(skill => {
              const li = document.createElement("li");
              li.className = "skill-item";
              li.innerHTML = `<span>${skill}</span>`;
              skillList.appendChild(li);
            });
          });
