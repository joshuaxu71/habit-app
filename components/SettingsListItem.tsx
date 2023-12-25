import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';


export interface SettingsItemProps {
  id: string,
  title: string,
  description?: string,
  showSwitch: boolean,
  expandable: boolean,
  routeName?: string;
}

export default function SettingsListItem({ id, title, description, showSwitch, expandable, routeName}: SettingsItemProps) {
  const [isChecked, setChecked] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const itemBackGroundColor = Colors[colorScheme ?? 'light'].background
  const textColor = Colors[colorScheme ?? 'light'].text

  const handlePress = (routeName: string = "") => {
    if (routeName != "") {
      // Navigate to the specified route when the card is pressed
      navigation.navigate(routeName);
    } else if (expandable) {
      setExpanded(!isExpanded);
    }    
  };

  const renderSettingItem = (
    <Pressable onPress={() => handlePress(routeName)}>
      <View
        style={[
          styles.settingItemContainer,
          { backgroundColor: itemBackGroundColor }, // Set background color based on color scheme
        ]}
      >
        <Text
          style={{ color: textColor }} // Set text color based on color scheme
        >
          {title}
        </Text>
        {showSwitch && <Switch value={isChecked} onValueChange={() => setChecked(!isChecked)} />}
        {/* {isExpanded && <Paragraph style={{ color: textColor }}>{description}</Paragraph>} */}
      </View>
    </Pressable>
  );

  return renderSettingItem;
}

const styles = StyleSheet.create({
  settingItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items in the center vertically
    padding: 10,
    height: 50, // Set a fixed height for the container
  },
});
