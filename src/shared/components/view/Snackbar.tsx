import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {hideMessage, selectSnackbar} from '../../../redux/slices/snackbarSlice';
import {appColors} from '../../constants/color';

interface SnackbarProps {
  isActionShow?: boolean;
}

const Snackbar: React.FC<SnackbarProps> = ({isActionShow}) => {
  const {message, type} = useSelector(selectSnackbar);
  const dispatch = useDispatch();
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (message) {
      // Animate in
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();

      // Set timeout to animate out after 2000ms (2 seconds)
      const hideTimeout = setTimeout(() => {
        Animated.timing(translateY, {
          toValue: -100,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }).start(() => {
          // Dispatch hide message after the animation is complete
          dispatch(hideMessage());
        });
      }, 2000);

      return () => {
        clearTimeout(hideTimeout);
      };
    }
  }, [message, dispatch, translateY]);

  const handleClose = () => {
    // Animate out on close button press
    Animated.timing(translateY, {
      toValue: -100,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      dispatch(hideMessage());
    });
  };

  return (
    <Animated.View style={[styles.main, {transform: [{translateY}]}]}>
      {message && (
        <View style={styles.container}>
          <Text
            style={[
              {
                color:
                  type === 'error'
                    ? 'red'
                    : type === 'warning'
                    ? 'orange'
                    : 'green',
              },
              styles.msg,
            ]}>
            {message}
            {isActionShow && (
              <TouchableOpacity style={[styles.action]} onPress={handleClose}>
                <Text style={{color: appColors.red}}>&times;</Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

export default Snackbar;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
  },
  container: {},
  msg: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 12,
    backgroundColor: appColors.lightWhite,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    elevation: 5,
  },
  action: {width: 20, fontSize: 12},
});
