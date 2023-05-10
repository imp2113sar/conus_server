// Start the server
const port = process.env.PORT || 8000;
const express = require('express');
const app = express();

// Define the route for the API endpoint
app.get('/current-time', (req, res) => {
  // Get the current time
  const currentTime = new Date();

  // Create the JSON object with the current time
  const responseData = {
    time: currentTime.toISOString(),
  };

  // Send the JSON response
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});