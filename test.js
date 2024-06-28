import nunjucks from 'nunjucks';
import FragmentExtension from './fragment-extension.js';
import renderFragment from './render-fragment.js';

const env = nunjucks.configure('views');
// env.addExtension('FragmentExtension', new FragmentExtension());

// const rendered = env.render('test.njk');

// console.log(rendered);

renderFragment(env, 'test.njk', '', null, function printBody(body) { console.log('fragment:', body)});
