import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';

export interface HabitsItemProps {
  id: string,
  name: string,
  track: boolean,
  priority?: number,
  notificationEnabled: boolean,
  notificationReminder?: number,
  enablePosting: boolean,
}

export default function HabitsListItem({ id, name, track, priority, notificationEnabled, notificationReminder, enablePosting }: HabitsItemProps) {
  const [tracked, setTracked] = useState(track);
  const [_, setNotificationEnabled] = useState(notificationEnabled);
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const itemBackGroundColor = Colors[colorScheme ?? 'light'].background
  const textColor = Colors[colorScheme ?? 'light'].text

  const handlePress = (id: string) => {
    console.log("press " + id)
  };

  const renderHabitItem = (
    <View style={styles.habitsContainer}>
      <View style={styles.habitsItemContainer}>
        <View style={[
          styles.habitsItemTitleContainer,
        ]}>
          <View>
            <TouchableOpacity onPress={() => handlePress(id)} style={styles.habitsItemTitleIconContainer}>
              <Text style={[
                styles.habitsItemTitle,
                { color: textColor }
              ]}> 
                {name} 
              </Text> 
            </TouchableOpacity> 
          </View>
          <Switch color="black" style={styles.habitsItemSwitch} value={tracked} onValueChange={() => setTracked(!tracked)} />
        </View>
      </View>
    </View>
  );

  return renderHabitItem;
}

const styles = StyleSheet.create({
  habitsContainer: {
    padding: 10,
  },
  habitsItemContainer: {
    
  },
  habitsItemTitleContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  habitsItemTitleContainerExpanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  habitsItemTitleIconContainer: {
    marginLeft: 5,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  habitsItemIcon: {
    marginRight: 5,
    justifyContent: 'flex-start',
  }, 
  habitsItemTitle: {
    fontSize: 18, 
  }, 
  habitsItemSwitch: {
    height: 10,
  },
  habitsItemTextInput: {
    marginRight: 5,
    width: 45,
    height: 25,
    fontSize: 14, 
    backgroundColor: 'white',
  },
  habitsItemDescription: { 
    padding: 10, 
    fontSize: 14, 
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'gray',
  },
});
