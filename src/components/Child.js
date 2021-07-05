import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { NavLink } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { FaTimes } from "react-icons/fa";
import Avatar from "@material-ui/core/Avatar";
import ChoreList from "../components/ChoreList";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


// styles start here

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    height: 250,
    margin: 30,
    borderRadius: 15,
    background: "rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(1px)",
    color: "rgb(0, 94, 144)",
    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    flexWrap: "wrap",
    zIndex: 1,
    color: "rgb(0, 94, 144)",
  },
  chores: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    transition: "0.5s",
  },
  avatar: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    fontSize: "2em",
    color: "rgb(0, 94, 144)",
    textAlign: "center",
    pointerEvents: "none",
    
  },
  subheader: {
    textAlign: "center",
  },

  link: {
    textDecoration: "none",
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Child = (props) => {
  const today = new Date();

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Card key={props.id} className={classes.root} raised={true}>
        <Typography>
          {" "}
          <Button onClick={() => props.deleteChild(props.id)}>
            <FaTimes />
          </Button>
        </Typography>

        <CardHeader
          avatar={
            <Avatar
              aria-label="child"
              className={classes.avatar}
              fontSize="inherit"
            >
              {props.fstname.toUpperCase().charAt(0)}
            </Avatar>
          }
          titleTypographyProps={{ variant: "h4", color: "rgb(0, 94, 144)" }}
          title={
            <NavLink
              underline="hover"
              className={classes.link}
              to={`/childdetail/${props.id}`}
              onClick={localStorage.setItem("childId", props.id)}
            >
              {props.fstname}
            </NavLink>
          }
          subheaderTypographyProps={{ variant: "h5", color: "rgb(0, 94, 144)" }}
          subheader={props.username}
        />
        <CardContent className={classes.chores}>
          <Typography className={classes.todo}> Assigned Chores: </Typography>
          <ChoreList key={props.name} id={props.id} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Child;
