"use client"
import { ProductList } from "../utils/types";

const AvailableProducts = ['Strawberry Poundcake', 'Blueberry Poundcake', 'Cannabis Flower', 'Cinnamon Buns', 'Caribean Coconut', 'Fruity Loops', 'Luxery Linen', 'Coconut Lime Verbena',
'Sex On The Beach', 'Foreplay','Sixty Nine', 'Quickie']
const SeductionLine = ['Sex On The Beach', 'Foreplay','Sixty Nine', 'Quickie']
const AvailablePrices = ['5.99', '8.99', '12.99', '15.99', '25.99']
const AvailableSizes = ['wax', '4oz', '8oz', '10oz', '12oz']

export const Products: ProductList =
{
    name: AvailableProducts,
    prices: AvailablePrices,
    available_sizes: AvailableSizes,
}

export const SeductionLineProducts: ProductList =
{
    name: SeductionLine,
    prices: AvailablePrices,
    available_sizes: AvailableSizes,
}




