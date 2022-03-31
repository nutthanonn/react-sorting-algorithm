import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

interface BackDropRuntimeProps {
  isOpen: boolean;
  handleOpen: () => void;
  runtime: number;
}

const BackDropRuntime: React.FC<BackDropRuntimeProps> = ({
  isOpen,
  handleOpen,
  runtime,
}) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={handleOpen}
    >
      <Typography>{runtime} ms</Typography>
    </Backdrop>
  );
};

export default BackDropRuntime;

// เหลือ ใส่ backdrop
