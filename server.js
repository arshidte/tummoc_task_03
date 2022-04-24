import express from "express";
import fetch from 'node-fetch';
const app = express();
app.use(express.json());

// To show the working of event loop, let's fetch a data from an external source.
// With the help of below api call, you can send name of a country as 'name' through request.body as json and it will return you the details of the country.
// Here, the fetching of country details is an asynchronous process(the process will take time).
// This process will be managed by event loop and return a promise or callback to the callback queque.
// All the application code that is inside callback function is in eventloop except top level codes.
// Eventloop receives events and calls their callback functions. They will send more expensive tasks to their thread pools.
// Eventloop has multiple phases. Each of them handles various types of events. They have callback queues into which the callback methods will queue.
// The first phase will be managing the timer methods (setTimeOut, setInterval etc.)
// Fetching data from APIs will be managed by microtask queque. It has higher priority than callback queue.

app.get("/", (req, res) => {
  const { name } = req.body;

  fetch(`https://restcountries.com/v2/name/${name}`)
    .then((response) => response.json())
    .then((result) => {
      res.status(200).json({result})
    });

});

app.listen("5000", () => {
  console.log("Server is running in port 5000");
});
