import './style.scss';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function NotFound() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>PAGE NOT FOUND</h1>
      </Container>
    </React.Fragment>
  );
}
