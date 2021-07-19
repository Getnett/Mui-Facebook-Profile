import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ContentNavigation from "./ContentNavigation";
import { useStyles } from "./Header.style";
import Navigation from "./Navigation";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative" className={classes.appBar} elevation={0}>
        <Navigation />
        <Box
          className={classes.appBarHero}
          sx={{
            position: "relative",
            width: "80%",
            margin: "auto",
            background: `url(${"/assets/images/bgheader.png"}) `,
            backgroundSize: "cover",
            height: "400px",
            borderRadius: "0  0 8px 8px",
            mt: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-12%",
              left: "42%",
            }}
          >
            <Avatar
              alt="User profile picture"
              className={classes.avatar}
              src="/assets/images/user.png"
            />
            <Typography
              className={classes.userText}
              align="center"
              variant="subtitle2"
            >
              Ronald Oliver
            </Typography>
          </Box>
        </Box>
        <Toolbar />
        <Container
          style={{
            maxWidth: "86%",
            marginTop: ".5rem",
          }}
        >
          <Divider style={{ backgroundColor: "#3E4042" }} />
          <ContentNavigation />
        </Container>
      </AppBar>
    </>
  );
}
