import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import createTrip from "../createTrip";
import TripDetail from "../TripDetail";
import Explorer from "../Explorer";
import Profile from "../Profile";

//Stores
import profileStore from "../../stores/profileStore";

//Buttons
import SignoutButton from "../buttons/SignoutButton";
import EditButton from "../buttons/EditButton";
import editProfile from "../editProfile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <SignoutButton />,
        }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen name="Explorer" component={Explorer} />
      <Screen name="createTrip" component={createTrip} />
      <Screen name="TripDetail" component={TripDetail} />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <EditButton />,
        }}
      />
      <Screen name="editProfile" component={editProfile} />
    </Navigator>
  );
};

export default RootNavigator;
