/* <video id="videoBackground" autoplay loop muted playsinline>
        <source src="./assets/bacground video/background.mp4" type="video/mp4">
      </video>
     <!-- audio tag added -->
      <audio id="myAudio" src="./assets/bacground music/Mozart - Turkish March - Marcha Turca.mp3" autoplay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
      </audio>
      <script>
        var audio = document.getElementById("myAudio");
        audio.volume = 0.2;
      </script>
 */









    
        // Get the audio element
        const audio = document.getElementById('myAudio');

        // Check if the audio position is stored in localStorage
        const storedPosition = localStorage.getItem('audioPosition');
        if (storedPosition) {
            // Convert the stored position to a number and set it as the audio's current time
            audio.currentTime = parseFloat(storedPosition);
        }

        // Update the localStorage with the current audio position when the time changes
        audio.addEventListener('timeupdate', () => {
            localStorage.setItem('audioPosition', audio.currentTime.toString());
        });
    