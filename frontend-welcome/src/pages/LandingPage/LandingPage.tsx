import './style.scss';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Schedule from '../../components/schedule/schedule';

export default function LandingPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Schedule />
      </Container>
    </React.Fragment>
  );
}
