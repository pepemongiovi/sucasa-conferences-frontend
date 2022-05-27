import { useState } from 'react'
import { toast } from 'react-toastify'
import { createPresentation } from '../../api/server'
import { Button } from '../../components/common/Button/Button'
import FormInput from '../../components/common/FormInput/FormInput'
import { areFieldsNotNull, clearForm, isEmailFieldValid, isNumberFieldValid, isTextFieldValid } from '../../helpers/helper'
import Presentation from '../../models/Presentation'
import Speaker from '../../models/Speaker'
import { Container, Title, Form } from './CreatePresentationPage.styles'

const CreatePresentationPage = () => {
  const [presentation, setPresentation] = useState<string | null>(null)
  const [details, setDetails] = useState<string | null>(null)
  const [room, setRoom] = useState<number | null>(null)

  const [speakerName, setSpeakerName] = useState<string | null>(null)
  const [speakerEmail, setSpeakerEmail] = useState<string | null>(null)
  const [speakerCompany, setSpeakerCompany] = useState<string | null>(null)
  const [speakerBio, setSpeakerBio] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)

  const isFormValid = () => {
    const fieldsNotNull = areFieldsNotNull([
      details, presentation, room, speakerName, speakerEmail, speakerCompany, speakerBio
    ])

    return fieldsNotNull && isNumberFieldValid(room) && isTextFieldValid(presentation) &&
      isTextFieldValid(details) && isTextFieldValid(speakerName) && isTextFieldValid(speakerEmail) &&
      isTextFieldValid(speakerCompany) && isTextFieldValid(speakerBio)
  }

  const onSubmit = () => {
    if (!presentation || !details || !room || !speakerName ||
      !speakerEmail || !speakerCompany || !speakerBio
    ) return
    setLoading(true)

    const speaker: Speaker = {
      name: speakerName,
      email: speakerEmail,
      company: speakerCompany,
      bio: speakerBio
    }
    const newPresentation: Presentation = { presentation, details, room, speaker }

    createPresentation(newPresentation).then(() => {
      toast("Successfully created!", { type: 'success' });
      clearForm([
        setPresentation, setDetails, setRoom, setSpeakerName,
        setSpeakerEmail, setSpeakerCompany, setSpeakerBio
      ])
    }).catch(({ response: { status, data } }) => {
      if (status === 409) toast(data.message, { type: 'error' })
      else toast("Server error. Please try again later.", { type: 'error' })
    }).finally(() => setLoading(false))
  }

  return (
    <Container>
      <Title>Create a new Presentation</Title>
      <Form>
        <FormInput value={presentation} onChange={setPresentation} label="Presentation" error={!isTextFieldValid(presentation)} />
        <FormInput value={details} onChange={setDetails} label="Details" error={!isTextFieldValid(details)} />
        <FormInput value={room} onChange={setRoom} type="number" label="Room" error={!isNumberFieldValid(room)} />

        <FormInput value={speakerName} onChange={setSpeakerName} label="Speaker's Name" error={!isTextFieldValid(speakerName)} />
        <FormInput value={speakerEmail} onChange={setSpeakerEmail} label="Speaker's E-mail" error={!isEmailFieldValid(speakerEmail)} />
        <FormInput value={speakerCompany} onChange={setSpeakerCompany} label="Speaker's Company" error={!isTextFieldValid(speakerCompany)} />
        <FormInput value={speakerBio} onChange={setSpeakerBio} label="Speaker's Bio" error={!isTextFieldValid(speakerCompany)} />

        <Button label="Submit" onClick={onSubmit} disabled={!isFormValid()} loading={loading} />
      </Form>
    </Container>
  )
}

export default CreatePresentationPage