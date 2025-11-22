import { Container } from './Menus.styled'

const Menus = () => {
  return (
    <Container>
      <h2>Sample Menus</h2>
      <p>
        Let us take you where ever you need to go, and while we&apos;re at it,
        could we offer some...
      </p>
      <ul>
        <li>
          Breakfast
          <ul>
            <li>Coffee</li>
            <li>Pastries</li>
            <li>Breakfast Sandwiches</li>
          </ul>
        </li>
        <li>
          All Day
          <ul>
            <li>Chicken Salad</li>
            <li>Ham Biscuits</li>
            <li>Deviled Eggs</li>
            <li>Cookies</li>
            <li>Fresh Fruit</li>
          </ul>
        </li>
        <li>Special Requests Welcome!</li>
      </ul>
    </Container>
  )
}

export default Menus
