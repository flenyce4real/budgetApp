const budget = [
    { Budget: 0, Expenses: 0, Balance: 0 }
]

function refreshScreen(){
    const { Budget, Expenses, Balance } = budget[0]
    budget[0].Balance = Budget - Expenses
    document.getElementById('budgetDisplay').innerHTML = `₦${Budget}`
    document.getElementById('expensesDisplay').innerHTML = `₦${Expenses}`
    document.getElementById('balanceDisplay').innerHTML = `₦${Budget - Expenses}`
}

function displaySummary(){
    let budgetAmount = Number(document.getElementById('budget').value)
    if (!isNaN(budgetAmount) && budgetAmount > 0) {
        budget[0].Budget = budgetAmount
        refreshScreen()
    } else {

    }
}

function addExpenses() {
    let id = budget.length
    let desc = document.getElementById('exp_name').value
    let amount = Number(document.getElementById('exp_amount').value)
    if (!isNaN(amount) && amount > 0 && desc !== '') {
        budget.push({id:id, name:desc, amount:amount})
        budget[0].Expenses += amount
        refreshScreen()
        let tableRow = `<tr>
                            <td>${id}</td>
                            <td>${desc}</td>
                            <td>${amount}</td>
                            <td style="font-size:18px"><i class="fa fa-edit"></i> / <i class="fa fa-trash" style="color:red"></i></td>
                        </tr>`
        document.getElementById('table_body_id').innerHTML += tableRow
        document.getElementById('exp_name').value = ''
        document.getElementById('exp_amount').value = ''
    } else {

    }
}