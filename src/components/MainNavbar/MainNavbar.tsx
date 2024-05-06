import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  title: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { title: "Inicio", url: "/" },
  { title: "Conciencia y salud", url: "/conciencia-salud" },
  { title: "María Lorencez", url: "/maria-lorencez" },
  { title: "Experiencias", url: "/experiencias" },
  { title: "Proyectos", url: "/proyectos" },
  { title: "Galería", url: "/galeria" },
];

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="fixed py-3"
    >
      <NavbarContent className="xl:hidden pr-3" justify="center">
        <NavbarBrand className="gap-3">
          <img src="./logo.webp" alt="logo" width="80" />
          <h1 className="text-inherit text-xl">MARÍA LORENCEZ</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden xl:flex gap-4 uppercase"
        justify="center"
      >
        <NavbarBrand className="gap-3">
          <img src="./logo.webp" alt="logo" width="80" />
          <p className="text-inherit text-xl">María Lorencez</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden xl:flex uppercase">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`}>
            <Link color="foreground" to={item.url}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            to="/contacto"
            variant="solid"
            className="rounded-none"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary"
        />
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link className="w-full" color="foreground" to={item.url}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button as={Link} color="secondary" to="/contacto" variant="solid">
            Contacto
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
