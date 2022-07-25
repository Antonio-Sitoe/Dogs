import { ButtonCss } from "./style";

interface ButtonProps {
  text: string;
}
function Button({ text, ...props }: ButtonProps) {
  return <ButtonCss {...props}>{text}</ButtonCss>;
}

export default Button;
