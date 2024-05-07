// Next JS
import Image from 'next/image';

// COmponents
import { Button } from '@/_components/atoms/Button';
import { Input } from '@/_components/atoms/Input';
import { Container } from '@/_components/molecules/Container';

// Image
import Screens from '@/_assets/images/pictures/screens.png';
export default function Home() {
  return (
    <div className="landing">
      <Container>
        <header>
          <h1>We are Strengthening Parent-School Partnerships.</h1>

          <p>Be First In Line When We Launch</p>
        </header>

        <form action="">
          <Button>Sign Up</Button>
          <Input placeholder="Enter email" type="email" name="email" id="email" />
          <Input placeholder="Name" type="text" name="name" id="name" />
        </form>
      </Container>
      <div className="landing-image">
        <Image src={Screens} />
      </div>
    </div>
  );
}
