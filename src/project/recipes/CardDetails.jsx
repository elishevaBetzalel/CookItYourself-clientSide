import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getIngredientsToRecipe } from '../api';
import { useEffect, useState } from 'react';
import { Comments } from './Comments';

function CardDetails(recipe) {

    const r = recipe.recipe

    const [list, setList] = useState()
    useEffect(() => {
        getIngredientsToRecipe(r.id).then(x => { setList(x) })
    })

    return (
        <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`} />
            <Card.Body style={{ "text-align": "center" }}>
                <Card.Text>{r.note}</Card.Text>
                <Card.Text>{r.userName}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{ "text-align": "right" }}>
                <ListGroup.Item>{`רמת קושי: ${r.levelName}`}</ListGroup.Item>
                <ListGroup.Item>{`קטגוריה: ${r.categoryName}`}</ListGroup.Item>
                <ListGroup.Item>{`זמן הכנה(בדקות): ${r.preparationTime}`}</ListGroup.Item>
            </ListGroup>
            <Card.Body style={{ "text-align": "right" }}>
                <Card.Text>:הרכיבים הדרושים</Card.Text>
                <ul style={{ "list-style": "none" }}>
                    {list && list.map(i =>
                        <li key={i.id}>{`${i.amount} ${i.ingredientName}`}</li>
                    )}
                </ul>
            </Card.Body>
            <ListGroup>
                <Card.Body style={{ "text-align": "right" }}>
                    <Card.Subtitle>הוראות הכנה</Card.Subtitle>
                    <Card.Text>{r.instructions}</Card.Text>
                </Card.Body>
            </ListGroup>
            {<Comments rId={r.id}></Comments>}
        </Card>
    );
}

export default CardDetails;