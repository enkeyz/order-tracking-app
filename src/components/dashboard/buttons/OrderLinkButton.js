import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";

const OrderLinkButton = ({ url }) => {
  const handleOpenUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <IconButton color="primary" aria-label="complete" onClick={handleOpenUrl}>
      <LinkIcon />
    </IconButton>
  );
};

export default OrderLinkButton;
