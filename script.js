  var typed = new Typed('#element',
     {
        strings: ['WEB DEVELOPER', 'GRAPHIC DESIGNER', 'WEBDESIGNER', 'NETWORK ENGINEER'],
        typeSpeed: 30,
        });

   const form = document.getElementById('form');
   const submitBtn = form.querySelector('button[type="submit"]');

   form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      formData.append("access_key", "f56d708a-ab44-455d-8162-e4f2b6379a38");

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