const app = Vue.createApp({
  data() {
    return {
      title: "to do list",
      value: null,
      notesList: JSON.parse(localStorage.getItem("vueNotes")),
      checkRemove: false,
    };
  },
  methods: {
    checkBox(e) {
      e.preventDefault();
      console.log(this.notesList);
      if (this.value === null) {
        return alert("qutu bosdur");
      } else {
        if (this.notesList === null) {
          this.notesList = [];
          this.notesList.push(this.value);
          localStorage.setItem("vueNotes", JSON.stringify(this.notesList));
          this.value = "";
        } else {
          this.notesList.push(this.value);
          localStorage.setItem("vueNotes", JSON.stringify(this.notesList));
          this.value = "";
        }
      }
    },
    getClickElement(e) {
      if (
        e.target.classList.contains("done__icon") &&
        !e.target.parentElement.parentElement.classList.contains("done__design")
      ) {
        e.target.parentElement.parentElement.classList.add("done__design");
      } else if (
        e.target.parentElement.parentElement.classList.contains("done__design")
      ) {
        e.target.parentElement.parentElement.classList.remove("done__design");
      }
      // remove
      if (e.target.classList.contains("remove__icon")) {
        this.notesList.forEach((note, index) => {
          if (note === e.target.parentElement.previousSibling.textContent) {
            this.notesList.splice(index, 1);
            localStorage.setItem("vueNotes", JSON.stringify(this.notesList));
          }
        });
      }
    },
  },
}).mount("#app");
