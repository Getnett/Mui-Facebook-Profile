import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    marginTop: "1.1rem",
    width: "100%",
  },
  btnCardAction: {
    color: "blue",
    textTransform: "capitalize",
    fontSize: ".9rem",
    fontWeight: 300,
  },
}));
export default function Photos() {
  const styles = useStyles();
  return (
    <>
      <Card className={styles.cardContainer}>
        <CardHeader
          title="Photos"
          action={
            <Button className={styles.btnCardAction}>See All Phtotos</Button>
          }
        />
        <CardContent>
          <Grid
            style={{
              margin: "0 auto",
              textAlign: "center",
            }}
            container
            spacing={1}
          >
            {/* Repeation avoid this */}
            <Grid item sm={4}>
              <img src="/assets/images/photo1.png" alt="shppoing house" />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo2.png" alt="traveler" />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo3.png" alt="twilight forest" />
            </Grid>

            <Grid item sm={4}>
              <img
                src="/assets/images/photo4.png"
                alt="man with lap in the beach"
              />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo5.png" alt="sport cars" />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo6.png" alt="fabircs" />
            </Grid>

            <Grid item sm={4}>
              <img src="/assets/images/photo7.png" alt="alaeg" />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo8.png" alt="chief" />
            </Grid>
            <Grid item sm={4}>
              <img src="/assets/images/photo9.png" alt="pilot" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
