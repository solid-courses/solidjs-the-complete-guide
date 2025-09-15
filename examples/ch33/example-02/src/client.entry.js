import { hydrate } from 'solid-js/web';
import { ClientApp, ServerApp } from './app';

hydrate(() => <ServerApp ><ClientApp /></ServerApp>, document);