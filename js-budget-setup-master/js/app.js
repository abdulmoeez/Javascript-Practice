class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }


   submitBudgetForm(){
    const value = this.budgetInput.value;
    if (value === '' || value < 0 ) {
        this.budgetFeedback.classList.add('showItem')
        this.budgetFeedback.innerHTML = `<p>Please enter a legitimite value!</p>`;
       const self = this;

      setTimeout(function (){
        self.budgetFeedback.classList.remove('showItem')
      },4000)
          
    }
    else{
        this.budgetAmount.textContent = value;
        this.budgetInput.value='';
        this.showBalance();



      
        
    }

  

   }

     // SHOW BALANCE
     showBalance(){
      const expense = this.totalExpense();
      const total = parseInt(this.budgetAmount.textContent) - expense
      this.balanceAmount.textContent = total;
      if (total < 0 ) {
        this.balance.classList.remove('showGreen', 'showBlack')
        this.balance.classList.add('showRed')

      }
         else if (total > 0 ) {
        this.balance.classList.remove('showRed', 'showBlack')
        this.balance.classList.add('showGreen')

      }
         else if (total === 0 ) {
        this.balance.classList.remove('showGreen', 'showRed')
        this.balance.classList.add('showBlack')

      }
    
    }
    //  SUBMIT EXPENSE FORM
    submitExpenseForm(){
    const expenseValue = this.expenseInput.value;
    const expenseAmount = this.amountInput.value;
    if (expenseValue === ''|| expenseAmount===''||expenseAmount<0) {

      this.expenseFeedback.classList.add('showItem')
      this.expenseFeedback.innerHTML= `<p>Please Enter a legitimite Value</p>`
      let self = this;
      setTimeout(function () {
       self.expenseFeedback.classList.remove('showItem')
      },4000)
    }
    else{

      const amount = parseInt(expenseAmount);
      this.expenseInput.value = ""
      this.amountInput.value = ""

          let expense = {
          id:this.itemID,
          title:expenseValue,
          amount:amount,
        }

        this.itemID++;
        this.itemList.push[expense];
        this.addExpense(expense);


    }

  


    }

    addExpense(expense){
      const div = document.createElement('div');
      div.classList.add('expense');
      div.innerHTML=`
      <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item"> - ${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
      `
    this.expenseList.appendChild(div);
    console.log(expense.id)

    }




    totalExpense(){
      let total = 400;
      return total
    }

   


}

//FUNCTIONS FOR EVENT LISTENERS

function eventListeners(){

    
  const budgetForm = document.getElementById('budget-form'); 
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');


  // INSTANCE OF CLASS
  const ui = new UI();
  console.log(ui)

  // EVENT LISTENERS

   budgetForm.addEventListener('submit', function(e){
   e.preventDefault();
   ui.submitBudgetForm();
  });

   expenseForm.addEventListener('submit', function(e){
   e.preventDefault();
   ui.submitExpenseForm();


   

  });

  expenseList.addEventListener('click', function(e){
   if (e.target.parentElement.classList.contains('delete-icon')) {
            let parent = e.target.parentElement.parentElement.parentElement.parentElement;
    if (confirm('Are you sure to delete')) {
    document.getElementById('expense-list').removeChild(parent);


    }
   }
    else if (e.target.parentElement.classList.contains('edit-icon')) {
    console.log('edit icon')
   }

  });
};


document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})

  

 
