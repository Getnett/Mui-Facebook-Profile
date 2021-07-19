import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    // paddingBottom: "- 0.5rem",
    // This is may be bad
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: ".625rem",
  },
  userText: {
    fontSize: "1.8rem",
    letterSpacing: "1.2px",
    lineHeight: 0.8,
    color: "#FFFFFF",
  },
  textField: {
    marginLeft: ".8rem",
    backgroundColor: "#3A3B3C",
    borderRadius: "2rem",
    borderWidth: 0,
  },
}));
