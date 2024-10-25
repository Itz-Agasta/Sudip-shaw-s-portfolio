import React, { useCallback } from 'react';
import { Engine } from 'tsparticles-engine'; // Ensure this is the correct path
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Container } from '@mui/material'; // Updated import

export function Main() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
            },
          },
        }}
      />
    </Container>
  );
}
