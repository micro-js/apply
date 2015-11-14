/**
 * Apply
 */

function apply (fn, args, ctx) {
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
      return fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5], args[6])
    default:
      return fn.apply(ctx, arguments)
  }
}

/**
 * Exports
 */

module.exports = apply
