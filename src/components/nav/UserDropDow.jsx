import React, { useState, useEffect } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import {
  AccountCircle,
  Paid,
  SwitchAccount,
  Logout,
  CloudUpload,
  History,
  Settings,
  Policy,
  Help,
  Feedback,
} from "@mui/icons-material";
import { useLayout } from "../../context/LayoutProvider";
import png300 from "../../assets/300.png";
import authToken from "../storage/authToken";

export const UserDropDow = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(null); // State to store user data
  const open = Boolean(anchorEl);
  const { setModal, isLogin, setIsLogin } = useLayout();

  useEffect(() => {
    // Fetch user data from sessionStorage when the component mounts
    const storedUserData = sessionStorage.getItem("userProfile");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData)); // Set user data to state
    }
  }, []); // Empty array means this effect runs only once, when the component mounts

  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(isLogin);
  return (
    <>
      <div className="flex items-center gap-4">
        {isLogin  ? (
          <IconButton onClick={handleAvatarClick}>
            <Avatar
              alt={userData?.fullName || "User"} // Use full name if available
              src={userData?.avatar || "https://i.pravatar.cc/300"} // Use avatar or fallback
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </IconButton>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setModal("Login")}
            className="text-white hover:bg-blue-600"
          >
            Login
          </Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: { backgroundColor: "#1c1c1c", color: "#fff", minWidth: 240 },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem sx={{ opacity: 1, pb: 1 }}>
            <ListItemIcon>
              <Avatar src={userData?.avatar || "https://i.pravatar.cc/300"} />
            </ListItemIcon>
            <div className="pl-2">
              <Typography variant="subtitle1">
                {userData?.fullName || "User"}
              </Typography>
              <Typography color="primary" variant="body2">
                @{userData?.email?.split("@")[0] || "username"}
              </Typography>
            </div>
          </MenuItem>
          <Divider sx={{ borderColor: "#333" }} />
          <MenuItem onClick={() => (setModal("ProfileModal"), handleClose())}>
            <ListItemIcon>
              <AccountCircle fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Thông tin tài khoản
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Paid fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Mua Next Music Premium
          </MenuItem>
          <MenuItem onClick={() => (setModal("Login"), handleClose())}>
            <ListItemIcon>
              <SwitchAccount fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Chuyển đổi tài khoản
          </MenuItem>
          <MenuItem
            onClick={() => (
              authToken.deleteToken(), setIsLogin(false), handleClose()
            )}
          >
            <ListItemIcon>
              <Logout fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Đăng xuất
          </MenuItem>
          <Divider sx={{ borderColor: "#333" }} />
          <MenuItem disabled onClick={handleClose}>
            <ListItemIcon>
              <CloudUpload fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Tải nhạc lên
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <History fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Video đã xem
          </MenuItem>
          <MenuItem onClick={() => (handleClose, setModal("SettingsModal"))}>
            <ListItemIcon>
              <Settings fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Cài đặt
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Policy fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Điều khoản và quyền riêng tư
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Help fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Trợ giúp
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Feedback fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Gửi ý kiến phản hồi
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
