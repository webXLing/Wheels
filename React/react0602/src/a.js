class A {
  constructor(props) {
    this.a = props
  }
  test () {
    console.log(this)
    console.log(this.a)

  }
}
let a = new A('ni')
a.test()