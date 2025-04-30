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

  text: 'white',
  bgcolor: '#212121',
  boxShadow: 24,
  p: 4,
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
        <div onClick={handleOpen} className="p-2 flex items-center justify-center gap-2 rounded-3xl bg-[#1D1D1D]">
          <CreateNewFolder />
          <span>Danh sách phát mới</span>
        </div>
        <div className="p-4 flex items-center gap-2 rounded-md hover:bg-[#353535]">
          <ThumbUpAlt />
          <span>Nhạc đã thích</span>
          <PlayCircle sx={{ fontSize: 45 }} />
        </div>
        <div className="p-4 flex items-center gap-2 rounded-md hover:bg-[#353535]">
          <QueueMusicTwoTone />
          <span>Danh sách phát nhạc</span>
        </div>
      </div>
      {/* {modal && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center"
          onClick={handleModal}
        >
          <div
            className="bg-[#212121] text-white p-6 rounded-lg shadow-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Danh sách phát mới</h2>
              <button onClick={handleModal} className="text-gray-400 hover:text-white">
                <Close />
              </button>
            </div>
            <div className="grid gap-4 my-5">
              <div>
                <TextField
                  id="standard-basic"
                  label="Tiêu đề"
                  variant="standard"
                  sx={{
                    width: '80ch',
                    input: { color: 'white' }, // màu chữ
                    label: { color: 'white' }, // màu label bình thường
                    '& label.Mui-focused': {
                      color: 'white', // màu label sau khi focus
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
                  sx={{
                    width: '80ch',
                    input: { color: 'white' }, // màu chữ
                    label: { color: 'white' }, // màu label bình thường
                    '& label.Mui-focused': {
                      color: 'white', // màu label sau khi focus
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
                <Box sx={{ maxWidth: 200 }}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{
                      color: 'white',
                      '& label': { color: '#52525B' },
                      '& label.Mui-focused': { color: '#52525B' },
                      '& .MuiNativeSelect-root': { color: 'white' },
                      '& .MuiNativeSelect-icon': { color: 'white' }, // mũi tên dropdown
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
            <div className="flex justify-end gap-3">
              <button
                onClick={handleModal}
                className="bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 px-4 py-2 rounded"
              >
                Hủy
              </button>
              <Link
                onClick={handleModal}
                to={"/playlist/1"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Tạo
              </Link>
            </div>
          </div>
        </div>
      )} */}
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="grid gap-4 my-5">
              <div>
                <TextField
                  id="standard-basic"
                  label="Tiêu đề"
                  variant="standard"
                  sx={{
                    width: '80ch',
                    input: { color: 'white' }, // màu chữ
                    label: { color: 'white' }, // màu label bình thường
                    '& label.Mui-focused': {
                      color: 'white', // màu label sau khi focus
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
                  sx={{
                    width: '80ch',
                    input: { color: 'white' }, // màu chữ
                    label: { color: 'white' }, // màu label bình thường
                    '& label.Mui-focused': {
                      color: 'white', // màu label sau khi focus
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
                <Box sx={{ maxWidth: 200 }}>
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{
                      color: 'white',
                      '& label': { color: '#52525B' },
                      '& label.Mui-focused': { color: '#52525B' },
                      '& .MuiNativeSelect-root': { color: 'white' },
                      '& .MuiNativeSelect-icon': { color: 'white' }, // mũi tên dropdown
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
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClose}
                className="bg-[#F31260] text-white px-5 py-2 rounded-full"
              >
                Hủy
              </button>
              <Link
                onClick={handleClose}
                to={"/playlist/1"}
                className="bg-white text-black px-5 py-2 rounded-full"
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