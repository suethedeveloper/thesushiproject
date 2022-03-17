import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const TopBanner = (props) => {
    let btn;
    if (props.title == "Home") {
        btn = <Button variant="outlined" sx={{marginTop: '2%'}}>Franchise</Button>
    }

    return ( 
        <Grid
            component="section"
            container
            sx={{
                position: "relative",
                height: props.isMobile ? "40vw" : "30vw",
                width: "100vw",
            }}
        >
           <Image
                src={ props.isMobile ? `/topbanner/${props.title}-mobile-banner.svg` : `/topbanner/${props.title}-banner.svg` }
                alt={`${props.title} banner`} 
                layout="fill" 
                objectFit="cover"
             /> 
            <Grid
                container
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "absolute",
                    inset: 0,
                }}
            >
                <Typography
                    color={'primary.contrastText'}
                    // TODO: isMobile should be h2 but seems too small.
                    variant={ 
                        props.isMobile ? 
                            props.title == "Home" ?
                                "h2" : "h1" 
                            : 
                            "h1" }
                >
                    {props.description}{<br />}
                    {props.second}
                </Typography>
                {btn}
            </Grid>
        </Grid>
    );
}
 
export default TopBanner;