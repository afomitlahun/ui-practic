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
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require('../../assets/productivity.json')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#f438ee',
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require('../../assets/office.json')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#3e024a',
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require('../../assets/time-management.json')}
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