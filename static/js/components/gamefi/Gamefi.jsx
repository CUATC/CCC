import { Box, Button, Container, Typography, makeStyles, useMediaQuery,Grid } from '@material-ui/core'


// Images Import

import android from './Assets/android.svg'
import html5 from './Assets/html5.svg'
import ios from './Assets/APK_D.svg'

import androidN from './Assets/androidN.svg'
import html5N from './Assets/html5N.svg'
import iosN from './Assets/APK_N.svg'



// Theme code

const useStyle = makeStyles((theme) => ({

  bw: {
    color: theme.palette.secondary.bw,
  },
  gw: {
    color: theme.palette.secondary.gw
  }
}))




export default ({ isDarkMode,setPlayopen,Playopen,setPlayId,PlayId}) => {
      const classes = useStyle()
  return(
      <div style={{ maxWidth: '1232px', margin: '8px auto' }}>


      <Box
        textAlign="center"
        style={{
          padding: '20px 0px',
          border: '6px outset #8e8e8e',
        }}
      >
        <Container>
            <Typography
            style={{ fontSize: '30px', fontWeight: 'bold' }}
            variant="h5"
            fontSize={{ xs: '16px', md: '30px' }}
            className={classes.twoVW + ' ' + classes.gw}
          >
            Join the GameFi World
          </Typography>

          <Grid container justifyContent="center">
                <Grid item xs={12} md={2} style={{margin:"40px auto 0px auto"}}>
                    <img src={ isDarkMode ? androidN : android} width="150px" /><br/>
                    <a href={`https://play.google.com/store/apps/details?id=com.TBlocksWorld.TBlocksWAR`} target="_blank" style={{ textDecoration: "none" }}>
                    <Button onClick={()=>{
                    }} className={classes.gw}
                    variant="outlined"
                    bgcolor="transparent"
                    style={{
                      border: '4px solid #4e4e4e',
                      borderRadius: '50px',
                      marginTop: '25px',
                      marginLeft: "10px"
                    }}>
                    ANDROID APP
                  </Button>
                  </a>
                </Grid>
                <Grid item xs={12} md={2} style={{margin:"40px auto 0px auto"}}>
                    <img src={ isDarkMode ? iosN : ios} width="150px" /><br/>
                    <a href={`https://tblocksw.com/apk/AR64.apk`} target="_blank" style={{ textDecoration: "none" }}>
                    <Button onClick={()=>{
                    }} className={classes.gw}
                    variant="outlined"
                    bgcolor="transparent"
                    style={{
                      border: '4px solid #4e4e4e',
                      borderRadius: '50px',
                      marginTop: '25px',
                      marginLeft: "10px"
                    }}>
                    ANDROID APK
                  </Button>
                  </a>
                </Grid>
                    <Grid item xs={12} md={2} style={{margin:"40px auto 0px auto"}}>
                    <img src={ isDarkMode ?  html5N :  html5} width="150px" /><br/>
                    <a href={`https://tblocksw.com/default`} target="_blank" style={{ textDecoration: "none" }}>
                    <Button onClick={()=>{
                      // setPlayopen(true)
                    }} className={classes.gw}
                    variant="outlined"
                    bgcolor="transparent"
                    style={{
                      border: '4px solid #4e4e4e',
                      borderRadius: '50px',
                      marginTop: '25px',
                      marginLeft: "10px"
                    }}>
                    WEB BROWSER
                  </Button>
                  </a>
                </Grid>
          </Grid>
        </Container>
      </Box>


      
      </div>
  )
};
