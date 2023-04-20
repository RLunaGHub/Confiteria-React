import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({ greeting }) => {
    
    return (<Container className='mt-5'><h1>{greeting}</h1></Container>);
}