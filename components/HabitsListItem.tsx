import { FontAwesome } from '@expo/vector-icons';
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

export default function HabitsListItem({ item, drag, isActive }: { item: HabitsItemProps; drag: () => void; isActive: boolean }) {
  // id, name, track, priority, notificationEnabled, notificationReminder, enablePosting
  const [tracked, setTracked] = useState(item.track);
  const [_, setNotificationEnabled] = useState(item.notificationEnabled);
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
          <View style={styles.habitsItemTitleIconContainer}>
            <TouchableOpacity
              style={ styles.habitsItemIcon }
              onPressIn={drag}
              disabled={isActive}>
                <FontAwesome name="arrows-v" size={18} color={textColor} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <Text style={[
                styles.habitsItemTitle,
                { color: textColor }
              ]}> 
                {item.name} 
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
    paddingLeft: 5,
    paddingRight: 10,
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
