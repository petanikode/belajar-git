let app = new Vue({
	el: '#app',
	data: {
		content: '',
		validate: '',
		nama: ['Saitama', 'Yoni Widhi', 'Linus Torvalds'],
		show: [],
		isEdit: false,
		selected: ''
	},
	methods: {
		addNama: function() {
			if (this.content == '') {
				this.validate = "Nama tidak boleh kosong";

			} else {
				this.nama.push(this.content);
				this.content = '';
				this.validate = '';
			}
		},
		deleteNama: function(index) {
			this.nama.splice(index, 1);
		},
		editNama: function(i) {
			this.isEdit = true;
			this.content = this.nama[i];
			this.selected = i;
		},
		updateNama: function() {
			let id = this.selected;
			// validate
			if (this.content == '') {
				this.validate = "Nama tidak boleh kosong";
			} else {
				this.nama[id] = this.content;
				this.content = '';
				this.validate = '';
				this.isEdit = false;
			}
		},
		cancelEdit: function() {
			this.isEdit = false;
			this.content = '';
		}
	},
});