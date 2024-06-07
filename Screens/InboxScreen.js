import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const messages = [
  {
    id: '1',
    name: 'Ateeq Taj',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Ateeq Taj',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    unreadCount: 2,
  },
  {
    id: '3',
    name: 'Ateeq Taj',
    message: "Hi, How's you? How's everything?",
    time: '01:06 PM',
    unreadCount: 2,
  },
];

const InboxScreen = () => {
  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={styles.avatarPlaceholder}>
        <Image style={styles.avatar} source={{ uri: 'https://via.placeholder.com/50' }} />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.messageInfo}>
        <View style={styles.unreadCount}>
          <Text style={styles.unreadCountText}>{item.unreadCount}</Text>
        </View>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search Here" placeholderTextColor="#888" />
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Calls</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  messageList: {
    marginTop: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 14,
    color: '#888',
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
  unreadCount: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 5,
  },
  unreadCountText: {
    color: '#fff',
    fontSize: 12,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default InboxScreen;
