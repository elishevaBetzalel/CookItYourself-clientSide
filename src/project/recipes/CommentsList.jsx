import Card from 'react-bootstrap/Card';
import { getCommentsToRecipe } from '../api';
import { useEffect, useState } from 'react';

export const CommentsList = (rId) => {
  rId = rId.rId
  const [list, setList] = useState()

  useEffect(() => {
    getCommentsToRecipe(rId).then(x => { setList(x) })
  }, [])

  return (
    <>
      {list && list.map((c) => (
        <Card
          bg={'Light'.toLowerCase()}
          key={c.id}
          text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', margin: "auto" }}
          className="mb-2"
        >
          <Card.Header>{c.userName}</Card.Header>
          <Card.Body>
            <Card.Text>{c.comment}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
