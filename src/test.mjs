import Bowl from "../models/bowl.mjs";
import Order from "../models/order.mjs";
import Container from "./models.mjs";

const myContainer = new Container();

myContainer.addBowl( new Bowl(0, 'R', 'rice', ['tuna'], ['avocado', 'avocado', 'ananas', 'avocado', 'kale', 'kale']));
myContainer.addBowl( new Bowl(1, 'R', 'black rice', ['chicken'], ['mango', 'tomatoes', 'avocado', 'ananas']));
myContainer.addBowl( new Bowl(2, 'L', 'salad', ['salmon', 'tofu', 'tuna'], ['mango', 'peppers', 'avocado', 'kale', 'carrots']));
myContainer.addBowl( new Bowl(3, 'M', 'rice', ['tuna', 'salmon'], ['cashew nuts', 'ananas', 'kale']));
myContainer.addBowl( new Bowl(4, 'R', 'salad', ['tofu'], ['wakame']));

// console.log(myContainer.getBowlById(0));
// console.log(myContainer.getBowlById(0).price());
// console.log(myContainer.delBowlById(3));
// console.log(myContainer.getBowls());

myContainer.addOrder( new Order(0, [...myContainer.getBowls()], "Sono allergico al pomodoro") );
console.log(myContainer.getOrderById(0));
console.log(myContainer.getOrderById(0).getTotalPrice());

myContainer.addOrder( new Order(0, [myContainer.getBowlById(0), myContainer.getBowlById(1)], "Sono allergico al pomodoro") );

myContainer.addUser( new User(0, false) );
myContainer.addUser( new User(1, true) );
myContainer.addUser( new User(2, false) );




