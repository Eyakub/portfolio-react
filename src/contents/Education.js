import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
  render(){
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard title="B.Sc in Computer Science & Engineering"
        where="Daffodil International University" from="Jan 2015" to="Dec 2018" />
      </div>
    )
  }
}

export default Education