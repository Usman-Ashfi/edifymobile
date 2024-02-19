import React, { useState } from "react";
import {
    Animated
} from "react-native";
  
  const Pagetransition = ({children}) => {
    const [fadeAnim] = useState(new Animated.Value(0.5));
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, []);
    return (
      <Animated.View
        style={{
          opacity: fadeAnim, 
        }}
      >
        {children}
      </Animated.View>
    );
  };
  
  export default Pagetransition;
  