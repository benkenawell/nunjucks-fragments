# Nunjucks Template Fragments

Inspired by [Carson Gross's Template Fragments Essay](https://htmx.org/essays/template-fragments/) and unable to find a templating engine
for Javascript that supported such a feature, I've decided to try and write one for [Nunjucks](https://mozilla.github.io/nunjucks/).

## Why Nunjucks?

It's been my favorite templating engine when I'm trying stuff out.  It's inheritance is amazing, and it makes breaking
templates into reusable pieces a breeze.  However, like the essay states, there's something very satisfying about being able to stay in a
single file that makes fragments appealing.

## How

That's an excellent question... One that I hope to answer.  I don't have a background in lexers, parser, etc. other than how far
I am through [Crafting Interpreters by Robert Nystrom](https://craftinginterpreters.com/).  I'm excited to be learning more, but
I'm more excited to have this functionality at my finger tips when using [Turbo](https://turbo.hotwired.dev/) with [Express](https://expressjs.com/)

## API Surface, Target

This isn't something I use at my dayjob, I hope it will be a proof of concept for those actually building Javascript
Templating Engines, so we can have a feature like [JStachio's Fragments via URI Fragment Notation](https://jstach.io/doc/jstachio/current/apidocs/io.jstach.jstache/io/jstach/jstache/JStache.html#_fragments). 

I don't think that's something I'm able to bake into an engine like Nunjucks, so this package will likely be a renderFragment function, similar to [jinja2-fragments](https://github.com/sponsfreixes/jinja2-fragments) for a long time.

## Contributing

I'm happy to try and field issues, but know that this is something I may lose steam on, or find an implementation _I_ find acceptable,
but isn't widely useful.

