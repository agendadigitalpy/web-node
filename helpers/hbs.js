const moment = require('moment');

module.exports = {
  truncate: function(str, len){
    if (str.length > len && str.length > 0) {
			var new_str = str + " ";
			new_str = str.substr(0, len);
			new_str = str.substr(0, new_str.lastIndexOf(" "));
			new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
			return new_str + '...';
		}
		return str;
  },
  formatDate: function(date, format){
    return moment(date).format(format);
	},
	categoryStr: function(id) {
		const values = [
			'General',
			'1. Gobierno Digital',
			'2. Economia Digital',
			'3. Conectividad',
			'4. Fortalecimiento Institucional'
		];
		console.log(values[id]);
		return values[id];
	}
}