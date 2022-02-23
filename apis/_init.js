import { join } from 'path'

export default async (app,config) => {
  app.use('*', (req, res) => res.sendFile(join(config.assetsFolder, 'index.html')))
}
