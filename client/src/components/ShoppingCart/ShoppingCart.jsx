import React from 'react'
import styled from 'styled-components';

const ShoppingCart = props => {
	return (
		<div>
			<BasketContainer>
            <BasketTitle>Shopping Basket</BasketTitle>
            <BasketButton>Checkout</BasketButton>
            <BasketTable>
                <BasketHeader>
                    <h4>Item</h4>
                    <h4>Quantity</h4>
                    <h4>Price</h4>
                </BasketHeader>
                <BasketHeaderLine />
              

                <BasketHeaderLine />
            </BasketTable>
            <BasketButton>Clear</BasketButton>
            <BasketTotal>Total: $0</BasketTotal>
        </BasketContainer>
		</div>
	)
}



export default ShoppingCart

const BasketContainer = styled.div`
display: grid;
padding: 20px;
grid-template-rows: 0.25fr 1fr 0.25fr;
grid-template-columns: 0.1fr 1fr 0.1fr;
`
const BasketTable = styled.div`
grid-column: 1 / span 3;
grid-template-rows: 0.25fr, 1fr 0.25fr 0.25fr;
column-gap: 20px;
padding-left:10px;
`
const BasketHeader = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr 0.4fr;
`
const BasketHeaderLine = styled.hr`
margin-bottom:20px;
border: 1px solid gray;
`
const BasketTitle = styled.h2`
grid-column: 1 / span 3;
padding-bottom: 20px;
`
const BasketQty = styled.h3`
font-size: 18px;
font-weigth: bold;
dosplay: grid;
grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`
const BasketPrice = styled.h3`
font-size: 20px;
font-weigth: bold;
`
const BasketTotal = styled.h2`
justify-self: end;
`
const BasketButton = styled.button`
border-radius: 8px;
height: 40px;
`