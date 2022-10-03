import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';

const pages = ['Journal', 'Calculator', 'News', 'Calendar'];
const settings = ['Dashboard', 'Profile', 'Settings', 'Logout'];

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavMenu = (menu: string) => {
    router.push(`/${menu}`);
    handleCloseNavMenu();
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickUserMenu = (menu: string) => {
    if (menu !== 'logout') {
      router.push(`/${menu}`);
      handleCloseUserMenu();
    }

    handleCloseUserMenu();
  }

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          borderRadius: 0,
          backgroundImage: 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)',
        }}
      >
        <Box px={8}>
          <Toolbar disableGutters>
            <Box
              alignItems='baseline'
              mr={8}
              sx={{
                display: { xs: 'none', md: 'flex' },
                cursor: 'pointer',
              }}
              onClick={() => {
                router.push('/dashboard');
              }}
            >
              <Typography variant='h3' fontWeight={600} fontStyle='italic'>
                FX
              </Typography>
              <Typography variant='h4' fontWeight={600} fontStyle='italic'>
                Tools
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleClickNavMenu(page.toLowerCase());
                    }}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              display='flex'
              alignItems='baseline'
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                cursor: 'pointer',
              }}
              onClick={() => {
                router.push('/dashboard');
              }}
            >
              <Typography variant='h3' fontWeight={600} fontStyle='italic'>
                FX
              </Typography>
              <Typography variant='h4' fontWeight={600} fontStyle='italic'>
                Tools
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
                mr: 8,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={() => {
                    handleClickNavMenu(page.toLowerCase());
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt='Kiyotaka Ayanokoji'
                    src='https://i.pinimg.com/736x/a6/aa/a3/a6aaa3f95d1da087d34cc3ae87bb2342.jpg'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleClickUserMenu(setting.toLowerCase());
                    }}
                  >
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Box pt={20} px={4} pb={4}>
        {children}
      </Box>
    </>
  );
};
export default MainLayout;
