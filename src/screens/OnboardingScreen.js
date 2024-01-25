import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import AppColors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Dashboard');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.doneButton}>
        <Text>Done</Text>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={styles.onboardingPadding}
        titleStyles={styles.titleStyle}
        subTitleStyles={styles.subtitleStyle}
        pages={[
          {
            backgroundColor: AppColors.onboarding1,
            image: <LottieView source={require('../../assets/onboarding/onboarding1.json')} autoPlay loop style={styles.lottieImage} />,
            title: "Welcome to Baby Milestones Tracker",
            subtitle: "Capture and cherish every precious moment of your " +
              "baby's journey with our Baby Milestones Tracker.",
          },
          {
            backgroundColor: AppColors.onboarding2,
            image: <LottieView source={require('../../assets/onboarding/onboarding2.json')} autoPlay loop style={styles.lottieImage} />,
            title: "Record Every Special Moment",
            subtitle: "Easily add and organize your baby's milestones. From " +
              "the first smile to the first step, we're here to help you " +
              "celebrate each achievement.",
          },
          {
            backgroundColor: '#D5E3FF',
            image: <LottieView source={require('../../assets/onboarding/onboarding3.json')} autoPlay loop style={styles.lottieImage} />,
            title: "Cherish Every Memory",
            subtitle: "Create a timeline of your baby's growth and development. " +
              "Add dates, milestone types, and special notes to build a beautiful " +
              "collection of memories.",
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  onboardingPadding: {
    paddingHorizontal: 24,
  },
  lottieImage: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    paddingHorizontal: 24,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444'
  },
  subtitleStyle: {
    fontSize: 16,
    color: '#666'
  }
});