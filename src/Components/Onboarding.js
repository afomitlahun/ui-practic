import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView, Image ,View} from 'react-native';
import LottieView from "lottie-react-native";
import {setItems} from "../Utils/Storage";
export default function OnBoarding() {
  const handleDone = async () => {
    try {
      await setItems("onboardingCompleted","true");
      console.log("Onboarding status set to true");
    }catch (error) {
      console.error("Error setting onboarding atatus:",error);
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <Onboarding
        controlStatusBar={false}
        onDone={handleDone}
        pages={[
          {
            backgroundColor: '#4a0202',
            image: (
              <LottieView
                pointerEvents="none"
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
                pointerEvents="none"
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
                pointerEvents="none"
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