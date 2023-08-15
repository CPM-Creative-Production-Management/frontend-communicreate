import React from "react";
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import {RxDashboard} from "react-icons/rx";
import {BsArchive, BsPersonAdd, BsPersonWorkspace, BsFillFileRuledFill, BsFillPatchPlusFill, BsCardList, BsFillBuildingFill, BsBuildingFill, BsCashStack} from "react-icons/bs";

import {LuCalculator} from "react-icons/lu";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {Divider} from "semantic-ui-react";
import {RiTeamLine} from "react-icons/ri";
import {SiAntdesign} from "react-icons/si";
import Navbar from "react-bootstrap/Navbar";


export const SidebarClient = () => {

    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div style={{display: 'flex', position:"fixed", bottom:'0px', height: '100vh'}}>
            <Sidebar collapsed={collapsed}>
                <Menu
                    menuItemStyles={{
                        button: {
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >

                    <MenuItem component={<Link to="/"/>} icon={<SiAntdesign/>} disabled> CPM </MenuItem>
                    <MenuItem component={<Link to="/"/>} icon={<RxDashboard/>}> Dashboard </MenuItem>
                    <SubMenu label="Requests" icon={<BsFillFileRuledFill/>}>
                        <MenuItem icon={<BsCardList/>} component={<Link to="/my-requests"/>}> All Requests </MenuItem>
                        <MenuItem icon={<BsFillPatchPlusFill/>} component={<Link to="/new-request"/>}> Create New Request </MenuItem>
                    </SubMenu>
                    {/* <MenuItem component={<Link to="/archive"/>} icon={<BsArchive/>}> Requests </MenuItem> */}
                    <MenuItem component={<Link to="/agencies"/>} icon={<BsBuildingFill/>}> Agencies </MenuItem>
                    <MenuItem component={<Link to="/dues"/>} icon={<BsCashStack/>}> Dues </MenuItem>
                    <Divider/>

                    <MenuItem icon={<AiOutlineInfoCircle/>}> About Us </MenuItem>
                    <MenuItem icon={<HiOutlineMail/>}> Contact Us </MenuItem>


                </Menu>
            </Sidebar>
        </div>
    );

}