import Card from 'react-bootstrap/Card';
import Details from "./Details";

export const Recipe = (r) => {
    r = r.r
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`} />
            <Card.Body>
                <Card.Title>{r.name}</Card.Title>
                <Card.Text>
                    {r.userName}
                </Card.Text>
                <Details r={r}></Details>
            </Card.Body>
        </Card>
    </>
}