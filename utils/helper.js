export const getDiscountedPricePercentage = (original_price, price) => 
{
    const discount = original_price - price;
    const per = (discount / original_price) * 100 ;
    return per.toFixed(2);
};