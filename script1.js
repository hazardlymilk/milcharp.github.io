$(document).ready(function() {
    var audio = new Audio('door.wav');
    $('#test').click(function() {
        $('#test').addClass('zoom-in'); // Apply zoom effect
        audio.play(); // Play the sound effect
        setTimeout(function() {
          $('#test').attr('src', 'open0.png');
          setTimeout(function() {
            $('#test').attr('src', 'open.png'); // Replace image source with 'open.png'
            setTimeout(function() {
                window.location.pathname = 'cake.html';
            }, 3000);
        }, 1000); // Wait for 0.3 seconds (300ms) for the zoom effect
      });
    });
});