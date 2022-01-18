import React from 'react'
import Login from '../components/Login';
import CreateNewUser from '../components/CreateNewUser';
import {Link} from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <div className="App">
                <div>
                    <Login />
                </div>
                <div>
                    <p>If you dont have a account create one below</p>
                </div>
                <div>
                    <CreateNewUser />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
