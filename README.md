# odin_ejs_messageboard

## Part 1
1. Set up a basic Express app by installing Express and EJS. Set up a basic index route and run your server. Create the required folders and files as discussed in the previous lessons.
    - 2 routes: (1) index ("/") and (2) “new message” form ("/new").
2. Create an array at the top of your index router called messages and put a couple of sample messages inside of it like this:
    ``` js
        const messages = [
        {
            text: "Hi there!",
            user: "Amando",
            added: new Date()
        },
        {
            text: "Hello World!",
            user: "Charles",
            added: new Date()
        }
        ];
    ```
3. On index template (in the "views" folder) loop through the messages array and for each one. Display message: 
    - user 
    - text  
    - date created 
_Include in `res.render`, ‘locals’ object_
    - (e.g. res.render("index", { title: "Mini Messageboard", messages: messages })).
4. Add new message form. 
    - In router: 
        - Add a router.get() for the "/new" route
        - Point it to a template named "form". 
        - add a router.post() for "/new".
    - In the views directory, Create your form template. 
        - Add a heading, 
        - 2 inputs (one for the author’s name and one for the message text) 
        - submit button. 
        - Define it with both a method and an action like so:
            ```html
                <form method="POST" action="/new">
                put your inputs and buttons in here!
                </form>
            ```
            - Should send a POST request to the url specified by the action attribute. 
5. Access form data inside router.post() as an object through `req.body`. 
    - Individual fields inside the body object are named following form input `name` attribute. 
    - Requires app level Ex. middleware called `express.urlencoded()` to parse form data into req.body. 
        ```js
            app.use(express.urlencoded({ extended: true }));
        ```
6. In router.post() push submission contents into the messages array as an object. Example:
    ```js
        messages.push({ text: messageText, user: messageUser, added: new Date() });
    ```
7. End router.post() with `res.redirect("/")` to redirect to index after submission.
8. You should be able to: 
    - Visit `/new`. Add a link to that route on index. 
    - Fill out the form & submit it. 
    - See new message on the index.
9. Add “open” button or link next to every message to open a new page with the message details.
10. Push your project to GitHub.
11. Submit to Odin.

## Part 2
12. Host this. Cloudlfare?

# https://odin-ejs-messageboard.curly-pond-2ba7.workers.dev/

## Part 3
13. Integrate Postgres DB
14. Rewrite to manage data through DB
15. Add appropriate server-side validation for user input
16. Host DB. Nano?