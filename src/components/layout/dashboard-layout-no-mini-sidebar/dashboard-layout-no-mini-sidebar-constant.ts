import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { NavigationItem } from "./dashboard-layout-no-mini-sidebar-type";

export const NAVIGATION: NavigationItem[] = [
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: DashboardIcon,
    },
    {
        segment: "orders",
        title: "Orders",
        icon: ShoppingCartIcon,
    },
    {
        segment: "reports",
        title: "Reports",
        icon: BarChartIcon,
    },
];
