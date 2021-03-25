import React from "react"
import Chip from "@material-ui/core/Chip"
import Tooltip from "@material-ui/core/Tooltip"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import museImage from "../images/muse.jpg"
import grandsonImage from "../images/grandson.jpg"
import cteImage from "../images/cageTheElephant.jpg"

export default function TemplateFive() {
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid>
            <Tooltip title="Hysteria">
                <Chip
                variant="outlined"
                size="medium"
                label="Muse"
                avatar={
                <Avatar
                    className="avatar"
                    alt="Muse"
                    src={museImage}
                    // Этот стиль необходим, потому что gatsby накладывает margin-bottom: 1.45rem на изображение
                    // В итоге аватар выглядит некорректно
                    imgProps={{ style: { marginBottom: "0" } }}
                />
                }
                ></Chip>
            </Tooltip>
        </Grid>
        <Grid>
            <Tooltip title="Trouble">
            <Chip
                variant="outlined"
                size="medium"
                label="Cage The Elephant"
                avatar={
                <Avatar
                    className="avatar"
                    alt="cage the elephant"
                    src={cteImage}
                    imgProps={{ style: { marginBottom: "0" } }}
                />
                }
            ></Chip>
            </Tooltip>
        </Grid>

        <Grid item>
            <Tooltip title="Blood//Water">
                <Chip
                variant="outlined"
                size="medium"
                label="Grandson"
                avatar={
                <Avatar
                    className="avatar"
                    alt="grandson"
                    src={grandsonImage}
                    imgProps={{ style: { marginBottom: "0" } }}
                />
                }
                ></Chip>
            </Tooltip>
        </Grid>
      </Grid>
      <div>

      </div>
    </React.Fragment>
  )
}
