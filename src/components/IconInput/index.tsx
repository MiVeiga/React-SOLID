import Input, { InputProps } from "../Input";
import Styled from './IconInput.module.css'

type IconInputProps = {
  children: React.ReactNode;
} & InputProps;

const IconInput = ({ children, ...props }: IconInputProps) => {
  return (
    <div className={Styled.iconInputContainer}>
      <Input {...props} />
      <div className={Styled.iconContainer}>{children}</div>
    </div>
  );
};

export default IconInput;
