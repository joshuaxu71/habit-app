import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';

export interface SettingsItemProps {
  id: string,
  title: string,
  description?: string,
  showSwitch: boolean,
  routeName?: string;
}

export default function SettingsListItem({ id, title, description, showSwitch, routeName}: SettingsItemProps) {
  const expandable = description != null
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const itemBackGroundColor = Colors[colorScheme ?? 'light'].background
  const textColor = Colors[colorScheme ?? 'light'].text

  const handlePress = (routeName: string = "") => {
    if (routeName != "") {
      navigation.navigate(routeName);
    } else if (expandable) {
      setExpanded(!expanded);
    }
  };

  const renderSettingItem = (
    <View style={styles.settingsContainer}>
      <View style={styles.settingsItemContainer}>
        <View style={[
          styles.settingsItemTitleContainer,
          expanded ? styles.settingsItemTitleContainerExpanded : null
        ]}>
          <View>
            <TouchableOpacity disabled={!expandable} onPress={() => handlePress(routeName)} style={styles.settingsItemTitleIconContainer}> 
              {expandable && (
                expanded 
                ? <AntDesign name="up" size={18} color={textColor} style={ styles.settingsItemIcon } /> 
                : <AntDesign name="down" size={18} color={textColor} style={ styles.settingsItemIcon } />
              )}
              <Text style={[
                styles.settingsItemTitle,
                { color: textColor }
              ]}> 
                {title} 
              </Text> 
            </TouchableOpacity> 
          </View>
          {showSwitch && (
            <Switch color="black" style={styles.settingsItemSwitch} value={checked} onValueChange={() => setChecked(!checked)} />
          )}
        </View>
        {expanded && (
          <Text style={[
            styles.settingsItemDescription,
            { color: textColor }
          ]}>
            {description}
          </Text>
        )} 
      </View>
    </View>
  );

  return renderSettingItem;
}

const styles = StyleSheet.create({
  settingsContainer: {
    padding: 10,
  },
  settingsItemContainer: {
    
  },
  settingsItemTitleContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  settingsItemTitleContainerExpanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  settingsItemTitleIconContainer: {
    marginLeft: 5,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  settingsItemIcon: {
    marginRight: 5,
    justifyContent: 'flex-start',
  }, 
  settingsItemTitle: {
    fontSize: 18, 
  }, 
  settingsItemSwitch: {
    height: 10,
  },
  settingsItemDescription: { 
    padding: 10, 
    fontSize: 14, 
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'darkgray',
  },
});
