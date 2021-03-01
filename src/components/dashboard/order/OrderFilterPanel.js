import { Box } from "@material-ui/core";

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
        <Box mx="auto" pt={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default OrderFilterPanel;
