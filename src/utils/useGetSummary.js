export function getSum (items) {
  let summary = 0
  if(items.length){
    let summary = items.reduce((accum, current) => accum + (current.count * current.price), 0)
    return summary
  }
  return summary
} 