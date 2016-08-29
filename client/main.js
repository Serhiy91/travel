import { createApp } from 'mantra-core';
import initContext from './configs/context';
import test from './modules/test-module';
import accounts from './modules/accounts';

const context = initContext();
const app = createApp(context);

app.loadModule(test);
app.loadModule(accounts);
app.init();
