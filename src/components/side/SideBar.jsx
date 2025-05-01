import React from "react";
import {
  SlowMotionVideo,
  Home,
  Subscriptions,
  CreateNewFolder,
  ThumbUpAlt,
  PlayCircle,
  QueueMusicTwoTone,
  Close,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '600px',
  maxHeight: '90vh',
  overflowY: 'auto',
  text: 'white',
  bgcolor: '#212121',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: '8px',
};
export default function SideBar() {
  const location = useLocation();
  const isActiveTab = (path) => location.pathname === path;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="p-2 w-full h-full ">
      <div className="pb-10 border-b-[1px]">
        <Link
          to={"/"}
          className={` p-4 flex items-center gap-5 rounded-md ${isActiveTab("/") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <Home />
          <span>Trang chủ</span>
        </Link>
        <Link
          to={"discover"}
          className={` p-4 flex items-center gap-5 rounded-md ${isActiveTab("/discover") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <SlowMotionVideo />
          <span>Khám phá</span>
        </Link>
        <Link
          to={"libary"}
          className={` p-4 hMouse flex items-center gap-5 rounded-md ${isActiveTab("/libary") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <Subscriptions />
          <span>Thư viện</span>
        </Link>
      </div>
      <div className="mt-3 grid gap-5 text-nowrap">
        <div onClick={handleOpen} className="p-2 flex items-center justify-center gap-2 rounded-3xl bg-[#1D1D1D] cursor-pointer">
          <CreateNewFolder />
          <span>Danh sách phát mới</span>
        </div>
        <Link to={'playlist/like'} className="p-4 flex items-center gap-2 rounded-md hover:bg-[#353535]">
          <ThumbUpAlt />
          <span>Nhạc đã thích</span>
          <PlayCircle sx={{ fontSize: 45 }} />
        </Link>
        <div className="p-4 flex items-center gap-2 rounded-md hover:bg-[#353535]">
          <QueueMusicTwoTone />
          <span>Danh sách phát nhạc</span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 className="text-xl font-bold text-white">Danh sách phát mới</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
            <div className="grid gap-4 my-5">
              <div>
                <TextField
                  id="standard-basic"
                  label="Tiêu đề"
                  variant="standard"
                  fullWidth
                  sx={{
                    width: '100%',
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Thông tin mô tả"
                  variant="standard"
                  fullWidth
                  sx={{
                    width: '100%',
                    input: { color: 'white' },
                    label: { color: 'white' },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                  }}
                />
              </div>
              <div>
                <Box sx={{ maxWidth: { xs: '100%', sm: '200px' } }}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{
                      color: 'white',
                      '& label': { color: '#52525B' },
                      '& label.Mui-focused': { color: '#52525B' },
                      '& .MuiNativeSelect-root': { color: 'white' },
                      '& .MuiNativeSelect-icon': { color: 'white' },
                      '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                      '& select': {
                        color: 'white',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      quyền riêng tư
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option style={{ backgroundColor: '#333', color: 'white' }}>Công khai </option>
                      <option style={{ backgroundColor: '#333', color: 'white' }}>Riêng tư</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="flex flex-wrap justify-end gap-3 mt-6">
              <button
                onClick={handleClose}
                className="bg-[#F31260] text-white px-4 py-2 rounded-full text-sm sm:text-base sm:px-5"
              >
                Hủy
              </button>
              <Link
                onClick={handleClose}
                to={"/playlist/1"}
                className="bg-white text-black px-4 py-2 rounded-full text-sm sm:text-base sm:px-5"
              >
                Tạo
              </Link>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}