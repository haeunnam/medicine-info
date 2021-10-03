import { Button } from "./styles";


function MenuButton({ children, onClick }) {
    return <Button onClick={onClick}>{children}</Button>;
}

export default MenuButton;
