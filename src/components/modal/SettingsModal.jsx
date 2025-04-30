import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  FormGroup,
  FormControlLabel,
  Switch,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLayout } from "../../context/LayoutProvider";
const tabs = [
  { key: "general", label: "Chung" },
  { key: "playback", label: "Tính năng phát" },
  { key: "download", label: "Nội dung tải xuống" },
  { key: "privacy", label: "Quyền riêng tư và dữ liệu" },
  { key: "channel", label: "Cài đặt kênh" },
  { key: "recommend", label: "Đề xuất" },
  { key: "lang", label: "Ngôn ngữ và vị trí" },
  { key: "about", label: "Giới thiệu" },
];

export default function SettingsModal({ open, onClose }) {
  const [activeTab, setActiveTab] = React.useState("general");
  const { setModal } = useLayout();

  // example switches for “Chung”
  const [restrictedMode, setRestrictedMode] = React.useState(false);
  const [showLiked, setShowLiked] = React.useState(true);
  const [saveHistory, setSaveHistory] = React.useState(true);
  const [familyCenter, setFamilyCenter] = React.useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={restrictedMode}
                  onChange={() => setRestrictedMode((v) => !v)}
                />
              }
              label="Chế độ hạn chế"
            />
            <Box mb={2} fontSize="0.8rem" color="#888">
              Chế độ hạn chế có thể giúp ẩn các video và bài hát có khả năng
              chứa nội dung dành cho người trưởng thành…
            </Box>
            <Divider light />

            <FormControlLabel
              control={
                <Switch
                  checked={showLiked}
                  onChange={() => setShowLiked((v) => !v)}
                />
              }
              label="Hiện các bản nhạc bạn đã thích"
            />
            <Box mb={2} fontSize="0.8rem" color="#888">
              Những video nhạc mà bạn đã nhấn nút thích trên các ứng dụng khác…
            </Box>
            <Divider light />

            <FormControlLabel
              control={
                <Switch
                  checked={saveHistory}
                  onChange={() => setSaveHistory((v) => !v)}
                />
              }
              label="Lưu danh sách phát dùng gần đây nhất"
            />
            <Box mb={2} fontSize="0.8rem" color="#888">
              Tự động lưu nội dung vào danh sách phát dùng gần đây nhất.
            </Box>
            <Divider light />

            <FormControlLabel
              control={
                <Switch
                  checked={familyCenter}
                  onChange={() => setFamilyCenter((v) => !v)}
                />
              }
              label="Chuyển đến Trung tâm dành cho gia đình"
            />
            <Box fontSize="0.8rem" color="#888">
              Các công cụ giúp kết nối cha mẹ, trẻ em và thanh thiếu niên…
            </Box>
          </FormGroup>
        );

      // add other cases (playback, download, etc.) similarly...
      default:
        return <Box color="#888">Chưa có nội dung cho mục này.</Box>;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setModal(null);
      }}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          backgroundColor: "#1c1c1c",
          color: "#fff",
          height: "80vh",
        },
      }}
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Box flexGrow={1} fontSize="1.25rem">
          Cài đặt
        </Box>
        <IconButton
          onClick={() => {
            setModal(null);
          }}
          sx={{ color: "#888" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider sx={{ borderColor: "#333" }} />

      <DialogContent sx={{ display: "flex", p: 0, height: "100%" }}>
        {/* Left Tabs */}
        <Box
          sx={{
            width: 200,
            bgcolor: "#222",
            borderRight: "1px solid #333",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <List disablePadding>
            {tabs.map((tab) => (
              <ListItemButton
                key={tab.key}
                selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                sx={{
                  color: "#ccc",
                  "&.Mui-selected": {
                    bgcolor: "#333",
                    color: "#fff",
                  },
                }}
              >
                <ListItemText primary={tab.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: "auto",
          }}
        >
          {renderContent()}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
