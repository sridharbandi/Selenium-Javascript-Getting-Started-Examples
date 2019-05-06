import { setDefaultTimeout, AfterAll, BeforeAll } from 'cucumber';
import { createSession, closeSession, startWebDriver, stopWebDriver } from 'nightwatch-api';

setDefaultTimeout(60000);

BeforeAll(async () => {
    await startWebDriver();
    await createSession();
});

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
});