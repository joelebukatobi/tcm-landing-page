'use client';
// React
import { useState, useEffect } from 'react';

// Next JS
import Image from 'next/image';

// Config
import { AIRTABLE_TOKEN } from '@/_config/index';

// COmponents
import { Button } from '@/_components/atoms/Button';
import { Input } from '@/_components/atoms/Input';
import { Container } from '@/_components/molecules/Container';
import { Modal } from '@/_components/organisms/Modal';

// Image
import Screens from '@/_assets/images/pictures/screens.png';
export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState('');

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://api.airtable.com/v0/appPM2FECWlBlA4re/registrations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: { name, email } }),
    });

    const data = await res.json();
    console.log(data, res.status);

    if (res.status === 200) {
      setTimeout(() => {
        setModal(true);
      }, 3000); // 3 seconds
    }
  };

  return (
    <>
      <section className="landing">
        <Container>
          <header>
            <h1>We are Strengthening Parent-School Partnerships.</h1>

            <p>Be First In Line When We Launch</p>
          </header>

          <form action="" onSubmit={handleSubmit}>
            <Button>Sign Up</Button>
            <Input
              placeholder="Enter email"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </Container>
        <div className="landing-image">
          <Image src={Screens} />
        </div>
      </section>
      <section className={modal ? 'modal flex' : 'hidden'}>
        <Modal modal={modal} />
      </section>
    </>
  );
}
