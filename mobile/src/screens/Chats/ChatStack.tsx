/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ChatsListScreen} from './ChatsListScreen';
import {ChatDetailsScreen} from './ChatDetails';
import {Button} from 'react-native-elements';
import ContactsListScreen from '../Contacts/ContactsListScreen';

const Stack = createStackNavigator();

export type ChatsStackParamList = {
  ChatListScreen: {reroute?: string};
  ChatDetailsScreen: {id: string};
};

export const ChatStack: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatsList"
        component={ChatsListScreen}
        options={{
          title: 'Chats',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('ChatNew')}
              icon={{
                name: 'add',
                size: 22,
              }}
              type="clear"
            />
          ),
        }}
      />
      <Stack.Screen name="ChatDetails" component={ChatDetailsScreen} />
      <Stack.Screen
        name="ChatNew"
        component={ContactsListScreen}
        options={{
          title: 'Select contact',
        }}
      />
    </Stack.Navigator>
  );
};
