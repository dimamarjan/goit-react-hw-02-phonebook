import React, { Component } from 'react'
import {FormPhoneBook, LabelForm, LabelText, InputForm, SubmitButton} from 'components/ContactForm/ContactForm.style'

export class ContactForm extends Component {
    render() {
        return (
            <div>
                <FormPhoneBook onSubmit={this.props.onAddContact}>
                    <LabelForm>
                        <LabelText>Name</LabelText>
                        <InputForm
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            onChange={this.props.onHandleChange}>
                        </InputForm>
                    </LabelForm>
                    <LabelForm>
                        <LabelText>Number</LabelText>
                        <InputForm
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            onChange={this.props.onHandleChange}>
                        </InputForm>
                    </LabelForm>
                    <SubmitButton>Add contact</SubmitButton>
                </FormPhoneBook>
            </div>
        )
    }
}
