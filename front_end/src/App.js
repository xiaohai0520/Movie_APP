import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Info from './components/Info/Info';
import Logo from './components/Logo/Logo';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';


const serverurl = 'http://localhost:8080/';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
        info: {
            name: '',
            year: '',
            budget: '',
            score: '',
            actor0: '',
            actor1: '',
            director: '',
            genre: '',
            recommendation: [], 

        }
   
    }


      this.changeInfo = this.changeInfo.bind(this);
  }

  changeInfo = (data) => {
      this.setState({ info: data });
  }

  onInputChange = (event) => {

      this.setState({ info: { name: event.target.value } });

  }

  onButtonSubmit = () => {
      fetch(serverurl + '/:name')
          .then(res => res.json())
          .then(data => {
              this.changeInfo(data);
          })
  }

  render() {

    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <div>
            <Logo />
            <SearchForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
            />
            <Info info={this.state.info} />


        </div>

      </div>
    );
  }
}

export default App;





//app.get('/:name', function (req, res) {
//    var params = req.params
//    res.send(params)
//})
