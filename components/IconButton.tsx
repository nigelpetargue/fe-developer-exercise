import { ReactNode } from "react"
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated"
import { styles } from "@/styles/main"

type ButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap
  onPress: () => void
  size?: number
  color?: string
}

const IconButton = ({ iconName, onPress, size = 24, color = "black" }: ButtonProps) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const handlePressIn = () => {
    scale.value = withSpring(0.7, { damping: 5, stiffness: 200 })
  }

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 5, stiffness: 200 })
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.button}
    >
      <Animated.View style={[animatedStyle, styles.icon]}>
        <Ionicons name={iconName} size={size} color={color} />
      </Animated.View>
    </Pressable>
  )
}

export default IconButton
