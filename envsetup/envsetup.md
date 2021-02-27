# Setup Development Environment 

<br/>

### [MacOs Environment Setup](https://reactnative.dev/docs/environment-setup)

- **Initial Installations**
  - `brew install node`
  - `brew install watchman`
  - `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`
  - `xcode-select --install`
  - npm install -g react-native-cli

<br/>

- **Setup Environmental Variables**

  - **Auto Env Setup script/setup**

    - `npm run setup:env`

  - **Manual Env Setup** (Run each line to export env)
    - `export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"`
    - `export ANDROID_HOME=$HOME/Library/Android/sdk`
    - `export PATH=$PATH:$ANDROID_HOME/emulator`
    - `export PATH=$PATH:$ANDROID_HOME/tools`
    - `export PATH=$PATH:$ANDROID_HOME/tools/bin`
    - `export PATH=$PATH:$ANDROID_HOME/platform-tools`

<br/>

- **Usage**
  - `npm run setup`
  - `npm run ios` or `npm run android`

<br/>

### [Windows Environment Setup](https://reactnative.dev/docs/environment-setup)

- **Open windows PowerShell and Run As admin**
  - `choco install -y nodejs.install openjdk8`
  - npm install -g react-native-cli

- **Usage**
  - `npm run android`  

