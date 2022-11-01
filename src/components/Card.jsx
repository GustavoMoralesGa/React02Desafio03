import React from 'react'
import Card from 'react-bootstrap/Card';
export default function PokemonCard(prop) {
  return (
  <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src={prop.info && prop.info.sprites.other.home.front_default} />
      <Card.Body>
        <Card.Title>{prop.info && prop.info.name}</Card.Title>
        <Card.Text>
            <ul>
                <li>hp:{prop.info && prop.info.stats[0].base_stat}</li>
                <li>attack:{prop.info && prop.info.stats[1].base_stat}</li>
                <li>defense:{prop.info && prop.info.stats[2].base_stat}</li>
                <li>special-attack:{prop.info && prop.info.stats[3].base_stat}</li>
                <li>special-defense:{prop.info && prop.info.stats[4].base_stat}</li>
                <li>speed:{prop.info && prop.info.stats[5].base_stat}</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
