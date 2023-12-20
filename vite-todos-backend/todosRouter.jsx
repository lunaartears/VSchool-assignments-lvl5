const express = require("express")
const todosRouter = express.Router()
const {v4:uuidv4} = require("uuid")

const todos = [
    {title: "Get cat food", notes: "PetCo", completed: false, _id: uuidv4()},
    {title: "Put up Yule tree", notes: "Space theme", completed: false, _id: uuidv4()},
    {title: "Pack for trip", notes: "Small suitcase", completed: false, _id: uuidv4()},
]

todosRouter.get("/", (req, res) => {
    res.send(todos)
})

todosRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todosRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.title} to database`)
})

todosRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo")
})

todosRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})


module.exports = todosRouter
