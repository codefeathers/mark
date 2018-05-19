const notNull = x => !!x ? x : '';
const commandIs = y => x => notNull(x[0]).startsWith(y);
const join = arr => arr.join(" ");

module.exports = {
	commandIs
}