/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class SearchForm extends Component {


    }
    render() {
        console.log('filterText value', this.props.filterText)
        return (
            <form>
                <input type="text"
                    ref={(value) => { this.myValue = value }} placeholder="Type to Filter..."
                    onChange={this.filterUpdate.bind(this)} />
            </form>
        )
    }




}


export default SearchForm;