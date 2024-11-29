import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { IDemoProps } from "./dashboard-layout-no-mini-sidebar.type";
import { NAVIGATION } from "./dashboard-layout-no-mini-sidebar.constant";
import { DemoPageContent } from "../../common";
import { demoTheme } from "../../../theme/demo-theme";

export const DashboardLayoutNoMiniSidebar: React.FC<IDemoProps> = (props) => {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <>
      <AppProvider
        navigation={NAVIGATION.map((nav) => {
          return {
            ...nav,
            icon: <nav.icon />,
          };
        })}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout disableCollapsibleSidebar>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </>
  );
};
