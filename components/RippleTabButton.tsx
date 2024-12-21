// components/RippleTabButton.tsx
import React from 'react';
import { Pressable, StyleSheet, Platform } from 'react-native';

type RippleTabButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

const RippleTabButton: React.FC<RippleTabButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: 'rgba(0, 0, 0, 0.001)',
        borderless: true,
      }}
      style={({ pressed }) => [
        styles.tabButton,
        Platform.OS === 'ios' && pressed && styles.pressedEffect,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    backgroundColor: 'red',
  },
  pressedEffect: {
    backgroundColor: 'rgba(0, 0, 0, 0.002)',
  },
});

export default RippleTabButton;
