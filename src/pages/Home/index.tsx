import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { Container, ContentTitle, Wrapper, ProjectContainer } from "./styles";
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { lightTheme } from "../../styles/themes/light";

import { motion } from "framer-motion";

interface Project {
  id: number,
  name: string,
  html_url: string
}

export function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [theme, setTheme] = useState<string>('light')

  function handleSwitchTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    async function getProjects() {
      const response = await api.get('/users/cansani/repos')
      setProjects(response.data)
    }

    getProjects()
  }, [])

  const randomImg: string[] = [
    'https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1662643500140-7c2fdf816dd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1563118490-a6fbac646b50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1569513601276-6a7bb2237cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : defaultTheme}>
        <GlobalStyle />
            <Header
              handleSwitchTheme={handleSwitchTheme}
              theme={theme}
            />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
              >
              <ContentTitle>
                <span>Helping to develop solutions that bring happiness</span>
                <Wrapper>
                  <a href="https://github.com/cansani"><IoLogoGithub size={30} /></a>
                  <a href="https://www.linkedin.com/in/enzzocansani/"><IoLogoLinkedin size={30} /></a>
                </Wrapper>
              </ContentTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
              <ProjectContainer>
                {projects.map((item, index) => (
                  <Card
                    key={item.id}
                    name={item.name}
                    url={item.html_url}
                    randomImg={randomImg[index % randomImg.length]}
                  />
                ))}
              </ProjectContainer>
              </motion.div>
              <Footer />
            </Container>
      </ThemeProvider>
  )
}
