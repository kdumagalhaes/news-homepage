import { PrimaryButton } from '../../atoms/Button/PrimaryButton'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Title, Headings } from '../../atoms/Title/Title'
import { Container, TextContent } from './styles'
import Web3Desktop from '../../../assets/images/image-web-3-desktop.jpg'

export function Hero() {
  return (
    <Container>
      <img src={Web3Desktop} alt="" className="thumb" />
      <TextContent>
        <Title
          text="The Bright Future of Web 3.0?"
          size="2.6rem"
          heading={Headings.H2}
          color="hsl(240, 100%, 5%)"
        />
        <div className="text-and-button">
          <Paragraph
            text="We dive into the next evolution of the web that 
            claims to put the power of the platforms back into the hands 
            of the people. But is it really fulfilling its promise?"
            color="hsl(236, 13%, 42%)"
            cssHandler="paragraph"
          />
          <PrimaryButton
            text="Read More"
            color="hsl(36, 100%, 99%)"
            colorHover="hsl(36, 100%, 99%)"
            background="hsl(5, 85%, 63%)"
            backgroundHover="hsl(240, 100%, 5%)"
            maxWidth="13rem"
          />
        </div>
      </TextContent>
    </Container>
  )
}
