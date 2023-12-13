import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import fundo from './src/assets/imgs';

export interface LoginscreenProps {
}

export function Loginscreen (props: LoginscreenProps) {
    return (
      <ImageBackground source={fundo} style={styles.fundo}>
        <View>
          <Text>Loginsasdsadcreen</Text>
        </View>
      </ImageBackground>
    );
    }
const styles = StyleSheet.create({
      fundo: {
        width: '100%',
        height: '100%',
      }
    });
