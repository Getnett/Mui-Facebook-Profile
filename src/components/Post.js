import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Comment, ThumbUp, Tune } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  btnFilter: {
    backgroundColor: "#3A3B3C",
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
  cardContainer: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  subheader: {
    color: "#FFFFFF",
  },
  btnCardAction: {
    backgroundColor: "#3A3B3C",
    color: "#FFFFFF",
  },
  btnLikeComment: {
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
  divider: {
    backgroundColor: "#707070",
  },
  textField: {
    marginLeft: ".8rem",
    backgroundColor: "#3A3B3C",
    borderRadius: "2rem",
    borderWidth: 0,
  },
  input: {
    color: "#ffffff",
    "&::placeholder": {
      color: "#ffffff",
    },
  },
  textFieldNoBorder: {
    border: 0,
  },
}));
export default function Post() {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: ".4rem",
          my: ".8rem",
          py: ".5rem",
          px: ".5rem",
        }}
      >
        <Button
          disableElevation
          startIcon={<Tune />}
          className={styles.btnFilter}
          variant="contained"
        >
          Filters
        </Button>
      </Box>
      <Card className={styles.cardContainer}>
        <CardHeader
          subheader={
            <span className={styles.subheader}> November 16,2021</span>
          }
          title="Ronald oliver was with setve Cunningham"
          avatar={<Avatar src="/assets/images/user.png" alt="user" />}
          action={<Button className={styles.btnCardAction}>...</Button>}
        />
        <CardContent>
          <Box
            display={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography>
              Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
              pretium suscipit tellus sit amet aliquet. Vestibulum maximus
              lacinia massa non porttitor.
            </Typography>
            <Box sx={{ borderRadius: ".5rem", pt: ".2rem" }}>
              <img
                width="100%"
                height="290"
                src="/assets/images/post.png"
                alt="post  "
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mt: ".5rem",
                mb: ".8rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/assets/images/like.svg" alt="like" />
                <img src="/assets/images/react.svg" alt="react" />
              </Box>
              <Typography>1&nbsp;comment</Typography>
            </Box>
            <Divider className={styles.divider} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                py: ".3rem",
              }}
            >
              <Button className={styles.btnLikeComment} startIcon={<ThumbUp />}>
                Like
              </Button>
              <Button className={styles.btnLikeComment} startIcon={<Comment />}>
                Comment
              </Button>
            </Box>
            <Divider className={styles.divider} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: "1rem",
              }}
            >
              <Avatar
                alt="User profile picture"
                src="/assets/images/user2.png"
              />
              <TextField
                className={styles.textField}
                name="post"
                fullWidth
                size="small"
                type="text"
                variant="outlined"
                placeholder="Write comment"
                InputProps={{
                  classes: {
                    input: styles.input,
                    notchedOutline: styles.textFieldNoBorder,
                  },
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
