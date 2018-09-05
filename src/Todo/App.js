import React, {Component} from "react"
import {Button, ListGroupItem, ListGroup, FormControl, Panel, ControlLabel, FormGroup, Checkbox} from "react-bootstrap"
import uuid from "uuid/v1"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      newItemDetail: ''
    }
  }

  addNewItem = () => (e) => {
    const {newItemDetail, data} = this.state

    e.preventDefault()

    if(!newItemDetail){
      // Error here
      return false
    }

    const id = uuid() // Generate a unique id for each item, could also use new Date().getTime()

    this.setState({
      newItemDetail: '',
      data: {
        ...data,
        [id]: {
          id,
          detail: newItemDetail,
          complete: false
        }
      }
    })
  }

  updateNewItemDetail = ({target}) => {
    this.setState({
      newItemDetail: target.value
    })
  }

  updateItem = (id, complete) => () => {
    const {data} = this.state

    // Immutability is important!!
    this.setState({
      data: {
        ...data,
        [id]: {
          ...data[id],
          complete: !complete
        }
      }
    })
  }

  render() {
    const {newItemDetail, data} = this.state
    const dataAsArray = Object.values(data)

    return (
      <div>
        <ListGroup>
          {dataAsArray.length <= 0 &&
            <ListGroupItem>No Items have been added.</ListGroupItem>
          }

          {dataAsArray.map(({id, detail, complete}) => (
            <ListGroupItem key={id} {...complete && {bsStyle: 'success'}}>
              <p>{detail}</p>
              <Checkbox checked={complete} onChange={this.updateItem(id, complete)}>Complete</Checkbox>
            </ListGroupItem>
          ))}
        </ListGroup>

        <Panel>
          <form onSubmit={this.addNewItem(newItemDetail)}>
            <FormGroup>
              <ControlLabel>Add a new item</ControlLabel>
              <FormControl 
                type="text" 
                value={newItemDetail}
                placeholder="Enter new item details here..."
                onChange={this.updateNewItemDetail} />
            </FormGroup>
            <Button type="submit">Add</Button>
          </form>
        </Panel>
      </div>
    )
  }
}
