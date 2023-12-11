import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAPi } from '../../Config/Store/Slices/Login';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const { loader, error } = useSelector(state => state.Login);
    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loginAPi({ username, password }))
            .then((result) => {
                if (!result.error) {
                    navigate('/');
                }
            })
    }
    return (
        <>
            {loader ? <Loader /> : null
            }
            <div className="login py-5">
                <div className="container-lg">
                    <div className="col-12 col-md-8 mx-auto shadow p-4 p-md-5 rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label className='form-label'>User Name*</label>
                                <input type="text" placeholder='Enter User Name' className='form-control' value={username} onChange={(event) => handleChange(setusername)(event)} />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Password*</label>
                                <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(event) => handleChange(setPassword)(event)} />
                            </div>
                            {error &&
                                <div className="alert alert-danger" role="alert">{error}</div>
                            }
                            <button className='btn btn-dark' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;