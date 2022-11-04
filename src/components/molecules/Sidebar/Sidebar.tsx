import { InternalLink } from '../../atoms/Link/InternalLink'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Title, Headings } from '../../atoms/Title/Title'
import { Container, NewsBlock } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Title
        heading={Headings.H2}
        text="New"
        color="hsl(35, 77%, 62%)"
        size="2.8rem"
        cssHandler="sidebar-title"
      />
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="Hydrogen vs Electric Cars"
          size="1.3rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
          weight="800"
        />
        <Paragraph
          text="Will hydrogen-fueled cars ever catch up to EVs?"
          color="hsl(233, 8%, 79%)"
          cssHandler="paragraph"
        />
      </NewsBlock>
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="The Downside of AI Artistry"
          size="1.3rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
          weight="800"
        />
        <Paragraph
          text="What are the possible adverse effects of on-demand AI image generation?"
          color="hsl(233, 8%, 79%)"
          cssHandler="paragraph"
        />
      </NewsBlock>
      <NewsBlock>
        <InternalLink
          anchor="#"
          text="Is VC Funding Drying Up?"
          size="1.3rem"
          color="hsl(36, 100%, 99%)"
          colorHover="hsl(35, 77%, 62%)"
          weight="800"
        />
        <Paragraph
          text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          color="hsl(233, 8%, 79%)"
          cssHandler="paragraph"
        />
      </NewsBlock>
    </Container>
  )
}
