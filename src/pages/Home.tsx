import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import { checkLogin } from '../store/actions';
import { RootState } from '../store/reducers';

interface IProps {
    auth: any;
    checkLogin: (user: string) => void;
}

const Home: React.FC<IProps> = ({ auth, checkLogin }) => {
    useEffect(() => {
        checkLogin('user');
    }, [checkLogin]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit {auth && auth.user} <code>src/App.tsx</code> and save to reload.
                </p>

                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

Home.propTypes = {
    auth: PropTypes.object.isRequired,
    checkLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state: RootState) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkLogin: (user: any) => dispatch(checkLogin(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
