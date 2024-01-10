import { FlatList } from 'react-native';

import HabitsListItem, { HabitsItemProps } from '../../../components/HabitsListItem';

export default function HabitsScreen() {
  const habitsData: HabitsItemProps[] = [
    { id: '1', name: 'Wake Up', track: false, notificationEnabled: false, enablePosting: false },
    { id: '2', name: 'Meditate', track: true, priority: 1, notificationEnabled: false, enablePosting: false },
    { id: '3', name: 'Stretch', track: true, priority: 2, notificationEnabled: true, notificationReminder: 5, enablePosting: true },
    { id: '4', name: 'Work Out', track: true, priority: 3, notificationEnabled: false, enablePosting: false },
    { id: '5', name: 'Content Creation', track: true, priority: 4, notificationEnabled: false, enablePosting: false },
    { id: '6', name: 'Lunch', track: false, notificationEnabled: false, enablePosting: false },
    { id: '7', name: 'Hackerrank', track: true, priority: 5, notificationEnabled: false, enablePosting: false },
    { id: '8', name: 'Habit App Development', track: true, priority: 6, notificationEnabled: false, enablePosting: false },
    { id: '9', name: 'Dinner', track: false, notificationEnabled: false, enablePosting: false },
    { id: '10', name: 'Anki', track: true, priority: 7, notificationEnabled: false, enablePosting: false },
    { id: '11', name: 'Korean Studies', track: true, priority: 8, notificationEnabled: false, enablePosting: false },
    { id: '12', name: 'Piano Studies', track: true, priority: 9, notificationEnabled: false, enablePosting: false },
  ];

  const renderHabitItem = ({ item }: { item: HabitsItemProps }) => (
    <HabitsListItem {...item}></HabitsListItem>
  );

  return (
    <FlatList
      data={habitsData}
      renderItem={renderHabitItem}
      keyExtractor={(item) => item.id}
    />
  );
}
