import IconButton from "@/components/IconButton"
import { styles } from "@/styles/main"
import { Fragment, useEffect, useState } from "react"
import { Image, Text, TextInput, View, BackHandler } from "react-native"
import { WebView } from "react-native-webview"
import * as Progress from "react-native-progress"

export default function HomeScreen() {
  const [url, setURL] = useState("")
  const [currentURL, setCurrentURL] = useState("")
  const [isSearchedURL, setIsSearchedURL] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleOnChange = (value: string) => {
    setURL(value)
  }

  // Helper function to fomat URL
  const handleFormatURL = (input: string) => {
    if (!input.startsWith("http://") && !input.startsWith("https://")) {
      return `https://www.${input.trim().toLowerCase()}`
    }
    return input.trim().toLowerCase()
  }

  // handle the user input
  const handleSearchURL = () => {
    if (url) {
      const formattedURL = handleFormatURL(url)

      setCurrentURL(formattedURL)
      setURL(formattedURL)
      setIsSearchedURL(true)
    }
  }

  // Handle the back button press to update isSearchedURL
  const handleBackPress = () => {
    if (isSearchedURL) {
      setIsSearchedURL(false)
      setURL("")
      setCurrentURL("")
      return true
    }
    return false
  }

  // Set up back button listener when component mounts
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress)

    // Cleanup the listener on component unmount
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress)
    }
  }, [isSearchedURL])

  return (
    <View style={styles.container}>
      {/* URL Input field */}
      <View style={styles.field}>
        <TextInput
          placeholder='Paste Website URL'
          onChangeText={handleOnChange}
          value={url}
          onSubmitEditing={handleSearchURL}
          style={{ width: "80%" }}
        />

        <IconButton iconName='search' onPress={handleSearchURL} color='white' />
      </View>

      {/* WebView */}
      <Fragment>
        {progress > 0 && progress < 1 && (
          <Progress.Bar progress={progress} width={null} color='#6c63ff' />
        )}
        {isSearchedURL ? (
          <WebView
            source={{ uri: currentURL }}
            onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
            startInLoadingState={isSearchedURL}
          />
        ) : (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("@/assets/images/undraw_faq_h01d.png")}
              style={{ width: 270, height: 230 }}
            />
            <Text style={styles.title}>Ready to surf the web?</Text>
            <Text style={styles.subtext}>
              Type the Website Address You'd Like to Visit
            </Text>
          </View>
        )}
      </Fragment>
    </View>
  )
}
