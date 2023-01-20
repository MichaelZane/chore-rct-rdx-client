import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import { FaTimes } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import ChoreList from "../chore/ChoreList";
import moment from "moment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// styles start here

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: "100%",
    margin: 30,
    borderTopLeftRadius: 50 / 50,
    borderRadius: 15,
    background: "rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(1px)",
    color: "whitesmoke", //"rgb(0, 94, 144)",
    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
    textShadow:
      "-1px 1px 2px #015E90, 1px 1px 2px #015E90, 1px -1px 0 #015E90, -1px -1px 0 #015E90",
    // WebkitTextStrokeColor: "rgb(0, 94, 144)"
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    flexWrap: "wrap",
    zIndex: 1,
    // color: "rgb(0, 94, 144)",
  },
  chores: {
    // alignItems: "center",
    color: "whitesmoke",
    justifyContent: "center",
    padding: 20,
    transition: "0.5s",
  },
  avatar: {
    display: "flex",
    right: 5,
    top: 5,
    position: "absolute",
    flexDirection: "column",
    fontSize: "2em",
    // color: "rgb(0, 94, 144)",
    textAlign: "center",
    pointerEvents: "none",
  },
  subheader: {
    textAlign: "center",
  },

  link: {
    color: "whitesmoke", //"rgb(0, 94, 144)",
    fontSize: 35,
    textDecoration: "none",
    // textShadow: "-1px 1px 2px #015E90, 1px 1px 2px #015E90, 1px -1px 0 #015E90, -1px -1px 0 #015E90"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  day: {
    textAlign: "center",
  },
}));

const ChildCard = ({
  childId,
  handleDelete,
  fstname,
  username,
  chores,
  parentId,
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Card id="childCard" key={childId} className={classes.root} raised={true}>
        <Typography>
          <Button onClick={() => handleDelete(childId)}>
            <FaTimes />
          </Button>
          <Link to={"/addchore"} state={{childId: childId}} >
            <Button className={classes.Button} variant="outlined">
              Add Chore
            </Button>
          </Link>
        </Typography>

        <CardHeader
          // avatar={
          //   <Avatar
          //     aria-label="child"
          //     className={classes.avatar}
          //     fontSize="inherit"
          //   >
          //     {props.fstname.toUpperCase().charAt(0)}
          //   </Avatar>
          // }
          titleTypographyProps={{ align: "center" }}
          title={
            <Link
              underline="hover"
              className={classes.link}
              to={`/childdetail/${childId}`}
            >
              {fstname}

              {/* {<span style={{"fontSize": "10px"}} >click to edit</span>} */}
            </Link>
          }
          //todo move this into theme and pass it the theme
          subheaderTypographyProps={{
            variant: "h5",
            color: "rgb(0, 94, 144)",
            align: "center",
          }}
          subheader={username}
        />
        <Typography className={classes.day}>
          Today is {moment().format("dddd")}
        </Typography>
        <CardContent className={classes.chores}>
          <Typography className={classes.todo}>
            {" "}
            {fstname}'s Chores:{" "}
          </Typography>
          <ChoreList chores={chores} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ChildCard;
