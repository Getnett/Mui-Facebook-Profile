import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Photos from "../components/Photos";
import Post from "../components/Post";
import WritePost from "../components/WritePost";
import "./App.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1f23",
    },
    secondary: {
      main: "#242526",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              mt: ".5rem",
            }}
          >
            <Grid
              style={{
                margin: "0 auto",
                justifyContent: "center",
              }}
              container
              spacing={3}
            >
              <Grid item sm={5}>
                <Introduction />
                <Photos />
              </Grid>
              <Grid item sm={6}>
                <WritePost />
                <Post />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
