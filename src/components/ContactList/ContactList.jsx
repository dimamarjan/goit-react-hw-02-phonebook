import React, { Component } from 'react'
import { ContactListSection, ContactListItem } from 'components/ContactList/ContactList.style'

export class ContactList extends Component {
    render() {
        return (
            <div>
                <ContactListSection>
                    <ContactListItem></ContactListItem>
                </ContactListSection>
            </div>
        )
    }
}
