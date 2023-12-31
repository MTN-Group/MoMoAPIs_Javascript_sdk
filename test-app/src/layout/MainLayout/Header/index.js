import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, ButtonBase, Tooltip, Button } from '@material-ui/core';
// project imports
import LogoSection from '../LogoSection';
import { LockOpenRounded, LockRounded, LockTwoTone } from '@material-ui/icons';
// assets
import { IconMenu2, IconHelp } from '@tabler/icons';
import Clipboard from 'views/clipboard/clipboard';
// style constant
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: 'all .2s ease-in-out',
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        '&:hover': {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
        },
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
        },
    },
    navContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            width: 'auto',
        },
    },
}));

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const classes = useStyles();
    const formData = useSelector((state) => state.formData);
    const productType = useSelector((state) => state.productType.data)
    const customization = useSelector((state) => state.customization);
    return (
        <>
            {/* logo & toggler button */}
            <div className={classes.boxContainer}>
                <Box
                    component='span'
                    sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
                >
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant='rounded'
                        className={classes.headerAvatar}
                        onClick={handleLeftDrawerToggle}
                        color='inherit'
                    >
                        <IconMenu2 stroke={1.5} size='1.3rem' />
                    </Avatar>
                </ButtonBase>
                {/* <Clipboard /> */}
            </div>
            <div className={classes.navContainer}>
                <Tooltip title={`Help:`}>
                    <IconHelp color='primary' />
                </Tooltip>
                {productType &&
                window.momo.auth &&
                customization.authType === 'oauth-2' ? (
                    <Tooltip title={`Authorized with OAuth2`}>
                        <LockTwoTone color='success' />
                    </Tooltip>
                ) : productType &&
                  window.momo.auth &&
                  customization.authType === 'basic-auth' ? (
                    <LockRounded color='success' />
                ) : (
                    <Tooltip title={`Unauthorised`}>
                        <LockOpenRounded color='error' />
                    </Tooltip>
                )}
            </div>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
