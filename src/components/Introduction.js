import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import {
  HouseOutlined,
  LocationOn,
  MapOutlined,
  RssFeed,
} from "@material-ui/icons";
// import { useStyles } from "./Introduction.style";
const useStyles = makeStyles((theme) => ({
  subHeader: {
    marginBottom: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
}));
export default function Introduction() {
  const styles = useStyles();
  return (
    <Box
      sx={{
        backgroundColor: "#242526",
        width: "100%",
        color: "white",
        borderRadius: "8px",
      }}
    >
      <List
        subheader={
          <ListSubheader className={styles.subHeader}> Intro</ListSubheader>
        }
      >
        <ListItem>
          <ListItemIcon>
            <RssFeed style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>
            Massa eros etiam diam massa gravida nullam urna
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MapOutlined style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Gravida nullam urna </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HouseOutlined style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Etiam diam massa </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HouseOutlined style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>This is the text</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOn style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>From Lutsk</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RssFeed style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Followed by 97 people</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
