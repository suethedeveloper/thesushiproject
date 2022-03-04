import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from './MuiNextLink';

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            underline="hover"
            // onClick={() => {
            //   console.info("I'm a button.")
            sx={{ color: 'text', opacity: 1, textTransform: 'none' }}
          >
            {title}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
