document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from submitting the default way
    event.preventDefault();
  
    // Get form fields
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
  
    // Prepare data to send
    let data = {
      _replyto: email,
      message: message
    };
  
    // Send data using the fetch API
    fetch('https://formspree.io/f/xdoqkonr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // If the submission was successful, clear the form
        document.querySelector('form').reset();
        console.log('Form successfully submitted');
      } else {
        console.error('Error:', data);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });