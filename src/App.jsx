// src/App.js
import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // Sample file data
  const fileData = [
    {
      name: "Document1.pdf",
      date: "2024-12-01",
      size: "1.2 MB",
      type: "PDF",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Video1.mp4",
      date: "2024-12-03",
      size: "700 MB",
      type: "Video",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },

    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Image1.png",
      date: "2024-12-02",
      size: "2.5 MB",
      type: "Image",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Archive.zip",
      date: "2024-12-04",
      size: "10 MB",
      type: "Archive",
      image: "https://via.placeholder.com/40",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* File List Section */}
        <Box sx={{ marginTop: 8 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                {/* <TableRow>
                  <TableCell><strong>File</strong></TableCell>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Size</strong></TableCell>
                  <TableCell><strong>Type</strong></TableCell>
                </TableRow> */}
              </TableHead>
              <TableBody>
                {fileData.map((file, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{
                        borderBottom: "none", // Remove bottom border here
                      }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={file.image}
                          alt="File Thumbnail"
                          sx={{
                            mr: 2,
                            width: 20, // Set the width to your desired size
                            height: 20, // Set the height to match the width (square)
                            borderRadius: 2, // Optional: Adjust border-radius if you want slightly rounded corners
                          }}
                        />
                        {file.name}
                      </Box>
                    </TableCell>
                    <TableCell sx={{
                        borderBottom: "none", // Remove bottom border here
                      }} >{file.date}</TableCell>
                    <TableCell sx={{
                        borderBottom: "none", // Remove bottom border here
                      }} >{file.size}</TableCell>
                    <TableCell  sx={{
                        borderBottom: "none", // Remove bottom border here
                      }}>{file.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
