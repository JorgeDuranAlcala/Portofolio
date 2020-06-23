import React, { Component } from 'react'
import { sendEmail } from '../../utils/sendEmail';
import Fade from "react-reveal/Fade";

export default class ContactForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             message: ''
        }
    }

    onInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmit = async e => {
        e.preventDefault()
        const res = await sendEmail(this.state)
        console.log(res)
    }
    

    render() {
        return (
            <Fade down>
                <form className={this.props.cls} onSubmit={e => this.onSubmit(e)}>
                    <input type="text" onChange={e => this.onInputChange(e)} placeholder="Your Name" name="name"/>
                    <input type="text" onChange={e => this.onInputChange(e)}  placeholder="Your Email" name="email"/>
                    <textarea cols="30" onChange={e => this.onInputChange(e)}  rows="10" placeholder="Your Message" name="message"></textarea>
                    <button>Send</button>
                </form>
            </Fade>
        )
    }


}


