import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: ".8rem",
    backgroundColor: "#3A3B3C",
    borderRadius: "2rem",
    borderWidth: 0,
  },
  textFieldNoBorder: {
    border: 0,
  },
  input: {
    color: "#FFFFFF",
    "&::placeholder": {
      color: "#FFFFFF",
      fontWeight: 500,
    },
  },
  searchIcon: {
    color: "#FFFFFF",
  },
}));
