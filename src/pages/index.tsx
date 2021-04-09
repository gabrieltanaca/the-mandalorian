import Head from "next/head";
import Episode from "../components/Episode";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import SmallTitle from "../components/SmallTitle";
import SocialMedias from "../components/SocialMedias";
import Title from "../components/Title";
import { Background, Container } from "../styles";
import GlobalStyles from "../styles/global";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Mandalorian</title>
      </Head>
      <div>
        <GlobalStyles />
        <Background>
          <Container>
            <SmallTitle />
            <Profile />
            <Title />
            <div className="projects">
              <Projects />
              <SocialMedias />
            </div>
          </Container>
        </Background>
      </div>
    </>
  );
}
