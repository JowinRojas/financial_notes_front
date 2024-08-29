import { Stack } from "expo-router";
import { DrawerLayoutAndroid, Pressable } from "react-native";
import { OpenMenuIcon } from "../components/Icons";
import { useRef } from "react";
import Rutas from "../components/Menu";

export default function Layout() {
  const drawer = useRef(null);
  const navigationView = () => <Rutas />;

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
    >
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "rgb(70, 182, 255)" },
          headerTitleAlign: "center",
          headerTitle: "Financial Notes",
          headerTintColor: "rgb(0, 0, 0)",
          headerTitleStyle: {
            fontSize: 23,
          },
          headerRight: () => (
            <Pressable onPress={() => drawer.current.openDrawer()}>
              <OpenMenuIcon />
            </Pressable>
          ),
        }}
      />
    </DrawerLayoutAndroid>
  );
}
