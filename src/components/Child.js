import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { NavLink } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import { FaFileExcel, FaTimes } from 'react-icons/fa'
import Avatar from '@material-ui/core/Avatar'
import ChoreList from '../components/ChoreList'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container';
import { CenterFocusStrong } from '@material-ui/icons'



// styles start here

const useStyles = makeStyles(theme => ({
  root: {
    width: 220,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },

  avatar: {
    backgroundColor: '#01579b'[500]
  }
}))

const Child = props => {
  const today = new Date()

  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.container}  >
      <Card key={props.id} className={classes.root} raised={true}>
        <Typography>
          {' '}
          <Button onClick={() => props.deleteChild(props.id)}>
            <FaTimes />
          </Button>
        </Typography>

        <CardHeader
          avatar={
            <Avatar aria-label='child' className={classes.avatar} src=''>
              {props.fstname.toUpperCase().charAt(0)}
            </Avatar>
          }
          titleTypographyProps={{ variant: 'h5' }}
          title={
            <NavLink
              to={`/childdetail/${props.id}`}
              onClick={localStorage.setItem('childId', props.id)}
            >
              {props.fstname}
            </NavLink>
          }
          subheader={props.username}
        />
        <CardContent>
          <Typography>Chores To Do:</Typography>
          <ChoreList key={props.name} id={props.id} />
        </CardContent>
      </Card>
    </Container>
  )
}

export default Child
