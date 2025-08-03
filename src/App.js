// App.js

import React from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  GitHub,
  Instagram,
  Email,
  Download,
  AssignmentInd,
  Work,
  Folder,
} from "@mui/icons-material";
import { Link } from "react-scroll";
import profile from "./images/profile.jpg";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PHP",
    "BOOTSTRAP",
    "REACTJS",
    "MATERIAL UI",
    "LARAVEL",
    "NODEJS",
    "MYSQL",
    "MS. WORD",
    "MS. EXCEL",
    "POWERPOINT",
  ];

  // Function to handle social media links
  const handleSocialClick = (platform) => {
    switch (platform) {
      case "github":
        // Tambahkan link GitHub Anda disini
        window.open("https://github.com/username", "_blank");
        break;
      case "instagram":
        // Tambahkan link Instagram Anda disini
        window.open("https://instagram.com/username", "_blank");
        break;
      case "email":
        // Tambahkan email Anda disini - ganti dengan alamat email Anda
        const email = "your.email@gmail.com";
        const subject = "Mengenai Portfolio Anda";
        const body =
          "Halo Lahdar Bellumi,%0D%0A%0D%0ASaya tertarik dengan portfolio Anda...";

        // Untuk membuka Gmail langsung
        window.open(
          `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  // Function to handle CV download
  const handleDownloadCV = () => {
    // METODE 1: Jika CV sudah ada di folder public
    // Letakkan file CV Anda di folder public dengan nama 'CV_Lahdar_Bellumi.pdf'
    const link = document.createElement("a");
    link.href = "/CV_Lahdar_Bellumi.pdf"; // Path ke file CV di folder public
    link.download = "CV_Lahdar_Bellumi.pdf"; // Nama file saat didownload
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // METODE 2: Jika ingin redirect ke Google Drive atau cloud storage
    // window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing', '_blank');

    // METODE 3: Jika ingin redirect ke direct download link
    // window.open('https://your-website.com/path/to/cv.pdf', '_blank');
  };

  return (
    <div className="App">
      {/* Navbar */}
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            LAHDAR BELLUMI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ py: 5 }}>
        <Box className="hero-container">
          <Box className="profile-section">
            <img src={profile} alt="Profile" className="profile-img" />
            <Typography variant="h6" className="name">
              LAHDAR BELLUMI
            </Typography>
            <div className="underline" />
            <Typography className="job-title">
              Programmer | Backend Developer
            </Typography>
            <Button
              variant="contained"
              startIcon={<Download />}
              className="download-btn"
              onClick={handleDownloadCV}
            >
              DOWNLOAD
            </Button>
          </Box>
          <Box className="about-section">
            <Typography className="about-title">TENTANG SAYA</Typography>
            <div className="underline" />
            <Typography className="about-text">
              Saya adalah seorang yang teliti dan memiliki rasa penasaran yang
              tinggi. Saya memiliki minat pada bidang programming terutama pada
              bagian backend, saya juga memiliki minat terhadap IoT. Saya dapat
              bekerja secara tim maupun secara individu. Saya juga dapat
              beradaptasi dengan hal baru sehingga saya dapat diandalkan.
            </Typography>

            <Typography className="contact-title">KONTAK ➜</Typography>
            <Box>
              <IconButton
                onClick={() => handleSocialClick("github")}
                className="social-icon github-icon"
              >
                <GitHub className="icon" />
              </IconButton>
              <IconButton
                onClick={() => handleSocialClick("instagram")}
                className="social-icon instagram-icon"
              >
                <Instagram className="icon" />
              </IconButton>
              <IconButton
                onClick={() => handleSocialClick("email")}
                className="social-icon email-icon"
              >
                <Email className="icon" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bottom Navigation */}
      <Box className="bottom-nav">
        <Link to="skills" smooth duration={500}>
          <Button className="nav-btn" startIcon={<AssignmentInd />}>
            SKILL
          </Button>
        </Link>
        <Link to="experience" smooth duration={500}>
          <Button className="nav-btn" startIcon={<Work />}>
            PENGALAMAN KERJA
          </Button>
        </Link>
        <Link to="portfolio" smooth duration={500}>
          <Button className="nav-btn" startIcon={<Folder />}>
            PORTOFOLIO
          </Button>
        </Link>
      </Box>

      {/* Skill Section */}
      <Box
        id="skills"
        className="skills-section"
        sx={{ textAlign: "center", py: 5 }}
      >
        <Typography className="section-title">SKILL</Typography>
        <div className="underline" style={{ margin: "12px auto" }}></div>
        <Grid container justifyContent="center">
          {skills.map((skill, idx) => (
            <Grid item key={idx}>
              <Box className="skill-item">{skill}</Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box
        id="experience"
        className="experience-section"
        sx={{ textAlign: "center", py: 5 }}
      >
        <Typography className="section-title">PENGALAMAN KERJA</Typography>
        <div className="underline" style={{ margin: "12px auto" }}></div>
        <Box sx={{ maxWidth: 800, margin: "0 auto", textAlign: "left", px: 2 }}>
          <Typography variant="h6">PT. CAHAYA BUANA FURINDOTAMA :</Typography>
          <Typography sx={{ mb: 1 }}>Februari - Maret 2023</Typography>
          <div className="underline" style={{ marginBottom: 10 }}></div>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <strong>SPM</strong>: Mempromosikan produk dari perusahaan dengan
              cara berinteraksi langsung dengan calon pembeli.
            </li>
            <li>
              <strong>Koordinator Stok</strong>: Mengatur dan memantau stok
              barang yang keluar dan masuk setiap hari yang direkap pada akhir
              minggu.
            </li>
          </ul>
        </Box>
      </Box>

      {/* Portfolio Section */}
      <Box
        id="portfolio"
        className="portfolio-section"
        sx={{ textAlign: "center", py: 5 }}
      >
        <Typography className="section-title">PORTOFOLIO</Typography>
        <div className="underline" style={{ margin: "12px auto" }}></div>
        <Grid container spacing={3} justifyContent="center" px={2}>
          {[
            {
              title: "Website Portofolio Pribadi",
              desc: "Membuat website portofolio pribadi yang responsif menggunakan reactjs.",
            },
            {
              title: "Website ToDoList",
              desc: "Membuat ToDoList dengan python menggunakan framework Flask. Memiliki fitur login dengan user dan password yang telah ditentukan dan sistem CRUD sederhana.",
            },
            {
              title: "Website Sistem Toko",
              desc: "Membuat sistem toko online sederhana menggunakan reactjs yang memiliki 3 jenis user (pemilik toko, admin dan customer). Di tiap user tersedia CRUD sederhana.",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card className="portfolio-card">
                <CardContent className="portfolio-card-content">
                  <Typography className="portfolio-card-title">
                    {item.title}
                  </Typography>
                  <Typography className="portfolio-card-desc">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
