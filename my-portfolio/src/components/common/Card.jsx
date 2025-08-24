import button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SkillsCard({text, title, image}) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <div className="card-icon">{image}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

