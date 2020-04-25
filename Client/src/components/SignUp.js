import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

 const SignUp = () => {

     const [isFail, setIsFail] = useState(null)
     const [ isSuccess, setIsSuccess ] = useState( null )
     const [ firstName, setFirstName ] = useState( '' );
     const [ lastName, setLastName ] = useState( '' );
     const [ email, setEmail ] = useState( '' );
     const history = useHistory();
     const subscribe = ( e ) => {
         e.preventDefault();
         const config = {
            headers: {
                "content-type": "application/json"
            }
         }
         const body = JSON.stringify( { firstName, lastName, email} )
         Axios
             .post( 'api/subscribe',body,config )
             .then( res => {
                console.log(res)
                 history.push('/success')
             } )
             .catch( err => {
                //  const history = useHistory();
                 console.log(err)
                 history.push('/fail')
            })
     }

     
    return (
        <div className="container">
            
        <h1>Subscribe</h1>
        <form id="subscribeForm">
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                    <input type="text" name="fistname" id="firstname" className="form-control" onChange={ e=> setFirstName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" className="form-control" onChange={ e=> setLastName(e.target.value)}/>
            </div>    
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" onChange={e=> setEmail(e.target.value)} />
            </div>
            
            <button className="btn btn-info" onClick={e=>subscribe(e)} >Get Updates</button>
        </form>
    </div>
    )
}

export default SignUp