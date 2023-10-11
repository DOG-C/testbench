import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
// import MRVL from '../../assets/MRVL.png';
// import MRVLD from '../../assets/MRVLD.png';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overview");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {theme.palette.mode === "dark" ? (
                  <img
                    alt="marvell-logo"
                    width="100px"
                    height="100px"
                    src={`../../assets/MRVLD.png`}
                  />
                ) : (
                  <img
                    alt="marvell-logo"
                    width="100px"
                    height="100px"
                    src={`../../assets/MRVL.png`}
                  />
                )}
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Testbench
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Overview"
              to="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Run"
              to="/"
              icon={<PlayArrowOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Config
            </Typography>

            <SubMenu
              title="Tests"
              icon={<SpeedOutlinedIcon />}
              style={{
                color: colors.grey[100],
                fontSize: 14,
              }}
              selected={selected}
              setSelected={setSelected}
            >
              <Item
                title="Test Campaign"
                to="/campaigns"
                selected={selected}
                setSelected={setSelected}
                icon={<DifferenceOutlinedIcon />}
              />
              <Item
                title="Test Suite"
                to="/suites"
                selected={selected}
                setSelected={setSelected}
                icon={<AutoAwesomeMotionOutlinedIcon />}
              />
              <Item
                title="Test Case"
                to="/cases"
                selected={selected}
                setSelected={setSelected}
                icon={<NoteAltOutlinedIcon />}
              />
            </SubMenu>

            <Item
              title="Platforms"
              to="/platforms"
              icon={<DnsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title="Test Design"
              icon={<SettingsOutlinedIcon />}
              style={{
                color: colors.grey[100],
                fontSize: 14,
              }}
              selected={selected}
              setSelected={setSelected}
            >
              <Item
                title="Test Campaign"
                to="/test_campaign"
                selected={selected}
                setSelected={setSelected}
                icon={<DifferenceOutlinedIcon />}
              />
              <Item
                title="Test Suite"
                to="/test_suite"
                selected={selected}
                setSelected={setSelected}
                icon={<AutoAwesomeMotionOutlinedIcon />}
              />
              <Item
                title="Test Case"
                to="/test_case"
                selected={selected}
                setSelected={setSelected}
                icon={<NoteAltOutlinedIcon />}
              />
            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Reports
            </Typography>

            <Item
              title="Summary"
              to="/reports"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Defects"
              to="/reports"
              icon={<PestControlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
