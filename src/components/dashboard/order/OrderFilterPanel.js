import { Grid } from "@material-ui/core";

const OrderFilterPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          justify="center"
          alignItem="center"
          direction="column"
          spacing={2}
          style={{ marginTop: "1rem" }}
        >
          {children}
        </Grid>
      )}
    </div>
  );
};

export default OrderFilterPanel;
