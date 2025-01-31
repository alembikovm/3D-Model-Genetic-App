import LogoIcon from "../../assets/icons/Logo.svg?react";
import DashboardIcon from "../../assets/icons/widget.svg?react";
import GoalsIcon from "../../assets/icons/bar-chart-line.svg?react";
import ReportIcon from "../../assets/icons/card-list.svg?react";
import CapsuleIcon from "../../assets/icons/capsule.svg?react";
import PrescripcionIcon from "../../assets/icons/prescription2.svg?react";
import BellIcon from "../../assets/icons/bell.svg?react";
import UserImage from "../../assets/images/1712470572008.jpg"


const Header = () => {
    return (
        <header className="header">
            <LogoIcon />
            <nav className="menu">
                <a href="#"><DashboardIcon className='menu-icon' />Dashboard</a>
                <a href="#"><GoalsIcon className='menu-icon' />Goals</a>
                <a href="#"><ReportIcon className='menu-icon' /> Report</a>
                <a href="#"><CapsuleIcon className='menu-icon' />Supplements</a>
                <a href="#"><PrescripcionIcon className='menu-icon' />Tests</a>
            </nav>
            <div className="user-menu">
                <button className="notification-button"><BellIcon className="notification-icon" /></button>
                <img src={UserImage} alt="User Avatar" className="avatar" />
            </div>
        </header>
    )
}

export default Header