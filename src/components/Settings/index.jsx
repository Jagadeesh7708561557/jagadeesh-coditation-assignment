import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Switch } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Website from "@mui/icons-material/AccountBoxRounded";


function Settings(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = () => {
    props.darkness(!props.dark);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        className="text-black dark:text-white"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={handleChange} />}
          label="Dark mode"
        />
        <hr />
        <div className="flex justify-around pt-3">
          <ul>
            <li>
            <a className="flex" href="https://jagadeesh30112000.github.io/jagadeesh30112000/">
            <Website /> <p>My Portfolio Website</p>
          </a>
            </li> <br />
            <li>
            <a className="flex" href="https://www.linkedin.com/in/jagadeesh-himayan-b3770920a/">
            <LinkedInIcon /> <p>My LinkedIn Account</p>
          </a>
            </li><br />
            <li>
            <a className="flex" href="https://github.com/Jagadeesh7708561557">
            <GitHubIcon /> <p> My Github Account</p>
          </a>
            </li><br />
          </ul>
        </div>
      </Menu>
   
    </div>
  );
}

export default Settings;
