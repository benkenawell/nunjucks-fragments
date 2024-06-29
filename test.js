import nunjucks from 'nunjucks';
import FragmentExtension from './fragment-extension.js';
import renderFragment from './render-fragment.js';

const env = nunjucks.configure('views');

function printBody(body) { console.log('fragment:', body)}

renderFragment(env, 'test.njk', '', null, printBody);
