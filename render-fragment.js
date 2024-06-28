import FragmentExtension from './fragment-extension.js';
export default function renderFragment(environment, template, fragmentId, context, cb) {
  const f = new FragmentExtension(cb);
  f.cb = cb;
  console.log('f', f.cb);
  environment.addExtension('RenderFragment', f);
  environment.render(template, context);
  environment.removeExtension('RenderFragment');
}
