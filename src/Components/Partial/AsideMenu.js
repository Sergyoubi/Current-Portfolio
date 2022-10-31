import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import LinkedIn from "../../utils/icon/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import BurgerIcon from "../../utils/icon/BurgerIcon";
import GitHubIcon from "../../utils/icon/Github";
import { useState } from "react";

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        bgcolor: "#0f172a",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        <a
          href="https://github.com/Sergyoubi"
          target="_blank"
          rel="noreferrer"
          className="w-full py-[5%] flex justify-center items-center hover:bg-slate-800"
        >
          <div className="w-[40%] h-full flex justify-end items-center">
            <GitHubIcon />
          </div>
          <div className="w-[60%] h-full flex justify-start items-center">
            <p className="text-lg font-thin text-gray-300 relative left-[5%] top-[1%]">
              GitHub
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/sergy-r-396144203/"
          target="_blank"
          rel="noreferrer"
          className="w-full py-[5%] flex justify-center items-center hover:bg-slate-800"
        >
          <div className="w-[40%] h-full flex justify-end items-center">
            <LinkedIn />
          </div>
          <div className="w-[60%] h-full flex justify-start items-center">
            <p className="text-lg font-thin text-gray-300 relative left-[5%] top-[1%]">
              LinkedIn
            </p>
          </div>
        </a>
        <a
          href="/myresume"
          target="_blank"
          rel="noreferrer"
          className="w-full py-[20%] flex justify-center items-center"
        >
          <p className="text-light tracking-[0.8px] py-[1.7%] px-[4%] border-[1px] border-light rounded-full text-sm font-light hover:bg-slate-50 hover:text-gray-700">
            My Resume
          </p>
        </a>
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden w-[10%] h-full flex justify-center items-center relative right-[5%]">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip
            title="Menu"
            style={{
              position: "relative",
              right: "0%",
            }}
          >
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ bgcolor: "#0f172a" }}>
                <BurgerIcon />
              </Avatar>
            </IconButton>
          </Tooltip>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
