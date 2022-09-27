const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})

const budget = [
    { budgetAmount : 0, totalExpenses: 0, balance : 0 }
]

app.get('/viewBudget', (req, res) => {
    if(budget.budgetAmount == 0){
        res.status(400).send({
            message: 'Budget has not been created'
        })
    } else {
        res.status(200).send({
            message: 'Budget and Expenses details',
            data: budget
        })
    }
})

app.post('/updateBudget', (req, res) => {
    let { budgetAmt } = req.body
    if(!budgetAmt){
        res.status(404).send({
            message: 'Please input your total budget amount'
        })
    }else{
        budget[0].budgetAmount = Number(budgetAmt)
        budget[0].balance = budget[0].budgetAmount - budget[0].totalExpenses
        res.status(200).send({
            message: 'Total budget updated',
            TotalBudget: budget[0]
        })
    }
})

app.post('/addExpenses', (req, res) => {
    let { expenseName, expenseAmount } = req.body
    if(!expenseName || !expenseAmount){
        res.status(404).send({
            message: 'Expenses name and amount are required'
        })
    } else {
        let id = budget.length
        expenseAmount = Number(expenseAmount)
        budget[0].totalExpenses += expenseAmount
        budget[0].balance = budget[0].budgetAmount - budget[0].totalExpenses
        const expenses = {id: id, name: expenseName, amount: expenseAmount}
        budget[id] = expenses
        res.status(200).send({
            message : 'Expenses added successfully',
            data : [expenses, budget[0]]
        })
    }
})