# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

First your web browser will contact the DNS (Domain Name System) server which translates its "human name" (techtonic.com) into its "computer name" (the numbers that make up its IP address). After DNS returns the IP address to the browser, the browser communicates with the web server that hosts the website. It connects to port number 80 on the web server using TCP protocol. The browser can then retrieve the code and display it in the browser window.

source: https://www.programmerinterview.com/networking/what-happens-when-you-visit-a-website/

## From start to finish, how does data reach you to be rendered in the browser?

Your browser can't read the data at first and must convert it in order to render it.

HTML is handled first. It reads the raw bytes (1s and 0s) and converts them to a DOM tree by way of converting bytes to characters, tokens, and nodes. Elements are rendered in a hierarchy starting with <html>. The next on the list is <head> and <body> and then the elements nested within them.

CSS goes through a similar process of rendering in a hierarchy tree system.

After this, the rendering engine recursively goes through the HTML elements in the tree and places them on the screen starting from the top left. Each node is drawn out on the screen by communicating with the OS interface which decides on what user interface elements to use.

JavaScript is a bit different. It is only rendered after the above has already happened. Once that happens, JS is rendered and then triggers a re-render to account for any changes.

sources: https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/ &
https://www.pathinteractive.com/blog/design-development/rendering-a-webpage-with-google-webmaster-tools

## What code is rendered in the browser?

HTML, CSS, and JavaScript.

## What is the server-side code’s main function?

When a client (a PC) makes a request for a web page, it is requested by the server. The server handles things like permanent storage such as databases and files. The server will also render pages to the client's input and provide a customized response for each request.

Server-side processing happens when a page is first requested and when pages are posted back to the server. Examples of server-side processing are user validation, saving and retrieving data, and navigating to other pages. Source code can also be hidden on the server-side.

Popular server-side languages are Java and PHP.

sources: https://en.wikipedia.org/wiki/Server-side_scripting &
https://www.codeconquest.com/website/client-side-vs-server-side/

## What is the client-side code’s main function?

Client-side development is mainly done in JavaScript, HTML, and CSS. JavaScript is client-side because it runs scripts on the client's computer after they've loaded a web page. Client-side scripts are mainly centered on visual aspects of the web page.

sources: https://www.codeconquest.com/website/client-side-vs-server-side/ &
https://www.upwork.com/hiring/development/how-scripting-languages-work/

## What is runtime?

Runtime is the period of time when a program is running. When you start a program on a computer, it is runtime for that program. When you quit or close the program, it ends. When a program is in a runtime phase, the application (and any libraries, frameworks, or other files referenced by the program) is loaded into the RAM.

sources: https://searchsoftwarequality.techtarget.com/definition/runtime &
https://techterms.com/definition/runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One, which is displayed on the client's browser.

## How many instances of the server-side code are available at any given time?

There is one copy of the code, but it is available to every visitor who visits the site. Data can be pulled from a database, however, so it is possible for each visitor can have a unique experience

## How many instances of the databases connected to the server application are created?

There is one, but it is possible to have multiple connections to the database.

## Note: The wording on 6 through 8 is a bit confusing to me so I may have understood the question wrong. I wasn't able to find much information through Google.
