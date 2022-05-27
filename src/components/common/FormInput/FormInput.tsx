import { FilledInput, InputLabel } from "@mui/material"
import { FormInputSection, ErrorMessage } from "./FormInput.styles"

interface FormInputProps {
  type?: string;
  label: string;
  value: any;
  error: boolean;
  onChange: (value: any) => void;
}

const FormInput = ({ label, value, error, onChange, type = 'text' }: FormInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormInputSection variant='filled' sx={{ width: '50%' }} error={error}>
      <InputLabel htmlFor={label.toLowerCase()}>{label}</InputLabel>
      <FilledInput id={label.toLowerCase()} type={type} value={value || ''} onChange={handleChange} />
      {error && <ErrorMessage>Invalid input</ErrorMessage>}
    </FormInputSection>

  )
}

export default FormInput