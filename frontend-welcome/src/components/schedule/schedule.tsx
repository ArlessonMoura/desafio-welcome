// import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
// import { MemoryRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
import './style.scss';

// function GearQuery(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/tasks">{children}</StaticRouter>;
//   }

//   return (
//     <MemoryRouter initialEntries={['/tasks']} initialIndex={0}>
//       {children}
//     </MemoryRouter>
//   );
// }

// import {
//   Link as RouterLink,
//   LinkProps as RouterLinkProps,
// } from 'react-router-dom';

// interface ListItemLinkProps {
//   icon?: React.ReactElement;
//   id: number;
//   to: string;
// }

// const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
//   itemProps,
//   ref,
// ) {
//   return <RouterLink ref={ref} {...itemProps} role={undefined} />;
// });

// function ListItemLink(props: ListItemLinkProps) {
//   const { icon, id, to } = props;

//   return (
//     <li>
//       <ListItem button component={Link} to={to}>
//         {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//         <ListItemText primary={id} />
//       </ListItem>
//     </li>
//   );
// }

export default function Schedule() {
  return (
    <Box sx={{ width: 360 }}>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          <p>LISTA INTERATIVA AKI</p>
          {/* <ListItemLink to="/" primary="Drafts" icon={<DraftsIcon />} /> */}
        </List>
      </Paper>
    </Box>
  );
}
