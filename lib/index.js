/**
 * Expose apply
 */

module.exports = apply['default'] = apply

/**
 * Apply
 * @param  {Function} fn
 * @param  {Array}   args
 * @return {Mixed}
 */

function apply (fn, args) {
  var ctx = this
  switch (args.length) {
    case 1:
      return fn.call(ctx, args[0])
    case 2:
      return fn.call(ctx, args[0], args[1])
    case 3:
      return fn.call(ctx, args[0], args[1], args[2])
    case 4:
      return fn.call(ctx,args[0], args[1], args[2], args[3])
    case 5:
      return fn.call(ctx, args[0], args[1], args[2], args[3], args[4])
    case 6:
      return fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5])
    default:
      return fn.apply(ctx, args)
  }
}
