# Vue talk

Whenever I am at a talk, after hearing something discussed my most pressing
question is: "So how do I use it?" Sadly, most often there is no answer. After 
hearing great things about this technology, now I have to go back to some 
other resource to figure out how exactly to get it to work for me.

So insted of foisting this atrocity on you, I decided that I would give my 
listeners a choice between me talking to them with slides in an abstract 
sense or showing them how it is used. Both kinds of information are made
available here. My hope is that you will have a pleasant journey.

The first 9 or so examples are set up one to a directory labeled prog##. 
At the same level of these directories is a file app.js, that is 
used to deliver all required files to the sample programs. 
This way, once installed you do not need 
access to the internet and are not dependant on the network at all. To complete
this freedom, you should also get a copy of the site vuejs.ord and install
it on your machine. Now you can go to your favorite space and enjoy learning.

To run this: 
- Clone this repository
- Then run `npm install` 
Note: The above command will install the modules to run ALL the examples. The 
first set of examples can be run very simply, however the moment we start using
components that are in separate files, we have to use either browserify or
webpack to compile the code. And so it is all included here.

Now you are ready to run the examples. To run the first 15 examplese, 
run this at the command line. 
- run `node app.js`
- In a browser navigate to the file prog##/index.html
I suggest using Chrome browser because I find it excellent for debugging or
steppping through the code.

To run examples after the single page examples:
- kill the node process - if it running - with a `ctrl + c` (twice)

The multi-file examples are set up as separate branches in this git repo. The 
branches start with prog16. To switch to a branch use `git checkout <branch name>`.
Start the server with `npm run dev`, then in the browser navigate to 
`http://localhost:8080`.

Enjoy.

Jay Kelkar <jkelkar@gmail.com>

```
The examples:
00: Basic HTML set up which forms the basis of the rest of the code
01: Basic minimum Vue example - complete but trivial
02: v-model two way binding example
03: v-bind and v-on one way binding replacement for above
04: v-bind with checkboxes and radio buttons
05: event handling, conditionals and style binding
06: Inline components a simple example
07: List rendering of list and object
08: Style binding in a component
09: Components with props and custom events

ex01: Example of self paced learning - for AALR technician class exam


```