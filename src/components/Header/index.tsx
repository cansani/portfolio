import { HeaderContainer, HeaderContent } from "./styles";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

interface HeaderProps {
    handleSwitchTheme: React.MouseEventHandler<HTMLButtonElement>
    theme: string
}

export function Header({ handleSwitchTheme, theme }: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <a href="/">:)</a>
                <button onClick={handleSwitchTheme}>
                    {theme === 'light' ? <IoIosMoon size={25} /> : <IoIosSunny size={25} />}
                </button>
            </HeaderContent>
        </HeaderContainer>
    )
}