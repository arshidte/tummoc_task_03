# tummoc_task_04

Run 'npm start'

To show the working of event loop, let's fetch a data from an external source.

With the help of below api call, you can send name of a country as 'name' through request.body as json and it will return you the details of the country.

Here, the fetching of country details is an asynchronous process(the process will take time).

This process will be managed by event loop and return a promise or callback to the callback queque.

All the application code that is inside callback function is in eventloop except top level codes.

Eventloop receives events and calls their callback functions. They will send more expensive tasks to their thread pools.

Eventloop has multiple phases. Each of them handles various types of events. They have callback queues into which the callback methods will queue.

The first phase will be managing the timer methods (setTimeOut, setInterval etc.)

Fetching data from APIs will be managed by microtask queue. It has higher priority than callback queue.
