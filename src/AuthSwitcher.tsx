/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from './store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';

import {ContactStack} from './screens/Contacts/ContactStack';
import {ChatStack} from './screens/Chats/ChatStack';
import {SettingsScreen} from './screens/Settings/SettingsScreen';
import actions from './store/actions';
import {SplashScreen} from './screens/Welcome/SplashScreen';
import {WelcomeStack} from './screens/Welcome/WelcomeStack';

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Contacts: 'ios-person',
  Chats: 'ios-chatbubbles',
  Settings: 'ios-settings',
};

const AuthSwitcher = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.profile.getProfile());
  }, []);

  const profile = useSelector((state: RootState) => state.profile);

  switch (profile.status) {
    default:
    case 'AUTH_REQUIRED':
      return <WelcomeStack />;
    case 'READY':
      return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconName = tabIcons[route.name] || '';

              // You can return any component that you like here!
              return (
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  type={'ionicon'}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0176f4',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Contacts" component={ContactStack} />
          <Tab.Screen name="Chats" component={ChatStack} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
  }
};

export default AuthSwitcher;