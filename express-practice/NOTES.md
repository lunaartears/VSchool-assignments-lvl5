# Intro to express
* (to write a server)

# initialize a new node projcet
- run npm init -y to install a package.json

-run npm install <dependencies> (express) ect.
    * npm install express

# Vocab
* Route: an event listener for http requests
* Endpoint: "/user", "/item" end of a url
* Port: localhost: 9000/


# Install nodemon globally
* npm install -g nodemon. Or

# Intro to Rest API architecture
    * Rest - representational state transfer
        use intuitive endpoint names to match state

    * Resource - single item (object) in a database
        /user/234356 <- (user id requets a single item)

    * Collection - a collection of similar items in a database
        http://amazon.com/movies <- (movies requests a colletion)

    * Base (root) URL - http://amazon.com/

    * API endpoint -    http://amazon.com/movies (movies is the endpoint) http://amazon.com/movies/765645 (user id is the endpoint)

    * Parameter - /movies/:movieId - requests a single item

    * Query (query string) - /movies?genre=action&year=1999 (requests a sub collection (action movies) and(&)(year 1999))

    * Client - frontend

    * Server - Intermediary (recieves a request and performs an action)

    * Request Method - CRUD (GET, POST, DELETE, PUT)

    ** When doing  post request, go to body, then raw

# How to craft endpoints
    *camping goods store*
        tents
        sleepling bags
        cooking
        lights

        all equipment - equipment
        all tents - equipment/tents
        single tent - equipment/tents/45rr632g753 (id#)



# Middleware - a function that fires on the inbetween

# Request Body (req.body)

app.use("/", express.json()) (tells our server to use something) (if a reuqest comes to "/", call this function and look for a request body) (Any time a request comes to "/", it will fire the express.json() function. Looks for a request body and parses the JSON into javascript and puts it in req.body) (if you get rid of the "/", it will fire the function on every request that comes in)

# UUID - creates unique id (used for fake data only. Gives each fake data element an id)
    * npm install uuid (install for each server created)


# Express Router - enables us to modularize our routes in express
# Modular file organization - different files are used for different tasks

# URL Parameters
    # Parts of a URL
        * Base - http:/amazon.com
        * Endpoint - http:/amazon.com/images
        * Parameter - http:/amazon.com/images/567s765ert8 (id#)
        * Query -
