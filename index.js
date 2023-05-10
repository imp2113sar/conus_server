// Start the server
const PORT = 8000;
import express from 'express';
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});