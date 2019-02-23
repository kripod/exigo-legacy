import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          {title}
        </NavbarBrand>

        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">TODO: Menu items</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
