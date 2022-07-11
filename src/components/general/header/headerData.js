import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";

export const navbarLinks = [
  {
    id: "h1",
    name: "Home",
    link: "/",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    id: "h2",
    name: "Stock",
    link: "/categories",
    icon: <CategoryIcon fontSize="small" />,
  },
  {
    id: "h3",
    name: "Blog",
    link: "/blog",
    icon: <AutoStoriesIcon fontSize="small" />,
  },
  {
    id: "h4",
    name: "About",
    link: "/about",
    icon: <InfoIcon fontSize="small" />,
  },
  {
    id: "h5",
    name: "Contact",
    link: "/contact",
    icon: <PhoneIcon fontSize="small" />,
  },
  {
    id: "h6",
    name: "Log In",
    link: "/login",
    icon: <LoginIcon fontSize="small" />,
  },
  {
    id: "h7",
    name: "Registration",
    link: "/registration",
    icon: <LockIcon fontSize="small" />,
  },
];
export const iconsStyle = {
  color: "white",
  "&:hover": { color: "brown", cursor: "pointer" },
};
