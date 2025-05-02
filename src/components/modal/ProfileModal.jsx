import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Avatar,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { useLayout } from "../../context/LayoutProvider";

export default function ProfileModal({ userData, onUpdate }) {
  const { setModal } = useLayout();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    avatar: null,
    previewAvatar: null,
  });

  useEffect(() => {
    const storedProfile = sessionStorage.getItem("userProfile");
    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setFormData({
        fullName: parsed.fullName || "admin",
        email: parsed.email || "admin@gmail.com",
        phone: parsed.phone || "",
        avatar: null,
        previewAvatar: parsed.avatar || null,
      });
    } else if (userData) {
      setFormData({
        fullName: userData.fullName || "Nguyễn Văn A",
        email: userData.email || "example@email.com",
        phone: userData.phone || "0123456789",
        avatar: null,
        previewAvatar: userData.avatar || null,
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatar: file,
        previewAvatar: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = () => {
    const updatedUser = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      avatar: formData.previewAvatar,
    };
    sessionStorage.setItem("userProfile", JSON.stringify(updatedUser));
    if (onUpdate) onUpdate(updatedUser);
    window.location.reload();
    setModal(null);
  };

  return (
    <Dialog open={true} maxWidth="xs" fullWidth>
      <Box
        sx={{
          backgroundColor: "#1c1c1c",
          color: "#fff",
          minHeight: "80vh",
          borderRadius: 2,
        }}
      >
        <DialogTitle sx={{ color: "#fff", textAlign: "center" }}>
          Cập nhật thông tin cá nhân
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} mt={1} alignItems="center">
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={formData.previewAvatar}
                sx={{
                  width: 100,
                  height: 100,
                  border: "3px solid #00bcd4",
                  boxShadow: "0 0 8px rgba(0,188,212,0.5)",
                }}
              />
              <IconButton
                color="primary"
                component="label"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#333",
                  "&:hover": { backgroundColor: "#444" },
                  border: "1px solid #555",
                  boxShadow: "0 0 6px rgba(255,255,255,0.2)",
                }}
              >
                <EditIcon sx={{ color: "#00bcd4" }} />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                />
              </IconButton>
            </Box>

            {["fullName", "email", "phone"].map((field) => (
              <TextField
                key={field}
                name={field}
                label={
                  field === "fullName"
                    ? "Họ và tên"
                    : field === "email"
                      ? "Email"
                      : "Số điện thoại"
                }
                variant="filled"
                value={formData[field]}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#2c2c2c",
                    borderRadius: 8,
                  },
                }}
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ padding: 2, justifyContent: "space-between" }}>
          <Button onClick={() => setModal(null)} sx={{ color: "#bbb" }}>
            Hủy
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSubmit}
            sx={{
              backgroundColor: "#00bcd4",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#00acc1" },
            }}
          >
            Cập nhật
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
