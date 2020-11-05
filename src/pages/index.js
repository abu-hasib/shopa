import React from "react"
import Header from "../components/Header/Header"
import "./styles.css"
import bgvideo from "../assets/videoplayback.mp4"
import { Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function Home() {
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
          <Typography variant="h4">
            Shopa <br /> a fictional online store
          </Typography>
          <div className={classes.root}>
            <Button variant="contained">Shop</Button>
            <Button variant="contained" color="primary">
              Shop
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
