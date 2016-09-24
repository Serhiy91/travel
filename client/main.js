import { createApp } from 'mantra-core';
import initContext from './configs/context';
import core from './modules/core';
import test from './modules/test-module';
import accounts from './modules/accounts';
import admin from './modules/admin';

const context = initContext();
const app = createApp(context);

app.loadModule(core);
app.loadModule(test);
app.loadModule(accounts);
app.loadModule(admin);
app.init();
