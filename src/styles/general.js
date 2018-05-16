/**
 * Styles general
 *
 * @author Vlamir Santo <vlamirsanto@gmail.com>
 * @since 16/05/2018
 */

import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    flex: 1,
    padding: metrics.basePadding / 2,
    backgroundColor: colors.background,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
