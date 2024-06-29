import FragmentExtension from './fragment-extension.js';
export default function renderFragment(environment, template, fragmentId, context, cb) {
  environment.addExtension('RenderFragment', new FragmentExtension(cb));
  environment.render(template, context);
  environment.removeExtension('RenderFragment');
}
