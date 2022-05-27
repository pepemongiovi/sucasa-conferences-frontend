import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import styled from 'styled-components'

export const NavBarTitle = styled(Typography)`
  color: #ff6f02;
`

export const NavBar = styled(Toolbar)`
  display: flex;
  flex: 1;
  justify-content: space-around !important;
`

export const Container = styled(AppBar)`
  background-color: #1f917a !important;
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  padding-left: 20px;
`

export const NavButton = styled(Button) <{ active: boolean }>`
  color: ${props => props.active ? "#ff6f02" : "white"} !important;
  &:hover {
    color: #ff6f02;
  }
`