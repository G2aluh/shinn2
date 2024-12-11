import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/po3.png";
import projImg2 from "../assets/img/dino.png";
import projImg3 from "../assets/img/logoz.jpg";
import projImg4 from "../assets/img/web saya.png";
import projImg5 from "../assets/img/badag.png";
import projImg6 from "../assets/img/web gua3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Chicky",
      description: "Design Game bertema Ayam",
      imgUrl: projImg1,
      url: "#", // Tambahkan URL jika ada
    },
    {
      title: "T-Rex Run",
      description: "Design Game bertema T-Rex",
      imgUrl: projImg2,
      url: "#", // Tambahkan URL jika ada
    },
    {
      title: "S",
      description: "Design Logo",
      imgUrl: projImg3,
      url: "#", // Tambahkan URL jika ada
    },
  ];

  const projek = [
    {
      title: "Website Portofolio",
      description: "Website pertama saya",
      imgUrl: projImg4,
      url: "https://g2aluh.github.io/galuhssaputra.github.io/",
    },
    {
      title: "Tanduk",
      description: "Design Logo",
      imgUrl: projImg5,
      url: "#", // Tambahkan URL jika ada
    },
    {
      title: "Website Portofolio",
      description: "Website kedua saya",
      imgUrl: projImg6,
      url: "https://g2aluh.github.io/2shinra/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Dibawah ini adalah beberapa projek yang telah saya buat, klik di gambar untuk selengkapnya.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projek.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Kosong! Saya masih belum membuat projek lagi.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
