<h1 align="center">MilestoneTracker</h1>

<p>A mobile application built using ReactNative to track developmental changes in babies.</p>

<h2>Project Structure</h2>
<ul>
  <li>assets 
    <ul>
      <li>onboarding - onboarding screen images.</li>
    </ul>
  </li>
  <li>src 
    <ul>
      <li>navigation - stack navigator for the app.</li>
      <li>screens 
        <ul>
          <li>DashboardScreen - Dashboard screen for the app.</li>
          <li>OnboardingScreen - Onboarding screens for the app.</li>
        </ul>
      </li>
      <li>utils 
        <ul>
          <li>colors - color library for the app.</li>
        </ul>
      </li>                      
    </ul>
  </li>
</ul>

<h2>How to Run the APP</h2>

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

<h2>Libraries Used</h2>
<ul>
  <li>lottie-react-native: For the animated images in the app.</li>
  <li>react-native-onboarding-swiper: Used to create the onboarding screens.</li>
  <li>react-native-paper: Used for the edit and delete icons on the Dashboard Screen.</li>
  <li>react-native-async-storage/async-storage: Used to persist milestone list between app sessions.</li>
</ul>
