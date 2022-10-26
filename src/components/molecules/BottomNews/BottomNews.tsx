import { InternalLink } from '../../atoms/Link/InternalLink'
import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { Title, Headings } from '../../atoms/Title/Title'
import { Container, NewsBlock } from './styles'

// images
import RetroPCImage from '../../../assets/images/image-retro-pcs.jpg'
import TopLaptopsImage from '../../../assets/images/image-top-laptops.jpg'
import GamingGrowthImage from '../../../assets/images/image-gaming-growth.jpg'

export function BottomNews() {
  return (
    <Container>
      <NewsBlock>
        <img src={RetroPCImage} alt="A retro PC image" />
        <div className="wrapper">
          <Title
            text="01"
            color="hsl(233, 8%, 79%)"
            size="1.7rem"
            heading={Headings.H3}
          />
          <InternalLink
            anchor="#"
            color="hsl(240, 100%, 5%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Reviving Retro PCs"
          />
          <Paragraph
            text="What happens when old PCs are given modern upgrades?"
            color="hsl(233, 8%, 79%)"
          />
        </div>
      </NewsBlock>
      <NewsBlock>
        <img src={TopLaptopsImage} alt="A black keyboard with red lights" />
        <div className="wrapper">
          <Title
            text="02"
            color="hsl(233, 8%, 79%)"
            size="1.7rem"
            heading={Headings.H3}
          />
          <InternalLink
            anchor="#"
            color="hsl(240, 100%, 5%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Top 10 Laptops of 2022"
          />
          <Paragraph
            text="Our best picks for various needs and budgets."
            color="hsl(233, 8%, 79%)"
          />
        </div>
      </NewsBlock>
      <NewsBlock>
        <img src={GamingGrowthImage} alt="A joystick with a hand" />
        <div className="wrapper">
          <Title
            text="03"
            color="hsl(233, 8%, 79%)"
            size="1.7rem"
            heading={Headings.H3}
          />
          <InternalLink
            anchor="#"
            color="hsl(240, 100%, 5%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="The Growth of Gaming"
          />
          <Paragraph
            text="How the pandemic has sparked fresh opportunities."
            color="hsl(233, 8%, 79%)"
          />
        </div>
      </NewsBlock>
    </Container>
  )
}