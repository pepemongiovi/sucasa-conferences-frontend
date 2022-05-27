import { useState } from 'react'
import { toast } from 'react-toastify'
import { createAttendee } from '../../api/server'
import { Button } from '../../components/common/Button/Button'
import FormInput from '../../components/common/FormInput/FormInput'
import { areFieldsNotNull, clearForm, isEmailFieldValid, isTextFieldValid } from '../../helpers/helper'
import Attendee from '../../models/Attendee'
import { Container, Title, Form } from './RegisterAttendeePage.styles'

const RegisterAttendeePage = () => {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [company, setCompany] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isFormValid = () => {
    return areFieldsNotNull([email, name, company]) && isEmailFieldValid(email) &&
      isTextFieldValid(name) && isTextFieldValid(company)
  }

  const onSubmit = () => {
    if (!name || !email || !company) return
    setLoading(true)

    const attendee: Attendee = { name, email, company }

    createAttendee(attendee).then(() => {
      toast("Successfully registered!", { type: 'success' });
      clearForm([setName, setCompany, setEmail])
    }).catch(({ response: { status, data } }) => {
      if (status === 409) toast(data.message, { type: 'error' })
      else toast("Server error. Please try again later.", { type: 'error' })
    }).finally(() => setLoading(false))
  }

  return (
    <Container>
      <Title>Register a new Attendee</Title>
      <Form>
        <FormInput value={name} onChange={setName} label="Name" error={!isTextFieldValid(name)} />
        <FormInput value={email} onChange={setEmail} label="E-mail" error={!isEmailFieldValid(email)} />
        <FormInput value={company} onChange={setCompany} label="Company" error={!isTextFieldValid(company)} />
        <Button label="Submit" onClick={onSubmit} disabled={!isFormValid()} loading={loading} />
      </Form>
    </Container>
  )
}

export default RegisterAttendeePage