import {
  Avatar,
  Box,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
// import { useStyles } from "./Header.style";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: ".8rem",
    backgroundColor: "#3A3B3C",
    borderRadius: "2rem",
    borderWidth: 0,
  },
  input: {
    color: "#ffffff",
    border: 0,
    "&::placeholder": {
      color: "#ffffff",
    },
  },
  writePostText: {
    marginLeft: ".4rem",
  },
  textFieldNoBorder: {
    border: 0,
  },
}));

export default function WritePost() {
  const styles = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#242526",
        color: "white",
        borderRadius: "8px",
        padding: "1.4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar alt="User profile picture" src="/assets/images/user2.png" />
        <TextField
          className={styles.textField}
          name="post"
          fullWidth
          size="small"
          type="text"
          variant="outlined"
          color="primary"
          placeholder="Write something to Roland…"
          InputProps={{
            classes: {
              input: styles.input,
              notchedOutline: styles.textFieldNoBorder,
            },
          }}
        />
      </Box>
      <Divider style={{ backgroundColor: "#707070", marginTop: "1.1rem" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/images/photo.svg" alt="Facebook photos or videos" />
          <Typography className={styles.writePostText}>Photo/video</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/images/tag.svg" alt="Tag friends" />
          <Typography className={styles.writePostText}>Tag Friends</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/images/feeling.svg" alt="Feeling or activity" />
          <Typography className={styles.writePostText}>
            Feeling/Activity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
