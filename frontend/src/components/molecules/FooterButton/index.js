import { Button } from "./styles";

function FooterButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default FooterButton;
