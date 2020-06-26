import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table, Button} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class App extends Component {

  state = {
    isLoading : false,
    Timetable  : [

      {
        "id" : "100",
        "No" : "01",
        "Task": "Task0000001",
    
      }
    

    ]
  }


  postMethod = () => {

    
  }

 

Dropdown = (props) => {
  
    const [dropdownOpen, setDropdownOpen] = this.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown's menu is right-aligned
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    
}

  
  render() {

    const isLoading = this.state.isLoading;
    const allTimetable = this.state.Timetable;

    if(isLoading)
    return(<div>Loading....</div>);

    let timetable = 
    this.state.Timetable.map( table =>
      <tr key={table.id}>
        <td>{table.No}</td>
        <td>{table.Task}
            
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        <td>
           <InputGroup>
              <Input placeholder="" min={0} max={8} type="number" step="1" />
            </InputGroup>
        </td>
        
      </tr>
    )

    return(

       <div>
           <div className= "container border border-secondary rounded center">
             <div className="row">
               <div className = "col-12">
                   <h4>June 22, 2020 - June 28, 2020</h4>
                </div>
             </div>    
           </div>    
      
        <div className= "container border border-secondary rounded center">     
       
        <div className="row">
          <div className = ".col-sm-12 .col-md-6 .offset-md-3">
             <Button variant="primary" size="lg" block>TimeSheet</Button>
          </div>
        </div>
      

      <div className="row">
        <div className=".col-xs-12 center text-cener">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Day1</th>
                <th>Day2</th>
                <th>Day3</th>
                <th>Day4</th>
                <th>Day5</th>
                <th>Day6</th>
                <th>Day7</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              { timetable }
            </tbody>
          </Table>
        </div>
     </div>

     <div className="row">
          <div className = "col-12">
            <h4><Button className="btn btn-sm btn-info" onClick={ () => this.setState({timetable})}>Add Task</Button></h4>
          </div>
    </div>

    <div className="row">
        <div className="col-xs-12 center text-cener">
          <Button className="btn btn-sm btn-success" onClick={this.postMethod}>Submit</Button>
        </div>
      </div>

      </div>
      </div>
     
      
     
 
    );
  }
}

export default App;
