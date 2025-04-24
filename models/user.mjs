export default function User(id, isAuthenticated=false) {
    this.id = id;
    this.isAuthenticated = isAuthenticated;

    this.orders = [];

    this.addOrder = order => this.orders.push(order);
    this.getOrders = () => this.orders;
    this.getOrderById = id => this.orders.find( order => order.id == id );
}