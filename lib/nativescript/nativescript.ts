/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import '../zone';
import {patchTimer} from '../common/timers';


const set = 'set';
const clear = 'clear';

// Timers
patchTimer(global, set, clear, 'Timeout');
patchTimer(global, set, clear, 'Interval');
patchTimer(global, set, clear, 'Immediate');
