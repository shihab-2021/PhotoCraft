import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import useAuth from "../../../Firebase/useAuth";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import useFirebase from "../../../Firebase/useFirebase";
import AddAProduct from "../AddAProduct/AddAProduct";

const drawerWidth = 210;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let path = useLocation();

  const { admin, logout } = useFirebase();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {admin && (
        <List>
          <Link style={{ textDecoration: "none", color: "#1c7876" }} to="/home">
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i className="fas fa-home"></i> Home
                </span>
              </ListItemText>
            </ListItem>
          </Link>

          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/manageProducts"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i className="fas fa-tasks"></i> Manage Products
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/addAProduct"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-cart-plus"></i> Add A Product
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/makeAdmin"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-users-cog"></i> Make Admin
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/manageAllOrders"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-shopping-basket"></i> Manage All Orders
                </span>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      )}
      {!admin && (
        <List>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/home"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-home"></i> Home
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/myOrders"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-shopping-cart"></i> My Orders
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/pay"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-money-check-alt"></i> Pay
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#1c7876" }}
            to="/dashboard/review"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="far fa-comment-dots"></i> Review
                </span>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      )}
      <Divider />
      <List>
        <ListItem button onClick={logout}>
          <ListItemText className="fw-bold" style={{ color: "#1c7876" }}>
            <span className="fw-bold">
              <i class="fas fa-sign-out-alt"></i> Logout
            </span>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}Menu icon
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          {admin && <Route exact path="" element={<ManageProducts />} />}
          {!admin && <Route exact path="" element={<MyOrders />} />}
          {/* <Route path="myOrders" element={<MyOrders />} />
          <Route path="pay" element={<Pay />} />
          <Route path="review" element={<Review />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="manageAllOrders" element={<ManageAllOrders />} />
          <Route path="manageProducts" element={<ManageProducts />} /> */}
          <Route exact path="/dashboard/addAProduct" element={<AddAProduct />} />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
