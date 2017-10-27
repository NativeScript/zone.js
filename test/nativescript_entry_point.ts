// Must be loaded before zone loads, so that zone can detect WTF.
import './wtf_mock';

// Setup tests for Zone without microtask support
import '../lib/nativescript/nativescript';
import '../lib/nativescript/nativescript.jasmine';

// Setup test environment
import './test-env-setup-jasmine';

// List all tests here:
import './nativescript_tests';
