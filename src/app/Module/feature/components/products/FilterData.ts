export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "beige", label: "Beige"},
            {value: "blue", label: "Blue"},
            {value: "brown", label: "Brown"},
            {value: "green", label: "Green"},
            {value: "Purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},
            {value: "black", label: "Black"}
        ],
    },

    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ],
    },
];

export const singleFilter= [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "159TK To 399TK"},
            {value: "399-999", label: "399TK To 999TK"},
            {value: "999-1999", label: "999TK To 1999TK"},
            {value: "1999-2999", label: "1999TK To 2999TK"},
            {value: "3999-4999", label: "3999TK To 4999TK"}
        ],

    },

    {
        id: "discount",
        name: "DISCOUNT RANGE",
        options: [
            {
                value: "10",
                label: "10% And Above",
            },
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"}
        ],
    },
    {
        id: "stock",
        name: "Availavility",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
        ]
    }
];

export const sortOptions = [
    {name: "Price: low to High", query: "price_low", current: false},
    {name: "Price: High to low", query: "price_high", current: false}
];


    
