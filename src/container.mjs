import Bowl from "../models/bowl.mjs";
import Order from "../models/order.mjs";

export default function Container() {
    this.bowls = []
    this.orders = []
    this.users = []

    // bowls functions
    this.addBowl = bowl => this.bowls.push(bowl);
    this.getBowls = () => this.bowls;
    this.getBowlById = id => this.bowls.find( bowl => bowl.id == id );
    this.delBowlById = id => { 
        this.bowls = this.bowls.filter( bowl => bowl.id != id );
    };
    

    // order functions
    this.addOrder = order => this.orders.push(order);
    this.getOrders = () => this.orders;
    this.getOrderById = id => this.orders.find( order => order.id == id );
    this.delOrderById = id => { 
        this.orders = this.orders.filter( order => order.id != id );
    };

    // user functions
    this.addUser = user => this.users.push(user);
    this.getUsers = () => this.users;
    this.getUserById = id => this.users.find( user => user.id == id );
    this.delUserById = id => { 
        this.users = this.users.filter( user => user.id != id );
    };

}