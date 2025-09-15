import { createEffect, createMemo, createSignal } from 'solid-js';

const [preferences, setPreferences] = createSignal({
  lang: 'en', theme: 'light', fontSize: 'large',
});

const theme = createMemo(() => preferences().theme);

createEffect(() => console.log(theme()));

setPreferences(state => ({ ...state, theme: 'dark' }));