import React, { useState } from "react";
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
  const open = Boolean(anchorEl);
  const { setModal, isLogin, setIsLogin } = useLayout();
  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        {isLogin ? (
          <IconButton onClick={handleAvatarClick}>
            <Avatar
              alt="Victory"
              src={png300 || "https://i.pravatar.cc/300"}
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
              <Avatar src={png300 || "https://i.pravatar.cc/300"} />
            </ListItemIcon>
            <div>
              <Typography variant="subtitle1">Victory</Typography>
              <Typography variant="body2" color="gray">
                @vyvictory
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                sx={{ mt: 0.5, display: "block" }}
              >
                Quản lý Tài khoản Google của bạn
              </Typography>
            </div>
          </MenuItem>
          <Divider sx={{ borderColor: "#333" }} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountCircle fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Kênh của bạn
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Paid fontSize="small" htmlColor="#ccc" />
            </ListItemIcon>
            Mua Music Premium
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          <MenuItem onClick={handleClose}>
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
