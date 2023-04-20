import Badge from 'react-bootstrap/Badge';

import cart from "./assets/cart.png"

const styles = {
    img: {
        height: 35
    }
    ,
    span: {
        paddingLeft: 6,
    }
}

export const CartWidget = () => {
    return (
       
       <Badge bg="success">
        <img src={cart} alt="Imagen de un carro de compras" style={styles.img} />
    <span style={styles.span}>0</span>
    </Badge>
        );
};