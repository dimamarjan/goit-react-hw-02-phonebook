import React, { Component } from 'react'
import { LabelContacts, LabelContactsText, InputContacts, AccentText } from "components/Filter/Filter.style"

export class Filter extends Component {    
    render() {
        return (
            <div>
                <LabelContacts>
                    <LabelContactsText>Find contacts by <AccentText>name</AccentText> or <AccentText>number</AccentText></LabelContactsText>
                    <InputContacts onChange={this.props.onHandleChange}/>
                </LabelContacts>
            </div>
        )
    }
}
