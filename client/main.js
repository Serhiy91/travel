import { createApp } from 'mantra-core';
import initContext from './configs/context';
import test from './modules/test-module';

const context = initContext();
const app = createApp(context);

app.loadModule(test);
app.init();
