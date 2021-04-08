import Head from "next/head";
import SmallTitle from "../components/SmallTitle";
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
            <Title />
          </Container>
        </Background>
      </div>
    </>
  );
}
