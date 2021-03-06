/*
 *  Buzz Chat - Spam-free decentralized chat
 *
 *  https://github.com/MikaelLazarev/buzzchat
 *  Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import ChatCard from './ChatCard';
import {Chat} from '../../core/chat';
import {DataScreenComponentProps} from '../../components/DataScreen';

const ChatsList: React.FC<DataScreenComponentProps<Chat[]>> = ({
  data,
  onSelect,
}) => {
  if (data.length === 0) {
    return (
      <View style={{paddingLeft: 20, paddingTop: 25}}>
        <Text h2>There is no chats yet.</Text>
        <Text h4>Press '+' to add a new one.</Text>
      </View>
    );
  }

  const renderItem = (info: ListRenderItemInfo<Chat>) => (
    <ChatCard key={info.item.id} item={info.item} onPressed={onSelect!} />
  );

  return (
    <FlatList
      // styles={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id + index}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 4,
  },
});

export default ChatsList;
