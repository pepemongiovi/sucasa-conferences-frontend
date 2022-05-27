import axios, { AxiosResponse } from 'axios'
import Attendee from '../models/Attendee'
import Presentation from '../models/Presentation';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const createAttendee = async (attendee: Attendee): Promise<AxiosResponse> => {
  const endpoint = '/attendees'

  return api.post(endpoint, attendee)
}

export const createPresentation = async (presentation: Presentation): Promise<AxiosResponse> => {
  const endpoint = '/presentations'

  return api.post(endpoint, presentation)
}

export const addAttendeeToPresentation = async (attendee_email: string, presentationId: number): Promise<AxiosResponse> => {
  const endpoint = `/presentations/${presentationId}/attendees`
  const body = { attendee_email }

  return api.post(endpoint, body)
}