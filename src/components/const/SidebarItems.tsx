import logo from "../../assets/icons/logo/logo.png";
import user from "../../assets/icons/editor/user.svg";
import review from "../../assets/icons/editor/review.svg";
import libary from "../../assets/icons/editor/library.svg";
import book from "../../assets/icons/editor/book.svg";

const logoItem = [
  {
    id: 1,
    icon: logo,
    label: "SYNERGI",
    route: "/",
  },
];

const sideBarItemsManagement = [
  {
    id: 1,
    icon: user,
    label: "Manage Users",
    route: "route1",
  },
  {
    id: 2,
    icon: review,
    label: "Review Materials",
    route: "route1",
  },
];
const sideBarItemsEditor = [
  {
    id: 1,
    icon: libary,
    label: "Library",
    route: "route1",
  },
  {
    id: 2,
    icon: book,
    label: "My Books",
    route: "route2",
  },
];
export default { sideBarItemsManagement, sideBarItemsEditor, logoItem };
