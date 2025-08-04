export const navigation = {
    women: {
        id: 'Women',
        name: 'Women',
        featuedd: [],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    {name: 'Tops', id: "top", href: `{women/clothing/tops}`},
                    {name: 'Dresses', id: "women_dress", href: "#"},
                    {name: 'Pants', id: "women_dress", href: "#"},
                    {name: 'Lengha Choli', id: 'lengha_choli'},
                    {name: 'Sweaters', id: 'women_sweater'},
                    {name: 'T-Shrts', id: 't-shirt'},
                    {name: 'Jackets', id: 'jacket'},
                    {name: 'Souns', id: 'women_gouns'},
                    {name: 'Sarees', id: 'women_saree'},
                    {name: 'Kurtas', id: 'womenn_kurtas'},
                ],
            },
            {
                id: 'accessories',
                name: 'Accessoris',
                items: [
                    {name: 'Watches', id: 'watch'},
                    {name: 'Wallets', id: 'wallet'},
                    {name: 'Bags', id: 'bag'},
                    {name: 'Sunglasses', id: 'sunglasse'},
                    {name: 'Hats', id: 'hat'},
                    {name: 'Belts', id: 'belt'},
                ],
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    {name: 'Full Nelson', id: '#'},
                    {name: 'My Way', id: '#'},
                    {name: 'Re-Arranged', id: '#'},
                    {name: 'Counterfeit', id: '#'},
                    {name: 'Significant Other', id: '#'},
                ],
            },
        ]
    },

    men: {
        id: 'Men',
        name: 'Men',
        featuedd: [],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    {name: 'Shirts', id: 'shirt', href: `{men/clothing/shirts}`},
                    {name: 'T-Shirts', id: 'men_tshirt'},
                    {name: 'Jeans', id: 'men_jeans'},
                    {name: 'Trousers', id: 'men_trousers'},
                    {name: 'Jackets', id: 'men_jackets'},
                    {name: 'Blazers', id: 'men_blazers'},
                    {name: 'Sweaters', id: 'men_sweaters'},
                    {name: 'Tracksuits', id: 'men_tracksuits'},
                    {name: 'Kurta Pajama', id: 'men_kurta'},
                    {name: 'Sherwani', id: 'men_sherwani'},
                ],
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    {name: 'Watches', id: 'men_watch'},
                    {name: 'Wallets', id: 'men_wallet'},
                    {name: 'Belts', id: 'men_belt'},
                    {name: 'Sunglasses', id: 'men_sunglass'},
                    {name: 'Caps', id: 'men_cap'},
                    {name: 'Bags', id: 'men_bag'},
                ],
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    {name: 'Urban Legend', id: '#'},
                    {name: 'Roadster', id: '#'},
                    {name: 'Levi’s', id: '#'},
                    {name: 'Wrangler', id: '#'},
                    {name: 'Peter England', id: '#'},
                ],
            },
        ]
    }
}
