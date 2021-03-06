import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';
import Parametres from '../screens/Parametres';
import Login from '../screens/Login';
import Singin from '../screens/Singin';
import Groupes from '../screens/Groupes';
import WaitValidAccount from '../screens/WaitValidAccount';
import MesCredits from '../screens/MesCredits';
import Vide from '../screens/Vide';
import AddGroup from '../screens/AddGroup';
import DetailGroup from '../screens/DetailGroup';

//Admin
import ValidGroup from '../screens/ValidGroup';
import ValidCredit from '../screens/ValidCredit';

// settings
import SettingsScreen from '../screens/Settings';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';

// header for screens
import Header from '../components/Header';

const home_menu = [
  { id: 'TousLesGroupes', title: 'Tous les groupes'},
  { id: 'Mongroupe', title: 'Mon groupe'},
  { id: 'MesCredits', title: 'Mes credits'}
];


const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = 'Search';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ComponentsStack = createStackNavigator(
  {
    Components: {
      screen: Components,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Components" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Settings" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const MesCreditsStack = createStackNavigator(
  {
    MesCredits: {
      screen: MesCredits,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="MesCredits" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ArticlesStack = createStackNavigator(
  {
    Articles: {
      screen: Articles,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Articles" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const VideStack = createStackNavigator(
  {
    Profile: {
      screen: Vide,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header  transparent title="EN COURS DE DEVELOPEMENT" iconColor={'#000'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ValidGroupStack = createStackNavigator(
  {
    ValidGroups: {
      screen: ValidGroup,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header  transparent title="Valider les groups" iconColor={'#000'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ValidCreditStack = createStackNavigator(
  {
    ValidCredits: {
      screen: ValidCredit,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header  transparent title="Valider les credits" iconColor={'#000'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const GroupesSatck = createStackNavigator(
  {
    Account: {
      screen: Groupes,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Groupes" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ParametresSTack = createStackNavigator(
  {
    Account: {
      screen: Parametres,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Parametres" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);
const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Create Account" iconColor={'#333'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search tabs={home_menu} title="Accueuil" navigation={navigation} />
      })
    },
    Pro: {
      screen: Pro,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    },
    DetailGroup: {
      screen: DetailGroup,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title="Details du groupe"
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
    AddGroup: {
      screen: AddGroup,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title="Creer un groupe"
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
    ValidGroups: {
      screen: ValidGroup,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title="Valider les Groupes"
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
    ValidCredits: {
      screen: ValidCredit,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title="Valider les credits"
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);


const SigninStack = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="rgba(0,0,0,0)"
              white={true}
              transparent
            />
        ),
        headerTransparent: true,
        //swipeEnabled:false
      })
    },
    Singin: {
      screen: Singin,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true,
        //swipeEnabled:false
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const LoginStack = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="rgba(0,0,0,0)"
              white={true}
              transparent
            />
        ),
        headerTransparent: true,
        //swipeEnabled:false
      })
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
  },

  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const WaitValidAccountStack = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="rgba(0,0,0,0)"
              white={true}
              transparent
            />
        ),
        headerTransparent: true,
        //swipeEnabled:false
      })
    },
    WaitValidAccount: {
      screen: WaitValidAccount,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
              back
              title=""
              navigation={navigation}
              titleColor="black"
              iconColor="black"
              white={false}
              transparent
            />
        ),
        headerTransparent: true
      })
    },
  },
 
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);


const AppStack = createDrawerNavigator(
  {
    SigninStack: {
      screen: SigninStack,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    LoginStack: {
      screen: LoginStack,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    WaitValidAccountStack: {
      screen: WaitValidAccountStack,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Home" />
      })
    },
    Profile: {
      screen: VideStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    // ValidGroups: {
    //   screen: ValidGroupStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="ValidGroup" title="Valider les Groupes" />
    //     )
    //   })
    // },
    // ValidCredits: {
    //   screen: ValidCreditStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="ValidCredit" title="Valider les credits" />
    //     )
    //   })
    // },
    MesCredits: {
      screen: VideStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="MesCredits" title="Mes Credits" />
        )
      })
    },
    Parametres: {
      screen: ComponentsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Parametres" title="Parametres" />
        )
      })
    },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
