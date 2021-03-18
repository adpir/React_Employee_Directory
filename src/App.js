/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import EmployeesDB from "./components/datatable/EmployeesDB";
import SearchForm from "./components/SearchForm";

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         filterText: 'hola'
      }


   }

   filterUpdate(value) {
      this.setState({
         filterText: value
      })
   }




   render() {
      return (
         <div>
            <Navbar />
            <SearchForm filterText={this.state.filterText}
               filterUpdate={this.filterUpdate.bind(this)} />
            <EmployeesDB data={this.props.data}
               filterText={this.state.filterText}
            />

         </div>
      )
   }

}


export default App;



