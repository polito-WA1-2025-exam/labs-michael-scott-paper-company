export default function Order(id, bowls, textInput='') {  
    this.id = id;
    this.bowls = bowls;
    this.textInput = textInput;

    this.numOfBowls = () => this.bowls.length;

    // if order contains > 4 bowls => 10% discount on the total price 
    this.getTotalPrice = () => {
        const discount = 0.10;
        const threshold = 4; 

        let totalPrice = this.bowls.map( bowl => bowl.price() )
                    .reduce( (acc, val) => acc + val, 0.0);

        return this.numOfBowls() > threshold ? (totalPrice - totalPrice * discount) : totalPrice;
    }

}