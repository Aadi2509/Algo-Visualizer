import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from "react-router-dom";
import _ from "lodash";
import "../styles/card.css";

function getLink(type,name)
{
  type=_.lowerCase(type);
  name=_.lowerCase(name);

  return `/${type}/${name}`;
}

const CardExampleGroups = (props) => (
  <Card.Group>
    <Card >
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.type}</Card.Meta>
        <Card.Description>
          {/* Steve wants to add you to the group <strong>best friends</strong> */}
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          {/* <Button basic color='green'> 
            Visualize it!
          </Button> */}

          <Link to={getLink(props.type,props.name)}>
          <Button inverted color='green'>
            Visualize it!
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
    {/* <Card>
      <Card.Content>
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card> */}
    {/* <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    
    styling
    style={{color: "#1C7947"}}
    style={{marginLeft:"auto",marginRight:"auto"}}

     */}
  </Card.Group>
)

export default CardExampleGroups