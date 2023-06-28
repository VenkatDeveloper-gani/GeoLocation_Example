// Check if Geolocation is supported by the browser
if (navigator.geolocation) {
    // Geolocation is supported

    // Request the user's location
    navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback
    );
} else {
    // Geolocation is not supported
    document.getElementById('location').textContent = 'Geolocation is not supported by your browser';
}

// Success callback function
function successCallback(position) {
    // Retrieve latitude and longitude from the Position object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Display the location on the page
    document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

// Error callback function
function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            // User denied the permission request
            document.getElementById('location').textContent = 'User denied the permission for geolocation.';
            break;
        case error.POSITION_UNAVAILABLE:
            // Location information is unavailable
            document.getElementById('location').textContent = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            // The request timed out
            document.getElementById('location').textContent = 'Geolocation request timed out.';
            break;
        case error.UNKNOWN_ERROR:
            // An unknown error occurred
            document.getElementById('location').textContent = 'An unknown error occurred.';
            break;
    }
}
