import React from 'react'
import { Button } from 'react-bootstrap'

export default function CartProduct(props) {

    const { cartProduct } = props

    return (
        <tr key={cartProduct[0]}>
            <td>
                <strong>{cartProduct[1]}</strong>
                <br></br>
                <img src={cartProduct[4]} alt={cartProduct[1]}height='100px' width='100px'>
                </img>
            </td>
            <td>
                {cartProduct[3]}
            </td>
            <td>
                {cartProduct[2]}
            </td>
            <td>
                <Button variant="danger" onClick={() => props.removeFromCart(cartProduct[0])}>
                    Remove from Cart
                </Button>
            </td>
        </tr>        
    );
  }
