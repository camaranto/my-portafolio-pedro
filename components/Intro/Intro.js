import IntroStyles from './Intro.styles';
import styled from "styled-components";

const Wrapper = styled.div`${IntroStyles.wrapper}`;
const LabelColor = styled.p`${IntroStyles.labelColor}`;
const Title = styled.h1`${IntroStyles.title}`;
const Description = styled.p`${IntroStyles.description}`;


const Intro = () => {
    return (
        <Wrapper>
            <LabelColor>Hi, my name is...</LabelColor>
            <Title>Pedro Acevedo.</Title>
            <Title alternative>I build software experience.</Title>
            <Description>
                I am a Ph.D. student at Purdue University. I consider
                myself a careful person, able to appropriate
                knowledge quickly, with great adaptability to
                different environments, and learn tools that the
                market demands. Welcome to my webpage.
            </Description>
        </Wrapper>
    );
}

export default Intro;