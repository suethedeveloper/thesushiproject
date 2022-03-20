import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from '@components/MuiNextLink';
import { styled } from '@mui/system';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Image from 'next/image';
import ScrollToTop from './menu/ScrollToTop';
import HideOnScroll from './HideOnScroll';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/aboutus` },
  { title: `Franchise`, path: `/franchise` },
  { title: `Menu`, path: `/menu` },
  { title: `Locations`, path: `/locations` },
];

const Header = (isMobile) => {
  return (
    <>
      <HideOnScroll>
        <AppBar sx={{ bgcolor: 'common.beige' }} position="fixed">
          <Toolbar sx={{ ml: isMobile ? 0 : -3, mr: isMobile ? 0 : -3 }}>
            {/* <Toolbar> */}
            <Container
              maxWidth="lg"
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                mb: 1.8,
                mt: 1.8,
              }}
            >
              <SideDrawer navLinks={navLinks} />
              {/* <div style={{ height: '1280px', width: '98px' }}> */}
              <MuiNextLink activeClassName="active" href="/">
                <Image
                  src="/rollinlogodark.svg"
                  alt="logo"
                  // width="257"
                  // height="44"
                  width="205.2"
                  height="35.2"
                />
              </MuiNextLink>
              {/* </div> */}
              <Navbar navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <ScrollToTop showBelow={500} />
      <Offset id="back-to-top-anchor" />
    </>
  );
};

export default Header;
