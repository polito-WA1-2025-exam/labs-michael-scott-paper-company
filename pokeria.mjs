
import sqlite from 'sqlite3'

function Bowl(size, base, proteins, ingredients) {

    if (typeof Bowl.idCounter == 'undefined') {
        Bowl.idCounter = 0;
    }

    this.id = Bowl.idCounter++;
    this.size = size;
    this.base = base;
    this.proteins = proteins;
    this.ingredients = ingredients;

    Bowl.prototype.print = function() {
        console.log(`ID: ${this.id}`)
        console.log(`Size: ${this.size}`)
        console.log(`Base: ${this.base}`)
        console.log(`Proteins: ${this.proteins}`)
        console.log(`Ingredients: ${this.ingredients}`)
    }
}

function Order() {

    if (typeof Order.idCounter == 'undefined') {
        Order.idCounter = 0;
    }

    this.id = Order.idCounter++;
    this.numOfBowls = 0;
    this.textInput = '';
    this.totalPrice = 0;
}

function User() {

    if (typeof User.idCounter == 'undefined') {
        User.idCounter = 0;
    }

    this.id = User.idCounter++;
    this.isAuthenticated = false;
}

    function Container()
    {
        this.bowls = []
        this.orders = []
        this.users = []


        // bowls functions

        this.addBowl = function(bowl) {
            this.bowls.push(bowl)
        }

        this.getBowlById = function(bowlId) {
            return this.bowls.find(b => b.id == bowlId)
        }

        this.getBowlsBySize = function(size) {
            return this.bowls.find(b => b.size == size)
        }

        this.removeBowlById = function(bowlId) {
            const index = this.bowls.findIndex(b => b.id == bowlId);

            if (index !== -1) {
                this.bowls.splice(index, 1)
            }
            else {
                console.log("Bowl not found!") 
            }
        }

        // order functions

        this.addOrder = function(order) {
            this.orders.push(order)
        }

        this.getOrderlById = function(orderId) {
            return this.orders.find(o => o.id == orderId)
        }

        this.removeOrderById = function(orderId) {
            const index = this.orders.findIndex(o => o.id == orderId);

            if (index !== -1) {
                this.orders.splice(index, 1)
            }
            else {
                console.log("Order not found!") 
            }
        }

        // user functions

        this.addUser = function(user) {
            this.users.push(user)
        }

        this.getOrderlById = function(userId) {
            return this.users.find(u => u.id == userId)
        }

        this.removeUserById = function(userId) {
            const index = this.users.findIndex(u => u.id == userId);

            if (index !== -1) {
                this.users.splice(index, 1)
            }
            else {
                console.log("User not found!") 
            }
        }
    }

    let c = new Container()
    let b1 = new Bowl("R", "rice", ["tuna"], ["avocado", "ananas"]);
    let b2 = new Bowl("L", "salad", ["chicken", "salmon", "tofu"], ["avocado", "ananas", "kale", "mango"]);

    c.addBowl(b1);


    b1.print();
    b2.print();