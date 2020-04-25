import React  from 'react';
import { Success } from './components/Success'
import { Fail } from './components/Fail'
import { Switch, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp'
import {connect} from 'react-redux'

export const App =()=> {

        return (
             
                
                <React.Fragment>
                        <Switch>
                        <Route exact path='/'><SignUp/></Route>
                        
                                <Route path='/success' component={ Success}/>
                                <Route path='/fail' component={Fail}/>
                        </Switch>  
                   

                        

                    
                    
                </React.Fragment>
               
               
        )
    
}


export default App
