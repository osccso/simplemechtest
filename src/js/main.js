import { loading } from './load/loading'
import { mainIntro } from './modals/intro'
import { loadRobot } from './draggables/loadResources'
import { loadDropZones } from './draggables/dropzones'
import { buildRobot } from './draggables/build'
import { solved } from './modals/solved'
import { restart } from './modals/restart'
// loading of app
window.addEventListener('DOMContentLoaded', async() => {
  loading()
  await mainIntro()
  loadDropZones()
  loadRobot()
  await buildRobot()
  await solved()
  restart()
})
// running main intro

//loading the resources