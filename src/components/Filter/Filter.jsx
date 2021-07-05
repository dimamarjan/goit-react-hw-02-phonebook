import React, { Component } from 'react'
import { LabelContacts, LabelContactsText, InputContacts } from "components/Filter/Filter.style"

export class Filter extends Component {    
    render() {
        return (
            <div>
                <LabelContacts>
                    <LabelContactsText>Find contacts by name</LabelContactsText>
                    <InputContacts onChange={this.props.onHandleChange}/>
                </LabelContacts>
            </div>
        )
    }
}
