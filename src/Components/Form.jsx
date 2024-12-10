import { useState } from 'react';
import '../Styles/Form.css';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div>
            <h1 style={{marginTop: '100px'}}>Share Your <span style={{color: '#a81417'}}>Feedback!</span></h1> 
            <div className='form-container'>
                <div>
                    <form className='form-items'>
                        <label>Enter your name:
                            <input className='input-field' style={{width: '310px'}}
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label>Enter your email:
                            <input className='input-field' style={{width: '312px'}}
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label>Enter your number:
                            <input className='input-field' style={{width: '293px'}}
                                type='tel'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Form;