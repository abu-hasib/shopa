import React from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import { mainListItems, secondaryListItems } from "../NavList/listItems"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import PublicIcon from "@material-ui/icons/Public"
import "./Header.css"
import { Link } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // paddingLeft: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    color: theme.palette.primary.light
  },
  AppBar: {
    background: "transparent",
    color: "#ffc107",
    position: "relative",
    boxShadow: "none"
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  drawerPaper: {
    // position: 'relative',
    whiteSpace: "nowrap",
    width: 240,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerIcons: {
    color: "#fff",
  },
}))

export default function Header() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    console.log("44444")
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopa
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="right"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className={classes.drawerIcons}>{mainListItems}</List>
        </div>
        <div>
          {/* <Divider /> */}
          <List dense>{secondaryListItems}</List>
          <hr />
          <div className="FooterIcons">
            <IconButton
              component={Link}
              href="https://mobile.twitter.com/thisbeardedone"
              target="_blank"
              className={classes.drawerIcons}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/ridwan-abiola-06002b114/"
              target="_blank"
              className={classes.drawerIcons}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/abu-hasib"
              target="_blank"
              className={classes.drawerIcons}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://ridwanabiola.netlify.app/"
              target="_blank"
              className={classes.drawerIcons}
            >
              <PublicIcon />
            </IconButton>
            <p>designed by Ridwan Abiola</p>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
