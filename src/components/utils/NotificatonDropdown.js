import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button } from 'semantic-ui-react';

export const NotificationDropdown = () => {

    const notifications = {
        "notifications": [
            {
                "id": 21,
                "message": "Globex Industries has sent you a private request New OneGlobex Industries has sent you a private request New OneGlobex Industries has sent you a private request New One",
                "link": null,
                "read": false,
                "createdAt": "2023-09-06T08:06:57.217Z"
            },
            {
                "id": 21,
                "message": " Industries has sent you a private request New One",
                "link": null,
                "read": false,
                "createdAt": "2023-09-06T08:06:57.217Z"
            },
            {
                "id": 21,
                "message": "Globex has sent you a private request New One",
                "link": null,
                "read": false,
                "createdAt": "2023-09-06T08:06:57.217Z"
            }
        ],
        "nextPage": null,
        "previousPage": null,
        "totalPages": 1
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Notifications">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Button icon='bell outline' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        maxWidth: '400px',
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {notifications.notifications.map((notification) => {
                    return (
                        <MenuItem style = {{width: '100px'}}>
                            <Avatar /> {notification.message}
                        </MenuItem>
                    )
                })
                }

            </Menu>
        </React.Fragment>
    );
}