import { CircularProgress } from "@mui/material";
import { CustomButton } from "./Button.styles";

interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ label, onClick, loading = false, disabled = false }: ButtonProps) => {
  return (
    <CustomButton variant='contained' disabled={disabled} onClick={onClick}>
      {loading ? <CircularProgress size={20} color='inherit' /> : label}
    </CustomButton>
  )
}