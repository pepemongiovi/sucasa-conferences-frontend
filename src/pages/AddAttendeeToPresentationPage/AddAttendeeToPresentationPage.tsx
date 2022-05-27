import { useState } from 'react'
import { toast } from 'react-toastify'
import { addAttendeeToPresentation } from '../../api/server'
import { Button } from '../../components/common/Button/Button'
import FormInput from '../../components/common/FormInput/FormInput'
import { clearForm, isEmailFieldValid, isNumberFieldValid } from '../../helpers/helper'
import { Container, Title, Form } from './AddAttendeeToPresentationPage.styles'

const AddAttendeeToPresentationPage = () => {
  const [attendeeEmail, setAttendeeEmail] = useState<string | null>(null)
  const [presentationId, setPresentationId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const isFormValid = () => {
    return presentationId !== null && attendeeEmail !== null &&
      isNumberFieldValid(presentationId) && isEmailFieldValid(attendeeEmail)
  }

  const onSubmit = () => {
    if (!presentationId || !attendeeEmail) return
    setLoading(true)

    addAttendeeToPresentation(attendeeEmail, presentationId).then(() => {
      toast("Successfully included!", { type: 'success' });
      clearForm([setAttendeeEmail, setPresentationId])
    }).catch(({ response: { status, data } }) => {
      if (status === 404) toast(data.message, { type: 'error' })
      else toast("Server error. Please try again later.", { type: 'error' })
    }).finally(() => setLoading(false))
  }

  return (
    <Container>
      <Title>Include a Attendee in a presentation</Title>
      <Form>
        <FormInput value={attendeeEmail} onChange={setAttendeeEmail} label="Attendee's E-mail" error={!isEmailFieldValid(attendeeEmail)} />
        <FormInput value={presentationId} type="number" onChange={setPresentationId} label="Presentation's ID" error={!isNumberFieldValid(presentationId)} />
        <Button label="Submit" onClick={onSubmit} disabled={!isFormValid()} loading={loading} />
      </Form>
    </Container>
  )
}

export default AddAttendeeToPresentationPage