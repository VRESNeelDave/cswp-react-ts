import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";

const navigationItems = [
  {
    label: "Paper",
    path: "/",
    children: [
      { label: "Abstract", path: "/#abstract" },
      {
        label: "Network Architecture",
        path: "/#network-architecture",
        children: [
          { label: "HOTFormerLoc", path: "/#hotformerloc" },
          { label: "Cyndrical Octree Attention", path: "/#coa" },
          { label: "Pyramid Attention Pooling", path: "/#pap" },
        ],
      },
      {
        label: "Experiments",
        path: "/experiments",
        children: [
          {
            label: "Datasets and Evaluation Criteria",
            path: "/#evaluation-criteria",
          },
          { label: "Ablation Study", path: "/#ablation-study" },
        ],
      },
      { label: "Future Work", path: "/future-work" },
    ],
  },
  {
    label: "Dataset",
    path: "/dataset",
    children: [
      { label: "Overview", path: "/#overview" },
      {
        label: "Data Collection Methodology",
        path: "/#methodology",
      },
      {
        label: "Benchmarking",
        path: "/#benchmarking",
      },
      {
        label: "Model Images",
        path: "/#model-images",
      },
    ],
  },
  {
    label: "Dataset Visualisation",
    path: "/visualisation",
    children: [
      { label: "Overview", path: "/#overview" },
      {
        label: "Compare Visualisations of Forests",
        path: "/#compare",
      },
    ],
  },
  {
    label: "Download",
    path: "/download",
    children: [
      { label: "Download Link", path: "/#download-link" },
      {
        label: "Usage Examples",
        path: "/#usage-examples",
      },
    ],
  },
  { label: "Acknowledgements", path: "/acknowledgements" },
  { label: "Citation", path: "/citation" },
];

const Appbar = ({ siteName }: { siteName: string }) => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const handleNavigation = (path: string) => {
    const [pathname, hash] = path.split("#");

    if (pathname) {
      navigate(pathname, { replace: true });
    }

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  };

  const toggleOpen = (label: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(label)) {
      newOpenItems.delete(label); // Close if already open
    } else {
      newOpenItems.add(label); // Open if not already open
    }
    setOpenItems(newOpenItems);
  };

  const renderMenu = (items: typeof navigationItems, depth = 0) =>
    items.map((item) => (
      <div key={item.label}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              if (item.children) {
                toggleOpen(item.label);
              } else {
                handleNavigation(item.path);
              }
            }}
            sx={{
              pl: depth * 2, // Indent based on depth
              cursor: item.children ? "default" : "pointer",
            }}
          >
            <ListItemText primary={item.label} />
            {item.children &&
              (openItems.has(item.label) ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>
        {item.children && (
          <Collapse in={openItems.has(item.label)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenu(item.children, depth + 1)} {/* Recursive rendering */}
            </List>
          </Collapse>
        )}
      </div>
    ));

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <List>{renderMenu(navigationItems)}</List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, ml: 250 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            color: "green",
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
            ml: 250,
          }}
        ></AppBar>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">
            Welcome to the {siteName} application!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Appbar;
