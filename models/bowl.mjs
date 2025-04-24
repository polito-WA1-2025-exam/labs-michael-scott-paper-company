export default function Bowl(id, size, base, proteins, ingredients) {
    this.id = id;
    this.size = size;
    this.base = base;
    this.proteins = proteins;
    this.ingredients = ingredients;

    this.numOfExcessedIngredients = () => {
        let num = 0;

        const RUpTo = 4;
        const MUpTo = 4;
        const LUpTo = 6;
       
        switch(this.size) {
            case 'R':
                num = this.ingredients.length - RUpTo;
                if (num < 0) num = 0;
                break;
            case 'M':
                num = this.ingredients.length - MUpTo;
                if (num < 0) num = 0;
                break;
            case 'L':
                num = this.ingredients.length - LUpTo;
                if (num < 0) num = 0;
                break;
        }

        return num;
    }

    this.price = () => {
        let price = 0.0;

        // TODO each bowl size has a price which is stored in the DB
        
        const extra = 0.20;
        const RSizeCost = 9;
        const MSizeCost = 11;
        const LSizeCost = 14;

        switch(this.size) {
            case 'R':
                price = RSizeCost;
                price += this.numOfExcessedIngredients() * extra * RSizeCost;
                break;
            case 'M':
                price = MSizeCost;
                price += this.numOfExcessedIngredients() * extra * MSizeCost;
                break;
            case 'L':
                price = LSizeCost;
                price += this.numOfExcessedIngredients() * extra * LSizeCost;
                break;
        }      
        return price;
    }

}




