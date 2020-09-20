import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { StyleSheet,ScrollView,View } from 'react-native';
import {Icon, Text, Touchable} from "../components/base";
import {theme} from "../styles/core.style";

export const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <Text large bold>News_Logo</Text>
        <Touchable onPress={()=>{props.navigation.closeDrawer()}}>
          <Icon color={theme.GREY} name={'close'}/>
        </Touchable>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:theme.PADDING,
    borderBottomWidth:0.5,
    borderBottomColor:theme.GREY,
  }
});
