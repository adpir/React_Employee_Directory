import React from "react";
import axios from "axios";
import Datatable from "./Datatable"
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";




class EmployeeData extends React.Component {
    state = {
        employeerecords:{},
        search:"",

    };

    // componentDidMount() {
    //  axios.get("https://randomuser.me/api/?results=50&nat=us")
    //  .then(APIData => {               
    //      console.log(APIData)
    //     this.employeerecords("The Matrix");
    //   }
    //  )
    //   employeerecords = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    //   };
    
    //   handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    
    //   // When the form is submitted, search the OMDB API for the value of `this.state.search`
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.employeerecords(this.state.search);
    //   };
    
    //   render() {
    //     return (
    //       <Container>
    //         <Row>
    //           <Col size="md-8">
    //             <Card
    //               heading={this.state.result.Title || "Search for a Movie to Begin"}
    //             >
    //               {this.state.result.Title ? (
    //                 <MovieDetail
    //                   title={this.state.result.Title}
    //                   src={this.state.result.Poster}
    //                   director={this.state.result.Director}
    //                   genre={this.state.result.Genre}
    //                   released={this.state.result.Released}
    //                 />
    //               ) : (
    //                 <h3>No Results to Display</h3>
    //               )}
    //             </Card>
    //           </Col>
    //           <Col size="md-4">
    //             <Card heading="Search">
    //               <SearchForm
    //                 value={this.state.search}
    //                 handleInputChange={this.handleInputChange}
    //                 handleFormSubmit={this.handleFormSubmit}
    //               />
    //             </Card>
    //           </Col>
    //         </Row>
    //       </Container>
    //     );
    //   }
    // }
    

  componentDidMount(){
      axios.get("https://randomuser.me/api/?results=50&nat=us")
             .then(APIData => {
                console.log(APIData)
                let data = []
                for(let i = 0; i < APIData.data.results.lenght; i ++){
                    data.push({
                        firstname:APIData.data.results.name.first,
                        lastname:APIData.data.results.name.last,
                        phone:APIData.data.results.phone,
                         email:APIData.data.results.email,
                         gender:APIData.data.results.gender,
                         age:APIData.data.results.dob.age
        
                     })
                 }
                 console.log("data",data)
                 this.setState({
                   employeerecords : data
                 },() => 
                 console.log("state",this.state.employeerecords)
                 );
             })
     }
     render() {
        //  const row = this.state.employeerecords
         return (
          <div> 
         <h3> Employee Directory</h3>
        
             <Datatable rows={this.state.employeerecords} />
            
         </div>
         )
     }
 }

export default EmployeeData;
