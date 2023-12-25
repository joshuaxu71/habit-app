import { FlatList } from 'react-native';

import SettingsListItem, { SettingsItemProps } from '../../../components/SettingsListItem';

export default function SettingsScreen() {
  const settingsData: SettingsItemProps[] = [
    { id: '1', title: 'Synchronization', showSwitch: false, expandable: false},
    { id: '2', title: 'Time Format', showSwitch: true, expandable: true},
    { id: '3', title: 'Enable Notifications', showSwitch: true, expandable: true},
    { id: '4', title: 'Notification Reminder', showSwitch: false, expandable: false},
    { id: '5', title: 'Time Category', showSwitch: false, expandable: false},
    { id: '6', title: 'Posting Rule', showSwitch: false, expandable: false},
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
