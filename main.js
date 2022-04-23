const sample = [
    {
        name: "Perfume",
        price: 24.49,
        type: "cosmetic",
        imported: true
    },
    {
        name: "Book",
        price: 2.99,
        type: "book",
        imported: false
    },
    {
        name: "Music CD",
        price: 20.99,
        type: "audio",
        imported: false
    }
]

export default function getReceipt(basket) 
{

    // Empty array for the new items
    // Accumulators for the total cost and the total tax amount

    const updatedItems = []
    let totalTax = 0;
    let totalPrice = 0;

    // Loop through each item in basket
        // Calculate the tax for each item
        // Return the tax applied to that item and the new price
    // Push to the array with the new updated item
    for (let i = 0; i < basket.length; i++) {
        
        const {newPrice, tax} = calculateTax(basket[i])

        totalTax += tax;
        totalPrice += newPrice;

        const newItem = {
            name: basket[i].name,
            price: newPrice/100
        }

        updatedItems.push(newItem);
        
    }

    //Return a receipt consisting of our updatedItems with their new prices, a totalCost and a totalTax
    
    const receipt = {
        items: updatedItems,
        salesTax: totalTax/100,
        total: totalPrice/100
    }

    return receipt

}

function calculateTax(item)
{

    // Basic tax is 10%, exemptions are books, food, and medical products
    // Import tax is 5%, no exemptions
    const taxRates = {
        basic: 10,
        import: 5
    }

    // Exemptions as an array/set
    const exemptions = new Set(["book", "food", "medical"])
    
    let tax = 0;
    let newPrice = item.price * 100;

    if(!exemptions.has(item.type))
    {
        tax += applyTax(newPrice, taxRates["basic"])
    }

    if(item.imported)
    {
        tax += applyTax(newPrice, taxRates["import"])
    }

    newPrice += tax;

    return {newPrice, tax}
    // returns newPrice, tax
}

function applyTax(value, percentage)
{
    const tax = (value / 100) * percentage; // e.g 5%, 10%
    return Math.ceil(tax / 5) * 5; 
    // return tax amount rounded to 0.05 

}



function printReceipt(receipt)
{
    receipt.items.map((item) => {
        console.log(`${item.name}, £${item.price}`)
    })
    console.log(`Sales Tax: £${receipt.salesTax.toFixed(2)}\nTotal Price: £${receipt.total}`)
}

printReceipt(getReceipt(sample))

