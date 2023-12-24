import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  coverImg: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  halfWidth: {
    width: '50%',
  },
  fullWidth: {
    width: '100%',
  },
  halfHeight: {
    height: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  textShadow: {
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // shadow color
    textShadowOffset: {width: 2, height: 2}, // shadow offset (x, y)
    textShadowRadius: 5, // shadow blur radius
  },
});
