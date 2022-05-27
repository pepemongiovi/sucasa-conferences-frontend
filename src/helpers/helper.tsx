export const isTextFieldValid = (value: string | null) => {
  return value === null || value?.length;
}

export const isNumberFieldValid = (num: number | null) => {
  return num === null || num > 0
}

export const isEmailFieldValid = (email: string | null) => {
  if (email === null) return true
  else if (!email) return false

  const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return emailValidationRegex.test(email)
}

export const areFieldsNotNull = (fields: any) => {
  return fields.map((field: any) => field !== null).reduce((prev: any, cur: any) => prev && cur, true)
}

export const clearForm = (setsForState: Function[]) => {
  for (let setState of setsForState) {
    setState(null)
  }
}