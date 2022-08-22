function Task(name) {
  this.name = name
  this.completed = false
}
Task.prototype.complete = function() {
  console.log(`Completing: ${this.name}`)
  this.completed = true
}
Task.prototype.save = function() {
  console.log(`Saving: ${this.name}`)
}
const myTask = new Task('First task')
myTask.complete()
myTask.save()
// --------
// If you need to add a new type of task...
const urgentTask = new Task('Urgent task')
urgentTask.priority = 1
urgentTask.notify = function() {
  console.log(`Notifying: ${this.name}`)
}
urgentTask.save = function() {
  Task.prototype.save.call(this)
  this.notify()
}
urgentTask.complete()
urgentTask.save()
// But that way you can only add the new functionality to specific object
// Then...
// ------ Do it even better ------
function UrgentTask(name, priority) {
  Task.call(this, name)
  this.priority = priority
}
UrgentTask.prototype = Object.create(Task.prototype)
UrgentTask.prototype.notify = function() {
  console.log(`Notifying: ${this.name}`)
}
UrgentTask.prototype.save = function() {
  Task.prototype.save.call(this)
  this.notify()
}
const myUrgentTask = new UrgentTask('My Urgent task')
myUrgentTask.complete()
myUrgentTask.save()
