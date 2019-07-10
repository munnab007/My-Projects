import React, { Component } from 'react';
import Title from './Title';
import Details from './Pagination';

class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="All " title="Users Detail" />
                        <div className="row">
                        <Details/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Productlist;