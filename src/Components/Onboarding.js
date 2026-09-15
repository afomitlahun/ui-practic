import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView, Image } from 'react-native';
import LottieView from "lottie-react-native";

export default function OnBoarding() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <Onboarding
        controlStatusBar={false}
        pages={[
          {
            backgroundColor: '#4a0202',
            image: (
              <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icon.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icon.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{ width: 200, height: 200 }}
                source={require('../../assets/icon.png')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </SafeAreaView>
  );
}