import React from 'react';
import './User.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Usertable extends React.Component {
    constructor() {
        super();
        this.state = {
            SEARCH: '',
        }
        this.onSort = this.onSort.bind(this)
    }
    Searchhandler = (e) => {
        this.setState({
            SEARCH: e.target.value.substr(0, 20)
        })
    };
    routdataview = function (data) {
        this.props.history.push({
            pathname: '/Userlist',
            state: {
                key: data
            }
        });
    }

    onSort = (event, sortKey) => {
        const Searchfilter = this.props.currentTodoss
        var sortOrder = 1;
        if (sortKey[0] === "-") {
            sortOrder = -1;
            sortKey = sortKey.substr(1);
        }
        if (sortOrder === 1) {
            Searchfilter.sort((a, b) => b.first_name > a.first_name)
        } else {
            Searchfilter.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        }
        this.setState({ Searchfilter })

    }

    render() {
        const Searchfilter = this.props.currentTodoss.filter(
            (user) => {
                return user.first_name.toLowerCase().indexOf(
                    this.state.SEARCH.toLocaleLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <input className="txtb" type="text" placeholder="Search by User First Name..." aria-label="Search"
                    value={this.state.SEARCH} onChange={this.Searchhandler} />
                <br />
                <table id="customers">
                    <thead>
                        <tr>
                            <th onClick={e => this.onSort(e, 'first_name')}><i className="fa fa-caret-down"></i>FIRST NAME</th>
                            <th><i className="fa fa-caret-down"></i>LAST NAME</th>
                            <th><i className="fa fa-caret-down"></i>COMPANY</th>
                            <th><i className="fa fa-caret-down"></i>CITY</th>
                            <th><i className="fa fa-caret-down"></i>STATE</th>
                            <th><i className="fa fa-caret-down"></i>ZIP</th>
                            <th><i className="fa fa-caret-down"></i>EMAIL ID</th>
                            <th><i className="fa fa-caret-down"></i>WEB</th>
                            <th><i className="fa fa-caret-down"></i>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Searchfilter.map((row) => (
                                <tr key={row.id} data-item={row} onClick={() => this.routdataview(row)}>
                                    <td>{row.first_name}</td>
                                    <td>{row.last_name}</td>
                                    <td>{row.company_name}</td>
                                    <td>{row.city}</td>
                                    <td>{row.state}</td>
                                    <td>{row.zip}</td>
                                    <td>{row.email}</td>
                                    <td><a href={row.web}> {row.web}</a></td>
                                    <td>{row.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Userdata: state
    }
}
export default withRouter(connect(mapStateToProps)(Usertable));