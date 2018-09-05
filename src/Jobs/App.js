import React, {Component} from "react"
import {Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Panel} from "react-bootstrap"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  render() {
    const {jobCount} = this.state

    return (
      <React.Fragment>
        <Panel>
          <ControlLabel>How many jobs do you have?</ControlLabel>
          <div>
            <ButtonGroup>
              <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
              <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
              <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
              <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
            </ButtonGroup>
          </div>
        </Panel>

        { !jobCount && // 0 == falsy ;) 
          <Panel>
            <FormGroup> 
              <ControlLabel>What is your current status?</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="option-2">option 2</option>
              </FormControl>
            </FormGroup>
          </Panel>
        }

        { // Creates an array containing 'jobCount' number of items
          Array.from(Array(jobCount)).map((_, i) => (
          <Panel key={i}>
            <h4>Job {++i}</h4>

            <FormGroup>
              <ControlLabel>What is your occupation?</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="option-2">option 2</option>
              </FormControl>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Company Name</ControlLabel>
              <FormControl type="text" placeholder="Enter company name" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Income</ControlLabel>
              <FormControl type="text" placeholder="Enter amount" />
            </FormGroup>
          </Panel>
        ))}
      </React.Fragment>
    )
  }
}
