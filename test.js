import getReceipt from './main.js'

describe('Get Receipt Tests', () => {
    
    const testCases = [
        {
            testId: 1,
            actual: [
                {
                    name: "Book",
                    price: 12.49,
                    type: "book",
                    imported: false
                },
                {
                    name: "Music CD",
                    price: 14.99,
                    type: "audio",
                    imported: false
                },
                {
                    name: "Chocolate Bar",
                    price: 0.85,
                    type: "food",
                    imported: false
                }
            ],
            expected: {
                    items: [{
                        name: "Book",
                        price: 12.49
                    },
                    {
                        name: "Music CD",
                        price: 16.49
                    },
                    {
                        name: "Chocolate Bar",
                        price: 0.85
                    }],
                    salesTax: 1.50,
                    total: 29.83
                }
        },
        {
            testId: 2,
            actual: [
                {
                    name: "Box of Chocolates",
                    price: 10.00,
                    type: "food",
                    imported: true
                },
                {
                    name: "Perfume",
                    price: 47.50,
                    type: "cosmetics",
                    imported: true
                }
            ],
            expected: {
                items: [
                    {
                        name: "Box of Chocolates",
                        price: 10.50
                    },
                    {
                        name: "Perfume",
                        price: 54.65,
                    } 
                ],
                salesTax: 7.65,
                total: 65.15
            }
        },
        {
            testId: 3,
            actual: [
                {
                    name: "Perfume",
                    price: 27.99,
                    type: "cosmetics",
                    imported: true
                },
                {
                    name: "Perfume",
                    price: 18.99,
                    type: "cosmetic",
                    imported: false
                },
                {
                    name: "Headache Pills",
                    price: 9.75,
                    type: "medical",
                    imported: false
                },
                {
                    name: "Box of Chocolates",
                    price: 11.25,
                    type: "food",
                    imported: true
                }
            ],
            expected: {
                items: [
                    {
                        name: "Perfume",
                        price: 32.19
                    },
                    {
                        name: "Perfume",
                        price: 20.89
                    },
                    {
                        name: "Headache Pills",
                        price: 9.75
                    },
                    {
                        name: "Box of Chocolates",
                        price: 11.85
                    }
                ],
                salesTax: 6.70,
                total: 74.68
            }
        },
        {
            testId: 4,
            actual: [
                {
                    name: "Perfume",
                    price: 24.49,
                    type: "cosmetic",
                    imported: true
                },
                {
                    name: "Book",
                    price: 12.99,
                    type: "book",
                    imported: true
                },
                {
                    name: "Music CD",
                    price: 9.99,
                    type: "audio",
                    imported: false
                },
                {
                    name: "Exotic Jaffa Cakes",
                    price: 1.29,
                    type: "food",
                    imported: true
                }
            ],
            expected: {
                items: [
                    {
                        name: "Perfume",
                        price: 28.19
                    },
                    {
                        name: "Book",
                        price: 13.64
                    },
                    {
                        name: "Music CD",
                        price: 10.99
                    },
                    {
                        name: "Exotic Jaffa Cakes",
                        price: 1.39
                    }
                ],
                salesTax: 5.45,
                total: 54.21
            }
        }
    ]

    testCases.forEach(test => {

        it(`should return a correct receipt with scenario ${test.testId}`, () => {
            expect(getReceipt(test.actual)).toEqual(test.expected)
        });

    })


});