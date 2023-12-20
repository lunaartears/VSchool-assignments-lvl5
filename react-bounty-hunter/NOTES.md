app.listen() takes 2 arguments (gets 2 perameters) 1. port# 2. CB function (annonymous function)
    * port # should be between 3000 and 9000 (don't use 3000) localhost:9000/

app.get() (bountyRouter.get()) takes 2 arguments 1. Endpoint "/bounty" or "/" (our home endpoint or mountpath) 2. CB function with 2 perameters 1. reqest (req) 2. response (res)

# mongoose methods include:
# Methods for the backend requests to the database
    * .find()
    * .save()
    * .findOneAndDelete()
    * .findOneAndUpdate()
