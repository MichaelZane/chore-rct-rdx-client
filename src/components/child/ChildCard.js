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


const ChildCard = ({
  childId,
  handleDelete,
  fstname,
  username,
  chores,
  parentId,
}) => {

  return (
    <Container 
      maxWidth="sm" 
      sx={{
        marginTop: "4%",
        marginBottom: "3%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "700px",
        // flexWrap: "wrap",
        zIndex: 1,
        color: "rgb(0, 94, 144)",
      }}
    >
      <Card 
        sx={{
          width: 300,
          height: "auto",
          // margin: 30,
          borderTopLeftRadius: 50 / 50,
          borderRadius: 1,
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
        }}
        id="childCard" 
        key={childId}  
        raised={true}>
        <Typography>
          <Button color="error" onClick={() => handleDelete(childId)}>
            <FaTimes />
          </Button>
          <Link to={"/addchore"} state={{childId: childId}} >
            <Button variant="outlined">
              Add Chore
            </Button>
          </Link>
        </Typography>

        <CardHeader
          // avatar={
          //   <Avatar
          //     aria-label="child"
          //     sx={{
          //      display: "flex",
              // right: 5,
              // top: 5,
              // position: "absolute",
              // flexDirection: "column",
              // fontSize: "2em",
              // color: "rgb(0, 94, 144)",
              // textAlign: "center",
              // pointerEvents: "none",
           //    }}
          //     fontSize="inherit"
          //   >
          //     {props.fstname.toUpperCase().charAt(0)}
          //   </Avatar>
          // }
          titleTypographyProps={{ align: "center" }}
          title={
          
            <Link
              underline="hover"
              sx={{ 
                color: "whitesmoke", 
                //"rgb(0, 94, 144)",
                fontSize: 35,
                textDecoration: "none",
                textShadow: "-1px 1px 2px #015E90, 1px 1px 2px #015E90, 1px -1px 0 #015E90, -1px -1px 0 #015E90"
               }}
              to={`/childdetail/${childId}`}
            >
              {fstname}

              {/* {<span style={{"fontSize": "10px"}} >click to edit</span>} */}
            </Link>
          }

          subheaderTypographyProps={{
            variant: "h5",
            color: "inherit",
            align: "center",
          }}
          subheader={username}
        />
        <Typography 
          sx={{
            textAlign: "center",
          }}
        >
          Today is {moment().format("dddd")}
        </Typography>

          <Typography sx={{ textAlign: "center" }} >
            {" "}
            {fstname}'s Chores:{" "}
          </Typography>
          <ChoreList chores={chores} />

      </Card>
    </Container>
  );
};

export default ChildCard;
