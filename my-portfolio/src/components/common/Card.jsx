import button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SkillsCard({text, title, icon, skills = []}) {
  return (
    <Card className="card-main">
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body className="card-body">
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <Card.Title>{title}</Card.Title>
        </div>
        
        <Card.Text className= "card-text">{text}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

