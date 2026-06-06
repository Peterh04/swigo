export const MenuArr = [
  {
    menu: "Home",
    to: "/",
  },
  {
    menu: "Pages",
    className: "has-mega-menu",
    ulClassName: "mega-menu",
    submenu: [
      {
        child: "Pages",
        subchild: [
          { children: "About Us", to: "/about-us" },
          { children: "FAQ", to: "/faq" },
          { children: "Team", to: "/team" },
          { children: "Team Detail", to: "/team-detail" },
          { children: "Testimonial", to: "/testimonial" },
        ],
      },
      {
        child: "Pages",
        subchild: [
          { children: "Services", to: "/services" },
          { children: "Service Detail", to: "/service-detail" },
          // { children: "Error 404", to: "/error-404" },
          // { children: "Coming Soon", to: "/coming-soon" },
          // { children: "Under Maintenance", to: "/under-maintenance" },
        ],
      },
    ],
  },
  {
    menu: "Menu",
    to: "/our-menu-4",
  },
  {
    menu: "Shop",
    to: "/shop-style-1",
  },

  { menu: "Contact Us", to: "/contact-us" },
];
