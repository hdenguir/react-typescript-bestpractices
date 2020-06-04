import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { checkLogin } from '../store/actions'
import { RootState } from '../store/reducers'

import logo from '../logo.svg';

interface IProps {
    auth?: any;
    checkLogin: (user: any) => void;
}

const Home: React.FC<IProps> = ({ auth, checkLogin }) => {

    useEffect(() => {
        checkLogin("user")
        return () => { }
    }, [checkLogin])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
        </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
        </a>
            </header>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkLogin: (user: any) => dispatch(checkLogin(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)