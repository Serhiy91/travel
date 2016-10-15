import { createApp } from 'mantra-core';
import initContext from './configs/context';
import core from './modules/core';
import landing from './modules/landing';
import accounts from './modules/accounts';
import admin from './modules/admin';

const context = initContext();
const app = createApp(context);

app.loadModule(core);
app.loadModule(landing);
app.loadModule(accounts);
app.loadModule(admin);
app.init();
