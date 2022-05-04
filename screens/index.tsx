import { NavigationContainer, DefaultTheme, DarkTheme, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList, DrawerParamList, NavigationProps } from '@/types';
import * as Linking from 'expo-linking';
import { Home } from './Home';
import { NotFound } from './NotFound';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
        NotFound: '404',
        Root: {
            screens: {
                Home: 'home',
            },
        },
        },
    },
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
            name="Home" 
            component={Home} 
        />
    </Drawer.Navigator>
  );
}

export function Navigation({ colorScheme }: NavigationProps) {
    const navTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <>
            <NavigationContainer 
                linking={linking}
                theme={{
                    ...navTheme,
                    colors: {
                        ...navTheme.colors,
                    },
                }}
            >
                <RootStack.Navigator initialRouteName="Root">
                    <RootStack.Screen 
                        name="Root" 
                        component={DrawerNavigator} 
                        options={{ headerShown: false }}
                    />

                    <RootStack.Screen 
                        name="NotFound" 
                        component={NotFound} 
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </>
    );
}
