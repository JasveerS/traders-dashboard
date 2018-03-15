import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Trades from './trades';
import WhatIfPv from './whatIfPv';
import Pv from './pv';


class Header extends Component {


    
  render() {
   
    


    return (
      <div className="header" >  
        <BrowserRouter>
        <div>
                
                <div className="header-container">      
                    <Link to="/trades" className="link">Total Trades </Link>
                    <Link to="/pv">PV</Link>
                    <Link to="/whatIfPv">WhatIf PV</Link>                
                </div>        
          
             
              <Switch >
                  <Route path="/trades" component={Trades}></Route>
                  <Route path="/pv" component={Pv}></Route>
                  <Route path="/whatIfPv" component={WhatIfPv}></Route>
              </Switch>


        </div>

        
            </BrowserRouter>
      </div>
    );
  }
}

export default Header;
