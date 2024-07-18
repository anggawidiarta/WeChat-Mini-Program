// index.js
Page({
  data: {
    newTask: '',
    tasks: [{
      id: 1,
      name: "Browsing"
    }, {
      id: 2,
      name: "Playing Chess"
    }, ]
  },

  bindTaskInput(e) {
    this.setData({
      newTask: e.detail.value
    });
  },

  addTask() {
    if (this.data.newTask.trim() === '') return;

    const newTask = {
      id: new Date().getTime(),
      name: this.data.newTask.trim()
    };

    this.setData({
      tasks: [...this.data.tasks, newTask],
      newTask: ''
    });
  },

  deleteTask(e) {
    const taskId = e.target.dataset.id;
    const tasks = this.data.tasks.filter(task => task.id !== taskId);

    this.setData({
      tasks
    });
  }
});