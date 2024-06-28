import nunjucks from 'nunjucks';

export default function FragmentExtension(cb) {
  this.cb = cb;
  console.log('cb', cb, this.cb);
  this.tags = ['fragment'];

  this.parse = function(parser, nodes, lexer) {
    // get the tag token
    let tok = parser.nextToken();

    // parse the args.  Passing true is required with no parens
    let args = parser.parseSignature(null, true);
    // move after the block
    parser.advanceAfterBlockEnd(tok.value);

    // parse the body of the tag
    let body = parser.parseUntilBlocks('endfragment');

    parser.advanceAfterBlockEnd();

    console.log('parsing', body);

    return new nodes.CallExtension(this, 'run', args, [body]);
  }

  this.run = function(context, _, body) {
    console.log('body', body(), this.cb, this);
    this.cb?.(body());
    return new nunjucks.runtime.SafeString(body());
  }
}
