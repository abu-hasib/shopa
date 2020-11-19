import React from "react"
import "./styles.css"
import { makeStyles } from "@material-ui/core/styles"
import App from "./app";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function Home() {
  return (
  <>
    <App />
  </>)
}
