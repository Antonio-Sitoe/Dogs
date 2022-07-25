import { ErrorInputCss, InputStyle, Wrapper } from "./style";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  erro: string | null;
  onChange: () => void;
  onBlur: () => void;
}

function Input({
  label,
  type,
  name,
  value,
  onChange,
  erro,
  onBlur,
}: InputProps) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <InputStyle
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        onBlur={onBlur}
      />
      {erro && <ErrorInputCss>{erro}</ErrorInputCss>}
    </Wrapper>
  );
}

export default Input;
