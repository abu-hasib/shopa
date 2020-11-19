import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import AcUnitIcon from "@material-ui/icons/AcUnit"

import Header from "../components/Header/Header"
import "./styles.css"
import Button from "../components/Button/Button"

import bgvideo from "../assets/videoplayback.mp4"
import withRoot from "../modules/withRoot"

const useStyles = makeStyles(theme => ({
  //   root: {
  //     "& > *": {
  //       margin: theme.spacing(1),
  //     },
  //   },
  heroText: {
    color: theme.palette.secondary.dark,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <>
      <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
        <source src={bgvideo} type="video/webm" />
        <source
          src="https://www.youtube.com/watch?v=cnXapYkboRQ"
          type="video/mp4"
        />
      </video>
      <main id="viewport-main">
        <Header />
        <section className="hero">
          <Typography variant="h4" className={classes.heroText}>
            Shopa <br /> a virtual online store
          </Typography>
          <Typography variant="h5" className={classes.heroText}>
            {"Buy & sell at your convenince"}
          </Typography>
          <div className={classes.root}>
            <Button variant="contained" startIcon={<ShoppingCartIcon />}>
              Shop
            </Button>
            <Button
              variant="outlined"
              startIcon={<AcUnitIcon />}
              component="a"
              href="https://github.com/abu-hasib/shopa"
              target="_blank"
            >
              Drop
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default withRoot(App)
