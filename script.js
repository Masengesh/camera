// Access the video element
const video = document.getElementById('video');

// Prompt the user for permission to access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        // Attach the video stream to the video element
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.error("An error occurred: " + err);
    });

// Access the canvas element and the snap and delete buttons
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const snap = document.getElementById('snap');
const deleteButton = document.getElementById('delete');

// Trigger photo capture when the snap button is clicked
snap.addEventListener('click', function() {
    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, 640, 480);
    // Show the delete button
    deleteButton.style.display = 'inline';
});

// Clear the canvas and hide the delete button when the delete button is clicked
deleteButton.addEventListener('click', function() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Hide the delete button
    deleteButton.style.display = 'none';
});
