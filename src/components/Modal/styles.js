import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg'

export const Backdrop = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
`

export const StyledModal = styled('div')`
    width: 70%;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 12px;
    padding: 50px 30px;
    text-align: center;
    font-family: 'OpenSans';
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
`


export const StyledCloseIcon = styled(CloseIcon)`
    width: 30px;
    position: absolute;
    top: 12px;
    right: 12px;
    transition: .3s all ease-in;

    &:hover {
        transform: scale(1.2);
        fill: red;
    }
`

