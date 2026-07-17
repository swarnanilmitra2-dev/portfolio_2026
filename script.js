 
 // FOR THE 1ST PAGE ANIMATION :
 
 var typed = new Typed('#element',
     {
        strings: ['WEB DEVELOPER', 'GRAPHIC DESIGNER', 'WEBDESIGNER', 'NETWORK ENGINEER'],
        typeSpeed: 30,
        });



      //   FOR THE FORM USING AN FREE API KEY :

   const form = document.getElementById('form');
   const submitBtn = form.querySelector('button[type="submit"]');

   form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
               method: "POST",
               body: formData
         });

         const data = await response.json();

         if (response.ok) {
               alert("Success! Your message has been sent.");
               form.reset();
         } else {
               alert("Error: " + data.message);
         }

      } catch (error) {
         alert("Something went wrong. Please try again.");
      } finally {
         submitBtn.textContent = originalText;
         submitBtn.disabled = false;
      }
   });



   // FOR THIRD PAGE ANIMATION

   const card = document.getElementById("upcomingCard");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            card.classList.add("show");
        }

    });

}, {
    threshold: 0.4
});

observer.observe(card);