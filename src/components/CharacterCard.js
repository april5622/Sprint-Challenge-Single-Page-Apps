import React, {useState} from "react";
import {Button, Collapse, Card, CardBody, CardSubtitle} from "reactstrap";

 const CharacterCard = ({character}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className= "character-card">
    <h3>{character.name}</h3>
    <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem"}}> More Info</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <CardSubtitle>{character.species}</CardSubtitle>
            <CardSubtitle><img src={character.image} alt="images"/></CardSubtitle>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CharacterCard;
