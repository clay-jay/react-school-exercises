import React from 'react'
import Svgs from "-!svg-react-loader?props[]=className:w-4 h-4!../images/alienSpace.svg";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function TemplateFour () {
    return(
        <React.Fragment>
            <Grid container alignItems='center'>
                <Grid item xs>
                    <Typography variant='h3' align='center'>
                        We are not alone
                    </Typography>
                </Grid>
                <Grid item xs>
                    <div style={{width: '200px', height: '200px', margin: 'auto'}}>
                        <Svgs height='100%' weight='100%' style={{display: 'block'}} />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}