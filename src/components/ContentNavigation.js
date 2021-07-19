import { Box, Button, Toolbar, makeStyles } from "@material-ui/core";
import {
  AccountBox,
  ArrowDropDown,
  MessageRounded,
  Phone,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  navBtn: {
    color: "#FFFFFF",
    textTransform: "capitalize",
    fontSize: ".9rem",
    fontWeight: 300,
    marginLeft: ".5rem",
  },
  actionBtn: {
    backgroundColor: "#3A3B3C",
  },
  activeBtn: {
    color: "#1877F3",
    borderBottom: "2px solid #1877F3",
    borderRadius: "0",
    backgroundColor: "transparent",
  },
  toolBar: {
    justifyContent: "space-between",
    paddingBottom: "0rem",
  },
  btnFriends: {
    paddingLeft: ".2rem",
  },
}));
export default function ContentNavigation() {
  const styles = useStyles();
  const actionBtns = [styles.navBtn, styles.actionBtn].join(" ");
  const activeBtn = [styles.navBtn, styles.activeBtn].join(" ");
  return (
    <>
      <Toolbar className={styles.toolBar} component="nav">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button className={activeBtn} href="/posts">
            Posts
          </Button>
          <Button className={styles.navBtn} href="/about">
            About
          </Button>
          <Button className={styles.navBtn} href="/Friends">
            Friends
            <span className={styles.btnFriends}>458</span>
          </Button>
          <Button className={styles.navBtn} href="/photos">
            Photos
          </Button>
          <Button className={styles.navBtn} href="/Videos">
            Videos
          </Button>
          <Button className={styles.navBtn} href="/check-ins">
            Check-Ins
          </Button>
          <Button className={styles.navBtn} endIcon={<ArrowDropDown />}>
            More
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            disableElevation
            variant="contained"
            className={actionBtns}
            startIcon={<MessageRounded />}
          >
            Message
          </Button>
          <Button disableElevation variant="contained" className={actionBtns}>
            <Phone />
          </Button>
          <Button disableElevation variant="contained" className={actionBtns}>
            <AccountBox />
          </Button>
          <Button disableElevation variant="contained" className={actionBtns}>
            ...
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}
