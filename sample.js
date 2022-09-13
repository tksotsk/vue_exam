var app4 = new Vue({
  el: '#app-4',
  data: {
    id: 0,
    name: "",
    course: "",
    acceptancePeriod: "",
    students: [
      { id:"1", name: 'Learn JavaScript', course: "oij", acceptancePeriod: "###" },
      { id:"2", name: 'Learn Vue', course: "oij", acceptancePeriod: "###" },
      { id:"3", name: 'Build something awesome', course: "oij", acceptancePeriod: "###" }
    ]
  },
  methods: {
    name: function () {console.log(this.name)},
    addStudent1: function () {
      text={ id: "", name: "", course: "", acceptancePeriod: "" }
      text.id=this.students.length +1
      text.name=this.name
      text.course=this.course
      text.acceptancePeriod=this.acceptancePeriod
      this.students.push(text)
    }
  }
})