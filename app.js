const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Sach',
      middleName: '',
      lastName: 'Bhandari',
      age: '26',
      message: '',
      url: 'https://www.google.com',
      rawurl: '<a href="https://www.google.com" target="_blank">Google </a>',
    };
  },
  methods: {
    updatelastName(msg, event) {
      console.log(msg);
      this.firstName = event.target.value;
    },

    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    increase() {
      return this.age++;
    },
    decrease() {
      return this.age--;
    },
    updateFirstName(msg, event) {
      console.log(msg);
      this.firstName = event.target.value;
    },
  },
  computed: {
    fullname() {
      console.log('full name computed');
      return ` ${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount('#app');
