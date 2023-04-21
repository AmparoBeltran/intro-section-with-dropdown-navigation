import { NavStyled } from "./styles/Nav.styled"
import { useState } from "react"

export default function Nav() {
    const [open, setOpen] = useState(false)

    const handleOpenButton = () => {
        setOpen(true)
    }

    const handleCloseButton = () => {
        setOpen(false)
    }



    return (
        <NavStyled>

            <img src="/images/logo.svg" />
            <nav className={open ? 'open' : ''}>
                <div className="menu">
                    <button onClick={handleCloseButton} className="icon-close-menu"><img src="/images/icon-close-menu.svg" /></button>

                    <div className="dropdown">
                        <div className="dropdown-target">
                            <button className="dropbtn">Features</button>
                            <img src="/images/icon-arrow-down.svg" />
                        </div>
                        <div className="dropdown-content">
                            <div className="dropdown-link">
                                <img className="icon" src="/images/icon-todo.svg" />
                                <a href="#">Todo List</a>
                            </div>
                            <div className="dropdown-link">
                                <img className="icon" src="/images/icon-calendar.svg" />
                                <a href="#">Calendar</a>
                            </div>
                            <div className="dropdown-link">
                                <img className="icon" src="/images/icon-reminders.svg" />
                                <a href="#">Reminders</a>
                            </div>
                            <div className="dropdown-link">
                                <img className="icon" src="/images/icon-planning.svg" />
                                <a href="#">Planing</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-target">
                            <button className="dropbtn">Company</button>
                            <img src="/images/icon-arrow-down.svg" />
                        </div>
                        <div className="dropdown-content">
                            <a href="#">History</a>
                            <a href="#">Our team</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                </div>
                <div className="login">
                    <button href="#">Login</button>
                    <button className="register" href="#">Register</button>
                </div>
            </nav>
            {!open && <button onClick={handleOpenButton} className="icon-menu"><img src="/images/icon-menu.svg" /></button>}
        </NavStyled >
    )
}


