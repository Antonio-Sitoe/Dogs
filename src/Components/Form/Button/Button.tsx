import { ButtonCss } from "./style";

interface ButtonProps {
  text: string;
  disabled?: boolean
}
function Button({ text, ...props }: ButtonProps) {
  return <ButtonCss {...props}>{text}</ButtonCss>;
}

export default Button;
