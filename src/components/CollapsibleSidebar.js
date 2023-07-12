import React from "react";
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import {RxDashboard} from "react-icons/rx";
import {BsArchive} from "react-icons/bs";

import {LuCalculator} from "react-icons/lu";
import {IoCloudDoneOutline} from "react-icons/io5";
import {TbFolderCancel} from "react-icons/tb";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {Divider} from "semantic-ui-react";


export const CollapsibleSidebar = () => {

    return (
        <div style={{display: 'flex', height: '93vh'}}>
            <Sidebar>
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

                    <MenuItem component={<Link to="/"/>} icon={<RxDashboard/>}> Dashboard </MenuItem>
                    <SubMenu icon={<BsArchive/>} label="Archive">
                        <MenuItem component={<Link to="/archive"/>} icon={<IoCloudDoneOutline/>}> Completed </MenuItem>

                        <MenuItem icon={<TbFolderCancel/>}> Rejected </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<LuCalculator/>} label="Estimations">
                        <MenuItem icon={<IoCloudDoneOutline/>}> Completed </MenuItem>
                        <MenuItem icon={<TbFolderCancel/>}> Rejected </MenuItem>
                    </SubMenu>

                    <Divider/>

                    <MenuItem icon={<AiOutlineInfoCircle/>}> About Us </MenuItem>
                    <MenuItem icon={<HiOutlineMail/>}> Contact Us </MenuItem>


                </Menu>
            </Sidebar>
        </div>
    );

}