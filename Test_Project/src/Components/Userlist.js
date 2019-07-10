import React, { Component } from 'react';
import Title from './Title';
import './Dataview.css';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: this.state
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title name="USER" title="VIEW DETAIL" />
                            <div className="">
                                <h3 className="headingsmall">{this.props.location.state.key.first_name}</h3>
                                <ul className="Ulsmall">
                                <div className="lstbd">Company<i>{this.props.location.state.key.company_name}</i></div>
                                <div className="lstbd">City<i>{this.props.location.state.key.city}</i></div>
                                <div className="lstbd">State<i>{this.props.location.state.key.state}</i></div>
                                <div className="lstbd">ZIP<i>{this.props.location.state.key.zip}</i></div>
                                <div className="lstbd">Email<i>{this.props.location.state.key.email}</i></div>
                                <div className="lstbd">Web<i>{this.props.location.state.key.web}</i></div>
                                <div className="lstbd">Age <i>{this.props.location.state.key.age}</i></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default Cart;