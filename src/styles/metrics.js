/**
 * Styles metrics
 *
 * @author Vlamir Santo <vlamirsanto@gmail.com>
 * @since 16/05/2018
 */

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseMarginInputs: 6,
  baseRadius: 40,
  baseRadiusInputs: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
