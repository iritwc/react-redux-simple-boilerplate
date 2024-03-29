import React from 'react';
import { connect } from 'react-redux';
import { example } from '../actions/actions';
import Example from '../components/Example';


require('./index.scss');
const compClassName = 'index';

var IndexContainer = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    changeName(e) {
        this.props.example(e.target.value);
    },

    render() {

        const { name = '', example } = this.props;

        return (
            <div className={compClassName}>
                <input type="text" onChange={this.changeName} placeholder="type the name" value={name} />
                <Example name={name} />
            </div>
        );
    }

});

function mapStateToProps(state) {
    return {
        name: state.example.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        example: (name) => {
            dispatch(example(name))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);