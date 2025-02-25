**Runtime:-** JavaScript run in runtime: it get's more powerful beacuse runtime itself provide's cool features. It's capability get enhanced beacuse it get's access to runtime features.

For Example:

- document.getElementById('btn')
- setTimeout
- setInterval

`Browser, Node.js act's as runtime environment.`

What features:

- event loop to run async code
- memory architecture (CallBack Queue and Microtask Queue)

**Why Node.js?**

In 2009 - Ryan Dahl buit Node.js. Node.js will extract core functionality of JavaScript from Browser's and now we able to run inside our "terminal". It sets lot's for us. Browser based runtime can't inetarct with our file system but Node.js runtime will do.

**Features of Node.js:-**

- open source
- brings raw js feature to our terminal so that we can interact with "os" feature

**Runtive vs. Framework**

- runtime will provide you resource to get your work done
- framework will provide you the rules and regualtion and you are to complete the certain work

**IO operations:-**

One of the most expensive operations that will exist indside the computer system.

- blocking i/o ->
- non-blocking i/o ->

In the Node.js runtime, the event demultiplexer is a key component that helps manage asynchronous operations efficiently. It is part of libuv, the library that powers Node.js's non-blocking I/O model.

**Architecture of Node.js**

![Runtime](/images/1.png)
![RUntime_With_JavaScript](/images/2.png)

**Globals**
These are the functiobality that is accessed by JavaScript code inside Node.js runtime.

- process
- \_\_dirname
- require
- global
- module

**How Internet Works ?**
![Internet](/images/3.png)
![DNS](/images/4.png)
