// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number){
        this.client = client;
        this.details = details;
        this.amount = amount
    }

    format() {
        return '${this.client} owes ${this.amount}€ for ${this.details}'
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.push(new Invoice('mario', 'work on the mario website', 250))

invOne.client = 'yoshi'; 

console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLFormElement;


// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber ,
    );
})