import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import MuiNextLink from '@components/MuiNextLink';

const SectionAbout = ({ isMobile }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ my: 4 }}>
      <Grid
        container
        direction={isMobile ? 'column-reverse' : 'row'}
        alignItems="center"
        justifyContent="center"
      >
        {/*top text*/}
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width= {isMobile? "343": "576"} 
          pt = {2}
        >
          <Typography
            color="text"
            variant="h2"
            align="center"
            fontWeight={'fontWeightBold'}
            fontFamily={'Nunito'}
          >
            About Us
          </Typography>
          <Typography textAlign={isMobile? "left": "center"} sx={{ my: 2 }}>
            {`Your friendly neighborhood sushi place is here! 
            In Sushi Rollin’ we offer freshness, variety, and authentic experience. A true hole in the wall where you expect something ordinary but walk out with a content belly and heart. We’ve been rolling since 2019.`}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none" sx={{ my: 4}}>
            <Button> Read More</Button>
          </MuiNextLink>
        </Grid>
        {/*top image*/}
        <Grid item xs={12} sm={6}>
          <Image
            src="/sectionabout_top.svg"
            alt="about-us"
            width={800}
            height={600}
          />
        </Grid>
      </Grid>

      {/*bottom*/}
      <Grid
        container
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/sectionabout_bottom.svg"
            alt="about-us"
            width={800}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            color="text"
            variant="h2"
            align="center"
            fontWeight={'fontWeightBold'}
            fontFamily={'Nunito'}
            pt = {5}
          >
            Roll with Us
          </Typography>
          <Typography textAlign={isMobile? "left": "center"} sx={{ my: 4 }}>
            Sushi Rollin’ started its journey in the middle of Pandemic. Our business model successfully supported delivery focus experience. Over 500+ customer reviews prove that success! Now that we’re expanding, our focus has also evolved to provide a more approachable and enjoyable sushi experience.
            <br/><br/>
            It’s an opportunity that keeps rolling. Join us today!
            </Typography>
          <MuiNextLink href="/aboutus" underline="none" sx = {{ mb : 2 }}>
            <Button> Join Us Today</Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;