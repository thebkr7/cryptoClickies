import React, { Component } from 'react';
import './welcome.css';
import 'bulma/css/bulma.css'

import validator from 'validator';
import axios from 'axios';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: 'Email',
      notAnEmail: false,
      emailSaved: false,
      videoURL: 'https://my.mixtape.moe/lnnjei.mp4',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }
  // componentDidMount() {
  // }

  handleEmailChange(e) {
    this.setState({
      formValue: e.target.value,
    });
  }

  handleEmailSubmit(e) {
    if (validator.isEmail(this.state.formValue)) {
      axios.post('/api/user/inviteEmail', {
        'email': this.state.formValue,
      })
        .then((resp) => {
          this.setState({
            emailSaved: true,
          });
        })
        .catch((error) => {
          this.setState({
            notAnEmail: true,
          });
        });
    } else {
      this.setState({
        notAnEmail: true,
      });
    }

    //prevent reload on click
    e.preventDefault();
  }

  // <video id="background-video" loop autoPlay>
  //     <source src={this.state.videoURL} type="video/mp4" />
  //     <source src={this.state.videoURL} type="video/ogg" />
  //     Your browser does not support the video tag.
  // </video>


  render() {
    return (
      <div >
      
        <div className="app">

          <div className="welcome">
            <h1>App Name</h1>
            <h3>Some catchy words</h3>

            {!this.state.emailSaved &&
              <form class="field"
                    onSubmit={this.handleEmailSubmit}
              >
                <label class="label has-text-dark">Invite Only</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-success"
                         type="text"
                         placeholder="Email"
                         onChange={this.handleEmailChange}
                  />
                </div> 
                {this.state.notAnEmail &&
                  <div class='has-text-danger'>
                    Please Enter a Valid Email
                  </div>
                }
                <br/>
                <button class="button is-primary"
                   type='submit'
                >
                  Request Invitation
                </button>
              </form>
            }

            {this.state.emailSaved &&
              <div class='has-text-primary'>
                Invite Request Recieved
              </div>
            }

          </div>

        </div>

      </div>
    );
  }
}

export default Welcome;
