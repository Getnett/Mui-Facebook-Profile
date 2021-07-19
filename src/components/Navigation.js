import {
  Box,
  FormLabel,
  useTheme,
  FormControlLabel,
  TextField,
  Avatar,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import {
  HomeOutlined,
  YouTube,
  Group,
  BrandingWatermarkOutlined,
  Facebook,
  AddAPhoto,
  MessageRounded,
  Notifications,
  ArrowDropDown,
} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Navigation.style";

export default function Navigation() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Toolbar
      style={{
        justifyContent: "space-between",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          flexBasis: "25%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Facebook size="md" />
        </Box>

        <TextField
          className={classes.textField}
          fullWidth
          size="small"
          type="text"
          variant="outlined"
          placeholder="Search Facebook"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.searchIcon} />
              </InputAdornment>
            ),
            classes: {
              notchedOutline: classes.textFieldNoBorder,
              input: classes.input,
            },
          }}
        />
      </Box>
      <Box
        sx={{
          flexBasis: "45%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <HomeOutlined size="md" />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <YouTube />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Group />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BrandingWatermarkOutlined />
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: "25%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexBasis: "100%",
          }}
        >
          <Avatar alt="User profile picture" src="/assets/images/user.png" />
          <Typography>Rondald Oliver</Typography>
          <AddAPhoto />
          <MessageRounded />
          <Notifications />
          <ArrowDropDown />
        </Box>
      </Box>
    </Toolbar>
  );
}
