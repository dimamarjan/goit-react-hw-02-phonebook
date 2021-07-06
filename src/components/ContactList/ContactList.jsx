import React, { Component } from 'react'
import { ContactListSection, ContactListItem, ContactItemText, DelContactButton } from 'components/ContactList/ContactList.style'

export class ContactList extends Component {
    render() {
        return (
            <div>
                <ContactListSection>
                    {this.props.filtredDataArr.map((contactItem) => (
                        <ContactListItem key={contactItem.id}>
                            <ContactItemText>{contactItem.name}: {contactItem.number}</ContactItemText>
                            <DelContactButton
                                value={contactItem.id}
                                onClick={this.props.onDelete}>
                                Delete</DelContactButton>
                        </ContactListItem>
                    )) }
                </ContactListSection>
            </div>
        )
    }
}
