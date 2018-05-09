// Must be loaded before zone loads, so that zone can detect WTF.
if (typeof global !== 'undefined' &&
    (global as any)['__zone_symbol__fakeAsyncPatchLock'] !== false) {
  (global as any)['__zone_symbol__fakeAsyncPatchLock'] = true;
}
import './wtf_mock';
import './test_fake_polyfill';

// Setup tests for Zone without microtask support
import '../lib/testing/zone-testing';
import '../lib/zone-spec/task-tracking';
import '../lib/zone-spec/wtf';
import '../lib/rxjs/rxjs';

import '../lib/testing/promise-testing';
import '../lib/testing/async-testing';
import '../lib/testing/fake-async';
// Setup test environment
import './test-env-setup-jasmine';

// List all tests here:
import './common_tests';
import './nativescript_tests';
