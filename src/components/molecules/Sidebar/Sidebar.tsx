import { InternalLink } from '../../atoms/Link/InternalLink'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Title, Headings } from '../../atoms/Title/Title'
import { Container, NewsBlock } from './styles'

// incluir cssHandler no Title
// incluir prop de tamanho de fonte no Paragraph

export function Sidebar() {
  return (
    <Container>
      <Title
        heading={Headings.H2}
        text="New"
        color="hsl(35, 77%, 62%)"
        size="2.1rem"
      />
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="Hydrogen vs Electric Cars"
          size="1rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
        />
        <Paragraph
          text="Will hydrogen-fueled cars ever catch up to EVs?"
          color="hsl(233, 8%, 79%)"
        />
      </NewsBlock>
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="The Downside of AI Artistry"
          size="1rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
        />
        <Paragraph
          text="What are the possible adverse effects of on-demand AI image generation?"
          color="hsl(233, 8%, 79%)"
        />
      </NewsBlock>
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="Is VC Funding Drying Up?"
          size="1rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
        />
        <Paragraph
          text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          color="hsl(233, 8%, 79%)"
        />
      </NewsBlock>
    </Container>
  )
}