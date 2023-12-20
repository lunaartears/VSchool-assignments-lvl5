# Connecting the front end with the back end

    # Folder strucure - add client folder and install react app in client folder
    # Proxy - add "proxy": "localhost:/8000" to the end in package.json in client folder
        * then add another terminal for client and I can npm start from there
        * In the server.jsx I can still start up my server in it's terminal

# Status codes

    # 200 - Successful request
    # 201 - Successful insert (post request) / Successful update (put request)
    # 401 - Unauthorized
    # 404 - Not found
    # 500 - Server error

    # http://http.cat (website to show all the status codes)

# Intro to Mongoose
    * npm install mongoose / npm install mongodb

    # Purpose
        * Create models
        * Query data

        # Connect

# Mongoose schemas
    * Blueprints for our data

# Mongoose models
    * Models have a name, and a blueprint (schema)
    * Models are used to perform the CRUD operations on data created with the model
