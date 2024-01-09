import { FlatList } from 'react-native';

import SettingsListItem, { SettingsItemProps } from '../../../components/SettingsListItem';

export default function SettingsScreen() {
  const settingsData: SettingsItemProps[] = [
    { id: '1', title: 'Synchronization', showSwitch: false},
    { id: '2', title: 'Time Format', description: "Customize the time shown between 12H format (e.g. 1:00 PM) and 24H format (13:00)", showSwitch: true},
    { id: '3', title: 'Enable Notifications', description: "Enable notifications for reminders", showSwitch: true},
    { id: '4', title: 'Notification Reminder', description: "Set how many minutes before the activity should the reminder be sent on (e.g. activity is at 13:00, and the reminder is reminder is 5 minutes, so the notification will be sent at 12:55)", showSwitch: false, notificationReminder: 5},
    { id: '5', title: 'Time Category', showSwitch: false},
    { id: '6', title: 'Posting Rule', showSwitch: false},
  ];

  const renderSettingItem = ({ item }: { item: SettingsItemProps }) => (
    <SettingsListItem {...item}></SettingsListItem>
  );

  return (
    <FlatList
      data={settingsData}
      renderItem={renderSettingItem}
      keyExtractor={(item) => item.id}
    />
  );
}
